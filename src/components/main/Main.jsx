import React from 'react';
import s from './Main.module.css';
import { User } from './user/User';
import { Repositories } from './repositories/Repositories';

const Main = () => {
	return (
		<div className={s.main}>
			<User />
			<Repositories />
		</div>
	)
}

export { Main };