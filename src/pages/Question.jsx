import { useState, useEffect, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { questions, generateQuestions, shuffleAnswers } from "../helpers/questionsList"

import PercentIcon from '@mui/icons-material/Percent';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import PhoneIcon from '@mui/icons-material/Phone';

function Question() {
	const { id } = useParams()
	const navigate = useNavigate()

	const [currentQuestions, setCurrentQuestions] = useState([]);

	useEffect(() => {
		if (currentQuestions.length === 0) {
			const session = generateQuestions(questions);
			setCurrentQuestions(session);
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

	// Переход к следующему вопросу
	// Если правильно - то переходишь
	// Если нет - то не переходишь :D
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
			navigate(`/loss`)
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
						<div className="question__hints">
							<button className="question__hint"><PercentIcon sx={{ fontSize: 28 }} /></button>
							<button className="question__hint"><LooksTwoIcon sx={{ fontSize: 28 }} /></button>
							<button className="question__hint"><PhoneIcon sx={{ fontSize: 28 }} /></button>
						</div>
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
						{shuffledAnswers.map((answer, index) => (
							<div className="question__answer" key={index}>
								<button onClick={() => nextQuestion(answer)}>
									{answer}
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Question