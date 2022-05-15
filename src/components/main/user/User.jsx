import React from 'react';
import s from './User.module.css';
import avatar from '../../../assets/Dan.png';

const User = () => {
	return (
		<div className={s.wrapper}>
			<img
				src={avatar}
				className={s.avatar}
				alt="avatar"
			/>
			<h3 className={s.username}>Dan Abramov</h3>
			<h5 className={s.nickname}>gaearon</h5>
			<div className={s.follow}>
				<div className={s.followers}>65.8k followers</div>
				<div className={s.following}>171 following</div>
			</div>
		</div>
	)
}

export { User };