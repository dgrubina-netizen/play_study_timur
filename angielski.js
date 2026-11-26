'use strict';

const englishScreen = document.querySelector('#english-screen');
const englishStorageKey = 'timur-english-v1';
const subjects = {
  past: 'Past Simple · zakończona przeszłość',
  perfect: 'Present Perfect · związek z teraźniejszością',
  duration: 'For, since i ago',
  forms: 'Pytania, przeczenia i formy czasowników',
  translation: 'Tłumaczenia z polskiego'
};
const questionIndex = new Map(englishQuestions.map(question => [question.id, question]));
let preferences = readEnglishStorage();
let round;
let selected = '';
let options = [];
let useTyping = false;

function readEnglishStorage() {
  try {
    const data = JSON.parse(localStorage.getItem(englishStorageKey)) || {};
    return {
      mistakes: Array.isArray(data.mistakes) ? [...new Set(data.mistakes.filter(id => questionIndex.has(id)))] : [],
      session: data.session,
      last: Number.isInteger(data.last?.score) && Number.isInteger(data.last?.total) ? data.last : null,
      typing: data.typing === true
    };
  } catch {
    return {mistakes: [], last: null, typing: false};
  }
}

function remember() {
  try { localStorage.setItem(englishStorageKey, JSON.stringify(preferences)); } catch {}
}

function markPortal(score, total) {
  try {
    const progress = JSON.parse(localStorage.getItem('portal-timura-v1')) || {};
    progress.last = 'english';
    if (total !== undefined) progress.english = {score, total};
    localStorage.setItem('portal-timura-v1', JSON.stringify(progress));
  } catch {}
}

