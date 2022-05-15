import React from 'react';
import s from './User.module.css';

const User = ({ user }) => {
	return (
		<div className={s.user}>
			<img
				src={user.avatar_url}
				className={s.avatar}
				alt="avatar"
			/>
			<h3 className={s.username}>{user.name}</h3>
			<h5 className={s.nickname}>{user.login}</h5>
			<div className={s.follow}>
				<div className={s.followers}>{user.followers} followers</div>
				<div className={s.following}>{user.following} following</div>
			</div>
		</div>
	)
}

export { User };