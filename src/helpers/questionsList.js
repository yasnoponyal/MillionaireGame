const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const questions = [
	{
		title: 'Назовите страну, которая не входит в состав Соединённого Королевства Великобритании',
		first_answer: 'Англия',
		second_answer: 'Ирландия',
		third_answer: 'Шотландия',
		fourth_answer: 'Северная Ирландия',
		correct: 'Ирландия',
	},
	{
		title: 'Какое вещество преобладает в атмосфере Земли',
		first_answer: 'Азот',
		second_answer: 'Кислород',
		third_answer: 'Углекислый газ',
		fourth_answer: 'Аргон',
		correct: 'Азот',
	},
	{
		title: 'Синус 60 градусов равен',
		first_answer: '1/2',
		second_answer: '1',
		third_answer: '0',
		fourth_answer: '√3/2',
		correct: '√3/2',
	}
]



export {questions, shuffleArray}