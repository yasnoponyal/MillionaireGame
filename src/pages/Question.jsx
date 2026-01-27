import { useState, useEffect, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { questions, generateQuestions, shuffleAnswers } from "../helpers/questionsList"


import Hints from "../components/Hints/Hints";

function Question() {
	const { id } = useParams()
	const navigate = useNavigate()

	const [currentQuestions, setCurrentQuestions] = useState([]);
	// Второй шанс
	const [isSecondChanceUsed, setIsSecondChanceUsed] = useState(false);
	// 50 на 50
	const [isFiftyFiftyUsed, setIsFiftyFiftyUsed] = useState(false);
	// Помощь друга (правильный ответ)
	const [isPhoneUsed, setIsPhoneUsed] = useState(false);

	const [visibleAnswers, setVisibleAnswers] = useState([]);

	useEffect(() => {
		if (currentQuestions.length === 0) {
			const session = generateQuestions(questions);
			setCurrentQuestions(session);
			setIsSecondChanceUsed(false);
			setIsFiftyFiftyUsed(false);
			setIsPhoneUsed(false);
		}
	}, []);

	const question = currentQuestions[Number(id)]

	const sums = [1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 300000, 400000, 500000, 800000, 1000000, 1500000, 3000000];

	const goldIndices = [6, 10];

	// Перемешивание вариантов ответов
	// Чтобы они не были всегда в одном порядке
	const shuffledAnswers = useMemo(() => {
		if (!question || !question.answers) return [];
		return shuffleAnswers(question.answers);
	}, [question]);

	useEffect(() => {
		setVisibleAnswers([]);
	}, [id]);

	const handleFiftyFifty = () => {
		if (!isFiftyFiftyUsed && question && shuffledAnswers.length > 0) {
			const wrongAnswers = shuffledAnswers.filter(answer => answer !== question.correct);
			const randomWrongAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
			setVisibleAnswers([question.correct, randomWrongAnswer]);
			setIsFiftyFiftyUsed(true);
		}
	};

	const handlePhone = () => {
		if (!isPhoneUsed && question && shuffledAnswers.length > 0) {
			setVisibleAnswers([question.correct]);
			setIsPhoneUsed(true);
		}
	};

	const displayAnswers = useMemo(() => {
		if (!question || shuffledAnswers.length === 0) return [];

		if (visibleAnswers.length > 0) {
			return shuffledAnswers.map(answer => 
				visibleAnswers.includes(answer) ? answer : ''
			);
		}
		
		return shuffledAnswers;
	}, [shuffledAnswers, visibleAnswers, question]);

	const nextQuestion = (answer) => {
		if (answer === question.correct) {
			const nextId = Number(id) + 1

			if (nextId < currentQuestions.length) {
				navigate(`/question/${nextId}`)
			} else {
				const winAmount = sums[sums.length - 1];
				navigate(`/win`, { state: { winAmount } })
			}
		} else {
			const currentQuestionIndex = Number(id);

			let guaranteedAmount = 0;
			goldIndices.forEach((goldSum) => {
				if (currentQuestionIndex > goldSum) {
					guaranteedAmount = sums[goldSum];
				}
			});

			if (!isSecondChanceUsed) {
				setIsSecondChanceUsed(true);
				return;
			} else {
				navigate(`/loss`, { state: { lostAmount: guaranteedAmount } })
			}
		}
	}

	const handleTakeWin = () => {
		const winAmount = sums[currentQuestionIndex - 1];
		navigate(`/win`, { state: { winAmount } })
	}

	// Заглушка, чтобы было крутячно 
	if (!question) return <div>Загрузка...</div>;

	const currentQuestionIndex = Number(id);

	return (
		<section className="question">
			<div className="container">
				<div className="question__sums">
					{sums.map((sum, index) => {
						const isComplete = index < currentQuestionIndex;
						const isGold = goldIndices.includes(index);
						const className = `question__sum ${isComplete ? 'complete' : ''} ${isGold ? 'gold' : ''}`.trim();

						return (
							<p key={index} className={className}>{sum}</p>
						);
					})}
				</div>
				<div className="question__content">
					<div className="question__hints-content">
						<Hints 
							isSecondChanceUsed={isSecondChanceUsed}
							isFiftyFiftyUsed={isFiftyFiftyUsed}
							isPhoneUsed={isPhoneUsed}
							onFiftyFiftyActivate={handleFiftyFifty}
							onPhoneActivate={handlePhone}
						/>
						{currentQuestionIndex >= 1 && (
							<div className="question__win">
								<button className="question__win-button" onClick={handleTakeWin}>Забрать выигрыш</button>
							</div>
						)}
					</div>
					<div className="question__info">
						<p className="question__number">Вопрос {Number(id) + 1}</p>
						<h1 className="question__title">{question.title}</h1>
					</div>
					<div className="question__answers">
						{displayAnswers.map((answer, index) => (
							<div 
								className={`question__answer ${!answer ? 'question__answer--hidden' : ''}`} 
								key={index}
							>
								{answer ? (
									<button onClick={() => nextQuestion(answer)}>
										{answer}
									</button>
								) : (
									<button disabled className="question__answer--hidden"></button>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Question