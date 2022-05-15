import React from 'react';
import s from './Repository.module.css';

const Repository = ({ name, description }) => {
	return (
		<div className={s.repository}>
			<h4 className={s.title}>{name}</h4>
			<p className={s.description}>{description}</p>
		</div>
	)
}

export { Repository };