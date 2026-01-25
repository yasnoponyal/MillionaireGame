import { level1 } from "./questions/level1";
import { level2 } from "./questions/level2";
import { level3 } from "./questions/level3";
import { level4 } from "./questions/level4";
import { level5 } from "./questions/level5";
import { level6 } from "./questions/level6";
import { level7 } from "./questions/level7";
import { level8 } from "./questions/level8";


const generateQuestions = (pool) => {
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
	// Вопросы для номера 1
	level1,

	// Вопросы для номера 2
	level2,

	// Вопросы для номера 3
	level3,

	// Вопросы для номера 4
	level4,

	// Вопросы для номера 5
	level5,

	// Вопросы для номера 6
	level6,

	// Вопросы для номера 7
	level7,

	// Вопросы для номера 8 
	level8,
	
]

export { questions, generateQuestions, shuffleAnswers }