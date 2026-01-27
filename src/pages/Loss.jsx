import { useLocation } from "react-router-dom"

function Loss() {
	const location = useLocation()
	const lostAmount = location.state?.lostAmount ?? 0

	return (
		<section className="loss">
			<div className="container">
				<div className="loss__content">
					<h1 className="loss__title">Вы неправильно ответили на вопрос!</h1>
					<p>Заработанная сумма: {lostAmount} руб</p>
				</div>
			</div>
		</section>
	)
}

export default Loss