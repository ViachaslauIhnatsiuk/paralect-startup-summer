import React from 'react';
import s from './Repositories.module.css';
import { Repository } from './repository/Repository';
import { Pagination } from './pagination/Pagination';

const Repositories = ({ repos }) => {
	return (
		<div className={s.repositories}>
			<h2 className={s.title}>Repositories ({repos.length})</h2>
			{repos.map((repo, index) => {
				return <Repository name={repo.name} description={repo.description} key={index} />
			})}
			<Pagination />
		</div>
	)
}

export { Repositories };