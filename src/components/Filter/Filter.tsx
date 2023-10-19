import { FC } from 'react'
import styles from './Filter.module.scss'
import { useGetAreasQuery, useGetCategoriesQuery } from '../../store/api/api'
import { ICategory } from '../../types/categories.types'
import { IArea } from '../../types/areas.types'

const Filter: FC = () => {
	const { isLoading: isLoadingCategories, data: categories } =
		useGetCategoriesQuery('')
	const { isLoading: isLoadingAreas, data: areas } = useGetAreasQuery('')

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.title}>Filter</div>
			</div>
			<div className={styles.main}>
				<div className={styles.sort}>
					<p className={styles.sort__title}>Sort</p>
					<div className={styles.sort__item}>
						<input
							className={styles.sort__input}
							type='radio'
							value='1'
							name='radio'
							defaultChecked
						/>
						<label>by name</label>
					</div>
					<div className={styles.sort__item}>
						<input
							className={styles.sort__input}
							type='radio'
							value='2'
							name='radio'
						/>
						<label>by etwas 1</label>
					</div>
					<div className={styles.sort__item}>
						<input
							className={styles.sort__input}
							type='radio'
							value='3'
							name='radio'
						/>
						<label>by etwas 2</label>
					</div>
				</div>
				<div className={styles.filter}>
					<p className={styles.filter__title}>Category</p>
					{isLoadingCategories ? (
						<div
							className={styles.filter__title}
							style={{ textAlign: 'center' }}
						>
							Loading...
						</div>
					) : (
						categories?.map((item: ICategory) => (
							<div className={styles.filter__item} key={item.id}>
								<input
									className={styles.filter__input}
									type='checkbox'
									value={item.category}
									name='categories'
								/>
								<label>{item.category}</label>
							</div>
						))
					)}
				</div>
				<div className={styles.filter}>
					<p className={styles.filter__title}>Category</p>
					{isLoadingAreas ? (
						<div
							className={styles.filter__title}
							style={{ textAlign: 'center' }}
						>
							Loading...
						</div>
					) : (
						areas?.map((item: IArea) => (
							<div className={styles.filter__item} key={item.id}>
								<input
									className={styles.filter__input}
									type='checkbox'
									value={item.area}
									name='areas'
								/>
								<label>{item.area}</label>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default Filter
