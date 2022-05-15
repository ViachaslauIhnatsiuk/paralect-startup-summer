import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/icons/logo.svg';

const Header = ({ setUser, setRepos }) => {

	const search = (e) => {
		if (e.key === 'Enter') {
			fetch('https://api.github.com/users/ViachaslauIhnatsiuk')
				.then(response => response.json())
				.then(response => setUser(response))
				.catch(error => console.log(error))
			fetch('https://api.github.com/users/ViachaslauIhnatsiuk/repos')
				.then(response => response.json())
				.then(response => setRepos(response))
				.catch(error => console.log(error))
		}
	}

	return (
		<div className={s.header}>
			<img
				src={logo}
				className={s.logo}
				alt="logo"
			/>
			<input type="text" className={s.input} onKeyDown={search} />
		</div>
	)
};

export { Header };