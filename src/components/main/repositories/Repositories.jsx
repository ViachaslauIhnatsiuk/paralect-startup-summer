import React, { useContext } from "react";
import { FetchContext } from "../../../context";
import s from './Repositories.module.css';
import { RepositoryNotFound } from "../repositories/repository/RepositoryNotFound";
import { Repository } from './repository/Repository';
import { Pagination } from './pagination/Pagination';

const Repositories = () => {
	const { repos, currentPage } = useContext(FetchContext);
	const currentPageRepos = repos.slice(currentPage * 4 - 4, 4 * currentPage)

	if (repos.length) {
		return (
			<div className={s.repositories}>
				<h2 className={s.title}>Repositories {repos.length}</h2>
				{currentPageRepos.map((repo, index) => {
					return (
						<Repository
							name={repo.name}
							description={repo.description}
							link={repo.html_url}
							key={index}
						/>)
				})}
				<Pagination repos={repos} />
			</div>
		)
	} else {
		return (
			<RepositoryNotFound />
		)
	}
};

export { Repositories };