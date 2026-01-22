import { NavLink } from 'react-router-dom';

import './style.css';
import logo from './../../images/logo.png';

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {
	return (
		<header className="header">
			<div className="header__content">
				<nav className='header__navbar'>
					<NavLink to='/'><img src={logo} alt='Logotype' className='logo'></img></NavLink>
					<h1 className='header__content-title'>Кто хочет стать миллионером?</h1>
					<ul className='header__navbar-list'>
						<NavLink to='/'><li className='header__navbar-item'> <HomeIcon sx={{ fontSize: 28}} /> Главная</li></NavLink>
						<NavLink to='/settings'><li className='header__navbar-item'> <SettingsIcon sx={{ fontSize: 28}} />Настройки</li></NavLink>
						<li className='header__navbar-item'> <PersonIcon sx={{ fontSize: 28}} />Автор</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
