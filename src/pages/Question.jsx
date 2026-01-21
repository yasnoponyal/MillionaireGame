import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { questions, shuffleArray } from "../helpers/questionsList"

function Question() {
	const { id } = useParams()
	const navigate = useNavigate()

  const [currentQuestions, setCurrentQuestions] = useState([]);

  useEffect(() => {
    if (id === "0") {
      setCurrentQuestions(shuffleArray(questions));
    } 
    else if (currentQuestions.length === 0) {
      setCurrentQuestions(questions);
    }
  }, [id]);

	const question = currentQuestions[Number(id)]

	if (!question) return <div>Загрузка...</div>;

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

	return (
		<section className="question">
			<div className="container">
				<div className="question__content">
					<div className="question__info">
						<p className="question__number">Вопрос {Number(id) + 1}</p>
						<h1 className="question__title">{question.title}</h1>
					</div>
					<div className="question__answers">
						<div className="question__answer">
							<button onClick={() => nextQuestion(question.first_answer)}>{question.first_answer}</button>
						</div>
						<div className="question__answer">
							<button onClick={() => nextQuestion(question.second_answer)}>{question.second_answer}</button>
						</div>
						<div className="question__answer">
							<button onClick={() => nextQuestion(question.third_answer)}>{question.third_answer}</button>
						</div>
						<div className="question__answer">
							<button onClick={() => nextQuestion(question.fourth_answer)}>{question.fourth_answer}</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Question