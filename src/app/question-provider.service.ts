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
      difficulty: 'medium',
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
      difficulty: 'medium',
      category: 'history',
      question:
        'Solidarnost je sindikalni pokret koji se pojavio u Poljskoj 1980. godine. Mjesto nastanka istog je brodogradilište Lenjin u jednom poljskom gradu. Kojem točno?',
      correct_answer: 'Gdanjsk',
      incorrect_answers: ['Varšava', 'Krakov'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
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
      difficulty: 'medium',
      category: 'local',
      question:
        'U studenom 2022. u okružju Apatina pojavilo se više viđanja jedne opasne životinje. O kojoj životinji je riječ?',
      correct_answer: 'Pantera',
      incorrect_answers: ['Lav', 'Tigar'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'local',
      question:
        'Cedevita u svom asortimanu ima čitav niz okusa koje se reklamiraju prigodnim bojama za svaki okus. Koji okus ima zelena cedevita?',
      correct_answer: 'Limeta',
      incorrect_answers: ['Naranča', 'Jagoda'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'local',
      question:
        'Lakše se diše je kultna rečenica iz reklame za Bronhi bombone. Izgovara ju veliki zagrebački glumac Mladen Crnobrnja. Kako glasi njegov nadimak?',
      correct_answer: 'Gumbek',
      incorrect_answers: ['Smiješko', 'Kocka'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
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
      difficulty: 'medium',
      category: 'history',
      question:
        'PT 109 je bio torpedni čamac američke vojske koji je potopljen 1942. godine od strane Japanaca. Bio bi samo jedan od mnogih da mu posljednji kapetan nije globalno poznata osoba. Kako se on zvao?',
      correct_answer: 'JFK',
      incorrect_answers: ['FDR', 'LBJ'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'history',
      question:
        'Vladimir Putin je svoju KGB karijeru proveo uglavnom u bivšem DDRu. Nakon toga se vraća u Rusiju gdje kreće njegov streloviti politički uspon. U kojem ruskom gradu počinje njegov politički život?',
      correct_answer: 'St. Peterburg',
      incorrect_answers: ['Moskva', 'Kijev'],
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
      difficulty: 'medium',
      category: 'local',
      question:
        'Koje je godine samoborska kremšnita postala zaštićeno nematerijalno kulturno dobro?',
      correct_answer: '2021',
      incorrect_answers: ['2019', '2023'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'history',
      question: 'Koje godine se počeo proizvoditi legendarni Commodore 64?',
      correct_answer: '1982.',
      incorrect_answers: ['1978.', '1985.'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
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
      difficulty: 'medium',
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
      difficulty: 'medium',
      category: 'local',
      question: 'Gdje su rođeni Zdravko i Zoran Mamić?',
      correct_answer: 'Bjelovar',
      incorrect_answers: ['Tovarnik', 'Petrovci'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
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
      difficulty: 'easy',
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
      difficulty: 'easy',
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
      difficulty: 'easy',
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
      difficulty: 'medium',
      category: 'history',
      question: 'Tko se smatra čovjekom koji je izumio telefon?',
      correct_answer: 'Alexander Graham Bell',
      incorrect_answers: ['Thomas Edison', 'Nikola Tesla'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'science',
      question:
        'Ovaj planet najbrže rotira, dovrši jednu rotaciju za samo 10 sati. Koji je to planet?',
      correct_answer: 'Jupiter',
      incorrect_answers: ['Mars', 'Saturn'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'science',
      question: 'Koliko zubi ima odrasla osoba?',
      correct_answer: '32',
      incorrect_answers: ['28', '36'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'history',
      question:
        'Ova životinja bila je prva ikada lansirana u svemir. Bio je priključen na sovjetsku svemirsku letjelicu Sputnik 2, koja je poslana u svemir 3. studenog 1957. Kako se zvao?',
      correct_answer: 'Lajka',
      incorrect_answers: ['Zeus', 'Fido'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'history',
      question: 'Tko je bila prva žena u svemiru?',
      correct_answer: 'Valentina Tereškova',
      incorrect_answers: ['Sally Ride', 'Mae Jemison'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'science',
      question: 'Gdje na ljudskom tijelu ima najviše žlijezda znojnica?',
      correct_answer: 'Donji dio stopala',
      incorrect_answers: ['Dlanovi', 'Lice'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'science',
      question:
        'Otprilike koliko dugo sunčevoj svjetlosti treba da stigne do Zemlje?',
      correct_answer: '8 minuta',
      incorrect_answers: ['8 sati', '8 dana'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'science',
      question: 'Koliko kostiju ima ljudsko tijelo?',
      correct_answer: '206',
      incorrect_answers: ['203', '209'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'science',
      question: 'Kako se zove proces razgradnje hrane?',
      correct_answer: 'Digestija',
      incorrect_answers: ['Respiracija', 'Fotosinteza'],
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
