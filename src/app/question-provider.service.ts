import { Injectable, inject } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AppManagerService } from './app-manager.service';
import { QuestionsInterface } from '../types';

@Injectable({
  providedIn: 'root',
})
export class QuestionProviderService {
  manager = inject(AppManagerService);
  questions: QuestionsInterface[] = [
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question: 'Koliko je godina imao Neil Armstrong kad je hodao po Mjesecu?',
      correct_answer: '38',
      incorrect_answers: ['34', '42'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        '1971 otvorena je 1.hrvatska autocesta na dionici koja povezuje Kikovicu i koje mjesto?',
      correct_answer: 'Orehovicu',
      incorrect_answers: ['Drniš', 'Novsku'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'local',
      question:
        'Zbog životne priče uvrštena je i u Guinnessovu knjigu rekorda, a tijekom sedamdesetih godina bila je i nacionalni heroj Jugoslavije.Kako se je zvala stjuardesa koja je zapamćena kao jedina osoba koja je preživjela pad aviona JAT-a?',
      correct_answer: 'Vesna Vuković',
      incorrect_answers: ['Ana Anić', 'Marija Petrović'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'history',
      question:
        'Solidarnost je sindikalni pokret koji se pojavio u Poljskoj 1980. godine. Mjesto nastanka istog je brodogradilište Lenjin u jednom poljskom gradu. Kojem točno?',
      correct_answer: 'Gdanjsk',
      incorrect_answers: ['Varšava', 'Krakov'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'trivia',
      question:
        'Smädný Mních, Topvar, Luxor, Svätý Florián i Zlatý Bažant su imena jednog slovačkog proizvoda. Kojeg to?',
      correct_answer: 'Pivo',
      incorrect_answers: ['Sir', 'Čokolada'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'local',
      question:
        'U listopadu 2019., iz klaonice u Kaštel Starom pobjegao je bik. Kako se zvalo ovo goveče?',
      correct_answer: 'Jerry',
      incorrect_answers: ['Tom', 'Harry'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'local',
      question:
        'U studenom 2022. u okružju Apatina pojavilo se više viđanja jedne opasne životinje. O kojoj životinji je riječ?',
      correct_answer: 'Pantera',
      incorrect_answers: ['Lav', 'Tigar'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'local',
      question:
        'Cedevita u svom asortimanu ima čitav niz okusa koje se reklamiraju prigodnim bojama za svaki okus. Koji okus ima zelena cedevita?',
      correct_answer: 'Limeta',
      incorrect_answers: ['Naranča', 'Jagoda'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'trivia',
      question:
        'U zadnje vrijeme imena i vokativ baš i nisu prijatelji. I najbolji lingvisti bi se napatili sa Neom i Teom. Kako glasi pravilni vokativ za Patrika?',
      correct_answer: 'Patriče',
      incorrect_answers: ['Patrik', 'Patriku'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'U kojem je gradu smještena glavna tvornica i sjedište autokompanije koja se zove Peugeot?',
      correct_answer: 'Sochaux',

      incorrect_answers: ['Lyon', 'Pariz'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'PT 109 je bio torpedni čamac američke vojske koji je potopljen 1942. godine od strane Japanaca. Bio bi samo jedan od mnogih da mu posljednji kapetan nije globalno poznata osoba. Kako se on zvao?',
      correct_answer: 'JFK',
      incorrect_answers: ['FDR', 'LBJ'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Vladimir Putin je svoju KGB karijeru proveo uglavnom u bivšem DDRu. Nakon toga se vraća u Rusiju gdje kreće njegov streloviti politički uspon. U kojem ruskom gradu počinje njegov politički život?',
      correct_answer: 'St. Peterburg',
      incorrect_answers: ['Moskva', 'Volgograd'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'history',
      question:
        'Crvena zastava je bila jedan od industrijskih giganata bivše države. U kojem je gradu ova tvornica bila smještena?',
      correct_answer: 'Kragujevac',
      incorrect_answers: ['Niš', 'Virovitica'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'local',
      question:
        'Koje je godine samoborska kremšnita postala zaštićeno nematerijalno kulturno dobro?',
      correct_answer: '2021',
      incorrect_answers: ['2019', '2023'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question: 'Koje godine se počeo proizvoditi legendarni Commodore 64?',
      correct_answer: '1982.',
      incorrect_answers: ['1978.', '1985.'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'local',
      question:
        'Traminac je sorta bijelog grožđa od kojeg se proizvodi sjajno bijelo vino istoga imena. Uz jedan naš grad kvaliteta tog vina dostigla je svjetske standarde, pa je posluživana na krunidbi Elizabete II, a i prije je bio vino koje se posluživalo na Engleskom dvoru. Uz koji hrvatski grad se od 1710. godine uzgaja ova sorta i proizvodi ovo znamenito vino?',
      correct_answer: 'Ilok',
      incorrect_answers: ['Zadar', 'Zagreb'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'Rulet je jedna od najpopularnijih igara na sreću. Na pokretnom kolu su smješteni brojevi od 1 do 36, a nula nam i onako nije bitna za ovo pitanje. Koliki je zbroj svih znamenki na ovom đavoljem kolu?',
      correct_answer: '666',
      incorrect_answers: ['333', '777'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'Što se tiče začina i alkohola, glavna “zvijezda” je začin kojeg nalazimo u mnogim svjetskim žesticama. Tako ga ima u pastisu i absintu u Francuskoj, u grčkom ouzou, talijanskoj sambuci, u bliskoistočnom araku, te u mnogim drugim alkoholnim pićima čija bi imena odala i ime začina koga tražimo. Kako se on zove?',
      correct_answer: 'Anis',
      incorrect_answers: ['Kumin', 'Cimet'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'U svijetu postoji mnoštvo životinja koje direktno ugrožavaju život ljudima. Posebno je to izraženo u Africi. Kako se zove sisavac koji ubija najviše ljudskih jedinki na Crnom kontinentu?',
      correct_answer: 'Nilski konj',
      incorrect_answers: ['Lav', 'Leopard'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'trivia',
      question:
        'Prije nekoliko godina, točnije 2012., uz talijansku obalu desila se velika pomorska nesreća. Naime, nasukao se, a potomi prevrnuo na bok, veliki turistički kruzer. Od preko četiri tisuće putnika i članova posade, poginulo je njih trideset dvoje. Kako se zvao ovaj talijanski brod?',
      correct_answer: 'Costa Concordia',
      incorrect_answers: ['Evergreen', 'Mardi Gras'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'Jedan od specijaliteta talijanske kuhinje, pesto, koristi se kao umak za tjesteninu, ali i za pripremanje juha, te drugih umaka. Ovisno o regiji iz koje dolazi, razlikujemo crvene (rosso) i zelene ( verde). Ipak, najpoznatiji je pesto alla genovese. Najbitniji sastojci ovog specijaliteta su češnjak, sol, bosiljak, parmezan, tvrdi kozji sir i maslinovo ulje. Jedan bitan sastojak nedostaje sa ovog popisa. Koji?',
      correct_answer: 'Pinjoli',
      incorrect_answers: ['Papar', 'Oregano'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'local',
      question:
        'Bosanske slastičarne ne možemo zamisliti bez osvježavajućeg napitka kojeg svaka spravlja po vlastitom receptu. Glavni sastojci su kukuruz, kvasac, šećer i voda. Specifičnog je slatkastog okusa i žućkaste boje. O kojem se piću radi?',
      correct_answer: 'Boza',
      incorrect_answers: ['Loza', 'Roza'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'local',
      question: 'Gdje su rođeni Zdravko i Zoran Mamić?',
      correct_answer: 'Bjelovar',
      incorrect_answers: ['Tovarnik', 'Petrovci'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'trivia',
      question:
        'U jednoj londonskoj ulici, na broju 10, žive britanski premijeri. O kojoj je to ulici riječ u ovom pitanju?',
      correct_answer: 'Downing Street',
      incorrect_answers: ['Abbey Road', 'Baker Street'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question: 'Optika proučava što?',
      correct_answer: 'Svjetlo',
      incorrect_answers: ['Oko', 'Elektricitet'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question: 'Koja je misija Apollo na Mjesec prva nosila lunarni rover?',
      correct_answer: 'Apollo 15',
      incorrect_answers: ['Apollo 11', 'Apollo 13'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'history',
      question:
        'Kako se zvao prvi umjetni satelit koji je Sovjetski Savez lansirao 1957.?',
      correct_answer: 'Sputnik 1',
      incorrect_answers: ['Poyekhali 1', 'Vostok 1'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'science',
      question: 'Koja je najrjeđa krvna grupa?',
      correct_answer: 'AB-',
      incorrect_answers: ['O-', 'A-'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question:
        'Zemlja ima tri sloja koji se razlikuju zbog različitih temperatura. Koja su njezina tri sloja?',
      correct_answer: 'Kora, plašt i jezgra',
      incorrect_answers: ['Atmosfera, kora i jezgra', 'Mantle, kora i jezgra'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question: 'Kojoj skupini životinja pripadaju žabe?',
      correct_answer: 'Vodozemci',
      incorrect_answers: ['Ribe', 'Gmazovi'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question: 'Koliko kostiju imaju morski psi u svojim tijelima?',
      correct_answer: '0',
      incorrect_answers: ['27', '86'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'science',
      question: 'Gdje su najmanje kosti u tijelu?',
      correct_answer: 'Uho',
      incorrect_answers: ['Prsti', 'Nos'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question: 'Koliko srca ima hobotnica?',
      correct_answer: 'Tri',
      incorrect_answers: ['Četiri', 'Nula 💀'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question:
        'Ovaj je čovjek odgovoran za preoblikovanje načina na koji su rani ljudi vjerovali da Sunčev sustav funkcionira. Predložio je da Zemlja nije središte svemira i da je Sunce umjesto toga u središtu našeg solarnog sustava. Tko je on?',
      correct_answer: 'Nikola Kopernik',
      incorrect_answers: ['Galileo Galilei', 'Isaac Newton'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'history',
      question: 'Tko se smatra čovjekom koji je izumio telefon?',
      correct_answer: 'Alexander Graham Bell',
      incorrect_answers: ['Thomas Edison', 'Nikola Tesla'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question:
        'Ovaj planet najbrže rotira, dovrši jednu rotaciju za samo 10 sati. Koji je to planet?',
      correct_answer: 'Jupiter',
      incorrect_answers: ['Mars', 'Saturn'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question: 'Koliko zubi ima odrasla osoba?',
      correct_answer: '32',
      incorrect_answers: ['28', '36'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'history',
      question:
        'Ova životinja bila je prva ikada lansirana u svemir. Bio je priključen na sovjetsku svemirsku letjelicu Sputnik 2, koja je poslana u svemir 3. studenog 1957. Kako se zvao?',
      correct_answer: 'Lajka',
      incorrect_answers: ['Zeus', 'Fido'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'history',
      question: 'Tko je bila prva žena u svemiru?',
      correct_answer: 'Valentina Tereškova',
      incorrect_answers: ['Sally Ride', 'Mae Jemison'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'science',
      question: 'Gdje na ljudskom tijelu ima najviše žlijezda znojnica?',
      correct_answer: 'Donji dio stopala',
      incorrect_answers: ['Dlanovi', 'Lice'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question:
        'Otprilike koliko dugo sunčevoj svjetlosti treba da stigne do Zemlje?',
      correct_answer: '8 minuta',
      incorrect_answers: ['8 sati', '8 dana'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question: 'Koliko kostiju ima ljudsko tijelo?',
      correct_answer: '206',
      incorrect_answers: ['203', '209'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'science',
      question: 'Kako se zove proces razgradnje hrane?',
      correct_answer: 'Digestija',
      incorrect_answers: ['Respiracija', 'Fotosinteza'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Koji je troslovni grad u istočnoj Srbiji poznat po velikim nalazištima bakra?',
      correct_answer: 'Bor',
      incorrect_answers: ['Niš', 'Uži'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Koje se posilno gorivo iskapalo u rudnicima Raša, Labin, Ripenda, Pićan i Tupljak?',
      correct_answer: 'Ugljen',
      incorrect_answers: ['Bakar', 'Srebro'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question: 'Uz koje baranjsko brdo leže Knezovi vinogradi?',
      correct_answer: 'Bansko brdo',
      incorrect_answers: ['Kamenjak', 'Mekote'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Rastafarijanizam je pokret pripadnika crne rase koji prepoznaju Afriku, pogotovo Etiopiju, kao mjesto rođenja čovječanstva. Pokret se javio kao pobuna protiv bjelačkog ugnjetavanja i iz potrebe crnaca da zadrže svoj ponos, te da pokušaju ukloniti ostatke ropstva, pri čemu bi dokazali da su i oni ljudi te da zaslužuju slobodu i poštovanje. Kojim imenom, pogrdnim, u rastafarijanizmu nazivaju bijelce, ako se zna da je u pitanju jedna drevna država?',
      correct_answer: 'Babilon',
      incorrect_answers: ['Atlantida', 'Elam'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Etiopija je pradomovina biljke koja je danas globalno rasprostranjena, što vezano za uzgoj, a još više što se tiče upotrebe iste. Ova je država trenutno u prvih deset po proizvodnji ove biljke u svijetu. O kojoj je to biljci riječ ako se zna da je najčešća svjetski uzgajana sorta dobila ime po azijskom poluotoku koji je od Afrike odvojen samo Crvenim morem?',
      correct_answer: 'Kava',
      incorrect_answers: ['Čaj', 'Kakao'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question: 'Koja je Afrička država druga po broju stanovnika?',
      correct_answer: 'Etiopija',
      incorrect_answers: ['Nigerija', 'Kongo'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Brod Moravice je naselje i općina smještena u Hrvatskoj. U kojoj županiji se nalazi ovo pitoreskno mjesto?',
      correct_answer: 'Primorsko-goranska županija',
      incorrect_answers: ['Istarska županija', 'Ličko-senjska županija'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'Kroz Ukrajinu teče niz moćnih rijeka. Jedna od njih prolazi i kroz glavni ukrajinski grad Kijev. Kako se ona zove?',
      correct_answer: 'Dnjepar',
      incorrect_answers: ['Don', 'Bug'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Crvena zemlja je jedan od najvažnijih vojnih poligona u Republici Hrvatskoj. Pored kojeg se grada on nalazi?',
      correct_answer: 'Knin',
      incorrect_answers: ['Vinkovci', 'Osijek'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Indijski orah ili indijski oraščić biljka je iz porodice Anacardium i, bez obzira na ime, ne potječe iz Indije. Njega su u Indiju donijeli Portugalci i danas je Indija uz Obalu Bjelokosti njegov najveći proizvođač. Iz koje današnje države potječe ova biljka?',
      correct_answer: 'Brazil',
      incorrect_answers: ['Meksiko', 'Indija'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Kako se zove selo u Cetinskoj krajini ako znamo da su iz njega rodom Frano Masnić, Tadija Anušić i Vlado Veselica?',
      correct_answer: 'Glavice',
      incorrect_answers: ['Brnaze', 'Priko'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'Kako nazivamo područje u Republici Hrvatskoj smješteno između Mure i Drave?',
      correct_answer: 'Međimurje',
      incorrect_answers: ['Slavonija', 'Baranja'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'Kako nazivamo planinski lanac u južnoj Europi, koji se proteže zapadnim dijelom Balkanskog poluotoka kroz Hrvatsku, Bosnu i Hercegovinu, Srbiju, Crnu Goru i Albaniju?',
      correct_answer: 'Dinaridi',
      incorrect_answers: ['Alpe', 'Pirineji'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question: 'Koje boje se nalaze na zastavi Istarske županije?',
      correct_answer: 'Plava i zelena',
      incorrect_answers: ['Crvena i bijela', 'Žuta i plava'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'Najstarije kontinuirano naselje u Europi nalazi se u Hrvatskoj. O kojem se gradu radi ako znamo da je kontinuirano naseljen preko 8.300 godina?',
      correct_answer: 'Vinkovci',
      incorrect_answers: ['Pula', 'Zagreb'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question: 'U kojoj državi se nalazi najviše vulkana?',
      correct_answer: 'Indonezija',
      incorrect_answers: ['Filipini', 'Japan'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question: 'Kako se zove najviši vrh u suvremenoj Turskoj?',
      correct_answer: 'Ararat',
      incorrect_answers: ['Erciyes', 'Uludağ'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Uz otok Krk je smješten i čitav niz manjih otočića. Daleko je najpoznatiji onaj u Puntarskoj uvali između gradova Krka i Punata. Šumski je rezervat, a i naseljen je, jer je na njemu smješten franjevački samostan. Kako se zove ovaj pitoreskni otočić?',
      correct_answer: 'Košljun',
      incorrect_answers: ['Grgur', 'Rab'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Jedna od zadnjih prašuma u Europi, nalazi se nama u neposrednoj blizini. Ova šuma, smještena na granici Crne Gore i Bosne i Hercegovine, sastavni je dio Nacionalnog parka Sutjeska. Kako se zove ova šumetina?',
      correct_answer: 'Perućica',
      incorrect_answers: ['Plitvička jezera', 'Učka'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'Bilo je neminovno da portugalski moreplovci kad tad stignu do krajnjeg juga Afrike, i time dokažu da postoji mogućnost plovidbe sve do Indije. To će 1497. g. dokazati ekspedicija Vasca de Game, ali to nije važno za ovo pitanje, koje glasi: kako se zvao portugalski istraživač koji je 1488. godine prvi došao do krajnjeg juga Afrike, do Rta Dobre Nade?',
      correct_answer: 'Bartolomeu Dias',
      incorrect_answers: ['Vasco da Gama', 'Ferdinand Magellan'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'Ime pustinje koje tražimo u slobodnom prijevodu znači: uđeš, a ne izađeš. Smještena je u sjeverozapadnom dijelu NR Kine, a bila je na ruti Puta svile, što objašnjava kineski interes za nju još od davnina. Kako se zove ova pustinja, veličine oko 270000 km kvadratnih?',
      correct_answer: 'Taklamakan',
      incorrect_answers: ['Gobi', 'Sahara'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'Ako na sredini nacionalne zastave vidimo popriličnu gužvu, u kojoj se najviše ističu kaktus i orao koji stoji na njemu, riječ je o meksičkoj zastavi. Što orao drži u pandži?',
      correct_answer: 'Zmiju',
      incorrect_answers: ['Mač', 'Strijelu'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Mali otočić u Indonezijskom arhipelagu u potpunosti je nestao u erupciji istoimenog vulkana na njemu 1883. godine. Eksplozija se čula 3500 km dalje u Australiji, a oblak prašine se digao 80 km u zrak, zbog čega su se smanjile ljetne temperature na cijelom planetu u nekoliko idućih godina. Tsunamiji su na susjednim otocima pobili više od 36 000 ljudi. Kako se zvao taj vulkan ili istoimeni otok?',
      correct_answer: 'Krakatau',
      incorrect_answers: ['Mount Tambora', 'Merapi'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Na visini od 1078 metara, nedaleko od Mrkoplja, smjestilo se naselje koje se smatra najvišim stalno naseljenim mjestom u Hrvatskoj. Koje je ime ovog pitoresknog sela?',
      correct_answer: 'Begovo Razdolje',
      incorrect_answers: ['Delnice', 'Ravna Gora'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'Glavni grad Poljske je Varšava. Smjestio se u centralnom dijelu ove velike zemlje. Kroz njega protječe i jedna velika rijeka, a grad se ravnomjerno širi na obje obale iste. Kako nazivamo rijeku koja protječe kroz Varšavu?',
      correct_answer: 'Visla',
      incorrect_answers: ['Odra', 'Dunav'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Najpoznatiji grad Brazila je definitivno Rio de Janeiro. Bez obzira što nosi portugalsko ime, prvo kolonijalno naselje na ovom mjestu nisu osnovali Portugalci. Koja je europska nacija stvarni osnivač ovog grada?',
      correct_answer: 'Francuzi',
      incorrect_answers: ['Španjolci', 'Englezi'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Prva asocijacija na Brazil je rijeka Amazona. Međutim, Itaipu, najveća brazilska hidrocentrala, druga po veličini na svijetu, nije smještena na ovoj rijeci. Na kojoj je?',
      correct_answer: 'Parana',
      incorrect_answers: ['São Francisco', 'Tocantins'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Država sa najviše turističkih dolazaka u Aziji je Kina. Koja je druga azijska država sa ovog popisa?',
      correct_answer: 'Tajland',
      incorrect_answers: ['Japan', 'Indija'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Azija pomalo kaska za Europom i Sjevernom Amerikom po broju dodjeljenih Nobelovih nagrada. Prva azijska država na ovoj listi je Japan. Koja ga, istina, sa popriličnim zaostatkom, azijska država na njoj slijedi?',
      correct_answer: 'Indija',
      incorrect_answers: ['Kina', 'Sjeverna Koreja'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Na LJOI igrama, po osvojenim medaljama, od azijskih država apsolutno prednjači Kina. Koja je druga azijska država po istom tom kriteriju?',
      correct_answer: 'Japan',
      incorrect_answers: ['Južna Koreja', 'Indija'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'Čak četiri države sa najviše štovatelja Islama nalaze se u Aziji. Država u kojoj ih ima najviše je Indonezija. Koja je druga država sa ovog popisa?',
      correct_answer: 'Pakistan',
      incorrect_answers: ['Bangladeš', 'Saudijska Arabija'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Površinom najveća azijska država, ako se ne računa Rusiju, je Kina. Koja ju država slijedi na popisu po tom kriteriju?',
      correct_answer: 'Indija',
      incorrect_answers: ['Saudijska Arabija', 'Kazahstan'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Najpoznatiji češki industrijski gigant je Škoda. Kratko i jasno pitanje: iz kojeg grada dolazi Škoda ako se zna da je u njemu i danas smještena uprava ove kompanije?',
      correct_answer: 'Mlada Boleslav',
      incorrect_answers: ['Prag', 'Ostrava'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'Karlsbad je njemačko ime najpoznatijih čeških toplica koje spadaju u red i najpoznatijih europskih. Kako glasi pravo, češko, ime ovog grada i toplica?',
      correct_answer: 'Karlovy Vary',
      incorrect_answers: ['Češke Toplice', 'Spače Teplice'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Dana 21.7.2023. veliko nevrijeme pogodilo je poslijepodne Istru, Kvarner Slavoniju i zagrebačko područje. Nevrijeme je najjače udario Istru i Kvarner. U jednom mjestu jedna osoba je nestala. Koje je to bilo mjesto?',
      correct_answer: 'Novigrad',
      incorrect_answers: ['Rijeka', 'Pula'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Zimska sezona 2012./2013. bila je jedna od najoštrijih u povijesti mjerenja. Snijeg se tada na Zavižanu uzastopno zadržao od studenog do svibnja. Koliko je točno dana trajao taj niz snježnog pokrivača?',
      correct_answer: '164 dana',
      incorrect_answers: ['132 dana', '188 dana'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Najviši snijeg ikada u Hrvatskoj izmjeren je 21.3.2013. na Zavižanu. Koliko je tada centimetara snijega palo?',
      correct_answer: '322 cm',
      incorrect_answers: ['275 cm', '365 cm'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Navedite državu u kojoj se nalaze pokrajine Neuqen, Chubut i Catamarca. Navedite ime ove države.',
      correct_answer: 'Argentina',
      incorrect_answers: ['Brazil', 'Urugvaj'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'U kojoj se državi mogu pronaći pokrajine Crisana, Oltenia i Muntenia?',
      correct_answer: 'Rumunjska',
      incorrect_answers: ['Bugarska', 'Srbija'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'U Aziji se može naći država kojoj su sastavni dijelovi regije Sindh, Punjab i Jammu i Kashmir. Koja je to država?',
      correct_answer: 'Pakistan',
      incorrect_answers: ['Indija', 'Bangladeš'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'U ovoj državi nalaze se pokrajine Satakunta, Lapland i Pirkanmaa. O kojoj je državi riječ u ovom pitanju?',
      correct_answer: 'Finska',
      incorrect_answers: ['Norveška', 'Švedska'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'geography',
      question:
        'U jednoj latinoameričkoj državi mogu se pronaći Savezne države Tabasco, Jalisco i Sonora. O kojoj je to državi riječ?',
      correct_answer: 'Meksiko',
      incorrect_answers: ['Kolumbija', 'Argentina'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Možda i najprepoznatljivija arhitektonska atrakcija Seville je zvonik seviljske katedrale. Prije nego postane zvonik, toranj je bio minaret iz almohadskog perioda, kojeg španjolski osvajači ukrašavaju u renesansnom stilu. Pod kojim je imenom u svijetu poznat ovaj zvonik, dio UNESCOve svjetske materijalne baštine?',
      correct_answer: 'La Giralda',
      incorrect_answers: ['La Sagrada Familia', 'La Torre del Oro'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Kroz Sevilju protiče najdulja andaluzijska rijeka. Dugačka je 657. kilometara, te utječe u Atlantski ocean u Kadiškom zaljevu. Ova rijeka je glavna polazna točka za sva španjolska istraživanja i osvajanja Amerika. Kako se zove ova rijeka?',
      correct_answer: 'Guadalquivir',
      incorrect_answers: ['Ebro', 'Tajo'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question: 'Na kojem kontinentu u prirodi živi antilopa imena saiga?',
      correct_answer: 'Azija',
      incorrect_answers: ['Afrika', 'Sjeverna Amerika'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question: 'U kojoj je državi otok Luzon sastavni dio iste?',
      correct_answer: 'Filipini',
      incorrect_answers: ['Indonezija', 'Malezija'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Fužine su danas jedno od najpopularnijih turističkih odredišta u Gorskom Kotaru. Smjestile su se na obali akomulacijskog jezera u sustavu hidroelektrane Vinodol. Kako je ime tog jezera?',
      correct_answer: 'Bajer',
      incorrect_answers: ['Lokvarsko', 'Riječko'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Dva najstarija europska sveučilišta koja u kontinuitetu rade od osnutka, smještena su u Italiju i Englesku. Prvo je osnovano 1088. a drugo samo šest godina kasnije. U kojim su gradovima smještene ove institucije?',
      correct_answer: 'Bologna i Oxford',
      incorrect_answers: ['Firenca i Cambridge', 'Milano i London'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Libanon definitivno nije imao sreće sa susjedima. Što se tiče kopnenih granica samo su dva, ali se ne zna koji je nezgodniji. Sa koje to dvije države graniči ova bliskoistočna zemlja',
      correct_answer: 'Izrael i Sirija',
      incorrect_answers: ['Izrael i Jordan', 'Jordan i Sirija'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'geography',
      question:
        'Najstarija sefardska sinagoga na svijetu koja još radi, te druga najstarija sinagoga u Europi uopće, smjestila se u jednom hrvatskom gradu. Kojem?',
      correct_answer: 'Dubrovnik',
      incorrect_answers: ['Zagreb', 'Split'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Napulj se smjestio ispod Vezuva, na obali Tirenskoga mora. Administrativno je središte i glavni grad jedne talijanske regije. Koje?',
      correct_answer: 'Campania',
      incorrect_answers: ['Lazio', 'Sicilija'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Veliki Pažut je zaštićeni lokalitet i to kao posebni zoološki rezervat. Na njegovu području jedna rijeka utječe u Dravu. Kako se ta rijeka zove ako se zna da je ime dobila po njemačkoj riječi za bujicu?',
      correct_answer: 'Mura',
      incorrect_answers: ['Drava', 'Sava'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question:
        'Najpoznatiji rudar u Hrvatskoj je nogometni klub istog imena koji se trenutno natječe u Četvrtoj ligi zapad. Iz kojeg grada dolazi ovaj klub ako se zna da se u istom gradu uz rudnik razvija i projekt imena Podzemni grad?',
      correct_answer: 'Labin',
      incorrect_answers: ['Rijeka', 'Pula'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'geography',
      question: 'Koja rijeka nastaje spajanjem rijeka Maranon i Ucayalli?',
      correct_answer: 'Amazona',
      incorrect_answers: ['Orinoko', 'Tocantins'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Si je ime parfema koji već godinama na tržište sa enormnim uspjehom izbacuje jedna velika modna kompanija. Kako joj je ime?',
      correct_answer: 'Giorgio Armani',
      incorrect_answers: ['Calvin Klein', 'Chanel'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'Jedan naš otok je imao velikih problema sa zmijama otrovnicama zbog čega su na otok uveženi mungosi. Naravno, oni su riješili problem sa zmijama, a nakon toga i sa miševima, štakorima i svime što puže i trči. Koji je to otok iz ove poučne priče?',
      correct_answer: 'Mljet',
      incorrect_answers: ['Hvar', 'Brač'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'Falafel je poznata delicija sa Bliskog istoka. Porijeklo ovog vegetarijanskog specijaliteta seže daleko u prošlost. Danas ga se u Izraelu smatra nacionalnim jelom, no oduvijek se jeo na cijelom Bliskom istoku. Osim u Izraelu, jelo je vrlo popularno i u Libanonu, a zadnjih godina je sve popularnije i na Zapadu. Koja je mahunarka glavni sastojak falafela?',
      correct_answer: 'Leblebija',
      incorrect_answers: ['Grah', 'Smeđi grah'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Kako se zove jedna od nekoliko upaljivih masa koje su se upotrebljavale tijekom antike i srednjega vijeka, ali se naziv ponajprije odnosi na mješavinu korištenu u srednjovjekovnom Bizantu, ako se zna da se upotrebljavala kao ratno sredstvo kako bi se izazvao požar na neprijateljskim ratnim brodovima i u opsjednutim gradovima?',
      correct_answer: 'Grčka vatra',
      incorrect_answers: ['Plamen', 'Vatrena smjesa'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Jedna od trenutno najpopularnijih aviokompanija na našem planetu dolazi iz Brazila. Tvrtka je nastala prvo kao lokalna, brazilska, nudeći povoljne letove po Brazilu, a kasnije se širi i globalno. Kako se ona zove ako se zna da joj je ime i divna nijansa plave boje?',
      correct_answer: 'Azul',
      incorrect_answers: ['Air Brazil', 'Brazilian Air'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'Svaki novac ima sitno. Tako kuna ima lipe, a američki dolar cente. Koje sitne ima ruska rublja a koje pak bosanskohercegovačka konvertibilna marka?',
      correct_answer: 'Kopejke i konvertibilne feninge',
      incorrect_answers: ['Centi i feninge', 'Kopejke i centi'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Karlovy Vary su rodno mjesto jednog od najgorih alkoholnih pića ikad proizvedenih. Naime, u njima je prvi put proizveden biljni liker koji je ime dobio po ljekarniku koji ga je izumio, a kojeg je onda nastavila proizvoditi njegova obitelj. Kako glasi ime ovog pića koje je, uz pivo, absolutni sinonim za Češku u svijetu alkohola?',
      correct_answer: 'becherovka',
      incorrect_answers: ['vodka', 'absinthe'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Mia iz ovog pitanja je bivša manekenka, danas dizajnerica i voditeljica Nove TV, a gledatelji je trenutno mogu pratiti u In Magazinu ali i u sedmoj sezoni showa Supertalent u kojoj otkriva pojedinosti o atmosferi iza kulisa. Iza nje je mnoštvo različitih televizijskih projekata, a prošle godine slavila je 15. godišnjicu rada na malim ekranima. Kako se ona preziva?',
      correct_answer: 'Kovačić',
      incorrect_answers: ['Perić', 'Horvat'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Svjetski gospodarski forum je važna konferencija gdje svakog siječnja važni ljudi raspravljaju o mnogim temama. Taj svjetski gospodarski forum održava se u alpskom mjestu koje se zove kako?',
      correct_answer: 'Davos',
      incorrect_answers: ['Geneva', 'Zurich'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'U cijeloj Andaluziji, a posebno u Sevilli izuzetno je popularna tradicija posluživanja hrane uz piće. Uz svaku rundu u ovakvom tipu barova dobija se jelo, a svaki bar je razvio svoj tip slijedova jela za svaku rundu. Kako skupnim imenom Španjolci nazivaju ovakav tip „grickalica” uz piće?',
      correct_answer: 'Tapas',
      incorrect_answers: ['Nachos', 'Bruschetta'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'Koliko čovječuljaka ima svaki igrač na početku igre imena Čovječe ne ljuti se?',
      correct_answer: '4',
      incorrect_answers: ['2', '6'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Brahma je ime najpoznatijeg piva u jednoj velikoj državi. Kojoj?',
      correct_answer: 'Brazil',
      incorrect_answers: ['Njemačka', 'Češka'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'U skraćenici NAMA zadnja dva slova označavaju riječ magazin. Koju riječ označavaju prva dva slova?',
      correct_answer: 'narodni',
      incorrect_answers: ['naš', 'nacionalni'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Majmun je riječ koja se koristi kod nas a preuzeta je iz jednog drugog jezika. Kojeg?',
      correct_answer: 'Turski',
      incorrect_answers: ['Perzijski', 'Grčki'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Tikka masala je jelo koje se sastoji od pečenih mariniranih komadića mesa u začinjenom umaku. Umak je obično kremast i narančaste boje. Jelo su popularizirali kuhari iz Južne Azije koji žive u Velikoj Britaniji, a nudi se u restoranima diljem svijeta. Koje životinja donira meso za tikka masalu?',
      correct_answer: 'Pile',
      incorrect_answers: ['Svinja', 'Janje'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Google je trenutno vlasnik jednog od najprepoznatljivijih logoa na svijetu. Koje je boje prvo, a koje pak zadnje slovo u njemu?',
      correct_answer: 'Plavo i crveno',
      incorrect_answers: ['Crno i bijelo', 'Zeleno i plavo'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Saffir Simpson skala stvorena je da bi mjerila snagu jedne prirodne pojave. Koje?',
      correct_answer: 'Uragan',
      incorrect_answers: ['Potres', 'Tsunami'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Što u ruci drže i Vito i Michael Corleone u trenutcima kada umiru?',
      correct_answer: 'Naranča',
      incorrect_answers: ['Pistolj', 'Ruža'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Godine 1864. u Ženevi je osnovan Crveni križ. Glavni i odgovorni za stvaranje ove organizacije bio je Švicarac koji je zgrožen viđenim nakon bitke kod Solferina zagovarao stvaranje organizcije koja će se brinuti o ranjenima i potrebitima bez obzira na nacionalnu ili neku drugu pripadnost. Kako se zove ovaj Švicarac?',
      correct_answer: 'Henri Dunant',
      incorrect_answers: ['Albert Schweitzer', 'Louis Pasteur'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Škot John Dunlop, izumitelj pneumatske gume po zanimanju je bio što?',
      correct_answer: 'Veterinar',
      incorrect_answers: ['Inžinjer', 'Pilot'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Koje današnje superpopularno piće se u nastanku, 1893. godine, nazivalo Brad’s Drink?',
      correct_answer: 'Pepsi Cola',
      incorrect_answers: ['Coca Cola', 'Fanta'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'trivia',
      question:
        'Alfa, beta, gama, delta…. Navedite iduća dva slova grčkog alfabeta.',
      correct_answer: 'epsilon i zeta',
      incorrect_answers: ['mu i ni', 'lambda i psi'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'trivia',
      question:
        'Kojom se dvoslovnom oznakom označava izmjenična a kojom istosmjerna struja?',
      correct_answer: 'Ac i Dc',
      incorrect_answers: ['Ic i Ds', 'Ea i Ba'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'Napulj, predivni talijanski grad ima i svoju tamnu stranu. Organizirani kriminal ušao je u sve segmente gradskog života. Kako se naziva kriminalna organizacija koja operira po Napulju?',
      correct_answer: 'Camorra',
      incorrect_answers: ['Mafija', 'Yakuza'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Nakon što je morao pobjeći iz države koju je poprilično dobro diktatorirao od 1971. do 1979. godine, skrasio se u Saudijskoj Arabiji. Sumnja se da je u tom periodu ubio između 300 000 i 500 000 sunarodnjaka. U Saudijskoj Arabiji umire 2003. godine. Kako se zvao ovaj suludi afrički diktator?',
      correct_answer: 'Idi Amin Dada',
      incorrect_answers: ['Sadam Husein', 'Robert Mugabe'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'trivia',
      question:
        'Kad je CIA micala Aljendea u Čileu, nisu ni slutili kako na vlast dižu čovjeka na kojeg će se moći oslanjati od te 1973. pa sve do 1990. godine. Kako se zvao general kojeg su postavili na vlast u Čileu?',
      correct_answer: 'Augusto Pinochet',
      incorrect_answers: ['Fidel Castro', 'Hugo Chavez'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Tata i sin, nadimcima Papa Doc i Baby Doc dva su diktatora koja su vladali jedan za drugim od 1957., pa do 1986. godine. U kojoj su to državi ova dvojica palila i žarila?',
      correct_answer: 'Haiti',
      incorrect_answers: ['Kuba', 'Gvatemala'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'trivia',
      question:
        'Autor knjige “Kraj povijesti i posljednji čovjek”, u njoj je, gledajući poraze komunističkih sustava sa početka devedesetih, proglasio kraj povijesti i pobjedu liberalne demokracije. Kako se zove ovaj američki politički filozof japanskoga podrijetla?',
      correct_answer: 'Francis Fukuyama',
      incorrect_answers: ['Samuel Huntington', 'Noam Chomsky'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Da nije bilo njegova djeda i oca ne bi, ni doslovno ni politički, bilo ni Karla Velikog. On je Veliki. Koji su nadimci njegova djeda i oca ako se zna da je deda Karlo a otac Pipin?',
      correct_answer: 'Martel i Mali',
      incorrect_answers: ['Borbeni i Veliki', 'Moćni i Snažni'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Nakon raspada Austro Ugarske 1918. godine, Česi, zajedno sa Slovacima ulaze u državu imena Čehoslovačka. Prvi predsjednik iste bio je češki političar, filozof i sociolog. Kako se on zove?',
      correct_answer: 'Tomáš Garrigue Masaryk',
      incorrect_answers: ['Václav Havel', 'Alexander Dubček'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Možda i najprepoznatljivija arhitektonska atrakcija Seville je zvonik seviljske katedrale. Prije nego postane zvonik, toranj je bio minaret iz almohadskog perioda, kojeg španjolski osvajači ukrašavaju u renesansnom stilu. Pod kojim je imenom u svijetu poznat ovaj zvonik, dio UNESCOve svjetske materijalne baštine?',
      correct_answer: 'La Giralda',
      incorrect_answers: ['El Torre', 'El Minaret'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Jedna od najpoznatjih osoba rođenih u Sevilji bio je rimski car koji je vladao od 76. do 138. godine. Jedno od najvećih dostignuća ovoga cara je zid kojim je odijelio ostatak Britanije od Škotske. Kako se zvao ovaj car?',
      correct_answer: 'Hadrijan',
      incorrect_answers: ['Trajan', 'Neron'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Kontrolu Napoleonova carstva u rukama je držao sjajno razrađeni sustav policije. Daleko najzaslužniji za funkcioniranje ovog aparata bio je Napoleonov ministar policije. Kako se on zvao?',
      correct_answer: 'Joseph Fouche',
      incorrect_answers: [
        'Jean-Pierre Bachasson',
        'Charles Maurice de Talleyrand-Périgord',
      ],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Spartak, poznati pobunitelj robova porijeklom dolazi iz jedne rimske provincije. Koje?',
      correct_answer: 'Trakija',
      incorrect_answers: ['Gallia', 'Hispania'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Ovo je mjesto koje je definitivno definiralo Legiju stranaca. Naime, prilikom vojne intervencije u Meksiku, Francuska se uvelike oslanjala na Legiju. Prilikom patrole 1863., 65 legionara predvođenih kapetanom Danjouom upada u zamku te se povlači pred meksičkom vojskom u jednu hacijendu. Tamo su svi, osim trojice, izginuli. Kako se zvala ta hacijenda?',
      correct_answer: 'Camaron(e)',
      incorrect_answers: ['San Juan', 'Hidalgo'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Jedna od glavnih tvrđava iz povijesti, a u kojoj su svi branitelji izginuli bila je Masada. Prilikom Prvog judeo rimskog rata, opsjedali su ju, i konačno osvojili Rimljani 73. godine. U samoj utvrdi sklonila se ekstremna židovska sekta, koja se borila i protiv Rimljana, ali je bila u sukobu i sa većinskom ustaničkom skupinom koju se nazivalo Zeloti. Kako se, po bodežima kojima se koristila, nazivala ova skupina koja je branila Masadu?',
      correct_answer: 'Sicarii',
      incorrect_answers: ['Hassidim', 'Karaite'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Ova hrvatska utvrda ulazi u priču o tvrđavama bez predavanja. Kako se zove ova utvrda, osvojena 1578. od strane Turaka, gdje su se svi branitelji navodno smrznuli?',
      correct_answer: 'Gvozdansko',
      incorrect_answers: ['Ozalj', 'Slunj'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Alamo je još jedna od utvrda koja se nije predavala do kraja. S jedne strane su Teksašani koji se bore za neovisnost, dok je sa druge strane regularna meksička vojska. Kako se zvao general i predsjednik koji je vodio Meksikance kod Alama?',
      correct_answer: 'Antonio Lopez de Santa Anna',
      incorrect_answers: ['Benito Juarez', 'Porfirio Díaz'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'history',
      question:
        'U opsadi Sigeta 1566. godine pogiba Nikola Šubić Zrinski i uglavnom svi branitelji. Ipak, Turci su nakon osvajanja utvrde odustali od daljnjeg prodora prema Beču. Glavni razlog je smrt sultana tijekom opsade. Kako se zvao taj turski sultan?',
      correct_answer: 'Sulejman I Veličanstveni',
      incorrect_answers: ['Murat III', 'Selim II'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'history',
      question:
        'Napuljsko kraljevstvo država je koja je obuhvaćala jug Italije od srednjeg vijeka pa sve do 1816. godine, kada se sa Sicilijom ponovno vraća u Kraljevstvo Dviju Sicilija. I u Napuljskom kraljevstvu na kraju, i u Kraljevstvu Dviju Sicilija na vlasti je bila jedna vladarska obitelj. Kako se zvala?',
      correct_answer: 'Burboni',
      incorrect_answers: ['Habsburgovci', 'Mediciji'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'U Paragvaju je na vlasti bio diktator njemačkog porijekla od 1954. pa sve do 1989. godine. Ovaj rigidni antikomunist umire u Brazilu, nakon što je svrgnut sa vlasti. Kako se on zvao?',
      correct_answer: 'Alfredo Stroessner',
      incorrect_answers: ['Augusto Pinochet', 'Fulgencio Batista'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'U kojoj je povijensoj noći ubijen francuski admiral Gaspard de Coligny?',
      correct_answer: 'Bartolomejskoj noći',
      incorrect_answers: ['Noći dugih noževa', 'Napoleonova noć'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        '1202. godine Zadar doživljava jednu od najvećih katastrofa u svojoj povijesti. Naime, Mlečani, koriste veliku križarsku vojsku, kojoj put prema Svetoj zemlji naplaćuju osvajanjem i razaranjem Zadra. Poznato je da će ta vojska stići samo do Konstantinopola, gdje će ponoviti istu stvar kao sa Zadrom dvije godine ranije. Koji je mletački dužd osmislio ova razaranja?',
      correct_answer: 'Enrico Dandolo',
      incorrect_answers: ['Marco Polo', 'Giorgio Cornaro'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'U gradu Zadru nalazi se najbolji primjer predromaničke arhitekture u Hrvatskoj. Riječ je o crkvi iz 9. stoljeća koja je izvorno bila posvećena Svetom trojstvu. Tek kasnije, u 15. stoljeću, ovaj spomenik kulture počinje se nazivati po vjerojatnom graditelju, zadarskom biskupu. Kako se danas zove ova crkva?',
      correct_answer: 'Crkva svetog Donata',
      incorrect_answers: ['Katedrala svetog Stjepana', 'Crkva svetog Krševana'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Bik Koji Sjedi ubijen je 1890. godine. Nekoliko dana nakon toga američka će vojska počiniti jedan od najvećih masakara nad Indijancima. Kako se zove mjesto gdje se 29. 12. desilo krvoproliće u kojem je bar 200 Sijuksa, uglavnom žena i djece, pobijeno?',
      correct_answer: 'Ranjeno Koljeno',
      incorrect_answers: ['Crveni Butte', 'Zatvoreni Grijeh'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'history',
      question:
        'Prilikom bitke kod Little Big Horna, Oglala Lakote predvodi jedan od najvećih indijanskih ratnika ikad. Ovaj ratni vođa, pravim imenom Tašunka Witko, bio je ludo neustrašiv, i zbog toga cijenjen i među drugim plemenima. Kako je ime Witku, prevedeno na bijelački?',
      correct_answer: 'Ludi Konj',
      incorrect_answers: ['Brza Noga', 'Divlji Mustang'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        "Za vrijeme kojeg sultana se odvija radnja romana Orhana Pamuka 'Zovem se crvena'?",
      correct_answer: 'Murat III.',
      incorrect_answers: ['Sulejman I Veličanstveni', 'Osman II.'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'local',
      question:
        'Crna Gora je postala neovisna 2006. godine. Iste godine su umjesto dinara uveli novu valutu. Kako se ona zove?',
      correct_answer: 'euro',
      incorrect_answers: ['kuna', 'dinar'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'U spartanskoj državi postojao je rigorozni režim obrazovanja i treninga obavezan za sve muške stanovnike Sparte, osim za prvorođene sinove iz vladajućih porodica Euripontida i Agiada. Trening je uključivao vojne vježbe (npr. tolerancija na bol), lov, plesanje, pjevanje i društvene nauke. Kako se zvao ovaj sustav obrazovanja?',
      correct_answer: 'Agoga',
      incorrect_answers: ['Gymnasia', 'Paideia'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Rusko carstvo je 1825. godine bilo suočeno sa pobunom koja je od apsolutističkog carstva htjela stvoriti ustavnu monarhiju, ili čak republiku. Jezgro pobune bili su ruski vojni časnici pod utjecajem Francuske revolucije. Kako su se nazivali ovi pobunjenici čiji je pokušaj ugušen u krvi?',
      correct_answer: 'Dekabristi',
      incorrect_answers: ['Boljševici', 'Narodnjaci'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        "Uz mnoge druge stvari širom Europe, jednu osobu se 'krivi' da je prihvatio i promovirao izgled talijanske zastave kakvu danas poznajemo. O kome je to riječ?",
      correct_answer: 'Napoleon Buonaparte',
      incorrect_answers: ['Giuseppe Garibaldi', 'Victor Emmanuel II'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'history',
      question:
        'Nevjerojatan je podatak da je nacistička Njemačka, država koja je uvukla u rat cijeli svijet, službeno objavila rat samo jednoj državi. Kojoj?',
      correct_answer: 'Sjedinjenim državama',
      incorrect_answers: ['Sovjetskom Savezu', 'Poljskoj'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'history',
      question:
        'Johannes Gutenberg njemački tiskar i izumitelj tipografije u Europi, 1455. dovršava svoj prvi tipografski rad. Koju je to knjigu tiskao Gutenberg, te kako se nazivaju sve knjige tiskane prije 1500.?',
      correct_answer: 'Biblija i inkunabule',
      incorrect_answers: ['Dekameron i kodiksi', 'Divina commedia i pergameni'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'history',
      question:
        'Godine 1288. na glagoljici je napisan popis običajnih prava kojeg se smatra najstarijim cjelovitim zapisom običajnog prava. Pod kojim imenom je u pravu i povijesti poznat ovaj zakonik?',
      correct_answer: 'Vinodolski zakonik',
      incorrect_answers: [
        'Zakonik Alviseja Tiepolovog',
        'Zakonik Stjepana II Kotromanića',
      ],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'history',
      question:
        'Ovo pravo je sastavni dio islamske vjere i sastoji se iz niza vjerskih muslimanskih propisa, čije izvore treba tražiti u muslimanskoj svetoj knjizi Kuranu. Kako nazivamo ovo pravo?',
      correct_answer: 'Šerijatsko pravo',
      incorrect_answers: ['Halal pravo', 'Džihad pravo'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'history',
      question:
        'Tijekom 16. stoljeća u Indiji je na vlast došla nova vladajuća dinastija Mogula donijevši sa sobom bogatu islamsku civilizaciju i po prvi put ujedinila ovaj potkontinent nakon 1500 godina. Što su po narodnosti bili ti Moguli?',
      correct_answer: 'Mongoli',
      incorrect_answers: ['Arapi', 'Perzijanci'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'history',
      question:
        'Bruno Bušić je hrvatski disident, novinar i književnik ubijen 1978. godine. U kojem se europskom glavnom gradu dogodila egzekucija ovog lika iz našeg pitanja?',
      correct_answer: 'Pariz',
      incorrect_answers: ['London', 'Berlin'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Majka Isusa Krista zvala se Marija, a kako majka Ivana Krstitelja?',
      correct_answer: 'Elizabeta',
      incorrect_answers: ['Ana', 'Jakov'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Za vrijeme kojeg je habsburškog cara donesena Listopadska diploma?',
      correct_answer: 'Franje Josipa I.',
      incorrect_answers: ['Ferdinanda I.', 'Marije Terezije'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Kad su perzijski izaslanici u ime Darija I došli u grčke polise zahtjevali su dvije stvari od njih, kako bi davanjem istih simbolički prihvatili perzijsku vlast. Atenjani su izaslanike ubili dok su ih Spartanci bacili u bunar. Koje to dvije stvari traži od Grka Darije I?',
      correct_answer: 'zemlju i vodu',
      incorrect_answers: ['zlato i robu', 'podanike i porez'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Jedna od najpoznatijih osoba iz Hrvatskog Zagorja nesumnjivo je Ljudevit Gaj. Bez obzira na niz kontraverzi koje ga prate, hrvatsku povijest i kulturu obilježio je svojim prvim izdanim djelom koje se smatra prvim pravim pokušajem stvaranja hrvatskog pravopisa. Kako se zove ovaj pravopis?',
      correct_answer: 'Kratka osnova horvatsko-slavenskog pravopisanja',
      incorrect_answers: [
        'Ortografički priručnik',
        'Gramatika hrvatskoga ili srpskoga jezika po govoru narodnoga',
      ],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Opće je poznato da je uz Krapinu nađeno jedno od najvećih nalazišta vezanih za neandertalce u Europi. I svi znaju da je glavni za pronalazak ovog lokaliteta bio Dragutin Gorjanović Kramberger. Kako je ime ovoga lokaliteta?',
      correct_answer: 'Hušnjakovo brdo',
      incorrect_answers: ['Vindija', 'Lisičina'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'history',
      question:
        'Koji epigrafski spomenik s otoka Cresa svjedoči o hrvatskoj dvopismenosti i dvojezičnosti te sadrži imena jedne obitelji – baku Tehu, sina Bratohnu i unuka Junu?',
      correct_answer: 'Valunska ploča',
      incorrect_answers: ['Oporovečka ploča', 'Glagoljska ploča'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'science',
      question:
        'Kako se u kemiji naziva smjesa aluminijskoga praha i željeznoga(III) oksida, Fe2O3, koji kad se zapali, započinje vrlo egzotermnu kemijsku reakciju uz oslobađanje temperature više od 2000 °C, ako se zna da se primjenjuje za zavarivanje metala i u aluminotermiji?',
      correct_answer: 'termit',
      incorrect_answers: ['amfetamini', 'argon'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'science',
      question:
        'Kako se nazivaju objekti od međuzvjezdanog materijala koji ne izgore do kraja u prolasku kroz atmosferu, te potom udaraju o površinu Zemlje ili nekog drugog nebeskog tijela?',
      correct_answer: 'Meteoriti',
      incorrect_answers: ['bakteriofagi', 'Kokice'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'science',
      question:
        'U procesu čije se ime traži u ovom pitanju dolazi do diobe stanične jezgre. Njime se nasljedna tvar raspodjeljuje na dvije jezgre-kćeri, od kojih svaka dobija jednak broj kromosoma i sve gene koje je imala i majčinska stanica. U širem smislu, uz staničnu diobu obuhvaća i citokinezu ili diobu citoplazme. Kako zovemo ovaj proces?',
      correct_answer: 'Mitoza',
      incorrect_answers: ['partenogeneza', 'sublimacija'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'science',
      question:
        'U skupinu zemnoalkalijskih metala spada šest elemenata. Četiri od njh su berilij, radij, barij i stroncij. Kako se zovu preostala dva?',
      correct_answer: 'magnezij i kalcij',
      incorrect_answers: ['vodik i kisik', 'brom i bakar'],
    },
  ];
  shuffledQuestions = this.shuffleQuestions(this.questions);
  constructor() {}
  getQuestions() {
    const returned = this.shuffledQuestions;
    return returned;
  }

  shuffleQuestions(questionsArray: any) {
    const shuffledQuestions = [...questionsArray];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [
        shuffledQuestions[j],
        shuffledQuestions[i],
      ];
    }
    return shuffledQuestions;
  }
}
