import { useState, useEffect, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { questions, generateQuestions, shuffleAnswers } from "../helpers/questionsList"

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

	const shuffledAnswers = useMemo(() => {
		if (!question || !question.answers) return [];
		return shuffleAnswers(question.answers);
	}, [question]);




	const nextQuestion = (answer) => {
		if (answer === question.correct) {
			const nextId = Number(id) + 1

			if (nextId < currentQuestions.length) {
				navigate(`/question/${nextId}`)
			} else {
				navigate(`/`)
			}
		} else {
			navigate(`/`)
		}
	}

	if (!question) return <div>Загрузка...</div>;

	return (
		<section className="question">
			<div className="container">
				<div className="question__content">
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