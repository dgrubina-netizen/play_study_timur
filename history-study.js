const studyTopics = [
  {title:'Po upadku Księstwa Warszawskiego', cards:[
    ['Podział 1815','Jakie trzy jednostki utworzono na ziemiach dawnego Księstwa Warszawskiego? Która była pod władzą Prus?', 'Królestwo Polskie, Wielkie Księstwo Poznańskie i Wolne Miasto Kraków. Wielkie Księstwo Poznańskie należało do Prus.', 'Na schemacie odszukaj Poznań, Warszawę i Kraków.'],
    ['Unia personalna','Z czym połączono Królestwo Polskie i kto był wspólnym władcą?', 'Królestwo połączono z Cesarstwem Rosyjskim. Car Rosji był równocześnie królem Polski.', 'Pomyśl o jednej osobie pełniącej dwie funkcje.'],
    ['Konstytucja 1815','Wymień dwie instytucje, które Królestwo Polskie miało po 1815 r.', 'Przykłady: własny sejm, wojsko, administracja. Konstytucję nadał Aleksander I.', 'Kto uchwalał prawa? Kto bronił kraju?'],
    ['Wolne Miasto','Pod czyją opieką znalazło się Wolne Miasto Kraków?', 'Pod opieką trzech mocarstw: Austrii, Prus i Rosji.', 'Szukaj trzech państw zaborczych.'],
    ['Narastający konflikt','Podaj przykład ograniczania swobód w Królestwie Polskim przed wybuchem powstania.', 'Przykład: wprowadzenie cenzury prasy lub zniesienie jawności obrad sejmu.', 'Pomyśl, co można było publikować i kto mógł obserwować obrady.'],
    ["Traktat wiedeński", "W którym roku zakończył się kongres wiedeński i co stało się z Księstwem Warszawskim?", "W 1815 r. Księstwo przestało istnieć, a jego ziemie podzielono. Z większości utworzono Królestwo Polskie.", "Podaj rok i decyzję terytorialną."],
    ["Trzy ośrodki", "Połącz Warszawę, Poznań i Kraków z jednostkami utworzonymi w 1815 r.", "Warszawa — Królestwo Polskie. Poznań — Wielkie Księstwo Poznańskie. Kraków — Wolne Miasto Kraków.", "Zacznij od miasta, które pojawia się w nazwie."],
    ["Autonomia", "Dlaczego własny sejm i wojsko świadczyły o autonomii Królestwa?", "Królestwo miało własne instytucje i mogło w pewnym zakresie samodzielnie prowadzić sprawy wewnętrzne. Nadal miało wspólnego władcę z Cesarstwem Rosyjskim.", "Rozróżnij własne instytucje i własnego władcę."],
    ["Opozycja legalna", "Kim byli kaliszanie i z czym się nie zgadzali?", "Byli liberalną opozycją sejmową, kojarzoną z braćmi Niemojowskimi. Sprzeciwiali się łamaniu konstytucji i ograniczaniu swobód.", "Ich narzędziem była działalność w sejmie."],
    ["Opozycja tajna", "Z jaką organizacją kojarzysz Waleriana Łukasińskiego?", "Z Towarzystwem Patriotycznym, założonym w 1821 r. Działało konspiracyjnie.", "Szukaj słowa „patriotyczne”."],
    ["Gospodarka Królestwa", "Podaj przykład rozwoju przemysłu w Królestwie Polskim przed powstaniem.", "Rozwijało się m.in. włókiennictwo w Łodzi i okolicach. Franciszek Ksawery Drucki-Lubecki wspierał rozwój gospodarki.", "Pomyśl o produkcji tkanin."],
    ["Porównanie ziem", "Podaj jedną różnicę między położeniem Wielkiego Księstwa Poznańskiego a Wolnego Miasta Krakowa.", "Księstwo znalazło się pod władzą Prus, a Kraków miał status wolnego miasta pod opieką trzech mocarstw.", "Sprawdź, kto miał nad nimi władzę lub opiekę."]
  ]},
  {title:'Powstanie listopadowe', cards:[
    ['Noc listopadowa','Kiedy wybuchło powstanie i kto stanął na czele spisku podchorążych?', 'W nocy z 29 na 30 listopada 1830 r. Spiskowi przewodził Piotr Wysocki.', 'Nazwa powstania zdradza miesiąc.'],
    ['Przyczyny','Podaj jedną długofalową przyczynę i jedno bezpośrednie zagrożenie dla spiskowców.', 'Długofalowo: łamanie konstytucji i ograniczanie swobód. Bezpośrednio: groźba wykrycia spisku i aresztowania jego uczestników.', 'Oddziel to, co trwało latami, od tego, co przyspieszyło decyzję.'],
    ['Decyzja sejmu','Co oznaczała detronizacja Mikołaja I i kiedy do niej doszło?', 'Sejm pozbawił Mikołaja I polskiego tronu 25 stycznia 1831 r.', 'Zwróć uwagę na słowo „tron” w nazwie decyzji.'],
    ['Przebieg walk','Ułóż w kolejności: Ostrołęka, zdobycie Warszawy, noc listopadowa, Olszynka Grochowska.', 'Noc listopadowa (XI 1830) → Olszynka Grochowska (II 1831) → Ostrołęka (V 1831) → zdobycie Warszawy (IX 1831).', 'Zacznij od wybuchu, zakończ utratą stolicy.'],
    ['Klęska','Podaj dwie przyczyny klęski powstania.', 'Przykłady: przewaga militarna przeciwnika, brak skutecznej pomocy zagranicznej, błędy i niezdecydowanie części dowódców.', 'Pomyśl o zasobach, dowodzeniu i sojusznikach.'],
    ["Belweder", "Kogo próbowano schwytać w Belwederze podczas nocy listopadowej?", "Wielkiego księcia Konstantego, dowódcę wojska polskiego i brata cara. Udało mu się uciec.", "Chodzi o dowódcę wojska, nie o cara."],
    ["Dyktator", "Kto został pierwszym dyktatorem powstania i jaki kurs początkowo obrał?", "Józef Chłopicki. Liczył na porozumienie z carem i próbował negocjować.", "Pierwszą reakcją nie była decyzja o długiej wojnie."],
    ["Arsenał", "Dlaczego zdobycie warszawskiego Arsenału miało znaczenie?", "Dało dostęp do broni i ułatwiło włączenie się mieszkańców Warszawy do walki.", "Pomyśl, co przechowywano w arsenale."],
    ["Wojna 1831", "W którym roku rozegrały się bitwy pod Stoczkiem, Olszynką Grochowską i Ostrołęką?", "W 1831 r. Stoczek i Grochów w lutym, Ostrołęka w maju.", "Powstanie zaczęło się pod koniec poprzedniego roku."],
    ["Punkt zwrotny", "Dlaczego klęska pod Ostrołęką osłabiła powstanie?", "Armia polska poniosła znaczne straty, a porażka pogorszyła jej położenie i morale.", "Wyjaśnij skutek dla dalszych walk."],
    ["Obrona stolicy", "Kiedy wojska rosyjskie zdobyły Warszawę?", "We wrześniu 1831 r. Upadek stolicy przesądził o klęsce, choć opór trwał jeszcze w niektórych miejscach.", "Chodzi o koniec kampanii, nie o noc listopadową."],
    ["Przyczyna czy skutek?", "Uporządkuj pojęcia: łamanie konstytucji, noc listopadowa, Statut Organiczny.", "Łamanie konstytucji — przyczyna narastania konfliktu. Noc listopadowa — wybuch powstania. Statut Organiczny — następstwo klęski.", "Rozdziel to, co było przed, w trakcie i po powstaniu."]
  ]},
  {title:'Polacy po powstaniu listopadowym', cards:[
    ['Represje','Jak nazywał się dokument z 1832 r.? Jak zmienił samodzielność Królestwa?', 'Statut Organiczny zastąpił konstytucję. Królestwo utraciło m.in. własny sejm i odrębne wojsko.', 'Szukaj nazwy zaczynającej się na „Statut”.'],
    ['Wielka Emigracja','Dlaczego uczestnicy powstania wyjeżdżali i które państwo było głównym ośrodkiem emigracji?', 'Obawiali się represji i chcieli działać na rzecz niepodległości poza krajem. Najważniejszym ośrodkiem była Francja.', 'Pomyśl o Paryżu.'],
    ['Hotel Lambert','Kto kierował Hotelem Lambert i jak próbował pomóc sprawie polskiej?', 'Adam Jerzy Czartoryski. Jego obóz zabiegał o wsparcie mocarstw, głównie drogą dyplomacji.', 'Nazwa brzmi jak nocleg. Tu chodzi o obóz polityczny.'],
    ['Dwa obozy','Porównaj drogę do niepodległości proponowaną przez Hotel Lambert i Towarzystwo Demokratyczne Polskie.', 'Hotel Lambert liczył na dyplomację i pomoc mocarstw. TDP stawiało na ogólnonarodowe powstanie i wiązało je z reformą społeczną, m.in. uwłaszczeniem chłopów.', 'Porównaj zabieganie o sojuszników z mobilizowaniem ludności w kraju.'],
    ['Represje i opór','Podaj przykład represji wobec uczestników powstania i przykład dalszej działalności Polaków.', 'Represje: zesłania, więzienie lub konfiskaty majątków. Dalsza działalność: np. organizowanie stronnictw emigracyjnych albo działalność konspiracyjna w kraju.', 'Jedno działanie władz, jedno działanie Polaków.'],
    ["Autonomia po klęsce", "Wskaż dwie różnice między sytuacją Królestwa po 1815 i po 1832 r.", "Po 1815 r. Królestwo miało konstytucję, sejm i własne wojsko. Po 1832 r. konstytucję zastąpił Statut Organiczny, a sejm i odrębne wojsko zlikwidowano.", "Porównaj dokument ustrojowy i jedną instytucję."],
    ["Gromady Ludu Polskiego", "Z czym kojarzysz Gromady Ludu Polskiego?", "Z radykalnym nurtem Wielkiej Emigracji. Krytykowały przywileje szlachty i domagały się głębokich zmian społecznych.", "Pomyśl o najbardziej radykalnym nurcie emigracyjnym."],
    ["Kultura na emigracji", "Podaj jednego twórcę związanego z emigracją i przykład jego działalności.", "Np. Adam Mickiewicz — napisał na emigracji „Pana Tadeusza”; Fryderyk Chopin — komponował i występował we Francji.", "Wybierz literaturę albo muzykę."],
    ["Francja i inne kierunki", "Wymień dwa państwa, w których działali uczestnicy Wielkiej Emigracji.", "Np. Francja i Wielka Brytania. Paryż stał się głównym ośrodkiem.", "Paryż i Londyn to dwie wskazówki."],
    ["Polityka na uchodźstwie", "Które ugrupowanie wybrałby emigrant, który stawiał na powstanie ogólnonarodowe i uwłaszczenie chłopów?", "Towarzystwo Demokratyczne Polskie (TDP).", "Porównaj ten program z dyplomacją Hotelu Lambert."],
    ["Uwłaszczenie", "Co oznacza uwłaszczenie chłopów?", "Nadanie chłopom na własność ziemi, którą użytkowali.", "Pomyśl, co znaczy „na własność”."],
    ["Emigracja i represje", "Wyjaśnij, jak klęska powstania doprowadziła do rozwoju polskiego życia politycznego za granicą.", "Po klęsce i w obawie przed represjami wielu uczestników wyjechało. Za granicą tworzyli organizacje polityczne, wydawali pisma i próbowali pozyskać poparcie dla sprawy polskiej.", "Połącz klęskę, wyjazd i działalność za granicą."]
  ]}
];

