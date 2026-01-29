import { useEffect, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { useAnswerHandling } from "../utils/useAnswerHandling";
import { useHints } from "../utils/useHints";
import { useGameState } from "../utils/useGameState";
import { getWinAmount } from "../helpers/winAmount";

import Hints from "../components/Hints/Hints";
import Sums from "../components/Sums/Sums";
import QuestionCard from "../components/QuestionCard/QuestionCard";
import AnswersList from "../components/AnswersList/AnswersList";
import TakeWinButton from "../components/TakeWinButton/TakeWinButton";

function Question() {
	const { id } = useParams()
	const navigate = useNavigate()
	const currentQuestionIndex = Number(id);

	const {
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
	} = useGameState(id);

	// Обработка ответов
	const { answerStatus, setAnswerStatus, handleAnswer } = useAnswerHandling({
		questionId: id,
		currentQuestion,
		currentQuestions,
		isSecondChanceUsed,
		setIsSecondChanceUsed,
		visibleAnswers,
		setVisibleAnswers,
	});

	useEffect(() => {
		setAnswerStatus(null);
	}, [id, setAnswerStatus]);

	// Управление подсказками
	const { handleFiftyFifty, handlePhone } = useHints({
		currentQuestion,
		shuffledAnswers,
		isFiftyFiftyUsed,
		setIsFiftyFiftyUsed,
		isPhoneUsed,
		setIsPhoneUsed,
		visibleAnswers,
		setVisibleAnswers,
	});

	const displayAnswers = useMemo(() => {
		if (!currentQuestion || shuffledAnswers.length === 0) return [];

		if (visibleAnswers.length > 0) {
			return shuffledAnswers.map(answer =>
				visibleAnswers.includes(answer) ? answer : ''
			);
		}

		return shuffledAnswers;
	}, [shuffledAnswers, visibleAnswers, currentQuestion]);


	const handleTakeWin = () => {
		const winAmount = getWinAmount(currentQuestionIndex);
		navigate(`/win`, { state: { winAmount } })
	}

	// Заглушка, чтобы было крутячно 
	if (!currentQuestion) return <div>Загрузка...</div>;

	return (
		<section className="question">
			<div className="container">
				<Sums currentQuestionIndex={currentQuestionIndex} />
				<div className="question__content">
					<div className="question__hints-content">
						<Hints
							isSecondChanceUsed={isSecondChanceUsed}
							isFiftyFiftyUsed={isFiftyFiftyUsed}
							isPhoneUsed={isPhoneUsed}
							onFiftyFiftyActivate={handleFiftyFifty}
							onPhoneActivate={handlePhone}
						/>
						<TakeWinButton
							show={currentQuestionIndex >= 1}
							onClick={handleTakeWin}
						/>
					</div>
					<QuestionCard
						questionNumber={currentQuestionIndex + 1}
						questionTitle={currentQuestion.title}
					/>
					<AnswersList
						answers={displayAnswers}
						onAnswerClick={handleAnswer}
						answerStatus={answerStatus}
					/>
				</div>
			</div>
		</section>
	)
}

export default Question