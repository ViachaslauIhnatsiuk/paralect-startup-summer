import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/logo.svg';

const Header = () => {
	return (
		<div className={s.wrapper}>
			<img
				src={logo}
				className={s.logo}
				alt="logo"
			/>
			<input type="text" className={s.input} />
		</div>
	)
};

export { Header };