const mockTasks = [
  {topic:0, map:true, q:'Podaj nazwy jednostek oznaczonych A, B i C na schemacie ziem polskich po 1815 r.', key:'A — Wielkie Księstwo Poznańskie. B — Królestwo Polskie. C — Wolne Miasto Kraków.', rubric:['A — Wielkie Księstwo Poznańskie','B — Królestwo Polskie','C — Wolne Miasto Kraków']},
  {topic:0, q:'Z jakim państwem połączono Królestwo Polskie unią personalną? Wyjaśnij, na czym polegała ta unia.', key:'Z Cesarstwem Rosyjskim. Car Rosji był zarazem królem Polski.', rubric:['Wskazane państwo','Wyjaśniona rola wspólnego władcy']},
  {topic:1, q:'Podaj datę wybuchu powstania listopadowego, nazwisko przywódcy spisku podchorążych i jedną przyczynę wybuchu.', key:'29 listopada 1830 r. (lub noc 29/30 listopada 1830 r.). Piotr Wysocki. Przykładowa przyczyna: łamanie konstytucji lub groźba wykrycia spisku.', rubric:['Poprawna data','Wysocki','Poprawna przyczyna']},
  {topic:1, q:'Zapisz litery od najwcześniejszego do najpóźniejszego wydarzenia.', source:'A. Zdobycie Warszawy. B. Bitwa pod Olszynką Grochowską. C. Wybuch powstania. D. Detronizacja Mikołaja I.', key:'C → D → B → A.', rubric:['C przed D','D przed B','B przed A']},
  {topic:2, q:'Podaj dwa przykłady represji wobec uczestników powstania lub ograniczeń samodzielności Królestwa po klęsce.', key:'Przykłady: zesłania, konfiskaty majątków, likwidacja sejmu lub odrębnego wojska.', rubric:['Pierwszy poprawny przykład','Drugi, inny poprawny przykład']},
  {topic:2, q:'Wyjaśnij jedną przyczynę Wielkiej Emigracji. Podaj państwo docelowe i jeden przykład działalności emigrantów.', key:'Np. obawa przed represjami, Francja, działalność dyplomatyczna Hotelu Lambert lub działalność TDP. Inne poprawne przykłady też się liczą.', rubric:['Poprawna przyczyna','Poprawne państwo','Poprawny przykład działalności']},
  {topic:2, q:'Podaj nazwę dokumentu z 1832 r. i wyjaśnij, co utrata sejmu oznaczała dla samodzielności Królestwa.', source:'Parafraza postanowienia: Królestwo jest częścią Cesarstwa Rosyjskiego i nie ma już własnego sejmu.', key:'Statut Organiczny. Bez własnego sejmu Królestwo utraciło własną instytucję ustawodawczą, co ograniczyło jego autonomię.', rubric:['Statut Organiczny','Wyjaśnione ograniczenie autonomii']},
  {"topic": 0, "q": "Podaj rok zakończenia kongresu wiedeńskiego i wyjaśnij, co jego decyzje oznaczały dla Księstwa Warszawskiego.", "key": "1815 r. Księstwo przestało istnieć, a jego ziemie podzielono.", "rubric": ["1815 r.", "Rozpad i podział ziem Księstwa"]},
  {"topic": 0, "q": "Porównaj kaliszan i Towarzystwo Patriotyczne. Wskaż, która opozycja działała legalnie, a która konspiracyjnie.", "key": "Kaliszanie działali legalnie w sejmie. Towarzystwo Patriotyczne działało w konspiracji.", "rubric": ["Kaliszanie — opozycja sejmowa", "Towarzystwo Patriotyczne — działalność tajna"]},
  {"topic": 1, "q": "Wskaż jedną długofalową przyczynę powstania i jeden czynnik, który przyspieszył jego wybuch.", "key": "Np. łamanie konstytucji i zagrożenie wykryciem spisku.", "rubric": ["Poprawna przyczyna długofalowa", "Poprawny bezpośredni czynnik"]},
  {"topic": 1, "q": "Wyjaśnij, co oznaczała detronizacja Mikołaja I. Podaj rok tej decyzji.", "key": "W 1831 r. sejm pozbawił Mikołaja I polskiego tronu.", "rubric": ["Pozbawienie polskiego tronu", "1831 r."]},
  {"topic": 1, "q": "Podaj dwie różne przyczyny klęski powstania. Jedną z nich uzasadnij.", "key": "Np. przewaga militarna Rosji i brak pomocy mocarstw. Przewaga w zasobach pozwalała Rosji kontynuować walkę mimo strat.", "rubric": ["Pierwsza poprawna przyczyna", "Druga poprawna przyczyna", "Logiczne uzasadnienie"]},
  {"topic": 2, "q": "Rozpoznaj obóz A i B. Wskaż najważniejszą różnicę między ich metodami.", "source": "A: Zabiegamy o pomoc obcych mocarstw. B: Niepodległość odzyskamy przez ogólnonarodowe powstanie. (Parafrazy programów.)", "key": "A — Hotel Lambert, dyplomacja i poparcie zagraniczne. B — TDP, powstanie oparte na mobilizacji ludności.", "rubric": ["A — Hotel Lambert", "B — TDP", "Poprawne porównanie metod"]},
  {"topic": 2, "q": "Podaj przykład twórcy związanego z Wielką Emigracją oraz jego dzieła lub działalności.", "key": "Np. Adam Mickiewicz — „Pan Tadeusz”; Fryderyk Chopin — działalność kompozytorska i koncertowa we Francji.", "rubric": ["Poprawna osoba", "Poprawne dzieło lub działalność"]}
];

