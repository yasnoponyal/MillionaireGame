import { useState } from "react";
import ThemeButton from "../components/ThemeButton/ThemeButton"


function Settings() {
	
	return (
		<section className="settings">
			<div className="container">
				<div className="settings__content">
					<div className="settings__item">
						<h2 className="settings__title">Сменить тему</h2>
						<ThemeButton />
					</div>
					<div className="settings__item">
						<h2 className="settings__title">Сменить язык</h2>
						<div className="settings__choice">
							<button className="settings__button-theme">🇷🇺</button>
							<button className="settings__button-theme">🇺🇸</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Settings