import React from 'react';
import s from './MainNotFound.module.css';
import user from '../../../assets/icons/user-not-found.svg';

const MainNotFound = () => {
	return (
		<div className={s.main}>
			<img
				src={user}
				className={s.icon}
				alt="user not found"
			/>
			<p className={s.message}>User not found</p>
		</div>
	)
};

export { MainNotFound };