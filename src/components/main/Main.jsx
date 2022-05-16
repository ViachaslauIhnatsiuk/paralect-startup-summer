import React, { useContext } from 'react';
import { FetchContext } from '../../context.js';
import s from './Main.module.css';
import { User } from './user/User';
import { Repositories } from './repositories/Repositories';
import { Loader } from '../main/loader/Loader';

const Main = () => {
	const { user, loader } = useContext(FetchContext);

	if (loader) {
		return (
			<Loader />
		)
	} else {
		return (
			<div className={s.main}>
				<User user={user} />
				<Repositories />
			</div>
		)
	}
};

export { Main };