import React from 'react';
import s from './Repositories.module.css';
import { Repository } from './repository/Repository';
import { Pagination } from './pagination/Pagination';

const Repositories = () => {
	return (
		<div className={s.repositories}>
			<h2 className={s.title}>Repositories (249)</h2>
			<Repository />
			<Repository />
			<Repository />
			<Repository />
			<Pagination />
		</div>
	)
}

export { Repositories };