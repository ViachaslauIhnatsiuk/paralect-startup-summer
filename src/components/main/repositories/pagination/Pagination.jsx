import React from "react";
import { usePagination } from "../../../../hooks/usePagination";
import s from './Pagination.module.css';
import left_inactive from '../../../../assets/icons/left-arrow-inactive.svg';
import left_active from '../../../../assets/icons/left-arrow-active.svg';
import right_inactive from '../../../../assets/icons/right-arrow-inactive.svg';
import right_active from '../../../../assets/icons/right-arrow-active.svg';

const Pagination = () => {
	const {
		pagesAmount,
		pagesInterval,
		pageNumbers,
		currentPage,
		setCurrentPage,
	} = usePagination();

	return (
		<div className={s.pagination}>
			<div className={s.items}>{pagesInterval}</div>
			<div className={s.main}>
				<img onClick={() =>
					currentPage > 1
						? setCurrentPage(currentPage - 1)
						: null}
					src={currentPage > 1
						? left_active
						: left_inactive}
					className={currentPage > 1
						? s.previous
						: null}
					alt="left arrow"
				/>
				{pageNumbers.map((page, index) => <div
					key={index}
					className={currentPage === page
						? s.active_page
						: s.page}
					onClick={() => setCurrentPage(page)}>
					{page}</div>)}
				<img onClick={() =>
					currentPage < pagesAmount
						? setCurrentPage(currentPage + 1)
						: null}
					src={currentPage < pagesAmount
						? right_active
						: right_inactive}
					className={currentPage < pagesAmount
						? s.next
						: null}
					alt="right arrow"
				/>
			</div>
		</div>
	)
};

export { Pagination };