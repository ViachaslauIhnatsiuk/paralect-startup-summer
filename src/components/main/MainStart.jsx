import React from 'react';
import s from './MainStart.module.css';
import search from '../../assets/icons/start-search.svg';

const MainStart = () => {
	return (
		<div className={s.start}>
			<img
				src={search}
				className={s.search}
				alt="start search"
			/>
			<p className={s.message}>Start with searching a GitHub user</p>
		</div>
	)
}

export { MainStart };