const studyMap = `<svg class="study-map" viewBox="0 0 520 220" role="img" aria-label="Schemat: A przy Poznaniu, B przy Warszawie, C przy Krakowie">
<rect width="520" height="220" rx="12" fill="#203136"/>
<path d="M279 24 Q306 53 305 73 T321 106 Q335 137 293 159 T265 192 Q241 203 220 200" fill="none" stroke="#74b6df" stroke-width="4"/>
<text x="342" y="137" fill="#a5cbe2" font-size="13">Wisła</text>
<text x="28" y="34" fill="#e8eeee" font-size="13">↑ Północ</text>
<g fill="#f9ce84" stroke="#203136" stroke-width="2"><circle cx="145" cy="102" r="14"/><circle cx="324" cy="98" r="14"/><circle cx="250" cy="187" r="14"/></g>
<g fill="#162227" text-anchor="middle" font-size="14" font-weight="bold"><text x="145" y="107">A</text><text x="324" y="103">B</text><text x="250" y="192">C</text></g>
<g fill="#e8eeee" text-anchor="middle" font-size="14"><text x="145" y="78">Poznań</text><text x="359" y="77">Warszawa</text><text x="300" y="194">Kraków</text></g>
</svg><p class="subtle">Schemat położenia · bez granic i bez skali</p>`;

