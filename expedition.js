const missions = [
  {
    title:"Przechwyć sygnał", loot:"Znak graniczny", icon:"⌖",
    brief:"Dron odebrał sygnał znad granicy. Rozszyfruj meldunek i zaznacz punkt na mapie.",
    tasks:[
      {type:"map", prompt:"Sygnał dochodzi z okolic 52,6°N i 14,6°E. Który punkt leży przy granicy z Niemcami?", points:[[14.63,52.59],[23.18,52.29],[20.77,49.42],[20.10,54.41]], answer:0, fact:"To zachodnia granica Polski, w okolicach Kostrzyna nad Odrą. Większa długość geograficzna przy E oznacza punkt położony dalej na wschód."},
      {type:"pick", prompt:"Dron leci z Polski na południe, prosto z okolic Rysów. Nad którym państwem się znajdzie?", options:["Niemcy","Litwa","Słowacja","Ukraina"], answer:2, fact:"Rysy leżą na granicy ze Słowacją. Dron ma łatwiej niż turysta. Nie musi sznurować butów."}
    ]
  },
  {
    title:"Geologiczny detektyw", loot:"Skamieniała muszla", icon:"◈",
    brief:"W skale na lądzie znaleziono muszlę morskiego zwierzęcia. Co zdradza ta wskazówka?",
    tasks:[
      {type:"pick", prompt:"Muszla tkwi w wapieniu. Jakie wyjaśnienie najlepiej pasuje do tej wskazówki?", options:["Osad, z którego powstał wapień, mógł gromadzić się w dawnym morzu.","Skała musiała powstać z zastygłej lawy.","Muszla dowodzi, że dziś jest tam morze."], answer:0, fact:"Skamieniałości pomagają odtworzyć dawne środowiska. Morze mogło zniknąć, a jego ślad został w skale."},
      {type:"order", prompt:"Odtwórz oś czasu. Wybieraj ery od najstarszej do najmłodszej.", options:["Paleozoik","Mezozoik","Kenozoik"], fact:"Paleozoik → mezozoik → kenozoik. Nadal żyjemy w kenozoiku."}
    ]
  },
  {
    title:"Górska akcja ratunkowa", loot:"Trasa ratunkowa", icon:"▲",
    brief:"Dwa meldunki, dwa szczyty. Wyznacz załodze właściwe punkty.",
    tasks:[
      {type:"map", prompt:"Meldunek z najwyższego szczytu Karkonoszy. Gdzie wysłać pomoc?", points:[[15.74,50.74],[20.09,49.18],[22.65,49.12],[20.95,50.9]], answer:0, fact:"Śnieżka leży w Karkonoszach, w Sudetach, przy granicy z Czechami."},
      {type:"map", prompt:"Drugi meldunek pochodzi z najwyższego punktu Polski. Gdzie są Rysy?", points:[[20.09,49.18],[15.74,50.74],[22.65,49.12],[20.95,50.9]], answer:0, fact:"Najwyższy punkt Polski leży w Tatrach, na granicy ze Słowacją. Zapamiętaj duet: Śnieżka — Sudety, Rysy — Karpaty."}
    ]
  },
  {
    title:"Kto przywiózł głaz?", loot:"Ślad lądolodu", icon:"❄",
    brief:"Na Kaszubach znaleziono trzy ślady. Podejrzany zostawił je po sobie, a potem się rozpłynął.",
    tasks:[
      {type:"map", prompt:"Gdzie zaczynamy śledztwo? Wskaż Pojezierze Kaszubskie.", points:[[18.10,54.24],[20.09,49.18],[22.56,51.25],[16.96,52.4]], answer:0, fact:"Pojezierze Kaszubskie leży na Pomorzu, na zachód od Trójmiasta."},
      {type:"match", prompt:"Połącz każdą wskazówkę z jej pochodzeniem.", clues:["Głaz narzutowy","Jezioro rynnowe","Morena czołowa"], options:["Lądolód przeniósł duży blok skalny.","Wody pod lodem wyżłobiły długie zagłębienie.","Przy krawędzi lądolodu nagromadziły się osady."], fact:"Podejrzany: lądolód. Transportował głazy bez prawa jazdy. Wody pod lodem też miały w tym śledztwie swój udział."}
    ]
  },
  {
    title:"Przelot z północy na południe", loot:"Profil rzeźby", icon:"↧",
    brief:"Zaprogramuj trasę drona od Bałtyku do południowej granicy.",
    tasks:[
      {type:"order", prompt:"Wybieraj kolejno pasy rzeźby od północy do południa.", options:["Pobrzeża","Pojezierza","Niziny Środkowopolskie","Wyżyny Polskie","Kotliny Podkarpackie","Góry"], fact:"Trasa gotowa. Nad morzem zaczynasz na pobrzeżach, dalej mijasz pojezierza i niziny. Na południu kolejno pojawiają się wyżyny, kotliny i góry."},
      {type:"map", prompt:"Dron zauważył płaską deltę Wisły. Wskaż Żuławy Wiślane.", points:[[19.1,54.20],[20.09,49.18],[16.95,52.4],[22.65,51.23]], answer:0, fact:"Żuławy leżą blisko ujścia Wisły do Bałtyku. Część terenu znajduje się poniżej poziomu morza."}
    ]
  },
  {
    title:"Dyspozytornia kopalń", loot:"Skrzynka próbek", icon:"▣",
    brief:"Etykiety na przesyłkach się pomieszały. Ustal skąd je nadano, a potem sprawdź próbki.",
    tasks:[
      {type:"match", prompt:"Przydziel każdy ładunek do właściwego miejsca.", clues:["Węgiel brunatny","Rudy miedzi","Sól kamienna"], options:["Bełchatów","Lubin","Wieliczka"], fact:"Bełchatów kojarz z odkrywką, Lubin z miedzią, a Wieliczkę z historyczną kopalnią soli."},
      {type:"match", prompt:"Przyporządkuj próbki do grup skał.", clues:["Granit","Piaskowiec","Marmur"], options:["Skała magmowa","Skała osadowa","Skała metamorficzna"], fact:"Granit powstał z magmy, piaskowiec z osadu, a marmur wskutek przeobrażenia skały węglanowej."}
    ]
  },
  {
    title:"Odnajdź drona", loot:"Odznaka ekspedycji", icon:"✦",
    brief:"Łączność zerwana. Ostatni meldunek: «Długie, wąskie jezioro, obok wielki głaz. Leciałem na zachód od Sopotu».",
    tasks:[
      {type:"map", prompt:"Który punkt pasuje do wszystkich wskazówek?", points:[[18.10,54.24],[15.74,50.74],[20.09,49.18],[22.56,51.25]], answer:0, fact:"Zachód od Sopotu prowadzi na Pojezierze Kaszubskie. Jeziora i głazy pasują do krajobrazu polodowcowego."},
      {type:"pick", prompt:"Która para procesów wyjaśnia jezioro rynnowe i głaz narzutowy?", options:["Wody pod lodem wyżłobiły rynnę, a lądolód przywiózł głaz.","Morze usypało wał, a lawa utworzyła głaz.","Rzeka zbudowała deltę, a wiatr przyniósł głaz."], answer:0, fact:"Dron odzyskany. Meldunek końcowy: «GPS zawiódł. Geografia nie»."}
    ]
  }
];

