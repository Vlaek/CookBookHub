import { FC } from 'react'
import styles from './Auth.module.scss'
import { useNavigate } from 'react-router-dom'

const Auth: FC = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('CookBookHub/')
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.menu}>
				<div className={styles.header}>
					<div className={styles.title}>Authorization</div>
				</div>
				<div className={styles.main}>
					<div className={styles.field}>
						<label className={styles.label}>Name</label>
						<input
							type='text'
							className={styles.input}
							placeholder='Enter your name...'
						/>
					</div>
					<div className={styles.field}>
						<label className={styles.label}>Password</label>
						<input
							type='text'
							className={styles.input}
							placeholder='Enter your password...'
						/>
					</div>
				</div>
				<div className={styles.footer}>
					<button className={styles.button} onClick={handleClick}>
						Login
					</button>
				</div>
			</div>
		</div>
	)
}

export default Auth
