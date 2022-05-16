import React, { useState } from 'react';
import s from './Header.module.css';
import logo from '../../assets/icons/logo.svg';


const Header = ({ setUser, setRepos }) => {
	const [value, setValue] = useState('');

	const fetchParams = {
		method: "GET",
		headers: {
			Authorization: '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',
		}
	};

	const search = (e) => {
		if (e.key === 'Enter') {
			fetch(`https://api.github.com/users/${value}`, fetchParams)
				.then(response => response.json())
				.then(response => setUser(response))
				.catch(error => console.log(error))
			fetch(`https://api.github.com/users/${value}/repos?per_page=100&page=1`, fetchParams)
				.then(response => response.json())
				.then(response => setRepos([...response]))
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
				placeholder='Enter GitHub username'
				value={value}
				className={s.input}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={search} />
		</div>
	)
};

export { Header };