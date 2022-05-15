import React from 'react';
import s from './Main.module.css';
import { User } from './user/User';
import { Repositories } from './repositories/Repositories';

const Main = ({ user, repos }) => {
	return (
		<div className={s.main}>
			<User user={user} />
			<Repositories repos={repos} />
		</div>
	)
}

export { Main };