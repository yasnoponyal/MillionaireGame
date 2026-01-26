import { useLocation } from "react-router-dom"

function Win() {
	const location = useLocation()
	const winAmount = location.state?.winAmount || 0

	return (
		<section className="win">
			<div className="container">
				<div className="win__content">
					<h1 className="win__title">Вы выиграли!</h1>
					<p>Заработанная сумма: {winAmount} руб</p>
				</div>
			</div>
		</section>
	)
}

export default Win