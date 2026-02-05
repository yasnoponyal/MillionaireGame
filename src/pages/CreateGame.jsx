function CreateGame() {
	return (
		<section className="create">
			<div className="container">
				<h1 className="create__title">Создание вопросов</h1>
				<div className="create__buttons">
					<button className="create__button">Очистить</button>
					<button className="create__button">Сохранить</button>
				</div>
				<div className="create__question">
					<h2 className="create__question--number">Вопрос 1</h2>
					<input className="create__question--title" placeholder="Ваш вопрос"></input>
					<h2 className="create__question--answers">Варианты ответа</h2>
					<input className="create__question--answer" placeholder="Вариант 1"></input>
					<input className="create__question--answer" placeholder="Вариант 2"></input>
					<input className="create__question--answer" placeholder="Вариант 3"></input>
					<input className="create__question--answer" placeholder="Вариант 4"></input>
				</div>
				<div className="create__begin-game">
					<button disabled className="begin-game disabled-button">Начать игру</button>
				</div>
			</div>
		</section>
	)
}

export default CreateGame