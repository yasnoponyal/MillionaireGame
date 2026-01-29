import './style.css'

function QuestionCard( { questionNumber, questionTitle}) {
	return (
		<div className='question__info'>
			<p className="question__number">Вопрос {questionNumber}</p>
			<h1 className="question__title">{questionTitle}</h1>
		</div>
	)
}

export default QuestionCard