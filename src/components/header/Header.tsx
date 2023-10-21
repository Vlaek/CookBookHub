import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
	const navigate = useNavigate()

	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>CookBookHub</div>
			<nav className={styles.nav}>
				<button
					className={styles.button}
					onClick={() => navigate('/CookBookHub/recipes')}
				>
					Recipes
				</button>
				<button
					className={styles.button}
					onClick={() => navigate('/CookBookHub/favorites')}
				>
					Favorites
				</button>
				<button
					className={styles.button}
					onClick={() => navigate('/CookBookHub/about')}
				>
					About Us
				</button>
				<button
					className={styles.button}
					onClick={() => navigate('/CookBookHub/auth')}
				>
					LogOut
				</button>
			</nav>
		</div>
	)
}