const archiveRounds=[
  {q:'Który punkt wskazuje Wolne Miasto Kraków?', map:true, options:['A','B','C'], correct:2, fact:'Punkt C leży przy Krakowie. Wolne Miasto pozostawało pod opieką Austrii, Prus i Rosji.'},
  {q:'Car jest zarazem królem Polski. Jaki typ związku opisuje ta informacja?', options:['Unia personalna','Sojusz wojskowy','Republika'], correct:0, fact:'Unia personalna oznacza wspólnego władcę. Królestwo zachowało wtedy m.in. własny sejm.'},
  {q:'Odtwórz przebieg powstania. Klikaj od najwcześniejszego wydarzenia.', order:true, options:['Noc listopadowa','Detronizacja Mikołaja I','Olszynka Grochowska','Ostrołęka','Zdobycie Warszawy'], fact:'Noc listopadowa rozpoczęła powstanie w 1830 r. Pozostałe wydarzenia rozegrały się w 1831 r.'},
  {q:'Kto przewodził spiskowi podchorążych?', options:['Adam Jerzy Czartoryski','Piotr Wysocki','Mikołaj I'], correct:1, fact:'Piotr Wysocki był jednym z inicjatorów nocy listopadowej.'},
  {q:'W teczce z 1832 r. czytasz o utracie własnego sejmu. Z którym dokumentem to połączysz?', options:['Konstytucja Królestwa z 1815 r.','Statut Organiczny','Akt detronizacji'], correct:1, fact:'Statut Organiczny zastąpił konstytucję i ograniczył autonomię Królestwa.'},
  {q:'Emigranci próbują pozyskać poparcie obcych mocarstw przez dyplomację. Do której teczki pasuje ten meldunek?', options:['Towarzystwo Demokratyczne Polskie','Związek Podchorążych','Hotel Lambert'], correct:2, fact:'Hotel Lambert działał pod kierunkiem Adama Jerzego Czartoryskiego. TDP stawiało na ogólnonarodowe powstanie.'},
  {"q": "Które państwo otrzymało Wielkie Księstwo Poznańskie?", "options": ["Prusy", "Austria", "Cesarstwo Rosyjskie"], "correct": 0, "fact": "Poznań znalazł się pod władzą Prus."},
  {"q": "Kto sprawował opiekę nad Wolnym Miastem Krakowem?", "options": ["Austria, Prusy i Rosja", "Tylko Austria", "Francja i Prusy"], "correct": 0, "fact": "Kraków pozostawał pod opieką trzech mocarstw zaborczych."},
  {"q": "Która instytucja świadczyła o autonomii Królestwa po 1815 r.?", "options": ["Własny sejm", "Wspólny car", "Pruski parlament"], "correct": 0, "fact": "Królestwo miało własny sejm, choć monarcha był wspólny."},
  {"q": "Które ugrupowanie działało w sejmie, sprzeciwiając się łamaniu konstytucji?", "options": ["Kaliszanie", "Hotel Lambert", "Gromady Ludu Polskiego"], "correct": 0, "fact": "Kaliszanie stanowili legalną opozycję sejmową."},
  {"q": "Która wskazówka najlepiej wyjaśnia, dlaczego spiskowcy działali właśnie w listopadzie 1830 r.?", "options": ["Groziło wykrycie spisku", "Wydano Statut Organiczny", "Upadła Warszawa"], "correct": 0, "fact": "Groźba wykrycia spisku przyspieszyła decyzję o rozpoczęciu powstania."},
  {"q": "Kogo zamierzano schwytać w Belwederze?", "options": ["Wielkiego księcia Konstantego", "Piotra Wysockiego", "Adama Jerzego Czartoryskiego"], "correct": 0, "fact": "Konstanty zdołał uciec."},
  {"q": "Co postanowił sejm w styczniu 1831 r.?", "options": ["Pozbawił Mikołaja I polskiego tronu", "Zlikwidował sejm Królestwa", "Oddał Warszawę wojskom rosyjskim"], "correct": 0, "fact": "Detronizacja oznaczała zerwanie więzi dynastycznej z carem."},
  {"q": "Co było skutkiem klęski powstania?", "options": ["Likwidacja sejmu Królestwa", "Nadanie konstytucji w 1815 r.", "Utworzenie Księstwa Warszawskiego"], "correct": 0, "fact": "Statut Organiczny zastąpił konstytucję i ograniczył samodzielność Królestwa."},
  {"q": "Gdzie znalazł się główny ośrodek Wielkiej Emigracji?", "options": ["We Francji", "W Portugalii", "W Szwecji"], "correct": 0, "fact": "Paryż skupiał ważne organizacje i twórców emigracyjnych."},
  {"q": "Który program pasuje do TDP?", "options": ["Powstanie ogólnonarodowe i uwłaszczenie chłopów", "Wyłącznie dyplomacja europejska", "Likwidacja polskich organizacji"], "correct": 0, "fact": "TDP wiązało odzyskanie niepodległości ze zmianami społecznymi."},
  {"q": "Co najlepiej pokazuje działalność kulturalną emigrantów?", "options": ["„Pan Tadeusz” Adama Mickiewicza", "Statut Organiczny", "Detronizacja Mikołaja I"], "correct": 0, "fact": "Mickiewicz napisał „Pana Tadeusza” na emigracji."}
];
const studyTotal=mockTasks.reduce((sum,t)=>sum+t.rubric.length,0);
let study=null;
const studyBtn=(action,label,style='')=>'<button class="'+style+'" data-study="'+action+'">'+label+'</button>';
function studyFocus(selector='h2'){screen.querySelector(selector)?.focus({preventScroll:true});}
function studyMenu(){
  game=null;
  study=null;
  screen.innerHTML='<div class="bar"><button class="ghost" data-home>← Menu</button><span class="pill">Wczoraj i dziś 7</span></div><section class="panel"><div class="eyebrow">Historia · dział II · tematy 1–3</div><h2 tabindex="-1">Archiwum 1815–1832</h2><p>Odtwórz wydarzenia z trzech teczek. Potem zamknij notatki i sprawdź, co pamiętasz.</p><div class="actions next">'+studyBtn('play','Rozpocznij śledztwo →','primary')+studyBtn('exam','Próbny sprawdzian · '+mockTasks.length+' zadań')+'</div><div class="topic-list">'+studyTopics.map((t,i)=>'<button data-study="topic:'+i+'"><span>0'+(i+1)+'</span><strong>'+t.title+'</strong><small>'+t.cards.length+' kart śledztwa</small></button>').join('')+'</div><p class="subtle next">Materiały do nauki: <a href="https://zpe.gov.pl/a/nastepstwa-powstania-listopadowego-dla-polakow-w-zaborze-pruskim-i-austriackim/DR05PqOLd">ziemie polskie po kongresie</a> · <a href="https://zpe.gov.pl/a/obozy-wielkiej-emigracji/D42ZM1ER7">Wielka Emigracja</a></p></section>';
  studyFocus();
}
function archiveRound(){
  const r=archiveRounds[study.round];
  study.options=shuffle(r.options.map((_,i)=>i));
  study.position=0;
  study.feedback='';
  study.done=false;
  archiveRender();
}
function archiveRender(){
  const r=archiveRounds[study.round];
  screen.innerHTML='<div class="bar">'+studyBtn('menu','← Archiwum','ghost')+'<span class="pill">Dowód '+(study.round+1)+' / '+archiveRounds.length+'</span></div><section class="panel"><div class="eyebrow">Śledztwo historyczne</div><h2 tabindex="-1">'+r.q+'</h2>'+
    (r.map?studyMap:'')+(r.order?'<p>Oś czasu: '+r.options.slice(0,study.position).join(' → ')+'</p>':'')+
    (study.done?'':'<div class="choices quiz">'+study.options.filter(i=>!r.order||i>=study.position).map(i=>studyBtn('evidence:'+i,r.options[i])).join('')+'</div>')+
    (study.feedback?'<div class="feedback '+(study.done?'':'bad')+'" role="status">'+study.feedback+'</div>':'')+
    (study.done?'<div class="next">'+studyBtn('advance','Dalej →','primary')+'</div>':'')+'</section>';
  studyFocus(study.done?'[data-study="advance"]':'h2');
}
function archivePick(i){
  const r=archiveRounds[study.round];
  if(study.done)return;
  if(i===(r.order?study.position:r.correct)){
    study.position++;
    study.done=!r.order||study.position===r.options.length;
    study.feedback=study.done?r.fact:'Dobrze. Wybierz następne wydarzenie.';
  }else{
    study.mistakes++;
    study.feedback='Ten trop nie pasuje. Spróbuj jeszcze raz.';
  }
  archiveRender();
}
function archiveAdvance(){
  study.round++;
  if(study.round<archiveRounds.length){archiveRound();return;}
  screen.innerHTML='<div class="bar">'+studyBtn('menu','← Archiwum','ghost')+'</div><section class="panel"><div class="eyebrow">'+archiveRounds.length+' dowodów zebranych</div><h2 tabindex="-1">Sprawa rozwiązana</h2><p>Nietrafione próby: '+study.mistakes+'. Czas sprawdzić, co potrafisz odtworzyć bez podpowiedzi.</p><div class="actions next">'+studyBtn('play','Zagraj ponownie')+studyBtn('exam','Próbny sprawdzian →','primary')+'</div></section>';
  studyFocus();
}
function studyTraining(){
  const t=studyTopics[study.topic], [label,q,key,hint]=t.cards[study.step];
  const detail=study.revealed?'<div class="feedback" role="status">'+key+'</div><div class="actions next">'+studyBtn('mark:0','Do powtórki')+studyBtn('mark:1','Umiem →','primary')+'</div>':
    '<div class="actions next">'+studyBtn('hint','Wskazówka','ghost')+studyBtn('reveal','Otwórz odpowiedź','primary')+'</div>'+
    (study.hint?'<p class="feedback" role="status">'+hint+'</p>':'');
  screen.innerHTML='<div class="bar">'+studyBtn('menu','← Archiwum','ghost')+'<span class="pill">Karta '+(study.step+1)+' / '+t.cards.length+'</span></div>'+
    '<section class="panel"><div class="eyebrow">'+label+'</div><h2 tabindex="-1">'+q+'</h2>'+
    (study.topic===0&&study.step===0?studyMap:'')+'<p>Odpowiedz na głos, zanim otworzysz kartę.</p>'+detail+'</section>';
  studyFocus(study.revealed?'[data-study="mark:0"]':'h2');
}
function studyTrainingEnd(){
  const t=studyTopics[study.topic];
  screen.innerHTML='<div class="bar">'+studyBtn('menu','← Archiwum','ghost')+'</div><section class="panel"><h2 tabindex="-1">Teczka przejrzana</h2><p>'+t.title+'</p>'+
    (study.misses.length?'<p>Do powtórki:</p><ul class="review">'+study.misses.map(i=>'<li>'+t.cards[i][1]+'</li>').join('')+'</ul>':'<p>Wszystkie karty oznaczone jako „Umiem”.</p>')+
    '<div class="actions next">'+studyBtn('topic:'+study.topic,'Powtórz teczkę')+studyBtn('exam','Próbny sprawdzian →','primary')+'</div></section>';
  studyFocus();
}
function studyExam(){
  screen.innerHTML='<div class="bar">'+studyBtn('menu','← Archiwum','ghost')+'<span class="pill">'+mockTasks.length+' zadań · '+studyTotal+' pkt</span></div><section class="panel"><div class="eyebrow">Dział II · tematy 1–3</div><h2 tabindex="-1">Próbny sprawdzian</h2><p>Odpowiedz po polsku. Możesz pominąć zadanie. Klucz otworzy się dopiero po oddaniu pracy.</p><form id="study-exam">'+
    mockTasks.map((t,i)=>'<article class="study-task"><h3>'+String(i+1).padStart(2,'0')+' · '+t.rubric.length+' pkt</h3><label for="study-'+i+'">'+t.q+'</label>'+
      (t.map?studyMap:'')+(t.source?'<blockquote>'+t.source+'</blockquote>':'')+'<textarea id="study-'+i+'" name="answer" rows="2" placeholder="Twoja odpowiedź"></textarea></article>').join('')+
    '<button class="primary next" type="submit">Oddaj pracę i otwórz klucz →</button></form></section>';
  studyFocus();
}
function studyReview(){
  screen.innerHTML='<div class="bar">'+studyBtn('menu','← Archiwum','ghost')+'<output class="pill" id="study-score">Zaznaczone punkty: 0 / '+studyTotal+'</output></div><section class="panel"><h2 tabindex="-1">Sprawdź odpowiedzi</h2><p>Porównaj z kluczem i zaznacz po jednym punkcie za każdy spełniony warunek. Liczy się sens odpowiedzi.</p>'+
    mockTasks.map((t,i)=>'<article class="study-task"><h3>'+String(i+1).padStart(2,'0')+' · '+studyTopics[t.topic].title+'</h3><p class="study-answer" data-review-answer="'+i+'"></p><div class="feedback"><strong>Klucz</strong><p>'+t.key+'</p></div>'+
      t.rubric.map(label=>'<label class="study-check"><input type="checkbox" data-study-point '+(study.answers[i].trim()?'':'disabled')+'> '+label+'</label>').join('')+'</article>').join('')+
    '<div class="next">'+studyBtn('diagnose','Podsumuj wynik →','primary')+'</div></section>';
  screen.querySelectorAll('[data-review-answer]').forEach(node=>{node.textContent=study.answers[Number(node.dataset.reviewAnswer)].trim()||'Brak odpowiedzi';});
  studyFocus();
}
function studyScore(){
  const checked=[...screen.querySelectorAll('[data-study-point]')].map(box=>box.checked);
  let offset=0;
  const totals=studyTopics.map(()=>[0,0]);
  mockTasks.forEach(t=>{
    totals[t.topic][0]+=checked.slice(offset,offset+t.rubric.length).filter(Boolean).length;
    totals[t.topic][1]+=t.rubric.length;
    offset+=t.rubric.length;
  });
  return {total:checked.filter(Boolean).length,totals};
}
function studyDiagnosis(){
  const result=studyScore();
  screen.innerHTML='<div class="bar">'+studyBtn('menu','← Archiwum','ghost')+'</div><section class="panel"><div class="eyebrow">Samoocena</div><h2 tabindex="-1">Wynik '+result.total+' / '+studyTotal+'</h2><div class="topic-list">'+
    result.totals.map(([earned,max],i)=>'<button data-study="topic:'+i+'"><span>'+String(i+1).padStart(2,'0')+'</span><strong>'+studyTopics[i].title+'</strong><small>'+earned+' / '+max+' pkt · otwórz powtórkę</small></button>').join('')+
    '</div><div class="next">'+studyBtn('exam','Napisz ponownie','ghost')+'</div></section>';
  studyFocus();
}

