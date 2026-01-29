import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { SUMS, DELAYS } from "../constants/sums";
import { calculateGuaranteedAmount } from "../helpers/winAmount";


export const useAnswerHandling = ({
	questionId,
	currentQuestion,
	currentQuestions,
	isSecondChanceUsed,
	setIsSecondChanceUsed,
	visibleAnswers,
	setVisibleAnswers,
}) => {
	const navigate = useNavigate()
	const [answerStatus, setAnswerStatus] = useState(null)

	const handleAnswer = (answer) => {
		if (answerStatus) {
			return
		}

		setAnswerStatus({ answer, status: 'pending'})

		setTimeout(() => {
			const isCorrect = answer === currentQuestion.correct
			setAnswerStatus({ answer, status: isCorrect ? 'correct' : 'wrong'})

			setTimeout(() => {
				if (isCorrect) {
					handleCorrectAnswer()
				} else {
					handleWrongAnswer(answer)
				}
			}, DELAYS.RESULT);
		}, DELAYS.PENDING)
	}

	const handleCorrectAnswer = () => {
		const nextId = Number(questionId) + 1

		if (nextId < currentQuestions.length) {
			navigate(`/question/${nextId}`)
		} else {
			const winAmount = SUMS[SUMS.length - 1]
			navigate(`/win`, { state: { winAmount } })
		}
	}

	const handleWrongAnswer = (answer) => {
		const currentQuestionIndex = Number(questionId)
		const guaranteedAmount = calculateGuaranteedAmount(currentQuestionIndex)

		if (!isSecondChanceUsed) {
			setIsSecondChanceUsed(true)
			setAnswerStatus(null)

			if (visibleAnswers.length > 0) {
				setVisibleAnswers(prev => prev.filter(a => a !== answer))
			}
		} else {
			navigate(`/loss`, { state: { lostAmount: guaranteedAmount } })
		}
	}

	return {
		answerStatus,
		setAnswerStatus,
		handleAnswer
	}
}