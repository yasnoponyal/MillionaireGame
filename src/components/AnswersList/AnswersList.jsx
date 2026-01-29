import AnswerButton from '../AnswerButton/AnswerButton'
import './style.css'

function AnswersList({ answers
	, onAnswerClick, answerStatus }) {
	return (
		<div className="question__answers">
			{answers.map((answer, index) => {
				let statusClass = ''

				if (answerStatus?.answer === answer) {
					statusClass = `answer-${answerStatus.status}`
				}

				return (
					<AnswerButton
						key={index}
						answer={answer}
						onClick={() => onAnswerClick(answer)}
						disabled={!!answerStatus}
						statusClass={statusClass}
						isHidden={!answer}
					/>
				)
			})}
		</div>
	)
}

export default AnswersList