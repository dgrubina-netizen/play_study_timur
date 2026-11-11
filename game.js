const historyCards = [
[1815,"Kongres wiedeński","Po wojnach napoleońskich mocarstwa ustaliły nowy porządek w Europie. Powstało Królestwo Polskie połączone unią personalną z Rosją."],
[1830,"Wybuch powstania listopadowego","W nocy z 29 na 30 listopada podchorążowie rozpoczęli powstanie w Warszawie."],
[1848,"Wiosna Ludów","Fala rewolucji objęła wiele krajów Europy. Protestujący domagali się m.in. swobód politycznych i praw narodowych."],
[1861,"Początek wojny secesyjnej w USA","Wojna wybuchła po secesji stanów Południa. Niewolnictwo było kluczową przyczyną konfliktu."],
[1863,"Wybuch powstania styczniowego","Powstanie przeciwko władzy carskiej rozpoczęło się w styczniu. Bezpośrednim impulsem była branka, czyli przymusowy pobór do wojska."],
[1871,"Powstanie Cesarstwa Niemieckiego","Prusy odegrały główną rolę w zjednoczeniu Niemiec. Cesarstwo ogłoszono w Wersalu."],
[1885,"Zakończenie konferencji berlińskiej","Mocarstwa uzgodniły zasady zajmowania ziem w Afryce, przyspieszając rywalizację kolonialną."],
[1905,"Strajki i protesty w Królestwie Polskim","Robotnicy protestowali m.in. w Łodzi. Żądania dotyczyły warunków pracy i praw politycznych."],
[1914,"Wybuch I wojny światowej","Zamach w Sarajewie uruchomił kryzys, który przerodził się w wojnę między europejskimi mocarstwami."],
[1917,"Bolszewicy przejmują władzę","Rewolucję nazywa się październikową według używanego wtedy w Rosji kalendarza. W kalendarzu gregoriańskim wydarzyła się w listopadzie."],
[1918,"Polska odzyskuje niepodległość","11 listopada Józef Piłsudski przejął dowództwo nad wojskiem. Datę tę upamiętnia Narodowe Święto Niepodległości."],
[1919,"Podpisanie traktatu wersalskiego","Traktat określał warunki pokoju z Niemcami. Polska odzyskała m.in. dostęp do Bałtyku."],
[1920,"Bitwa Warszawska","Wojsko Polskie odparło ofensywę Armii Czerwonej. Bitwa była przełomem w wojnie polsko-bolszewickiej."],
[1922,"Ustawa o budowie portu w Gdyni","Port miał zapewnić Polsce własne połączenie z handlem morskim. Ustawę przyjęto 23 września."],
[1926,"Przewrót majowy","Józef Piłsudski i popierające go oddziały przejęli władzę po walkach w Warszawie."],
[1929,"Krach na giełdzie w Nowym Jorku","Gwałtowny spadek cen akcji stał się symbolem początku Wielkiego Kryzysu."],
[1933,"Hitler zostaje kanclerzem Niemiec","Po objęciu urzędu naziści w krótkim czasie zlikwidowali podstawy demokracji w Niemczech."],
[1938,"Konferencja monachijska","Niemcy, Włochy, Wielka Brytania i Francja zgodziły się na przekazanie Niemcom obszarów przygranicznych Czechosłowacji."],
[1939,"Niemcy napadają na Polskę","Atak 1 września rozpoczął II wojnę światową w Europie."]
];
const border = [[14.14,53.92],[14.34,53.78],[14.28,53.35],[14.13,52.85],[14.63,52.59],[14.60,52.29],[14.73,52.08],[14.71,51.58],[15.00,51.25],[14.82,50.87],[15.28,50.99],[15.78,50.74],[16.23,50.66],[16.19,50.45],[16.60,50.14],[17.01,50.22],[17.66,50.31],[18.03,50.00],[18.55,49.93],[18.83,49.51],[19.31,49.41],[19.48,49.60],[19.79,49.42],[20.09,49.18],[20.77,49.42],[21.10,49.43],[21.65,49.41],[22.13,49.14],[22.87,49.00],[22.62,49.47],[23.05,49.74],[23.67,50.27],[24.14,50.86],[23.67,51.42],[23.60,51.78],[23.18,52.29],[23.78,52.68],[23.89,53.00],[23.58,53.62],[23.49,53.96],[23.51,54.25],[22.78,54.35],[22.77,54.40],[21.56,54.32],[20.10,54.41],[19.64,54.45],[19.13,54.33],[18.65,54.35],[18.53,54.57],[18.82,54.60],[18.41,54.82],[17.48,54.76],[16.58,54.56],[15.84,54.18],[14.91,54.04]];

