import React, { useContext } from 'react';
import { FetchContext } from '../../context.js';
import { useFetch } from '../../hooks/useFetch';
import s from './Header.module.css';
import logo from '../../assets/icons/logo.svg';

const Header = () => {
	const { userName, setUserName } = useContext(FetchContext);
	const { searchUser } = useFetch();

	return (
		<div className={s.header}>
			<img
				src={logo}
				className={s.logo}
				alt="logo"
			/>
			<input
				type="text"
				placeholder="Enter GitHub username"
				value={userName}
				className={s.input}
				onChange={(e) => setUserName(e.target.value)}
				onKeyDown={(e) => e.key === 'Enter' ? searchUser() : null}
			/>
		</div>
	)
};

export { Header };