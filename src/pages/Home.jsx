import { NavLink } from 'react-router-dom';

function Home() {
	return (
		<>
			<section className='home'>
				<div className="container">
					<div className="home__content">
					<NavLink to='/question'><button className="home__button">Начать игру</button></NavLink>
					<button className="home__button">Загрузить игру</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
