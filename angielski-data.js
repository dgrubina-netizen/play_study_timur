const gapRows = `
past|I ___ a new hoodie yesterday. (buy)|bought|have bought;buyed|„Yesterday” wskazuje zamknięty czas. Druga forma buy to bought.
past|We ___ to Rome last weekend. (go)|went|have gone;goed|„Last weekend” to zakończony okres. W Past Simple go zmienia się w went.
past|She ___ school in 2020. (finish)|finished|has finished;finish|Rok 2020 wskazuje zamknięty okres. Regularny finish przyjmuje -ed.
past|I ___ my keys two days ago. (lose)|lost|have lost;losed|„Two days ago” mówi, kiedy to się stało. Druga forma lose to lost.
past|Vivaldi ___ many pieces of music. (compose)|composed|has composed;did composed|Życie Vivaldiego jest zamkniętym okresem. W twierdzeniu używamy composed.
past|She ___ me yesterday evening. (call)|called|has called;call|„Yesterday evening” wskazuje zakończony moment. Call jest regularne: called.
past|Dad ___ pasta last night. (make)|made|has made;maked|„Last night” odsyła do przeszłości. Druga forma make to made.
past|In 2019, they ___ their first house. (sell)|sold|have sold;selled|„In 2019” wskazuje konkretny rok. Sell → sold.
past|When I ___ home last night, I went straight to bed. (get)|got|have got;getted|Obie czynności wydarzyły się wczoraj. Druga forma get to got.
past|When we arrived at the station yesterday, we ___ a taxi. (take)|took|have taken;taken|To druga z dwóch zakończonych czynności. Take → took w Past Simple.
past|My parents ___ married when they were both 25. (get)|got|have got;gotten|„When they were both 25” wskazuje zamknięty moment w przeszłości.
past|I ___ in Kraków in 2013. (be born)|was born|have been born;did born|Urodzenie w podanym roku jest faktem z przeszłości. Mówimy I was born.
past|When I ___ a child, I loved dinosaurs. (be)|was|have been;were|„When I was a child” opisuje zakończony etap życia. Z I używamy was.
past|I ___ that film during the holidays last year. (see)|saw|have seen;seen|Chodzi o zeszłoroczne wakacje. See → saw w Past Simple, a seen to trzecia forma.
perfect|I ___ my essay yet. (not / write)|haven't written|didn't write;haven't wrote|„Yet” znaczy tu „jeszcze”. Chodzi o stan do teraz: haven't + written, trzecia forma write.
perfect|He ___ my watch yet. (not / repair)|hasn't repaired|haven't repaired;didn't repair|Z he używamy hasn't. „Yet” mówi, że do tej chwili zegarek nie jest naprawiony.
perfect|We ___ to London yet. (not / move)|haven't moved|hasn't moved;didn't move|Przeprowadzka do tej pory nie nastąpiła. Z we używamy haven't + moved.
perfect|Lucy ___ three exams so far. (pass)|has passed|have passed;passed|„So far” to „jak dotąd”. Podajemy wynik do teraz: Lucy = she, więc has passed.
perfect|My English ___ recently, and I can speak more easily now. (improve)|has improved|have improved;has improve|Zmiana ma widoczny skutek teraz. English jest w liczbie pojedynczej, a po has potrzebujemy improved.
perfect|I ___ such an interesting person before. (never / meet)|have never met|never have meet;have never meet|To doświadczenie do teraz. Zwykły szyk to have + never + met.
perfect|She ___ five cups of coffee so far today. (drink)|has drunk|has drank;have drunk|„So far today” liczy do tej chwili. Drink → drank → drunk, więc has drunk.
perfect|The team ___ four games so far this month. (win)|has won;have won|has winned;won|„So far this month” oznacza wynik do teraz. Win → won → won. Z team spotkasz has, a w brytyjskim angielskim także have.
perfect|I can't open the door. I ___ my key. (lose)|have lost|has lost;have lose|Zagubienie ma skutek teraz: nie mogę otworzyć drzwi. Z I używamy have + lost.
perfect|Ella ___ the book already. You can borrow it now. (read)|has already read|has already readed;have already read|Książka jest już przeczytana. Z Ella używamy has, a wszystkie trzy formy read zapisuje się tak samo.
perfect|We can start dinner. Mum ___ home. (just / get)|has just got;has just gotten|has just get;have just got|„Just” sygnalizuje świeże zdarzenie z efektem teraz. Trzecia forma to got w brytyjskim lub gotten w amerykańskim angielskim.
perfect|I haven't eaten anything ___, so I can't tell you how the food tastes. (yet / ago / last)|yet|ago;last|W tym przeczeniu yet oznacza „do tej pory jeszcze nie”.
duration|We ___ our dog for five years, and he's still with us. (have)|have had|had;have have|Nadal mamy psa. „For five years” mówi, jak długo. Present Perfect od have to have had.
duration|I ___ in Sopot since 2022, and I still live here. (live)|have lived|lived;has lived|„Since 2022” wskazuje początek sytuacji trwającej do dziś.
duration|We ___ well since our new neighbours moved in. (not / sleep)|haven't slept|didn't sleep;haven't sleep|Okres od przeprowadzki trwa do teraz. Sleep → slept → slept, więc haven't slept.
duration|I have lived here since I ___. (be born)|was born|have been born;am born|Mieszkanie trwa nadal, ale urodzenie to zakończone zdarzenie wyznaczające początek.
duration|I have read five books since I ___ the accident. (have)|had|have had;have|Wypadek był zakończonym zdarzeniem. Po since używamy tu Past Simple: had.
duration|We have known each other ___ six years. (for / since)|for|since;ago|„Six years” to długość okresu, więc for. Since wskazywałoby moment, np. since 2020.
duration|I haven't seen Mia ___ Monday. (for / since)|since|for;ago|„Monday” to punkt początkowy, więc since.
duration|I ___ there for three years, but I moved away in 2021. (live)|lived|have lived;has lived|„For” może być z Past Simple. Tutaj trzyletni okres się skończył: wyprowadziłem się w 2021 r.
duration|I ___ a bike for five years, but I sold it last summer. (have)|had|have had;has had|Rower został sprzedany, więc okres posiadania jest zakończony. Past Simple od have to had.
duration|I last saw him five months ___. (for / since / ago)|ago|for;since|„Five months ago” oznacza „pięć miesięcy temu”, czyli kiedy miało miejsce ostatnie spotkanie.
duration|They ___ in the same flat since they got married, and they're still there. (live)|have lived|lived;has lived|Mieszkają tam do teraz. Ślub to zakończony punkt początkowy.
forms|___ a good time at the party yesterday? (you / have)|Did you have|Have you had;Did you had|„Yesterday” wymaga tu Past Simple. Po did używamy have, bez zmiany na had.
forms|When ___ playing the guitar? (you / start)|did you start|have you started;did you started|Pytasz o moment rozpoczęcia. W pytaniu Past Simple: did + osoba + start.
forms|Where ___? (you / be born)|were you born|did you born;have you been born|Z czasownikiem be odwracamy szyk: you were → were you. Urodzenie to zakończone zdarzenie.
forms|What time ___ yesterday? (you / get up)|did you get up|have you got up;did you got up|„What time” z „yesterday” wskazuje konkretną godzinę w przeszłości. Po did używamy get up.
forms|They ___ to the cinema last Friday. (not / go)|didn't go|didn't went;haven't gone|„Last Friday” to zamknięty czas. Przeczenie Past Simple: didn't + go.
forms|I ___ the party last year. (not / enjoy)|didn't enjoy|didn't enjoyed;haven't enjoyed|„Last year” oznacza zamknięty okres. Po didn't czasownik nie dostaje -ed.
forms|___ the guitar when you were a child? (you / play)|Did you play|Did you played;Have you played|Dzieciństwo jest tu zamkniętym okresem. Po did stawiamy play.
forms|___ to India? (you / ever / be)|Have you ever been|Did you ever been;Have you ever went|Pytasz o doświadczenie do dziś. Have + you + ever + been.
forms|How many exams ___ so far? (Lucy / pass)|has Lucy passed|did Lucy pass;have Lucy passed|Liczymy egzaminy do teraz. Z Lucy używamy has, potem osoba i passed.
forms|How long ___ your bike? You still ride it, right? (you / have)|have you had|did you have;have you have|Rower nadal jest twój. Pytanie Present Perfect: have + you + had.
forms|___ yet? (Ben / arrive)|Has Ben arrived|Did Ben arrived;Have Ben arrived|„Yet” oznacza tu „czy już do tej chwili”. Z Ben używamy has + Ben + arrived.
forms|The shop ___ open yesterday. (not / be)|wasn't|didn't be;hasn't been|W Past Simple z be tworzymy przeczenie przez was not, czyli wasn't. „Yesterday” zamyka czas.
forms|___ at home last night? (they / be)|Were they|Did they were;Have they been|„Last night” to zakończony czas. Z they pytanie zaczynamy od were.
forms|I've never ___ seafood. (eat)|eaten|ate;eat|I've = I have. Po have potrzebujemy trzeciej formy: eat → ate → eaten.
forms|Have you ___ the new episode yet? (see)|seen|saw;see|Present Perfect wymaga trzeciej formy. Saw należy do Past Simple, seen do formy po have.
forms|She ___ the message last night. (write)|wrote|written;has written|„Last night” wskazuje zamkniętą przeszłość. Write → wrote → written.
duration|How long ___ each other? You are still friends, right? (you / know)|have you known|did you know;have you knew|Znajomość trwa nadal. Trzecia forma know to known: have + you + known.
perfect|He ___ three goals so far this season. (score)|has scored|have scored;has score|Wynik dotyczy trwającego sezonu. Z he używamy has, a trzecia forma to scored.
perfect|I ___ this film twice in my life so far. (see)|have seen|have saw;saw|Doświadczenie liczymy do teraz. Trzecia forma see to seen.
past|My aunt ___ me a bike for my tenth birthday. (give)|gave|has given;given|Podane urodziny są konkretną okazją z przeszłości. W twierdzeniu używamy gave.
past|He ___ his leg when he was twelve. (break)|broke|has broken;broken|„When he was twelve” zamyka zdarzenie w przeszłości. Druga forma to broke.
forms|___ the keys yesterday? (you / find)|Did you find|Did you found;Have you found|Pytamy o wczoraj. Did niesie czas przeszły, więc po nim używamy find.
forms|My brother ___ the window last night. (not / close)|didn't close|didn't closed;hasn't closed|„Last night” to zakończony czas. Po didn't używamy podstawowej formy close.
perfect|She ___ her phone, so you can't call her on it now. (break)|has broken|has broke;have broken|Telefon jest teraz zepsuty. Z she: has + broken, trzecia forma break.
duration|I ___ her since 2020. We still talk every week. (know)|have known|knew;have knew|Znajomość zaczęła się w 2020 i trwa. Present Perfect wymaga known.
forms|___ your homework yesterday or on Monday? (you / do)|Did you do|Did you did;Have you done|Oba wskazane terminy są przeszłe. Pierwsze did jest operatorem, a do czasownikiem głównym.
duration|I ___ (live) here since I ___ (be born). I still live here.|have lived / was born|lived / have been born;have lived / have been born|Mieszkanie trwa do teraz, więc have lived. Urodzenie zdarzyło się w określonym momencie: was born.
duration|We ___ (not / sleep) well since our neighbours ___ (move) in.|haven't slept / moved|didn't sleep / have moved;haven't sleep / moved|Brak dobrego snu trwa do teraz: haven't slept. Wprowadzenie się to zakończone zdarzenie: moved.
past|When we ___ (arrive) last night, we ___ (go) to bed.|arrived / went|have arrived / have gone;arrived / gone|Obie czynności wydarzyły się wczoraj wieczorem. Arrived jest formą regularną, a druga forma go to went.
forms|___ (you / play) football when you ___ (be) a child?|Did you play / were|Did you played / were;Have you played / have been|Dzieciństwo to zakończony okres. Po did potrzebujesz play, a z you używasz were.
`.trim();

