import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de datos...');

  // Limpiar datos existentes
  console.log('🧹 Limpiando datos existentes...');
  await prisma.quizz.deleteMany();
  await prisma.aeronauticalAlphabetCard.deleteMany();
  console.log('✅ Datos limpiados');

  // Seed de tarjetas del alfabeto aeronáutico
  const baseUrl = 'https://backend-phonexa.onrender.com';

  const aeronauticalAlphabetCards = [
    {
      text: 'Alpha',
      pronunciation: 'Al-fa',
      imageUrl: `${baseUrl}/icons/alpha.svg`,
      audioUrl: `${baseUrl}/sounds/alpha.mp3`,
    },
    {
      text: 'Bravo',
      pronunciation: 'Bra-vo',
      imageUrl: `${baseUrl}/icons/bravo.svg`,
      audioUrl: `${baseUrl}/sounds/bravo.mp3`,
    },
    {
      text: 'Charlie',
      pronunciation: 'Char-li',
      imageUrl: `${baseUrl}/icons/charlie.svg`,
      audioUrl: `${baseUrl}/sounds/charlie.mp3`,
    },
    {
      text: 'Delta',
      pronunciation: 'Del-ta',
      imageUrl: `${baseUrl}/icons/delta.svg`,
      audioUrl: `${baseUrl}/sounds/delta.mp3`,
    },
    {
      text: 'Echo',
      pronunciation: 'Ek-o',
      imageUrl: `${baseUrl}/icons/echo.svg`,
      audioUrl: `${baseUrl}/sounds/echo.mp3`,
    },
    {
      text: 'Foxtrot',
      pronunciation: 'Foks-trot',
      imageUrl: `${baseUrl}/icons/foxtrot.svg`,
      audioUrl: `${baseUrl}/sounds/foxtrot.mp3`,
    },
    {
      text: 'Golf',
      pronunciation: 'Golf',
      imageUrl: `${baseUrl}/icons/golf.svg`,
      audioUrl: `${baseUrl}/sounds/golf.mp3`,
    },
    {
      text: 'Hotel',
      pronunciation: 'Ho-tel',
      imageUrl: `${baseUrl}/icons/hotel.svg`,
      audioUrl: `${baseUrl}/sounds/hotel.mp3`,
    },
    {
      text: 'India',
      pronunciation: 'In-di-a',
      imageUrl: `${baseUrl}/icons/india.svg`,
      audioUrl: `${baseUrl}/sounds/india.mp3`,
    },
    {
      text: 'Juliet',
      pronunciation: 'Dzu-li-et',
      imageUrl: `${baseUrl}/icons/juliet.svg`,
      audioUrl: `${baseUrl}/sounds/juliet.mp3`,
    },
    {
      text: 'Kilo',
      pronunciation: 'Ki-lo',
      imageUrl: `${baseUrl}/icons/kilo.svg`,
      audioUrl: `${baseUrl}/sounds/kilo.mp3`,
    },
    {
      text: 'Lima',
      pronunciation: 'Li-ma',
      imageUrl: `${baseUrl}/icons/lima.svg`,
      audioUrl: `${baseUrl}/sounds/lima.mp3`,
    },
    {
      text: 'Mike',
      pronunciation: 'Mai-k',
      imageUrl: `${baseUrl}/icons/mike.svg`,
      audioUrl: `${baseUrl}/sounds/mike.mp3`,
    },
    {
      text: 'November',
      pronunciation: 'No-vem-ber',
      imageUrl: `${baseUrl}/icons/november.svg`,
      audioUrl: `${baseUrl}/sounds/november.mp3`,
    },
    {
      text: 'Oscar',
      pronunciation: 'Os-kar',
      imageUrl: `${baseUrl}/icons/oscar.svg`,
      audioUrl: `${baseUrl}/sounds/oscar.mp3`,
    },
    {
      text: 'Papa',
      pronunciation: 'Pa-pa',
      imageUrl: `${baseUrl}/icons/papa.svg`,
      audioUrl: `${baseUrl}/sounds/papa.mp3`,
    },
    {
      text: 'Quebec',
      pronunciation: 'Ke-bek',
      imageUrl: `${baseUrl}/icons/quebec.svg`,
      audioUrl: `${baseUrl}/sounds/quebec.mp3`,
    },
    {
      text: 'Romeo',
      pronunciation: 'Ro-mi-o',
      imageUrl: `${baseUrl}/icons/romeo.svg`,
      audioUrl: `${baseUrl}/sounds/romeo.mp3`,
    },
    {
      text: 'Sierra',
      pronunciation: 'Si-er-ra',
      imageUrl: `${baseUrl}/icons/sierra.svg`,
      audioUrl: `${baseUrl}/sounds/sierra.mp3`,
    },
    {
      text: 'Tango',
      pronunciation: 'Tang-go',
      imageUrl: `${baseUrl}/icons/tango.svg`,
      audioUrl: `${baseUrl}/sounds/tango.mp3`,
    },
    {
      text: 'Uniform',
      pronunciation: 'Yu-ni-form',
      imageUrl: `${baseUrl}/icons/uniform.svg`,
      audioUrl: `${baseUrl}/sounds/uniform.mp3`,
    },
    {
      text: 'Victor',
      pronunciation: 'Vik-tor',
      imageUrl: `${baseUrl}/icons/victor.svg`,
      audioUrl: `${baseUrl}/sounds/victor.mp3`,
    },
    {
      text: 'Whiskey',
      pronunciation: 'Wis-ki',
      imageUrl: `${baseUrl}/icons/whiskey.svg`,
      audioUrl: `${baseUrl}/sounds/whiskey.mp3`,
    },
    {
      text: 'X-ray',
      pronunciation: 'Eks-rei',
      imageUrl: `${baseUrl}/icons/xray.svg`,
      audioUrl: `${baseUrl}/sounds/xray.mp3`,
    },
    {
      text: 'Yankee',
      pronunciation: 'Yang-ki',
      imageUrl: `${baseUrl}/icons/yankee.svg`,
      audioUrl: `${baseUrl}/sounds/yankee.mp3`,
    },
    {
      text: 'Zulu',
      pronunciation: 'Zu-lu',
      imageUrl: `${baseUrl}/icons/zulu.svg`,
      audioUrl: `${baseUrl}/sounds/zulu.mp3`,
    },
  ];

  console.log('🪶 Creando tarjetas del alfabeto aeronáutico...');
  for (const card of aeronauticalAlphabetCards) {
    const existingCard = await prisma.aeronauticalAlphabetCard.findFirst({
      where: { text: card.text },
    });
    if (!existingCard) {
      await prisma.aeronauticalAlphabetCard.create({ data: card });
    }
  }
  console.log('✅ Tarjetas creadas');

  const memoryQuiz = [
    {
      id: 1,
      answer: 'a',
      imgUnoUrl: `${baseUrl}/img/alpha/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/alpha/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/alpha/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/alpha/cuatro.jpg`,
    },
    {
      id: 2,
      answer: 'b',
      imgUnoUrl: `${baseUrl}/img/bravo/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/bravo/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/bravo/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/bravo/cuatro.jpg`,
    },
    {
      id: 3,
      answer: 'c',
      imgUnoUrl: `${baseUrl}/img/charlie/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/charlie/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/charlie/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/charlie/cuatro.jpg`,
    },
    {
      id: 4,
      answer: 'd',
      imgUnoUrl: `${baseUrl}/img/delta/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/delta/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/delta/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/delta/cuatro.jpg`,
    },
    {
      id: 5,
      answer: 'e',
      imgUnoUrl: `${baseUrl}/img/echo/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/echo/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/echo/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/echo/cuatro.jpg`,
    },
    {
      id: 6,
      answer: 'f',
      imgUnoUrl: `${baseUrl}/img/foxtrot/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/foxtrot/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/foxtrot/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/foxtrot/cuatro.jpg`,
    },
    {
      id: 7,
      answer: 'g',
      imgUnoUrl: `${baseUrl}/img/golf/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/golf/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/golf/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/golf/cuatro.jpg`,
    },
    {
      id: 8,
      answer: 'h',
      imgUnoUrl: `${baseUrl}/img/hotel/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/hotel/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/hotel/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/hotel/cuatro.jpg`,
    },
    {
      id: 9,
      answer: 'i',
      imgUnoUrl: `${baseUrl}/img/india/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/india/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/india/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/india/cuatro.jpg`,
    },
    {
      id: 10,
      answer: 'j',
      imgUnoUrl: `${baseUrl}/img/juliet/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/juliet/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/juliet/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/juliet/cuatro.jpg`,
    },
    {
      id: 11,
      answer: 'k',
      imgUnoUrl: `${baseUrl}/img/kilo/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/kilo/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/kilo/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/kilo/cuatro.jpg`,
    },
    {
      id: 12,
      answer: 'l',
      imgUnoUrl: `${baseUrl}/img/lima/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/lima/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/lima/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/lima/cuatro.jpg`,
    },
    {
      id: 13,
      answer: 'm',
      imgUnoUrl: `${baseUrl}/img/mike/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/mike/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/mike/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/mike/cuatro.jpg`,
    },
    {
      id: 14,
      answer: 'n',
      imgUnoUrl: `${baseUrl}/img/november/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/november/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/november/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/november/cuatro.jpg`,
    },
    {
      id: 15,
      answer: 'o',
      imgUnoUrl: `${baseUrl}/img/oscar/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/oscar/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/oscar/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/oscar/cuatro.jpg`,
    },
    {
      id: 16,
      answer: 'p',
      imgUnoUrl: `${baseUrl}/img/papa/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/papa/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/papa/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/papa/cuatro.jpg`,
    },
    {
      id: 17,
      answer: 'q',
      imgUnoUrl: `${baseUrl}/img/quebec/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/quebec/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/quebec/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/quebec/cuatro.jpg`,
    },
    {
      id: 18,
      answer: 'r',
      imgUnoUrl: `${baseUrl}/img/romeo/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/romeo/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/romeo/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/romeo/cuatro.jpg`,
    },
    {
      id: 19,
      answer: 's',
      imgUnoUrl: `${baseUrl}/img/sierra/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/sierra/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/sierra/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/sierra/cuatro.jpg`,
    },
    {
      id: 20,
      answer: 't',
      imgUnoUrl: `${baseUrl}/img/tango/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/tango/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/tango/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/tango/cuatro.jpg`,
    },
    {
      id: 21,
      answer: 'u',
      imgUnoUrl: `${baseUrl}/img/uniform/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/uniform/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/uniform/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/uniform/cuatro.jpg`,
    },
    {
      id: 22,
      answer: 'v',
      imgUnoUrl: `${baseUrl}/img/victor/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/victor/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/victor/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/victor/cuatro.jpg`,
    },
    {
      id: 23,
      answer: 'w',
      imgUnoUrl: `${baseUrl}/img/whiskey/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/whiskey/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/whiskey/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/whiskey/cuatro.jpg`,
    },
    {
      id: 24,
      answer: 'x',
      imgUnoUrl: `${baseUrl}/img/xray/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/xray/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/xray/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/xray/cuatro.jpg`,
    },
    {
      id: 25,
      answer: 'y',
      imgUnoUrl: `${baseUrl}/img/yankee/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/yankee/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/yankee/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/yankee/cuatro.jpg`,
    },
    {
      id: 26,
      answer: 'z',
      imgUnoUrl: `${baseUrl}/img/zulu/uno.jpg`,
      imgDosUrl: `${baseUrl}/img/zulu/dos.jpg`,
      imgTresUrl: `${baseUrl}/img/zulu/tres.jpg`,
      imgCuatroUrl: `${baseUrl}/img/zulu/cuatro.jpg`,
    },
  ];

  console.log('🧩 Creando datos de memory quiz...');
  for (const quiz of memoryQuiz) {
    const existingQuiz = await prisma.memoryQuiz.findUnique({
      where: { id: quiz.id },
    });
    if (!existingQuiz) {
      await prisma.memoryQuiz.create({ data: quiz });
    }
  }

  // Preguntas del quiz
  const quizQuestions = [
    {
      question:
        '¿Cuál es la palabra del alfabeto aeronáutico que se pronuncia como "Al-fa"?',
      answer: 'Alpha',
    },
    {
      question: '¿Qué letra corresponde a la pronunciación "Bra-vo"?',
      answer: 'Bravo',
    },
    {
      question: '¿Cuál es la palabra que se pronuncia "Char-li"?',
      answer: 'Charlie',
    },
    {
      question: '¿Qué letra del alfabeto aeronáutico suena como "Del-ta"?',
      answer: 'Delta',
    },
    {
      question: '¿Cuál es la pronunciación correcta para "Echo"?',
      answer: 'Echo',
    },
    {
      question: '¿Qué palabra del alfabeto se pronuncia "Foks-trot"?',
      answer: 'Foxtrot',
    },
    { question: '¿Cuál es la letra que corresponde a "Golf"?', answer: 'Golf' },
    { question: '¿Qué palabra se pronuncia "Ho-tel"?', answer: 'Hotel' },
    { question: '¿Cuál es la pronunciación de "India"?', answer: 'India' },
    { question: '¿Qué letra suena como "Dzu-li-et"?', answer: 'Juliet' },
    {
      question: '¿Cuál es la palabra que se pronuncia "Ki-lo"?',
      answer: 'Kilo',
    },
    { question: '¿Qué letra corresponde a "Li-ma"?', answer: 'Lima' },
    {
      question: '¿Cuál es la pronunciación correcta para "Mike"?',
      answer: 'Mike',
    },
    {
      question: '¿Qué palabra del alfabeto se pronuncia "No-vem-ber"?',
      answer: 'November',
    },
    { question: '¿Cuál es la letra que suena como "Os-kar"?', answer: 'Oscar' },
    { question: '¿Qué palabra se pronuncia "Pa-pa"?', answer: 'Papa' },
    { question: '¿Cuál es la pronunciación de "Quebec"?', answer: 'Quebec' },
    { question: '¿Qué letra corresponde a "Ro-mi-o"?', answer: 'Romeo' },
    {
      question: '¿Cuál es la palabra que se pronuncia "Si-er-ra"?',
      answer: 'Sierra',
    },
    { question: '¿Qué letra suena como "Tang-go"?', answer: 'Tango' },
    {
      question: '¿Cuál es la pronunciación correcta para "Uniform"?',
      answer: 'Uniform',
    },
    {
      question: '¿Qué palabra del alfabeto se pronuncia "Vik-tor"?',
      answer: 'Victor',
    },
    {
      question: '¿Cuál es la letra que corresponde a "Wis-ki"?',
      answer: 'Whiskey',
    },
    { question: '¿Qué palabra suena como "Eks-rei"?', answer: 'X-ray' },
    { question: '¿Cuál es la pronunciación de "Yankee"?', answer: 'Yankee' },
    { question: '¿Qué letra se pronuncia "Zu-lu"?', answer: 'Zulu' },
  ];

  console.log('🧠 Creando preguntas de quiz...');
  for (const quiz of quizQuestions) {
    const existingQuiz = await prisma.quizz.findFirst({
      where: { question: quiz.question },
    });
    if (!existingQuiz) {
      await prisma.quizz.create({ data: quiz });
    }
  }
  console.log('✅ Preguntas creadas');

  console.log('🎉 Seed completado exitosamente!');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
