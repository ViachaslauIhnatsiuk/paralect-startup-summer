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
			<a href={user.html_url} className={s.nickname} target="_blank" rel="noopener noreferrer">{user.login}</a>
			<div className={s.follow}>
				<div className={s.followers}>{user.followers < 1000 ? user.followers : (user.followers / 1000).toFixed(1) + 'k'} followers</div>
				<div className={s.following}>{user.following < 1000 ? user.following : (user.following / 1000).toFixed(1) + 'k'} following</div>
			</div>
		</div>
	)
}

export { User };