const expeditionKey = 'radar-polski-expedition-v1';
let completed = new Set();
try {
  const saved = JSON.parse(localStorage.getItem(expeditionKey) || '[]');
  if (Array.isArray(saved)) completed = new Set(saved.filter(i=>Number.isInteger(i)&&i>=0&&i<missions.length));
} catch {}
let expedition = null;
const finalMission = missions.length-1;
const atlasReady = () => missions.slice(0,finalMission).every((_,i)=>completed.has(i));
const expButton = (action,label,style='') => '<button class="'+style+'" data-exp="'+action+'">'+label+'</button>';

function expeditionMenu(){
  game=null;
  expedition=null;
  screen.innerHTML='<div class="bar"><button class="ghost" data-start="geo">← Radar Polski</button><span class="pill">Atlas · '+completed.size+' / '+missions.length+'</span></div>'+
    '<section class="panel"><div class="eyebrow">Radar Polski · kampania</div><h2 tabindex="-1">Ekspedycja</h2><p>Sześć misji terenowych. Zbierz znaleziska do atlasu, żeby odblokować poszukiwania zaginionego drona.</p>'+
    '<div class="topic-list">'+missions.map((m,i)=>{
      const locked=i===finalMission&&!atlasReady();
      const status=completed.has(i)?'✓ '+m.loot:locked?'Zablokowane · ukończ 6 misji':i===finalMission?'Finał':'Misja '+(i+1)+' · '+geoTopics[i].title;
      return '<button data-exp="mission:'+i+'" '+(locked?'disabled':'')+'><span>'+m.icon+'</span><strong>'+m.title+'</strong><small>'+status+'</small></button>';
    }).join('')+'</div></section>';
  focusExpedition();
}

