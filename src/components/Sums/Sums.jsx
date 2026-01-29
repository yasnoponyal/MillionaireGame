import { SUMS, GOLD_INDICES_SUMS } from "../../constants/sums";
import './style.css'

function Sums( { currentQuestionIndex }) {
	return (
		<div className="question__sums">
			{SUMS.map((sum, index) => {
				const isComplete = index < currentQuestionIndex
				const isGold = GOLD_INDICES_SUMS.includes(index)
				const isCurrent = index === currentQuestionIndex

				const className = [
					'question__sum',
					isComplete && 'complete',
					isGold && 'gold',
					isCurrent && 'current'
				].filter(Boolean).join(' ')

				return (
					<p key={index} className={className}>{sum}</p>
				)
			})}
		</div>
	)
}

export default Sums