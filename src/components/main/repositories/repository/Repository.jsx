import React from 'react';
import s from './Repository.module.css';

const Repository = ({ name, description, link }) => {
	return (
		<div className={s.repository}>
			<a href={link} className={s.title} target="_blank" rel="noopener noreferrer">{name}</a>
			<p className={s.description}>{description}</p>
		</div>
	)
}

export { Repository };