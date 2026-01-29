import { useState, useEffect, useMemo } from "react";

import { questions, generateQuestions, shuffleAnswers} from '../helpers/questionsList'

export const useGameState = (questionId) => {
	const [currentQuestions, setCurrentQuestions] = useState([])
	const [isSecondChanceUsed, setIsSecondChanceUsed] = useState(false);
  const [isFiftyFiftyUsed, setIsFiftyFiftyUsed] = useState(false);
  const [isPhoneUsed, setIsPhoneUsed] = useState(false);
  const [visibleAnswers, setVisibleAnswers] = useState([]);

	useEffect(() => {
		if (currentQuestions.length === 0) {
			const session = generateQuestions(questions)
			setCurrentQuestions(session)
			setIsSecondChanceUsed(false)
			setIsFiftyFiftyUsed(false)
			setIsPhoneUsed(false)
		}
	}, [currentQuestions.length])

	useEffect(() => {
		setVisibleAnswers([])
	}, [questionId])

	const currentQuestion = currentQuestions[Number(questionId)]

	const shuffledAnswers = useMemo(() => {
		if (!currentQuestion || !currentQuestion.answers) {
			return []
		}

		return shuffleAnswers(currentQuestion.answers)
	}, [currentQuestion])

	return {
		currentQuestion,
		currentQuestions,
		shuffledAnswers,
		visibleAnswers,
		setVisibleAnswers,
		isSecondChanceUsed,
		setIsSecondChanceUsed,
		isFiftyFiftyUsed,
		setIsFiftyFiftyUsed,
		isPhoneUsed,
		setIsPhoneUsed,
	}

}