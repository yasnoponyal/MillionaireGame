import PercentIcon from '@mui/icons-material/Percent';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import PhoneIcon from '@mui/icons-material/Phone';

function Rules() {
	return (
		<section className="rules">
			<div className="container">
				<div className="rules__content">
					<h1 className="rules__title">Правила</h1>
					<h2 className="rules__paragraph-title">Описание</h2>
					<p className="rules__paragraph">«Кто хочет стать миллионером?» — это интеллектуальная викторина, в которой игроку предстоит пройти путь от простых вопросов к по-настоящему сложным, чтобы выиграть главный приз — один миллион.

						Игроку задаются 15 вопросов с четырьмя вариантами ответа, из которых только один правильный. С каждым новым уровнем сложность возрастает, а цена ошибки становится всё выше.</p>
					<h2 className="rules__paragraph-title">Подсказки</h2>
					<p className="rules__paragraph">Чтобы помочь в трудной ситуации, доступны специальные подсказки:</p>
					<p className="rules__paragraph-hint"><PercentIcon /></p>
					<p className="rules__paragraph">50 на 50 - убирает два неверных варианта</p>
					<p className="rules__paragraph-hint"><LooksTwoIcon /></p>
					<p className="rules__paragraph">Вторая попытка - в случае неправильного ответа на вопрос, участнику дается второй шанс</p>
					<p className="rules__paragraph-hint"><PhoneIcon /></p>
					<p className="rules__paragraph">Звонок другу - показывает правильный вариант ответа</p>
					<h2 className="rules__paragraph-title">Несгораемые суммы</h2>
					<p className="rules__paragraph">В игре есть несгораемые суммы, которые гарантируют выигрыш даже при ошибке на более сложном этапе. Участник может в любой момент забрать деньги и завершить игру.</p>

				</div>
			</div>
		</section>
	)
}

export default Rules