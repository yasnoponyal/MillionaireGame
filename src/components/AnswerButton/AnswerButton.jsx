import './style.css'

function AnswerButton({
	answer,
	onClick,
	disabled,
	statusClass = '',
	isHidden = false
}) {
	const className = [
		'question__answer',
		isHidden && 'question__answer--hidden',
		statusClass
	].filter(Boolean).join(' ')

	if (!answer || isHidden) {
		return (
			<div className={className}>
				<button disabled className='question__answer--hidden'></button>
			</div>
		)
	}

	return (
		<div className={className}>
			<button onClick={onClick} disabled={disabled}>
				{answer}
			</button>
		</div>
	)
}

export default AnswerButton