function escapeEnglish(value) {
  const entities = {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'};
  return String(value).replace(/[&<>"']/g, char => entities[char]);
}

function normalizeEnglish(value) {
  return value.toLowerCase().trim()
    .replace(/[’‘]/g, "'")
    .replace(/\b(did|have|has|was|were)n't\b/g, '$1 not')
    .replace(/[.?!]+$/g, '')
    .replace(/\s*\/\s*/g, ' / ')
    .replace(/\s+/g, ' ');
}

function accepts(question, answer) {
  const normal = normalizeEnglish(answer);
  if (!normal) return false;
  return question.accepted.some(item => normalizeEnglish(item) === normal);
}

function answerTip(question, answer) {
  const form = normalizeEnglish(answer);
  const wanted = normalizeEnglish(question.accepted[0]);
  if (form.includes(' / ') || wanted.includes(' / ')) return '';
  if (/\b(?:did|did not)\b/.test(form) && /\b(?:have|has)\b/.test(wanted) && !/\bdid\b/.test(wanted)) {
    return 'Did tworzy Past Simple. W tym zdaniu potrzebujesz konstrukcji z have lub has.';
  }
  if (/\b(?:have|has)\b/.test(form) && /\bdid\b/.test(wanted) && !/\b(?:have|has)\b/.test(wanted)) {
    return 'Wybrana forma z have lub has nie pasuje do tego zakończonego zdarzenia. Pytanie lub przeczenie tworzymy tu z did.';
  }
  return '';
}

function shuffleEnglish(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function displayEnglish(html) {
  englishScreen.innerHTML = html;
  englishScreen.querySelector('h1,h2')?.focus({preventScroll:true});
  window.scrollTo(0,0);
}

function englishButton(action, text, primary = false) {
  return `<button type="button" data-action="${action}"${primary?' class="primary"':''}>${text}</button>`;
}

function validEnglishSession(session) {
  return session && ['test','topic','retry'].includes(session.kind)
    && Array.isArray(session.ids) && session.ids.length > 0
    && session.ids.every(id => questionIndex.has(id))
    && Array.isArray(session.answers) && session.answers.length <= session.ids.length
    && session.answers.every((answer, index) => answer?.id === session.ids[index] && typeof answer.value === 'string')
    && typeof session.review === 'boolean';
}

function englishMenu() {
  const active = validEnglishSession(preferences.session);
  displayEnglish(`<section class="hero"><p class="eyebrow">Angielski</p>
    <h1 tabindex="-1">Past Simple czy<br>Present Perfect?</h1>
    <p class="lead">${englishQuestions.length} zadań na podstawie tematów z karty pracy. Po błędzie zobaczysz wyjaśnienie po polsku.</p></section>
    <section class="panel"><h2>Trening mieszany</h2><p>40 zadań z pięciu kategorii. Jedno zadanie na ekran.</p>
    <div class="actions">${active ? englishButton('resume', 'Kontynuuj →', true) : ''}${englishButton('test', 'Rozpocznij test · 40 zadań', !active)}
    ${preferences.mistakes.length ? englishButton('mistakes', 'Powtórz błędy · ' + preferences.mistakes.length) : ''}</div>
    <label class="english-check"><input id="use-typing" type="checkbox" ${preferences.typing ? 'checked' : ''}> Wpisuj czasownik w lukę</label>
    <p class="quiet">Domyślnie wybierasz odpowiedź. W tłumaczeniach zawsze wybierasz całe zdanie.</p>
    ${preferences.last ? `<p>Ostatni ukończony test · ${preferences.last.score}/${preferences.last.total}</p>` : ''}</section>
    <section class="panel"><h2>Wybierz temat</h2><div class="english-topics">
    ${Object.entries(subjects).map(([key, name]) => englishButton('topic:' + key, name)).join('')}</div></section>
    <details class="english-help"><summary>Zasady w minutę</summary>
    <p><strong>Past Simple</strong> · zamknięta przeszłość. <span lang="en">I bought it yesterday. Did you buy it? I didn't buy it.</span> Po <span lang="en">did</span> lub <span lang="en">didn't</span> używamy formy podstawowej. Z <span lang="en">be</span> tworzymy pytania od <span lang="en">was/were</span>.</p>
    <p><strong>Present Perfect</strong> · doświadczenie do teraz, trwająca sytuacja lub obecny skutek. <span lang="en">I have lost my key.</span> Budowa to <span lang="en">have/has</span> i trzecia forma czasownika.</p>
    <p><strong>For / since / ago</strong> · <span lang="en">for five years</span> podaje długość okresu, <span lang="en">since Monday</span> jego początek, <span lang="en">five years ago</span> moment w przeszłości. <span lang="en">For</span> pasuje też do Past Simple, gdy okres już się skończył.</p>
    <p><strong>Today / this month</strong> · patrz na kontekst. Gdy liczysz wynik do tej chwili, np. <span lang="en">so far today</span>, użyj Present Perfect. Przy zamkniętym zdarzeniu użyjesz Past Simple, np. <span lang="en">I bought it at nine this morning.</span></p></details>`);
  englishScreen.querySelector('#use-typing').addEventListener('change', event => {
    preferences.typing = event.target.checked;
    remember();
  });
}

function makeEnglishTest() {
  return shuffleEnglish(Object.keys(subjects).flatMap(topic =>
    shuffleEnglish(englishQuestions.filter(question => question.topic === topic)).slice(0, 8)
  ));
}

function startEnglish(kind, questions) {
  if (!questions.length) return;
  round = {kind, ids: questions.map(question => question.id), answers: [], review:false};
  markPortal();
  saveEnglishRound();
  englishQuestion();
}

function saveEnglishRound() {
  preferences.session = round;
  remember();
}

function englishQuestion() {
  const position = round.answers.length - Number(round.review);
  if (position >= round.ids.length) return englishResults();
  const question = questionIndex.get(round.ids[position]);
  const previous = round.review ? round.answers[position] : null;
  selected = previous?.value || '';
  useTyping = previous ? previous.typed === true : preferences.typing && question.topic !== 'translation';
  options = shuffleEnglish([question.accepted[0], ...question.wrong]);
  const twoGaps = question.prompt.split('___').length === 3;
  const instruction = question.topic === 'translation' ? 'Wybierz poprawne tłumaczenie na angielski.'
    : useTyping ? (twoGaps ? 'Wpisz obie formy w kolejności, oddzielając je znakiem /.' : 'Wpisz tylko brakujący fragment.')
    : (twoGaps ? 'Wybierz parę form w kolejności luk.' : 'Wybierz formę pasującą do luki.');
  displayEnglish(`<section class="panel">
    <div class="row"><p class="eyebrow">${subjects[question.topic]}</p><span class="pill">${position+1}/${round.ids.length}</span></div>
    <progress class="english-progress" aria-label="Postęp" value="${round.answers.length}" max="${round.ids.length}"></progress>
    <h2 class="english-question" tabindex="-1" lang="${question.topic==='translation'?'pl':'en'}">${escapeEnglish(question.prompt)}</h2><p>${instruction}</p>
    <form id="english-answer">${useTyping ? `<label for="english-input" class="english-label">Twoja odpowiedź</label><input class="english-input" id="english-input" lang="en" maxlength="140" autocomplete="off" autocapitalize="off" spellcheck="false" value="${escapeEnglish(selected)}" ${previous?'readonly':''}>`
      : `<div class="english-options">${options.map((option,index) => `<button type="button" data-option="${index}" lang="en" aria-pressed="${option===selected}" ${previous?'disabled':''} class="${previous && accepts(question,option) ? 'right' : previous && option===selected ? 'missed' : ''}">${escapeEnglish(option)}</button>`).join('')}</div>`}
    ${previous?'':'<button class="primary" id="english-check" disabled>Sprawdź odpowiedź</button>'}</form>
    ${previous?englishFeedback(question, previous):''}</section>`);
  if (!previous && useTyping) {
    const input = englishScreen.querySelector('#english-input');
    input.addEventListener('input', () => { englishScreen.querySelector('#english-check').disabled = !input.value.trim(); });
  }
  if (previous) englishScreen.querySelector('#english-feedback').focus();
}

function englishFeedback(question, answer) {
  const correct = accepts(question, answer.value);
  const tip = correct ? '' : answerTip(question, answer.value);
  return `<div class="feedback ${correct?'':'bad'}" id="english-feedback" tabindex="-1" aria-live="polite">
    <strong>${correct?'Dobrze!':'Sprawdź, dlaczego pasuje inna forma'}</strong>
    ${correct?'':`<p>Twój wybór · <span lang="en">${escapeEnglish(answer.value)}</span></p><p>Poprawna odpowiedź · <strong lang="en">${escapeEnglish(question.accepted.join(' / '))}</strong></p>`}
    <p class="english-why">${escapeEnglish(question.reason)}</p>
    ${tip?`<p>${escapeEnglish(tip)}</p>`:''}</div>
    ${englishButton('next', round.answers.length === round.ids.length ? 'Zobacz wynik →' : 'Następne zadanie →', true)}`;
}

function submitEnglish(event) {
  event.preventDefault();
  if (round.review) return;
  const id = round.ids[round.answers.length];
  const question = questionIndex.get(id);
  const value = useTyping ? englishScreen.querySelector('#english-input').value.trim() : selected;
  if (!value || !question) return;
  round.answers.push({id,value,typed:useTyping});
  round.review = true;
  const mistakes = new Set(preferences.mistakes);
  if (accepts(question,value)) mistakes.delete(id);
  else mistakes.add(id);
  preferences.mistakes = [...mistakes];
  saveEnglishRound();
  englishQuestion();
}

function englishResults() {
  const wrong = round.answers.filter(answer => !accepts(questionIndex.get(answer.id), answer.value));
  const score = round.answers.length - wrong.length;
  if (round.kind === 'test') {
    preferences.last = {score,total:round.ids.length};
    markPortal(score,round.ids.length);
  }
  delete preferences.session;
  remember();
  displayEnglish(`<section class="panel"><h1 tabindex="-1">Twój wynik</h1><p class="english-result">${score}/${round.ids.length}</p>
    <div class="summary-grid">${Object.entries(subjects).map(([key,name])=>{
      const total = round.ids.filter(id => questionIndex.get(id).topic === key).length;
      const missed = wrong.filter(answer => questionIndex.get(answer.id).topic === key).length;
      return total ? `<div><strong>${name}</strong>${total-missed}/${total}</div>` : '';
    }).join('')}</div>
    <div class="actions">${wrong.length ? englishButton('retry-round','Powtórz błędy z tej rundy',true) : ''}${englishButton('menu','Wybierz trening')}</div>
    <div class="answers">${wrong.map(answer => {
      const question = questionIndex.get(answer.id);
      return `<details><summary>${escapeEnglish(question.prompt)}</summary><p>Twój wybór · <span lang="en">${escapeEnglish(answer.value)}</span><br>Poprawna odpowiedź · <strong lang="en">${escapeEnglish(question.accepted.join(' / '))}</strong></p><p>${escapeEnglish(question.reason)}</p></details>`;
    }).join('')}</div></section>`);
}

document.querySelector('#menu').addEventListener('click', englishMenu);
englishScreen.addEventListener('submit', submitEnglish);
englishScreen.addEventListener('click', event => {
  const option = event.target.closest('[data-option]');
  if (option && !option.disabled) {
    selected = options[Number(option.dataset.option)];
    englishScreen.querySelectorAll('[data-option]').forEach(button => button.setAttribute('aria-pressed',String(button===option)));
    englishScreen.querySelector('#english-check').disabled = false;
    return;
  }
  const control = event.target.closest('[data-action]');
  if (!control) return;
  const [action, topic] = control.dataset.action.split(':');
  switch (action) {
    case 'menu': englishMenu(); break;
    case 'resume':
      if (validEnglishSession(preferences.session)) {
        round = preferences.session;
        englishQuestion();
      }
      break;
    case 'test': startEnglish('test', makeEnglishTest()); break;
    case 'topic': startEnglish('topic', shuffleEnglish(englishQuestions.filter(question => question.topic === topic))); break;
    case 'mistakes': startEnglish('retry', shuffleEnglish(preferences.mistakes.map(id => questionIndex.get(id)))); break;
    case 'retry-round': startEnglish('retry', shuffleEnglish(round.answers.filter(answer => !accepts(questionIndex.get(answer.id),answer.value)).map(answer => questionIndex.get(answer.id)))); break;
    case 'next':
      round.review = false;
      saveEnglishRound();
      englishQuestion();
      break;
  }
});
markPortal();
englishMenu();
