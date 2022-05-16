import React from 'react';
import s from './Main.module.css';
import { User } from './user/User';
import { Repositories } from './repositories/Repositories';
import { Loader } from '../main/loader/Loader';

const Main = ({ user, repos, loader }) => {

	if (loader) {
		return (
			<Loader />
		)
	} else {
		return (
			<div className={s.main}>
				<User user={user} />
				<Repositories repos={repos} />
			</div>
		)
	}
}

export { Main };