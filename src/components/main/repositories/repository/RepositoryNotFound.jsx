import React from 'react';
import s from './RepositoryNotFound.module.css';
import repos from '../../../../assets/icons/repos-not-found.svg';

const RepositoryNotFound = () => {
	return (
		<div className={s.repository}>
			<img src={repos} className={s.icon} alt="repository not found" />
			<p className={s.message}>Repository list is empty</p>
		</div>
	)
}

export { RepositoryNotFound };