import React from 'react';
import s from './MainStart.module.css';
import search from '../../../assets/icons/start-search.svg';

const MainStart = () => {
	return (
		<div className={s.main}>
			<img
				src={search}
				className={s.icon}
				alt="start search icon"
			/>
			<p className={s.message}>Start with searching a GitHub user</p>
		</div>
	)
}

export { MainStart };