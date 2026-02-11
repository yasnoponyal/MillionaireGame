import { level1 } from "./questions/level1";
import { level2 } from "./questions/level2";
import { level3 } from "./questions/level3";
import { level4 } from "./questions/level4";
import { level5 } from "./questions/level5";
import { level6 } from "./questions/level6";
import { level7 } from "./questions/level7";
import { level8 } from "./questions/level8";
import { level9 } from "./questions/level9";
import { level10 } from "./questions/level10";
import { level11 } from "./questions/level11";
import { level12 } from "./questions/level12";
import { level13 } from "./questions/level13";
import { level14 } from "./questions/level14";
import { level15 } from "./questions/level15";

const getCustomQuestions = () => {
	const mode = localStorage.getItem('gameMode');
	const saved = localStorage.getItem('millionaire-questions');

	if (mode !== 'custom' || !saved) return null;

	try {
		const parsedQuestions = JSON.parse(saved);
		if (parsedQuestions.length === 15) {
			return parsedQuestions.map(q => ({
				...q,
				correct: q.answers[q.correctAnswer],
			}));
		}
	} catch (e) {
		console.error("Ошибка при чтении вопросов:", e);
	}
	return null;
}

const generateQuestions = (pool) => {
	const customQuestions = getCustomQuestions();

	if (customQuestions) {
		return customQuestions;
	}

	return pool.map(group => {
		const randomIndex = Math.floor(Math.random() * group.length);
		return group[randomIndex];
	});
};

const shuffleAnswers = (array) => {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
};

const questions = [
	level1, level2, level3, level4, level5,
	level6, level7, level8, level9, level10,
	level11, level12, level13, level14, level15
];

export { questions, generateQuestions, shuffleAnswers };