function focusExpedition(selector='h2'){
  screen.querySelector(selector)?.focus({preventScroll:true});
}

function startExpedition(index){
  if(!missions[index] || (index===finalMission&&!atlasReady())) return;
  game=null;
  expedition={index,step:0};
  loadExpeditionTask();
}

function loadExpeditionTask(){
  const e=expedition;
  const task=missions[e.index].tasks[e.step];
  e.task=task;
  e.selected=[];
  e.answer=null;
  e.feedback='';
  e.solved=false;
  const choices=task.points||task.options;
  e.options=shuffle(choices.map((_,i)=>i));
  renderExpedition();
  focusExpedition();
}

function renderExpedition(){
  const e=expedition;
  const m=missions[e.index];
  const t=e.task;
  const choice=t.type==='map'||t.type==='pick';
  const mapMarkup=t.type==='map'?map({
    options:e.options.map(i=>t.points[i]),
    answer:e.answer,
    showSolution:e.solved,
    correct:e.options.indexOf(t.answer)
  }).replaceAll('data-answer=', 'data-exp-point='):'';
  let controls='';
  if(t.type==='order'||t.type==='match'){
    const isMatch=t.type==='match';
    controls='<ol class="exp-sequence">'+(isMatch?t.clues:t.options).map((label,i)=>{
      const assigned=e.selected[i];
      return '<li>'+(isMatch?'<strong>'+label+'</strong> → ':'')+(assigned===undefined?'…':t.options[assigned])+'</li>';
    }).join('')+'</ol><div class="choices quiz">'+e.options.map(i=>
      '<button data-exp="pick:'+i+'" '+(e.selected.includes(i)||e.solved?'disabled':'')+'>'+t.options[i]+'</button>'
    ).join('')+'</div>';
    if(!e.solved)controls+='<div class="actions next">'+expButton('undo','Cofnij','ghost')+
      '<button class="primary" data-exp="check" '+(e.selected.length===t.options.length?'':'disabled')+'>Sprawdź</button></div>';
  }
  if(choice)controls=mapMarkup+'<div class="choices '+(t.type==='map'?'four':'quiz')+'">'+e.options.map((i,pos)=>
    '<button data-exp="pick:'+pos+'" '+(e.answer!==null?'disabled':'')+' class="'+(e.solved&&i===t.answer?'ok':!e.solved&&pos===e.answer?'wrong':'')+'">'+(t.type==='map'?'ABCD'[pos]:t.options[i])+'</button>'
  ).join('')+'</div>';
  const feedback=e.feedback?'<div class="feedback '+(e.solved?'':'bad')+'" role="status">'+e.feedback+'</div>':'';
  screen.innerHTML='<div class="bar">'+expButton('menu','← Atlas','ghost')+'<span class="pill">Zadanie '+(e.step+1)+' / '+m.tasks.length+'</span></div>'+
    '<section class="panel"><div class="eyebrow">'+m.title+'</div><h2 tabindex="-1">'+t.prompt+'</h2>'+
    (e.step===0?'<p>'+m.brief+'</p>':'')+controls+feedback+
    (e.solved?'<div class="next">'+expButton('next',e.step===m.tasks.length-1?'Odbierz znalezisko →':'Następne zadanie →','primary')+'</div>':
      e.answer!==null?'<div class="next">'+expButton('retry','Spróbuj jeszcze raz →','primary')+'</div>':'')+'</section>';
}

