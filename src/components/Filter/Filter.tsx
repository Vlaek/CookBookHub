import { FC } from 'react'
import styles from './Filter.module.scss'

const Filter: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.title}>Filter</div>
			</div>
		</div>
	)
}

export default Filter
