'use strict';
const screen = document.querySelector('#screen');
const storageKey = 'timur-history-prep-v1';
const chapterNames = ['Po upadku Księstwa Warszawskiego','Powstanie listopadowe','Polacy po powstaniu listopadowym'];
const allQuestions = historyMissions.flatMap(mission => mission.questions);
const questionById = new Map(allQuestions.map(question => [question.id, question]));
const missionById = new Map(historyMissions.map(mission => [mission.id, mission]));
let saveAvailable = true;
let saved;
try { saved = JSON.parse(localStorage.getItem(storageKey)); } catch { saveAvailable = false; }
if (!saved || typeof saved !== 'object' || Array.isArray(saved)) saved = {};
if (!saved.results || typeof saved.results !== 'object' || Array.isArray(saved.results)) saved.results = {};
saved.mistakes = Array.isArray(saved.mistakes) ? [...new Set(saved.mistakes.filter(id => questionById.has(id)))] : [];
let state = null;
let selection = [];
let optionOrder = [];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
}
function persist() {
  try { localStorage.setItem(storageKey, JSON.stringify(saved)); }
  catch { saveAvailable = false; }
}
function rememberActivity() {
  try {
    const raw = JSON.parse(localStorage.getItem('portal-timura-v1'));
    const portal = raw && typeof raw === 'object' ? raw : {};
    localStorage.setItem('portal-timura-v1', JSON.stringify({...portal,last:'preparation'}));
  } catch {}
}
function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i],shuffled[j]] = [shuffled[j],shuffled[i]];
  }
  return shuffled;
}
function headingFocus() { screen.querySelector('h1,h2')?.focus({preventScroll:true}); }
function display(html) {
  screen.innerHTML = html;
  headingFocus();
  window.scrollTo({top:0,behavior:'instant'});
}
function btn(action, label, primary = false, disabled = false) {
  return `<button type="button" data-action="${action}" class="${primary?'primary':''}" ${disabled?'disabled':''}>${label}</button>`;
}
function validSession(session) {
  return session && ['learn','quiz','result'].includes(session.stage) && ['mission','exam','retry'].includes(session.mode)
    && Array.isArray(session.queue) && session.queue.length > 0 && session.queue.every(id => questionById.has(id))
    && Number.isInteger(session.index) && session.index >= 0 && session.index <= session.queue.length
    && Array.isArray(session.answers) && session.answers.length === session.index
    && session.answers.every((answer,index) => answer && answer.id === session.queue[index] && typeof answer.correct === 'boolean' && Array.isArray(answer.selected) && answer.selected.every(value => typeof value === 'string'))
    && (session.mode !== 'mission' || missionById.has(session.mission))
    && (session.stage !== 'learn' || (session.mode === 'mission' && Number.isInteger(session.note) && session.note >= 0 && session.note < missionById.get(session.mission).notes.length));
}
function stash() {
  saved.session = state;
  persist();
}
function menu() {
  state = null;
  const resumable = validSession(saved.session) && saved.session.stage !== 'result';
  const completed = historyMissions.filter(mission => Number.isInteger(saved.results[mission.id]?.correct)).length;
  const next = historyMissions.find(mission => !Number.isInteger(saved.results[mission.id]?.correct)) ?? historyMissions[0];
  display(`<section class="hero"><p class="eyebrow">Historia · dział II · tematy 1–3</p><h1 tabindex="-1">Gotowy na poprawę?</h1><p class="lead">${historyMissions.length} krótkich misji. ${allQuestions.length} zadań po polsku. Wybieraj, łącz fakty i układaj wydarzenia.</p></section>
    <section class="panel"><p class="eyebrow">Następny krok</p><h2>${resumable?'Dokończ rozpoczętą rundę':escapeHtml(next.title)}</h2>
    <div class="actions">${resumable?btn('resume','Kontynuuj →',true):btn('mission:'+next.id,'Rozpocznij →',true)}${btn('exam','Próba sprawdzianu · 24 zadania')}${btn('mistakes',`Moje błędy · ${saved.mistakes.length}`,false,!saved.mistakes.length)}${btn('summary','Powtórka przed sprawdzianem')}</div>
    <p class="quiet" style="margin-top:14px">Zakończone misje · ${completed}/15. Możesz otwierać je w dowolnej kolejności.</p>${saveAvailable?'':'<p class="save-status">Zapis w przeglądarce jest niedostępny. Wynik może zniknąć po zamknięciu strony.</p>'}</section>
    <div class="chapters">${chapterNames.map((chapter,index)=>`<section class="chapter"><p class="eyebrow">Temat ${index+1}</p><h2>${chapter}</h2>${historyMissions.filter(mission=>mission.chapter===index).map(mission=>{
      const result=saved.results[mission.id];
      const done=Number.isInteger(result?.correct);
      return `<button type="button" class="mission ${done?'done':''}" data-action="mission:${mission.id}"><span>${escapeHtml(mission.title)}</span><small>${done?`Ostatni wynik · ${result.correct}/${mission.questions.length}`:`${mission.questions.length} zadań · około 7–10 min`}</small></button>`;
    }).join('')}</section>`).join('')}</div>`);
}
function mapPanel(name) {
  if (!name) return '';
  const uprising = name === 'powstanie';
  return `<details class="map-detail"><summary>Otwórz mapę · ${uprising?'powstanie 1830–1831':'Królestwo Polskie w Europie po 1815 r.'}</summary><p class="map-caption">${uprising?'Odszukaj Warszawę, Ostrołękę, Iganie i Stoczek. Powiększ mapę, otwierając ją osobno.':'Zielony obszar wskazuje Królestwo Polskie. Jasnozielony — Cesarstwo Rosyjskie. To mapa położenia w Europie.'}</p><div class="map-wrap"><img src="./history-assets/${name}.svg" alt="${uprising?'Mapa działań powstania listopadowego':'Położenie Królestwa Polskiego po 1815 r.'}" loading="lazy"></div><a href="./history-assets/${name}.svg" target="_blank" rel="noopener">Otwórz dużą mapę ↗</a><p class="map-caption">Autorzy i licencje w źródłach na dole strony.</p></details>`;
}
function startMission(id) {
  const mission = missionById.get(id);
  if (!mission) return;
  state = {mode:'mission',mission:id,stage:'learn',note:0,queue:shuffle(mission.questions.map(question=>question.id)),index:0,answers:[]};
  rememberActivity();
  stash();
  lesson();
}
function lesson() {
  const mission=missionById.get(state.mission);
  display(`<section class="panel"><div class="row"><p class="eyebrow">Temat ${mission.chapter+1} · Poznaj</p><span class="pill">${state.note+1}/${mission.notes.length}</span></div><h2 tabindex="-1">${escapeHtml(mission.title)}</h2><p class="note">${escapeHtml(mission.notes[state.note])}</p>${state.note===0?mapPanel(mission.map):''}<div class="actions">${state.note?btn('note-back','← Wstecz'):''}${btn('note-next',state.note===mission.notes.length-1?'Sprawdź się →':'Dalej →',true)}</div></section>`);
}
function startExam() {
  const selected=[];
  // Every mission is represented. Each chapter contributes exactly eight tasks.
  for(let chapter=0;chapter<3;chapter++) {
    const pool=historyMissions.filter(mission=>mission.chapter===chapter);
    const mandatory=pool.map(mission=>shuffle(mission.questions)[0].id);
    const extra=shuffle(pool.flatMap(mission=>mission.questions).filter(question=>!mandatory.includes(question.id))).slice(0,3).map(question=>question.id);
    selected.push(...mandatory,...extra);
  }
  startQuiz('exam',shuffle(selected));
}
function startQuiz(mode,queue) {
  if (!queue.length) return menu();
  state={mode,stage:'quiz',queue,index:0,answers:[]};
  rememberActivity(); stash(); question();
}
function resume() {
  if (!validSession(saved.session)) return menu();
  state=saved.session;
  if(state.stage==='learn') lesson();
  else if(state.index===state.queue.length) results();
  else question();
}
function question() {
  if(state.index>=state.queue.length) return results();
  selection=[];
  const current=questionById.get(state.queue[state.index]);
  optionOrder=shuffle([...current.correct,...current.wrong]);
  state.stage='quiz';
  stash();
  const exam=state.mode==='exam';
  const instruction=current.type==='order'?'Klikaj wydarzenia od najwcześniejszego.':current.type==='multi'?'Zaznacz wszystkie poprawne odpowiedzi.':'Wybierz jedną odpowiedź.';
  display(`<section class="panel"><div class="row"><p class="eyebrow">${exam?'Próba sprawdzianu':state.mode==='retry'?'Powtórka błędów':'Sprawdź się'} · temat ${current.chapter+1}</p><span class="pill">${state.index+1}/${state.queue.length}</span></div><div class="progress" aria-label="Postęp rundy"><span style="width:${state.index/state.queue.length*100}%"></span></div><h2 tabindex="-1">${escapeHtml(current.prompt)}</h2><p>${instruction}</p>${current.type==='order'?'<div id="sequence" class="sequence" aria-live="polite">Twoja kolejność pojawi się tutaj.</div>':''}
    <div class="choices" id="choices"></div><div class="actions" id="answer-actions">${current.type==='order'?btn('undo','Cofnij ostatni wybór'):''}${btn('check',exam?'Zapisz odpowiedź →':'Sprawdź',true,true)}</div><div id="feedback" aria-live="polite"></div>
    ${exam?'':`<details><summary>Przypomnij wyjaśnienie</summary>${missionById.get(current.mission).notes.map(note=>`<p>${escapeHtml(note)}</p>`).join('')}</details>`}
    ${current.id==='m9-q8'||(!exam&&missionById.get(current.mission).map)?mapPanel(missionById.get(current.mission).map):''}</section>`);
  renderOptions(current);
}
function renderOptions(current) {
  screen.querySelector('#choices').innerHTML=optionOrder.map((option,index)=>{
    const selected=selection.includes(option);
    return `<button type="button" class="choice ${selected?'selected':''}" data-option="${index}" ${current.type==='order'&&selected?'disabled':''} aria-pressed="${selected}"><span class="marker" aria-hidden="true">${selected?'✓':current.type==='multi'?'□':String.fromCharCode(65+index)}</span><span>${escapeHtml(option)}</span></button>`;
  }).join('');
  screen.querySelector('[data-action="check"]').disabled=current.type==='order'?selection.length!==current.correct.length:selection.length===0;
  if(current.type==='order') {
    screen.querySelector('#sequence').innerHTML=selection.length?selection.map((item,index)=>`<span>${index+1}. ${escapeHtml(item)}</span>`).join(''):'Twoja kolejność pojawi się tutaj.';
    screen.querySelector('[data-action="undo"]').disabled=!selection.length;
  }
}
function choose(index) {
  const current=questionById.get(state.queue[state.index]);
  if(!screen.querySelector('[data-action="check"]')||screen.querySelector('[data-action="check"]').dataset.locked) return;
  const option=optionOrder[index];
  if(option===undefined) return;
  if(current.type==='single') selection=[option];
  else if(current.type==='multi') selection=selection.includes(option)?selection.filter(item=>item!==option):[...selection,option];
  else if(!selection.includes(option)) selection.push(option);
  renderOptions(current);
  screen.querySelector(`[data-option="${index}"]`)?.focus({preventScroll:true});
}
function isCorrect(current,selected) {
  if(selected.length!==current.correct.length) return false;
  return current.type==='order'?selected.every((value,index)=>value===current.correct[index]):selected.every(value=>current.correct.includes(value));
}
function checkAnswer() {
  const check=screen.querySelector('[data-action="check"]');
  if(!check||check.disabled||check.dataset.locked) return;
  check.dataset.locked='true';
  const current=questionById.get(state.queue[state.index]);
  const correct=isCorrect(current,selection);
  state.answers.push({id:current.id,correct,selected:[...selection]});
  state.index++;
  // Saving the checked answer allows a refresh to continue with the next task.
  stash();
  if(state.mode==='exam') return question();
  screen.querySelectorAll('[data-option]').forEach(button=>button.disabled=true);
  screen.querySelector('#answer-actions').hidden=true;
  screen.querySelector('#feedback').innerHTML=`<div class="feedback ${correct?'':'bad'}"><strong>${correct?'Dobrze!':'Zapamiętaj tę odpowiedź'}</strong><p>${escapeHtml(current.explanation)}</p>${correct?'':`<p><strong>Poprawnie</strong><br>${current.correct.map(escapeHtml).join(current.type==='order'?' → ':' · ')}</p>`}</div>${btn('next',state.index===state.queue.length?'Zobacz wynik →':'Dalej →',true)}`;
  screen.querySelector('[data-action="next"]').focus({preventScroll:true});
}
function finalize() {
  if(state.finalized) return;
  const score=state.answers.filter(answer=>answer.correct).length;
  const mistakes=new Set(saved.mistakes);
  state.answers.forEach(answer=>{if(answer.correct) mistakes.delete(answer.id); else mistakes.add(answer.id);});
  saved.mistakes=[...mistakes];
  if(state.mode==='mission') saved.results[state.mission]={correct:score,total:state.answers.length};
  if(state.mode==='exam') {
    saved.exam={correct:score,total:state.answers.length};
    try {
      const portal=JSON.parse(localStorage.getItem('portal-timura-v1'))??{};
      localStorage.setItem('portal-timura-v1',JSON.stringify({...portal,history:{score,total:state.answers.length}}));
    } catch {}
  }
  state.finalized=true;
  state.stage='result';
  stash();
}
function results() {
  finalize();
  const score=state.answers.filter(answer=>answer.correct).length;
  const mistakes=state.answers.filter(answer=>!answer.correct);
  const mission=state.mode==='mission'?missionById.get(state.mission):null;
  const next=mission?historyMissions[historyMissions.indexOf(mission)+1]:null;
  const chapterScores=chapterNames.map((name,chapter)=>{
    const subset=state.answers.filter(answer=>questionById.get(answer.id).chapter===chapter);
    return subset.length?`<div><strong>Temat ${chapter+1}</strong>${subset.filter(answer=>answer.correct).length}/${subset.length} poprawnych</div>`:'';
  }).join('');
  display(`<section class="panel"><p class="eyebrow">${state.mode==='exam'?'Próba sprawdzianu zakończona':'Runda zakończona'}</p><h2 tabindex="-1">${mission?escapeHtml(mission.title):'Twój wynik'}</h2><div class="score">${score}/${state.answers.length}</div><p>${mistakes.length?'Sprawdź wyjaśnienia i przećwicz nietrafione zadania.':'W tej rundzie wszystkie odpowiedzi były poprawne.'}</p><div class="summary-grid">${chapterScores}</div>
    <div class="actions">${mistakes.length?btn('retry-round','Przećwicz błędy z tej rundy',true):next?btn('mission:'+next.id,'Następna misja →',true):btn('exam','Nowa próba sprawdzianu',true)}${next&&mistakes.length?btn('mission:'+next.id,'Następna misja'):''}${btn('menu','Wybierz misję')}</div>
    <div class="answers">${state.answers.map((answer,index)=>{
      const current=questionById.get(answer.id);
      return `<details ${answer.correct?'':'open'}><summary>${index+1}. ${answer.correct?'✓':'Do powtórki'} · ${escapeHtml(current.prompt)}</summary><p>Twój wybór · ${answer.selected.map(escapeHtml).join(' → ')}</p><p>Poprawnie · ${current.correct.map(escapeHtml).join(current.type==='order'?' → ':' · ')}</p><p>${escapeHtml(current.explanation)}</p></details>`;
    }).join('')}</div></section>`);
}
function summary() {
  display(`<section class="hero"><p class="eyebrow">Dział II · tematy 1–3</p><h1 tabindex="-1">Powtórka przed sprawdzianem</h1><p>Otwórz blok i przypomnij sobie najważniejsze zależności.</p></section>${historyMissions.map(mission=>`<details><summary>Temat ${mission.chapter+1} · ${escapeHtml(mission.title)}</summary>${mission.notes.map(note=>`<p>${escapeHtml(note)}</p>`).join('')}${mapPanel(mission.map)}${btn('mission:'+mission.id,'Przećwicz ten blok')}</details>`).join('')}<div class="actions">${btn('exam','Próba sprawdzianu →',true)}${btn('menu','Wybierz misję')}</div>`);
}
document.querySelector('#menu').onclick=menu;
screen.addEventListener('click',event=>{
  const option=event.target.closest('[data-option]');
  if(option&&!option.disabled) return choose(Number(option.dataset.option));
  const control=event.target.closest('[data-action]');
  if(!control||control.disabled) return;
  const [action,id]=control.dataset.action.split(':');
  if(action==='menu') return menu();
  if(action==='mission') return startMission(id);
  if(action==='resume') return resume();
  if(action==='summary') return summary();
  if(action==='exam') return startExam();
  if(action==='mistakes') return startQuiz('retry',shuffle(saved.mistakes));
  if(action==='retry-round') return startQuiz('retry',shuffle(state.answers.filter(answer=>!answer.correct).map(answer=>answer.id)));
  if(action==='note-back') {state.note--;stash();return lesson();}
  if(action==='note-next') {
    if(state.note<missionById.get(state.mission).notes.length-1) {state.note++;stash();return lesson();}
    state.stage='quiz';stash();return question();
  }
  if(action==='undo') {selection.pop();return renderOptions(questionById.get(state.queue[state.index]));}
  if(action==='check') return checkAnswer();
  if(action==='next') return question();
});
menu();
