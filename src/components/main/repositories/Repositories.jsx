import React, { useState } from "react";
import s from './Repositories.module.css';
import { Repository } from './repository/Repository';
import { Pagination } from './pagination/Pagination';
import { RepositoryNotFound } from "../repositories/repository/RepositoryNotFound";

const Repositories = ({ repos }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const currentRepos = repos.slice(currentPage * 4 - 4, 4 * currentPage)

	if (repos.length) {
		return (
			<div className={s.repositories}>
				<h2 className={s.title}>Repositories ({repos.length})</h2>
				{currentRepos.map((repo, index) => {
					return <Repository name={repo.name} description={repo.description} link={repo.html_url} key={index} />
				})}
				<Pagination
					repos={repos}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		)
	} else {
		<RepositoryNotFound />
	}
}

export { Repositories };