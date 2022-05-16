import React from 'react';
import s from './User.module.css';

const User = ({ user }) => {
	const followersRender = user.followers < 1000
		? user.followers
		: (user.followers / 1000).toFixed(1) + 'k';
	const followingRender = user.following < 1000
		? user.following
		: (user.following / 1000).toFixed(1) + 'k';

	return (
		<div className={s.user}>
			<img
				src={user.avatar_url}
				className={s.avatar}
				alt="avatar"
			/>
			<div className={s.about}>
				<div className={s.person}>
					<h3 className={s.username}>{user.name}</h3>
					<a
						href={user.html_url}
						className={s.nickname}
						target="_blank"
						rel="noopener noreferrer">
						{user.login}
					</a>
				</div>
				<div className={s.follow}>
					<div className={s.followers}>{followersRender} followers</div>
					<div className={s.following}>{followingRender} following</div>
				</div>
			</div>
		</div>
	)
};

export { User };