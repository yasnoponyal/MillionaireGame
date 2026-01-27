import { NavLink, useLocation } from 'react-router-dom';
import './style.css';
import logo from './../../images/logo.png';

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Header() {
  const location = useLocation();

  const isGame = location.pathname.startsWith('/question') || 
                   location.pathname === '/loss' || 
                   location.pathname === '/win';

  return (
    <header className="header">
      <div className="header__content">
        
        {!isGame && (
          <nav className='header__navbar'>
            <NavLink to='/'><img src={logo} alt='Logotype' className='logo'></img></NavLink>
            <h1 className='header__content-title'>Кто хочет стать миллионером?</h1>
            <ul className='header__navbar-list'>
              <NavLink to='/'><li className='header__navbar-item'> <HomeIcon sx={{ fontSize: 28}} /> Главная</li></NavLink>
              <NavLink to='/settings'><li className='header__navbar-item'> <SettingsIcon sx={{ fontSize: 28}} />Настройки</li></NavLink>
              <li className='header__navbar-item'> <MenuBookIcon sx={{ fontSize: 28}} />Правила</li>
            </ul>
          </nav>
        )}
        {isGame && (
          <nav className='header__navbar--game'>
            <NavLink className='header__back' to='/'>
              <ArrowBackIosNewIcon className='header__back-icon' sx={{ fontSize: 28}} /> Назад
            </NavLink>
            <NavLink to='/'><img src={logo} alt='Logotype' className='logo'></img></NavLink>
          </nav>
        )}

      </div>
    </header>
  )
}