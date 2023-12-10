import { FC, useEffect, useRef, useState } from 'react'
import styles from './Filter.module.scss'
import { useGetAreasQuery, useGetCategoriesQuery } from '../../store/api/api'
import { ICategory } from '../../types/categories.types'
import { IArea } from '../../types/areas.types'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from './../../hooks/useTypedSelector'

const Filter: FC = () => {
	const { isLoading: isLoadingCategories, data: categories } =
		useGetCategoriesQuery('')

	const { isLoading: isLoadingAreas, data: areas } = useGetAreasQuery('')

	const { filter } = useTypedSelector(state => state)

	const { setFilter } = useActions()

	const checkboxesRef = useRef<HTMLInputElement[]>([])
	const [categoriesBoxes, setCategoriesBoxes] = useState<string[]>([])
	const [areasBoxes, setAreasBoxes] = useState<string[]>([])

	const handleCategoriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checkbox = e.target
		const isChecked = checkbox.checked
		const value = checkbox.value

		if (isChecked) {
			setCategoriesBoxes([...categoriesBoxes, value])
		} else {
			setCategoriesBoxes(categoriesBoxes.filter(item => item !== value))
		}
	}

	const handleAreasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checkbox = e.target
		const isChecked = checkbox.checked
		const value = checkbox.value

		if (isChecked) {
			setAreasBoxes([...areasBoxes, value])
		} else {
			setAreasBoxes(areasBoxes.filter(item => item !== value))
		}
	}

	function arrayToString(arr: string[], key: string) {
		let str = ''
		arr.forEach((item, index) => {
			if (index === 0) {
				str += `${key}=${item}`
			} else {
				str += `&${key}=${item}`
			}
		})
		return str
	}

	useEffect(() => {
		setFilter({
			...filter,
			filter:
				arrayToString(categoriesBoxes, 'category') +
				'&' +
				arrayToString(areasBoxes, 'area'),
		})
	}, [categoriesBoxes, areasBoxes])

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
							value='_sort=id&_order=desc'
							name='radio'
							defaultChecked
							onChange={e => setFilter({ ...filter, sort: e.target.value })}
						/>
						<label>by new to old</label>
					</div>
					<div className={styles.sort__item}>
						<input
							className={styles.sort__input}
							type='radio'
							value='_sort=id&_order=asc'
							name='radio'
							onChange={e => setFilter({ ...filter, sort: e.target.value })}
						/>
						<label>by old to new</label>
					</div>
					<div className={styles.sort__item}>
						<input
							className={styles.sort__input}
							type='radio'
							value='_sort=name&_order=asc'
							name='radio'
							onChange={e => setFilter({ ...filter, sort: e.target.value })}
						/>
						<label>from A to Z</label>
					</div>
					<div className={styles.sort__item}>
						<input
							className={styles.sort__input}
							type='radio'
							value='_sort=name&_order=desc'
							name='radio'
							onChange={e => setFilter({ ...filter, sort: e.target.value })}
						/>
						<label>from Z to A</label>
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
						categories?.map((item: ICategory, index: number) => (
							<div className={styles.filter__item} key={item.id}>
								<input
									className={styles.filter__input}
									type='checkbox'
									value={item.category}
									name='categories'
									ref={el => {
										if (el) {
											checkboxesRef.current[index] = el
										}
									}}
									onChange={handleCategoriesChange}
								/>
								<label>{item.category}</label>
							</div>
						))
					)}
				</div>
				<div className={styles.filter}>
					<p className={styles.filter__title}>Area</p>
					{isLoadingAreas ? (
						<div
							className={styles.filter__title}
							style={{ textAlign: 'center' }}
						>
							Loading...
						</div>
					) : (
						areas?.map((item: IArea, index: number) => (
							<div className={styles.filter__item} key={item.id}>
								<input
									className={styles.filter__input}
									type='checkbox'
									value={item.area}
									name='areas'
									ref={el => {
										if (el) {
											checkboxesRef.current[index] = el
										}
									}}
									onChange={handleAreasChange}
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
