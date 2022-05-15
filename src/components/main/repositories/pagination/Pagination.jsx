import React from 'react';
import s from './Pagination.module.css';
import left_inactive from '../../../../assets/icons/left-arrow-inactive.svg';
import left_active from '../../../../assets/icons/left-arrow-active.svg';
import right_inactive from '../../../../assets/icons/right-arrow-inactive.svg';
import right_active from '../../../../assets/icons/right-arrow-active.svg';

const Pagination = () => {
	return (
		<div className={s.pagination}>
			<div className={s.items}>5-8 of 249 items</div>
			<div className={s.main}>
				<img src={left_active} className={s.arrow_left} alt="left arrow" />
				<div className={s.pages}>1 <div className={s.active_page}>2</div> 3 ... 10</div>
				<img src={right_inactive} className={s.arrow_right} alt="right arrow" />
			</div>
		</div>
	)
}

export { Pagination };