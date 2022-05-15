import React from 'react';
import s from './Main.module.css';
import { User } from './user/User';
import { Repositories } from './repositories/Repositories';
import { Pagination } from './pagination/Pagination';

const Main = () => {
	return (
		<div className={s.wrapper}>
			<User />
			<Repositories />
			<Pagination />
		</div>
	)
}

export { Main };