const translationRows = `
Urodziłem się w Krakowie w 2013 roku.|I was born in Kraków in 2013.|I have been born in Kraków in 2013.;I did born in Kraków in 2013.|Podany rok zamyka przeszłość. Poprawna konstrukcja to I was born.
Czy kiedykolwiek jadłeś owoce morza?|Have you ever eaten seafood?|Did you ever ate seafood?;Have you ever ate seafood?|Pytanie o doświadczenie do teraz: Have you ever + eaten. Ate to druga forma.
Kiedy byłem dzieckiem, byłem nieznośny.|When I was a child, I was naughty.|When I have been a child, I have been naughty.;When I was a child, I were naughty.|Oba orzeczenia odnoszą się do zakończonego dzieciństwa. Z I używamy was.
O której godzinie wczoraj wstałeś?|What time did you get up yesterday?|What time have you got up yesterday?;What time did you got up yesterday?|„Yesterday” wskazuje wczoraj. Po did: get up, nie got up.
Nie spaliśmy dobrze, odkąd nasi nowi sąsiedzi się wprowadzili.|We haven't slept well since our new neighbours moved in.|We didn't sleep well since our new neighbours moved in.;We haven't sleep well since our new neighbours moved in.|Brak dobrego snu trwa do teraz: haven't slept. Wprowadzenie się było pojedynczym zdarzeniem: moved in.
Mój niemiecki ostatnio się poprawił.|My German has improved recently.|My German have improved recently.;My German has improve recently.|W tym zdaniu chodzi o zauważalny postęp do teraz. German = it, więc has + improved.
Moi rodzice pobrali się, kiedy mieli oboje po 25 lat.|My parents got married when they were both 25.|My parents have got married when they were both 25.;My parents got married when they had both 25 years.|Wiek po angielsku podajemy z be. Obie części opisują określony moment w przeszłości: got i were.
Przeczytałem pięć książek, odkąd miałem wypadek.|I have read five books since I had the accident.|I read five books since I have the accident.;I have readed five books since I had the accident.|Liczysz książki do teraz: have read. Wypadek wyznacza moment rozpoczęcia: had.
Nigdy nie spotkałam tak interesujących ludzi.|I have never met such interesting people.|I have never meet such interesting people.;I has never met such interesting people.|„Nigdy dotąd”: I have never + met. Nie dodajemy drugiego przeczenia.
Nie naprawił jeszcze mojego zegarka.|He hasn't repaired my watch yet.|He haven't repaired my watch yet.;He hasn't repair my watch yet.|Z he używamy hasn't. „Yet” obejmuje czas do teraz, a po hasn't potrzebujemy repaired.
W zeszły piątek nie poszliśmy do kina.|We didn't go to the cinema last Friday.|We haven't gone to the cinema last Friday.;We didn't went to the cinema last Friday.|„Last Friday” wskazuje zamknięty czas. Po didn't stawiamy go.
Jak długo masz ten rower?|How long have you had this bike?|How long have you have this bike?;How long are you having this bike?|Rower nadal jest twój. Pytanie ma szyk have + you + had.
Mamy psa od pięciu lat.|We have had a dog for five years.|We had a dog since five years.;We have had a dog since five years.|Mamy go nadal: have had. „Five years” to długość okresu, więc for.
Do tej pory zdała trzy egzaminy.|She has passed three exams so far.|She has pass three exams so far.;She have passed three exams so far.|„So far” to „jak dotąd”. Z she: has + passed.
Gdy wczoraj dotarliśmy do hotelu, od razu poszliśmy spać.|When we arrived at the hotel yesterday, we went straight to bed.|When we have arrived at the hotel yesterday, we have gone straight to bed.;When we arrived at the hotel yesterday, we gone straight to bed.|Oba zdarzenia wydarzyły się wczoraj: arrived i went. Gone nie występuje tu samodzielnie.
Czy zaglądałeś kiedyś do tego muzeum?|Have you ever visited this museum?|Have you ever visit this museum?;Did you ever visited this museum?|Pytanie o doświadczenie bez zamkniętej daty. Have you ever + visited.
Kiedy kupiłaś tę książkę?|When did you buy this book?|When did you bought this book?;When have you buy this book?|Pytamy o moment zakupu. Po did wracamy do formy buy.
Wypił już trzy szklanki wody, licząc od rana do teraz.|He has already drunk three glasses of water.|He has already drank three glasses of water.;He have already drunk three glasses of water.|Liczymy do teraz. Has + drunk. Drank to druga forma, używana w Past Simple.
Gdzie się urodziłeś?|Where were you born?|Where did you born?;Where have you been born?|Pytanie z be tworzymy przez inwersję: you were → were you.
Nie widziałem Oli od poniedziałku.|I haven't seen Ola since Monday.|I haven't saw Ola since Monday.;I haven't seen Ola for Monday.|Since wskazuje punkt początkowy. Seen to trzecia forma see.
Mieszkamy tu od 2022 roku i nadal tu jesteśmy.|We have lived here since 2022, and we are still here.|We have lived here for 2022, and we are still here.;We have live here since 2022, and we are still here.|Have lived opisuje sytuację trwającą do dziś. Since 2022 wskazuje punkt początkowy.
Wczoraj o ósmej wstałem z łóżka.|I got up at eight yesterday.|I have got up at eight yesterday.;I did got up at eight yesterday.|Konkretna godzina wczoraj: zwykłe twierdzenie w Past Simple, czyli got up.
Ona właśnie skończyła zadanie i może już wyjść.|She has just finished the task, so she can go out now.|She has just finish the task, so she can go out now.;She have just finished the task, so she can go out now.|Świeże zdarzenie daje skutek teraz. Z she używamy has + finished.
W dzieciństwie nie grałem na gitarze.|I didn't play the guitar when I was a child.|I haven't played the guitar when I was a child.;I didn't played the guitar when I was a child.|Dzieciństwo jest zamkniętym okresem, a po didn't używamy play.
`.trim();

const englishQuestions = [
  ...gapRows.split('\n').map((line, index) => {
    const [topic, prompt, correct, wrong, reason] = line.split('|');
    return { id: 'g' + (index + 1), topic, prompt, accepted: correct.split(';'), wrong: wrong.split(';'), reason };
  }),
  ...translationRows.split('\n').map((line, index) => {
    const [prompt, correct, wrong, reason] = line.split('|');
    return { id: 't' + (index + 1), topic: 'translation', prompt, accepted: [correct], wrong: wrong.split(';'), reason };
  })
];