function expeditionPick(position){
  const e=expedition;
  const t=e.task;
  if(e.solved)return;
  if(t.type==='map'||t.type==='pick'){
    if(e.answer!==null || e.options[position]===undefined)return;
    e.answer=position;
    e.solved=e.options[position]===t.answer;
    if(e.solved)e.feedback=t.fact;
    else if(t.type==='map'){
      const [lon,lat]=t.points[e.options[position]];
      const [targetLon,targetLat]=t.points[t.answer];
      const direction=Math.abs(lon-targetLon)>Math.abs(lat-targetLat)?(targetLon>lon?'wschód':'zachód'):(targetLat>lat?'północ':'południe');
      e.feedback='Szukaj dalej na '+direction+' od wybranego punktu.';
    }else e.feedback='Sprawdź wskazówkę w meldunku i spróbuj ponownie.';
  }else{
    if(e.selected.includes(position)||!e.options.includes(position))return;
    e.selected.push(position);
    e.feedback='';
  }
  renderExpedition();
  focusExpedition(e.solved?'[data-exp="next"]':e.answer!==null?'[data-exp="retry"]':
    '[data-exp="check"]:not(:disabled), [data-exp^="pick:"]:not(:disabled)');
}

function finishExpeditionMission(){
  const i=expedition.index;
  const m=missions[i];
  completed.add(i);
  try {localStorage.setItem(expeditionKey,JSON.stringify([...completed]));} catch {}
  expedition=null;
  screen.innerHTML='<div class="bar">'+expButton('menu','← Atlas','ghost')+'<span class="pill">'+completed.size+' / '+missions.length+'</span></div>'+
    '<section class="panel"><div class="eyebrow">'+(i===finalMission?'Ekspedycja zakończona':'Misja wykonana')+'</div>'+
    '<h2 tabindex="-1">'+m.icon+' '+m.loot+'</h2><p>'+(i===finalMission?'Dron wrócił do bazy. Atlas jest kompletny.':atlasReady()&&!completed.has(finalMission)?'Znalezisko zapisane. Finał jest już dostępny.':'Znalezisko zapisane w atlasie.')+'</p>'+
    '<div class="actions next">'+expButton('menu','Wróć do atlasu','primary')+
    (i!==finalMission&&atlasReady()&&!completed.has(finalMission)?expButton('mission:'+finalMission,'Odnajdź drona →'):'')+'</div></section>';
  focusExpedition();
}

screen.addEventListener('click',event=>{
  const control=event.target.closest('[data-exp],[data-exp-point]');
  if(!control){
    if(event.target.closest('[data-start],[data-home],[data-topic]'))expedition=null;
    return;
  }
  if(control.disabled)return;
  if(control.hasAttribute('data-exp-point')){expeditionPick(Number(control.dataset.expPoint));return;}
  const [action,arg]=control.dataset.exp.split(':');
  if(action==='menu'){expeditionMenu();return;}
  if(action==='mission'){startExpedition(Number(arg));return;}
  if(!expedition)return;
  const e=expedition;
  if(action==='pick'){expeditionPick(Number(arg));return;}
  if(action==='next'&&e.solved){
    e.step++;
    if(e.step===missions[e.index].tasks.length)finishExpeditionMission();
    else loadExpeditionTask();
    return;
  }
  if(action==='retry'){e.answer=null;e.feedback='';}
  if(action==='undo'&&!e.solved){e.selected.pop();e.feedback='';}
  if(action==='check'&&!e.solved&&e.selected.length===e.options.length){
    e.solved=e.selected.every((i,index)=>i===index);
    e.feedback=e.solved?e.task.fact:'Co najmniej jedna pozycja się nie zgadza. Cofnij wybór i popraw układ.';
  }
  renderExpedition();
  focusExpedition(e.solved?'[data-exp="next"]':'h2');
});

screen.addEventListener('keydown',event=>{
  const point=event.target.closest('[data-exp-point]');
  if(point && (event.key==='Enter'||event.key===' ')){
    event.preventDefault();
    expeditionPick(Number(point.dataset.expPoint));
  }
});