screen.addEventListener('click',event=>{
  const control=event.target.closest('[data-study]');
  if(!control)return;
  const [action,value]=control.dataset.study.split(':');
  if(action==='menu'){studyMenu();return;}
  if(action==='topic'){study={topic:Number(value),step:0,misses:[]};studyTraining();return;}
  if(action==='play'){study={round:0,mistakes:0};archiveRound();return;}
  if(action==='evidence'){archivePick(Number(value));return;}
  if(action==='advance'){archiveAdvance();return;}
  if(action==='exam'){study={};studyExam();return;}
  if(action==='diagnose'){studyDiagnosis();return;}
  if(action==='hint')study.hint=true;
  if(action==='reveal')study.revealed=true;
  if(action==='mark'){
    if(value==='0')study.misses.push(study.step);
    study.step++;
    if(study.step===studyTopics[study.topic].cards.length){studyTrainingEnd();return;}
    study.hint=study.revealed=false;
  }
  studyTraining();
});
screen.addEventListener('submit',event=>{
  if(event.target.id!=='study-exam')return;
  event.preventDefault();
  study.answers=new FormData(event.target).getAll('answer');
  studyReview();
});
screen.addEventListener('change',event=>{
  if(event.target.hasAttribute('data-study-point'))screen.querySelector('#study-score').textContent='Zaznaczone punkty: '+studyScore().total+' / '+studyTotal;
});
