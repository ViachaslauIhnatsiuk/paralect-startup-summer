import React, { useState } from 'react';
import s from './Header.module.css';
import logo from '../../assets/icons/logo.svg';


const Header = ({ setUser, setRepos }) => {
	const [value, setValue] = useState('');

	const search = (e) => {
		if (e.key === 'Enter') {
			fetch(`https://api.github.com/users/${value}`)
				.then(response => response.json())
				.then(response => setUser(response))
				.catch(error => console.log(error))
			fetch(`https://api.github.com/users/${value}/repos`)
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
			<input
				type="text"
				value={value}
				className={s.input}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={search} />
		</div>
	)
};

export { Header };