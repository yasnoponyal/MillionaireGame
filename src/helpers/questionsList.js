const generateQuestions = (pool) => {
  return pool.map(group => {
    const randomIndex = Math.floor(Math.random() * group.length);
    return group[randomIndex];
  });
};

const questions = [
	// Вопросы для номера 1
	[
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
			title: 'Какой город является столицей России',
			first_answer: 'Санкт-Петербург',
			second_answer: 'Москва',
			third_answer: 'Екатеринбург',
			fourth_answer: 'Калининград',
			correct: 'Москва',
		},
		{
			title: 'Какой элемент в таблице Менделеева отмечается буквой O',
			first_answer: 'Кислород',
			second_answer: 'Водород',
			third_answer: 'Железо',
			fourth_answer: 'Углерод',
			correct: 'Кислород',
		},
		{
			title: 'Чему равняется число π',
			first_answer: '3,03',
			second_answer: '0',
			third_answer: '3,14',
			fourth_answer: '3,11',
			correct: '3,14',
		},
	],

	// Вопросы для номера 2
	[
		{
			title: 'Синус 60 градусов равен',
			first_answer: '1/2',
			second_answer: '1',
			third_answer: '0',
			fourth_answer: '√3/2',
			correct: '√3/2',
		},
		{
			title: 'Какое из слов написано неправильно и не является исключением для суффикса -ян-',
			first_answer: 'деревянный',
			second_answer: 'оловянный',
			third_answer: 'серебрянный',
			fourth_answer: 'стеклянный',
			correct: 'серебрянный',
		},
	],

	// Вопросы для номера 3
	[
		{
			title: 'В каком океане находится Марианская впадина?',
			first_answer: 'Атлантический океан',
			second_answer: 'Южный океан',
			third_answer: 'Тихий океан',
			fourth_answer: 'Северно-Ледовитый океан',
			correct: 'Тихий океан',
		},
	],
]

export { questions, generateQuestions }