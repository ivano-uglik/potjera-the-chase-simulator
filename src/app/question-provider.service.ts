import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionProviderService {
  questions = [
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Kako se zove najmanji konj na svijetu?',
      correct_answer: 'Falabella',
      incorrect_answers: ['Shetland pony', 'Minijaturni konj'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question:
        'Što se navodno smatra stvaranjem benediktinskog svećenika Dom Pierre Pérignona?',
      correct_answer: 'Champagne',
      incorrect_answers: ['Paradajz kečap', 'Francuske pržene krumpiriće'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Koja zemlja pije najviše kave po osobi?',
      correct_answer: 'Finska',
      incorrect_answers: ['Italija', 'Kolumbija'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Kako se kolektivno naziva skup jednoroga?',
      correct_answer: 'Blessing',
      incorrect_answers: ['Sparkle', 'Spell'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Koja je najčešća boja toaletnog papira u Francuskoj?',
      correct_answer: 'Pink',
      incorrect_answers: ['Bijela', 'Plava'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Koliko godina ima najstariji komad žvakaće gume na svijetu?',
      correct_answer: '5,700',
      incorrect_answers: ['100', '2,500'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Koliko puta dnevno prosječni Amerikanac otvori svoj hladnjak?',
      correct_answer: '33',
      incorrect_answers: ['5', '22'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Koje je boje poznata crna kutija aviona?',
      correct_answer: 'Orange',
      incorrect_answers: ['Crvena', 'Crna'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Koliko repova ima Manx mačka?',
      correct_answer: 'None',
      incorrect_answers: ['One', 'Two'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Na brodu, što je suprotno od luke?',
      correct_answer: 'Starboard',
      incorrect_answers: ['Bow', 'Paluba'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Tko je izumio bikini?',
      correct_answer: 'Louis Reard',
      incorrect_answers: ['Louis Vuitton', 'Coco Chanel'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Koliko je epizoda South Parka bilo do srpnja 2023. godine?',
      correct_answer: '325',
      incorrect_answers: ['250', '300'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'U kojem desetljeću je rođena Madonna?',
      correct_answer: '1950-e',
      incorrect_answers: ['1960-e', '1970-e'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: "Na kojem jeziku je fraza 'Hakuna Matata'?",
      correct_answer: 'Swahili',
      incorrect_answers: ['Nizozemski', 'Yoruba'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: "Koje je značenje 'Hakuna Matata'?",
      correct_answer: 'No worries',
      incorrect_answers: ['Laku noć', 'Hvala'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Koje je prezime kralja Charlesa III?',
      correct_answer: 'Mountbatten-Windsor',
      incorrect_answers: ['Arthur', 'Wales'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Kako se zove dvoboj s troje sudionika?',
      correct_answer: 'Truel',
      incorrect_answers: ['Triage', 'Tryst'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Koliko zvijezda ima zastava Sjedinjenih Američkih Država?',
      correct_answer: '50',
      incorrect_answers: ['51', '52'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Tehnologija',
      question: 'U kojoj je godini osnovan Slido?',
      correct_answer: '2012',
      incorrect_answers: ['2016', '2020'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Tehnologija',
      question: 'Kome se pripisuje izum World Wide Weba?',
      correct_answer: 'Tim Berners-Lee',
      incorrect_answers: ['Steve Jobs', 'Bill Gates'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Tehnologija',
      question: 'Koji je najveći društvena mreža na svijetu?',
      correct_answer: 'Facebook',
      incorrect_answers: ['Twitter', 'Instagram'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Tehnologija',
      question: 'Tko se smatra osnivačem moderne računalne znanosti?',
      correct_answer: 'Alan Turing',
      incorrect_answers: ['Steve Jobs', 'Bill Gates'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Tehnologija',
      question: 'Za što je poznata web stranica Info.cern.ch?',
      correct_answer: 'Biti prva web stranica na svijetu',
      incorrect_answers: [
        'Biti preteča Wikipedije',
        'Biti prvi internetski pretraživač',
      ],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Tehnologija',
      question: 'U kojoj je godini prvi put izdan iPhone?',
      correct_answer: '2007',
      incorrect_answers: ['2009', '2010'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Životinje',
      question: 'Morski psi su sisavci.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Općenito znanje',
      question: 'Koji je glavni sastojak Bombay Ducka?',
      correct_answer: 'Fish',
      incorrect_answers: ['Duck', 'Chicken'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Geografija',
      question: 'New York City se sastoji od između 36 i 42 otoka.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Ljudsko tijelo',
      question: 'Ljudsko tijelo ima četiri pluća.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Tehnologija',
      question: 'Koji je bio prvi prijenosni računar?',
      correct_answer: 'Osborne 1',
      incorrect_answers: ['Apple Macintosh', 'IBM PC'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Disney',
      question: 'Aladdinov lik temelji se na Bradu Pittu.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Cheesecake potječe iz Italije.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Pepperoni je najpopularniji nadjev za pizzu u SAD-u.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Cheesecake dolazi iz Italije.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Ananas raste na drveću.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Znanost',
      question:
        'Krumpir je bio prvo povrće koje je posađeno u svemirskom brodu.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Havajska pizza potječe iz Kanade.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Pomfrit potječe iz Francuske.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Pizza nije bila prva hrana koju su astronauti jeli u svemiru.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Cezar salata potječe iz Italije.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Kukuruz ima paran broj redova.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Imena maskota za Rice Krispies su Snap, Crackle, & Pop.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question: 'Vanilija je najskuplji začin na svijetu.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Hrana',
      question:
        'McDonalds ima najviše restorana po lokaciji u Sjedinjenim Američkim Državama.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
  ];
  constructor() {}
  getQuestions() {
    let shuffledQuestions = this.shuffleQuestions(this.questions);
    console.log(shuffledQuestions);
    return shuffledQuestions;
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