const historyNotes = {
  "1815": "Wiedeń w 1815 r. to trochę jak aktualizacja mapy Europy. Tylko zamiast kliknąć «zapisz», trzeba było dogadać się z innymi mocarstwami.",
  "1830": "Początek powstania nazywamy nocą listopadową. Dobra wskazówka do zapamiętania: nazwa miesiąca jest już w tytule.",
  "1848": "«Wiosna Ludów» brzmi jak prognoza pogody. W podręczniku oznacza falę rewolucji, która przeszła przez Europę.",
  "1861": "Secesja oznacza odłączenie się. W tym przypadku od Unii odłączyły się południowe stany.",
  "1863": "Słowo «branka» brzmi niewinnie. Wtedy oznaczało przymusowy pobór do armii carskiej.",
  "1871": "Cesarstwo Niemieckie ogłoszono we Francji. Jeśli na osi czasu obok pojawi się Wersal 1919, to to samo miejsce, lecz zupełnie inne wydarzenie.",
  "1885": "Konferencja zaczęła się w 1884 r., a zakończyła w 1885 r. W pytaniu liczy się jej koniec.",
  "1905": "Jeśli Łódź kojarzy ci się z fabrykami włókienniczymi, masz już trop, dlaczego protesty robotnicze były tam tak ważne.",
  "1914": "Dwie daty do zapamiętania: zamach w Sarajewie był w czerwcu, a Austro-Węgry wypowiedziały wojnę Serbii w lipcu.",
  "1917": "Październik w nazwie, listopad w naszym kalendarzu. Jedno wydarzenie, dwa kalendarze. Historia właśnie zmieniła ustawienia daty.",
  "1918": "11 listopada to także dzień rozejmu kończącego walki na froncie zachodnim. Jeden dzień, dwie ważne kartki w kalendarzu.",
  "1919": "Wersal już był na osi przy 1871 r. Tutaj chodzi o traktat po I wojnie światowej.",
  "1920": "«Cud nad Wisłą» to przydomek bitwy. Warto pod nim zapamiętać konkretny rok i przeciwnika.",
  "1922": "W tej rundzie liczy się ustawa. Cały port nie powstał w jeden dzień, nawet przy bardzo optymistycznym harmonogramie.",
  "1926": "«Majowy» zdradza miesiąc. Rok trzeba odblokować samemu.",
  "1929": "Najważniejszy trop: giełda w Nowym Jorku, skutki odczuwalne daleko poza USA.",
  "1933": "Tu pytanie dotyczy stanowiska kanclerza. To sześć lat przed niemieckim atakiem na Polskę.",
  "1938": "Monachium jest w Niemczech, a porozumienie dotyczyło ziem Czechosłowacji. Dwa miejsca, które łatwo pomylić.",
  "1939": "1 września to tutaj przede wszystkim data ataku na Polskę. Rok 1939 domyka szkolną oś czasu dla klasy 7."
};
const geoTopics = [
  {title:"Położenie i granice", page:18, cards:[
    ["W której części Europy leży Polska?",["W Europie Środkowej","W Europie Południowej","W Europie Zachodniej","W Europie Północnej"],"Polska leży w Europie Środkowej, nad Morzem Bałtyckim.","Na mapie Europy zacznij od Bałtyku. Polska leży przy jego południowym brzegu."],
    ["Ile państw graniczy lądowo z Polską?",["7","6","8","9"],"Polska graniczy z Niemcami, Czechami, Słowacją, Ukrainą, Białorusią, Litwą i Rosją (obwodem królewieckim).","Policz sąsiadów dookoła mapy. Bałtyk robi za przerwę w wyliczance."],
    ["Który południk leży dalej na wschód?",["24°E","14°E","Oba leżą tak samo daleko","Zależy od szerokości geograficznej"],"Na wschód od południka 0° długość geograficzna rośnie w kierunku wschodnim.","E jak East. Im większa liczba przy E, tym dalej na wschód od Greenwich."],
    ["Gdzie szukać granicy z Niemcami?",[[14.63,52.59],[23.78,52.68],[20.77,49.42],[20.10,54.41]],"Niemcy są zachodnim sąsiadem Polski. Część granicy biegnie Odrą i Nysą Łużycką.","Jeśli zgubisz zachód, pamiętaj: przy mapie ustawionej na północ zachód masz po lewej."]
  ]},
  {title:"Przeszłość geologiczna", page:23, cards:[
    ["Co jest najstarsze?",["Era paleozoiczna","Era mezozoiczna","Era kenozoiczna","Czwartorzęd"],"Paleozoik poprzedza mezozoik i kenozoik. Czwartorzęd jest częścią kenozoiku.","Paleo, mezo, keno. Trzy nazwy, które warto ustawić w kolejce jak karty w Maszynie czasu."],
    ["Co pokazuje mapa geologiczna?",["Rozmieszczenie i wiek skał","Granice województw","Prognozę pogody","Liczbę mieszkańców"],"Mapa geologiczna pokazuje m.in. rodzaje i wiek skał. Kolory trzeba odczytać z legendy.","To trochę jak mapa skarbów, tylko skarbem jest informacja o tym, co masz pod nogami."],
    ["Jaka era trwa obecnie?",["Kenozoik","Mezozoik","Paleozoik","Żadna z wymienionych"],"Żyjemy w kenozoiku. W jego najmłodszym okresie, czwartorzędzie, lądolód kilkakrotnie wkraczał na obszar Polski.","Lądolód to końcówka geologicznej opowieści. Z perspektywy Ziemi całkiem świeża sprawa."],
    ["O czym mogą świadczyć skamieniałości morskich organizmów w skałach na lądzie?",["Że dawniej w tym miejscu było morze","Że skały powstały we współczesnej rzece","Że wszystkie skały są magmowe","Że granica państwa przebiegała w tym miejscu"],"Skały z osadów morskich mogą zawierać szczątki dawnych organizmów. Pomagają one odtworzyć środowisko, w którym powstała skała.","Muszla w skale bywa starsza od całego pasma górskiego, w którym ją znajdziesz."]
  ]},
  {title:"Góry w Europie i w Polsce", page:26, cards:[
    ["Gdzie leżą Rysy?",[[20.09,49.18],[15.74,50.74],[20.95,50.9],[18.65,54.35]],"Rysy leżą w Tatrach, na granicy ze Słowacją. Najwyższy punkt Polski ma 2499 m n.p.m.","Rysy są blisko południowego krańca kraju. Od widoku morza dzieli je prawie cała Polska."],
    ["Gdzie leży Śnieżka?",[[15.74,50.74],[20.09,49.18],[22.65,49.12],[18.65,54.35]],"Śnieżka jest najwyższym szczytem Karkonoszy i całych Sudetów.","Śnieżka to Sudety, Rysy to Tatry. Oba szczyty są przy granicy, ale Śnieżka leży dużo dalej na zachód."],
    ["Które góry są częścią Karpat?",["Tatry","Karkonosze","Góry Świętokrzyskie","Alpy"],"Tatry należą do Karpat. Karkonosze są częścią Sudetów.","Karpaty to cały łańcuch, Tatry to jedno z jego pasm. Jak folder i plik, tylko większe."],
    ["Co prowadzi do powstania gór fałdowych?",["Ściskanie i fałdowanie warstw skalnych","Osadzanie piasku przez wiatr","Topnienie lodu na jeziorze","Wypłukiwanie soli przez deszcz"],"Pod naciskiem warstwy skalne mogą się wyginać i fałdować. Tak powstały m.in. Alpy i Karpaty.","Zsuń do siebie dwa brzegi obrusa. Wybrzuszenia pomogą ci wyobrazić sobie fałdy skalne."]
  ]},
  {title:"Zlodowacenia na obszarze Polski", page:31, cards:[
    ["Gdzie leży Pojezierze Kaszubskie?",[[18.10,54.24],[20.09,49.18],[22.56,51.25],[16.96,52.4]],"Pojezierze Kaszubskie leży na Pomorzu, na zachód od Trójmiasta. Lądolód i jego wody pozostawiły tam liczne jeziora oraz pagórki.","Ze Sopotu to kierunek w głąb lądu. Ślady lodu są bliżej, niż sugeruje słowo «epoka»."],
    ["Czym jest głaz narzutowy?",["Skałą przyniesioną przez lądolód","Kawałkiem zastygłej lawy z polskiego wulkanu","Piaszczystą wydmą","Skamieniałym drzewem"],"Lądolód transportował fragmenty skał i zostawiał je po stopnieniu. Duże bloki tak przeniesione to głazy narzutowe.","Głaz narzutowy to przesyłka z północy. Kurierem był lądolód."],
    ["Jak zwykle wygląda jezioro rynnowe?",["Jest długie i wąskie","Ma kształt regularnego kwadratu","Jest zawsze okrągłe","Jest szersze niż dłuższe"],"Wody pod lądolodem wyżłobiły długie zagłębienia. Część z nich wypełniła się wodą i stała jeziorami rynnowymi.","Nazwa daje trop. Pomyśl o długiej rynnie przy dachu."],
    ["Co to jest morena czołowa?",["Wał osadów nagromadzonych przy czole lądolodu","Szczyt utworzony z lawy","Dolina wycięta przez morze","Jezioro w kraterze"],"Materiał niesiony przez lód gromadził się przy jego krawędzi. Po stopnieniu lodu został wał morenowy.","Czoło lądolodu to jego brzeg, tam gdzie kończy się lód i zaczyna teren przed nim."]
  ]},
  {title:"Ukształtowanie powierzchni", page:36, cards:[
    ["Który pas leży tuż nad polskim morzem?",["Pobrzeża","Wyżyny","Kotliny podkarpackie","Góry"],"Pobrzeża tworzą północny pas rzeźby Polski. Dalej na południe leżą pojezierza.","Pobrzeża są przy brzegu. Tym razem geografia zostawiła podpowiedź w nazwie."],
    ["Który typ terenu zajmuje największą część Polski?",["Niziny","Wyżyny","Wysokie góry","Kotliny"],"Polska jest krajem w większości nizinnym. Najwyższe obszary leżą na południu.","Widowiskowe Tatry przyciągają wzrok, ale na mapie to niziny zajmują najwięcej miejsca."],
    ["Co leży bezpośrednio na południe od pasa pojezierzy?",["Niziny Środkowopolskie","Pobrzeża","Kotliny podkarpackie","Góry"],"W szkolnym układzie pasów od północy kolejność zaczyna się od pobrzeży, pojezierzy i nizin środkowopolskich.","Brzeg, jeziora, niziny. Pierwsze trzy przystanki podróży z północy na południe."],
    ["Gdzie szukać Żuław Wiślanych?",[[19.1,54.20],[20.09,49.18],[16.95,52.4],[22.65,51.23]],"Żuławy to równina w delcie Wisły. Część terenu leży poniżej poziomu morza.","Można stać na suchym lądzie i mieć ujemną wysokość n.p.m. Żuławy są dobrym przykładem."]
  ]},
  {title:"Skały i surowce mineralne", page:41, cards:[
    ["Jaki surowiec kojarzy się z Bełchatowem?",["Węgiel brunatny","Rudy miedzi","Sól kamienna","Ropa naftowa"],"W okolicach Bełchatowa węgiel brunatny jest wydobywany odkrywkowo.","Odkrywka działa od góry. Żeby dostać się do złoża, zdejmuje się warstwy nad nim."],
    ["Gdzie leży Lubin, ośrodek wydobycia rud miedzi?",[[16.20,51.40],[22.57,51.25],[18.65,54.35],[20.09,49.18]],"Lubin leży na Dolnym Śląsku, w Legnicko-Głogowskim Okręgu Miedziowym.","Lubin bez drugiego «l» szukaj na zachodzie. Lublin z drugim «l» leży na wschodzie."],
    ["Z jakiego surowca słynie Wieliczka?",["Z soli kamiennej","Z węgla brunatnego","Z rud miedzi","Z gazu ziemnego"],"Wieliczka pod Krakowem słynie z historycznej kopalni soli kamiennej.","To kopalnia surowca, który znasz też z kuchni. Tylko pod Krakowem występuje w skali kopalni."],
    ["Do której grupy skał należy granit?",["Magmowe","Osadowe","Metamorficzne","Granit nie jest skałą"],"Granit powstaje z magmy, która stygnie powoli w głębi Ziemi. Dlatego zwykle widać w nim ziarna różnych minerałów.","Przyjrzyj się granitowi z bliska. Na gładkiej powierzchni nadal widać, że to mieszanka minerałów."]
  ]}
];
const historyRounds = 8;
const screen = document.querySelector('#screen');
let game;
const shuffle = (items) => {
  const result = [...items];
  for (let i=result.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
};
const pt = ([lon,lat]) => [Math.round(29+(lon-14)*37),Math.round(25+(55-lat)*59)];
const outline = border.map(p=>pt(p).join(',')).join(' ');
const icons = {
 history:'<svg viewBox="0 0 240 85" aria-hidden="true"><path d="M30 43H210" stroke="#86a7a7" stroke-width="2" stroke-dasharray="4 5"/><rect x="51" y="21" width="41" height="43" rx="6" fill="#ffd295" transform="rotate(-12 71 42)"/><rect x="100" y="13" width="44" height="52" rx="6" fill="#b7f27c" transform="rotate(9 122 39)"/><rect x="153" y="26" width="37" height="41" rx="6" fill="#70c5ba" transform="rotate(-7 171 46)"/><text x="122" y="47" text-anchor="middle" fill="#213628" font-size="20" font-weight="bold">?</text></svg>',
 geo:'<svg viewBox="0 0 440 405" aria-hidden="true"><polygon points="'+outline+'" fill="#70c5ba" stroke="#b7f27c" stroke-width="8"/><circle cx="204" cy="150" r="25" fill="#ffd295"/><circle cx="204" cy="150" r="10" fill="#263e44"/></svg>'
};
function home(){
  game=null;
  screen.innerHTML='<section class="hero"><div class="eyebrow">Dwie gry · klasa 7</div><h1 tabindex="-1">Mapa i maszyna<br>czasu.</h1><p>Uporządkuj historię albo sprawdź, jak dobrze znasz mapę Polski.</p></section><div class="cards"><article class="card"><div class="art">'+icons.history+'</div><div class="eyebrow">01 · Historia</div><h2>Maszyna czasu</h2><p>Wstaw wydarzenie na oś czasu. Potem odkryj datę i dowiedz się, co się wtedy stało.</p><button class="primary" data-study="menu">Dział II · przygotuj się →</button><button class="ghost" data-start="history">Uruchom maszynę czasu</button></article><article class="card"><div class="art">'+icons.geo+'</div><div class="eyebrow">02 · Geografia</div><h2>Radar Polski</h2><p>Pierwsze sześć lekcji o środowisku Polski. Rusz na ekspedycję albo wybierz szybką powtórkę.</p><button class="primary" data-start="geo">Włącz radar →</button><a href="./krainy-polski.html" style="margin-top:10px">Krainy geograficzne Polski →</a></article></div>';
}
function chooseGeo(){
  game=null;
  screen.innerHTML='<div class="bar"><button class="ghost" data-home>← Menu</button><span class="pill">Planeta Nowa 7</span></div><section class="panel"><div class="eyebrow">Radar Polski · dział 1</div><h2 tabindex="-1">Wybierz misję</h2><p>Sześć misji terenowych albo szybka powtórka z lekcji.</p><div class="actions next"><button class="primary" data-exp="menu">Rusz na ekspedycję →</button><button data-topic="mix">Powtórka mieszana · 6 pytań</button></div><div class="topic-list">'+geoTopics.map((topic,i)=>'<button data-topic="'+i+'"><span>'+String(i+1).padStart(2,'0')+'</span><strong>'+topic.title+'</strong><small>s. '+topic.page+' · 4 pytania</small></button>').join('')+'</div></section>';
  screen.querySelector('h2').focus({preventScroll:true});
}
function start(mode, topic){
  if(mode==='geo' && topic===undefined){chooseGeo();return;}
  const deck=mode==='history'?shuffle(historyCards).slice(0,historyRounds):
    topic==='mix'?shuffle(geoTopics.map(item=>shuffle(item.cards)[0])):shuffle(geoTopics[Number(topic)].cards);
  game={mode,topic,deck,round:0,score:0,misses:[],answer:null};
  nextQuestion();
}
function nextQuestion(){
  const g=game;
  g.answer=null;
  if(g.round===g.deck.length){finish();return;}
  const target=g.deck[g.round];
  g.target=target;
  if(g.mode==='history'){
    g.anchors=shuffle(historyCards.filter(card=>card!==target)).slice(0,2).sort((a,b)=>a[0]-b[0]);
    g.correct=target[0]<g.anchors[0][0]?0:target[0]<g.anchors[1][0]?1:2;
  }else{
    g.options=shuffle(target[1]);
    g.correct=g.options.indexOf(target[1][0]);
  }
  render(true);
}
function map(g){
  const letters='ABCD';
  return '<svg class="map" viewBox="0 0 435 400" role="group" aria-label="Mapa Polski z punktami odpowiedzi"><defs><pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0V26" fill="none" stroke="#29454d"/></pattern></defs><rect width="435" height="400" fill="url(#grid)"/><image href="./polska-satelita.jpg" width="435" height="400" preserveAspectRatio="none"/><polygon points="'+outline+'" fill="none" stroke="#102022" stroke-width="3" stroke-linejoin="round"/><polygon points="'+outline+'" fill="none" stroke="#f5f1e7" stroke-opacity=".76" stroke-width="1.1" stroke-linejoin="round"/>'+g.options.map((place,i)=>{
    const [x,y]=pt(place);
    const active=g.answer===null;
    const fill=!active && g.showSolution!==false && i===g.correct?'#b7f27c':!active && i===g.answer?'#ffd295':'#12242b';
    const ink=!active&&((g.showSolution!==false&&i===g.correct)||i===g.answer)?'#142516':'#f5f1e7';
    return '<g class="'+(active?'pin':'')+'" '+(active?'data-answer="'+i+'" tabindex="0" role="button" aria-label="Punkt '+letters[i]+'"':'aria-hidden="true"')+'><circle cx="'+x+'" cy="'+y+'" r="21" fill="transparent"/><circle cx="'+x+'" cy="'+y+'" r="13" fill="'+fill+'" stroke="#b7f27c" stroke-width="1.5"/><text x="'+x+'" y="'+(y+5)+'" text-anchor="middle" fill="'+ink+'">'+letters[i]+'</text></g>';
  }).join('')+'</svg><div class="subtle">NASA Blue Marble · wybierz punkt na mapie lub literę</div>';
}
function render(focusHeading){
  const g=game;
  const isHistory=g.mode==='history';
  const isMap=!isHistory && Array.isArray(g.options[0]);
  const total=g.deck.length;
  const answered=g.answer!==null;
  const correct=g.answer===g.correct;
  const labels=isHistory?['Przed '+g.anchors[0][0],'Między tymi latami','Po '+g.anchors[1][0]]:isMap?['A','B','C','D']:g.options;
  const title=isHistory?g.target[1]:g.target[0];
  const fact=g.target[2];
  const note=isHistory?historyNotes[g.target[0]]:g.target[3];
  const solution=isHistory?g.target[0]:isMap?'Punkt '+labels[g.correct]:labels[g.correct];
  screen.innerHTML='<div class="bar"><button class="ghost" data-home>← Menu</button><span class="pill">Runda '+(g.round+1)+' / '+total+' · Punkty '+g.score+'</span></div><div class="progress" aria-hidden="true"><span style="width:'+((g.round+Number(answered))/total*100)+'%"></span></div><section class="panel"><div class="eyebrow">'+(isHistory?'Kiedy to się wydarzyło?':isMap?'Wybierz punkt na mapie':'Wybierz odpowiedź')+'</div><h2 tabindex="-1">'+title+'</h2>'+
    (isHistory?'<div class="timeline">'+g.anchors.map(card=>'<div class="time"><span class="year">'+card[0]+'</span>'+card[1]+'</div>').join('')+'</div>':isMap?map(g):'')+
    '<div class="choices '+(isMap?'four':isHistory?'':'quiz')+'">'+labels.map((label,i)=>'<button data-answer="'+i+'" '+(answered?'disabled ':'')+'class="'+(answered&&i===g.correct?'ok':answered&&i===g.answer?'wrong':'')+'">'+label+'</button>').join('')+'</div>'+
    (answered?'<div class="feedback '+(correct?'':'bad')+'" role="status"><strong>'+(correct?'Trafione!':'Poprawna odpowiedź')+' · '+solution+'</strong><p>'+fact+'</p><p class="bonus"><strong>Na marginesie</strong> '+note+'</p></div><button class="primary next" data-next>'+(g.round===total-1?'Zobacz wynik':'Następna runda →')+'</button>':'')+'</section>';
  if(focusHeading)screen.querySelector('h2').focus({preventScroll:true});
  if(answered)screen.querySelector('[data-next]').focus({preventScroll:true});
}
function answer(value){
  const g=game;
  if(!g || g.answer!==null || g.round>=g.deck.length)return;
  g.answer=value;
  if(value===g.correct)g.score++;
  else g.misses.push(g.target);
  render(false);
}
function finish(){
  const g=game;
  const isHistory=g.mode==='history';
  const total=g.deck.length;
  screen.innerHTML='<div class="bar"><button class="ghost" data-home>← Menu</button></div><section class="panel"><div class="eyebrow">Koniec misji</div><h2 tabindex="-1">Twój wynik</h2><div class="big">'+g.score+' / '+total+'</div>'+
    (g.misses.length?'<p>Do zapamiętania po tej rundzie</p><ul class="review">'+g.misses.map(card=>'<li><strong>'+(isHistory?card[0]+' · '+card[1]:card[0])+'</strong><br>'+ card[2]+'</li>').join('')+'</ul>':'<p>Wszystkie odpowiedzi trafione.</p>')+
    '<div class="actions next"><button class="primary" '+(isHistory?'data-start="history"':'data-topic="'+g.topic+'"')+'>Zagraj ponownie</button><button data-start="geo">Wybierz temat geografii →</button></div></section>';
  screen.querySelector('h2').focus();
}
screen.addEventListener('click',event=>{
  const control=event.target.closest('[data-start],[data-home],[data-answer],[data-next],[data-topic]');
  if(!control)return;
  if(control.hasAttribute('data-home')){home();screen.querySelector('h1').focus();}
  else if(control.hasAttribute('data-start'))start(control.dataset.start);
  else if(control.hasAttribute('data-topic'))start('geo',control.dataset.topic);
  else if(control.hasAttribute('data-next')){if(game.answer!==null){game.round++;nextQuestion();}}
  else answer(Number(control.dataset.answer));
});
screen.addEventListener('keydown',event=>{
  if(event.target.matches('.pin') && (event.key==='Enter'||event.key===' ')){
    event.preventDefault();answer(Number(event.target.dataset.answer));
  }
});
home();
