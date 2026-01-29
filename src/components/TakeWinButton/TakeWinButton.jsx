import './style.css'

function TakeWinButton({ onClick, show }) {
	if (!show) return null

	return (
		<div className="question__win">
			<button className='question__win-button' onClick={onClick}>
				Забрать выигрыш
			</button>
		</div>
	)
}

export default TakeWinButton