import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

import './style.css';

function Footer() {
	return (
		<footer className='footer'>
			<div className="footer__content">
				<p className='copyright'>© 2026 Sergei Ekum</p>
				<div className="footer__links">
					<a href="https://github.com/yasnoponyal" className='footer__link' target='_blank'><GitHubIcon sx={{ fontSize: 36}} /></a>
					<a href="#" className='footer__link'><TelegramIcon sx={{ fontSize: 36}} /></a>
				</div>
			</div>
		</footer>
	)
}

export default Footer