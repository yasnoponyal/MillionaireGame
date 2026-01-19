import { useEffect } from 'react';
import useLocalStorage from '../../utils/UseLocalStorage';

import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeButton() {
	const [theme, setTheme] = useLocalStorage('theme', 'light')

	useEffect(() => {
		document.body.className = '';
		document.body.classList.add(theme);
	}, [theme]);

	const handleClick = (newTheme) => {
		setTheme(newTheme)
	}

	return (
		<div className="settings__choice">
			<button className={`settings__button-theme ${theme === 'light' ? 'active' : ''}`} onClick={() => handleClick('light')}> <SunnyIcon sx={{ fontSize: 28 }} /> </button>
			<button className={`settings__button-theme ${theme === 'dark' ? 'active' : ''}`} onClick={() => handleClick('dark')}> <DarkModeIcon sx={{ fontSize: 28 }} /></button>
		</div>
	)
}

export default ThemeButton