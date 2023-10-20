import { FC } from 'react'
import styles from './About.module.scss'
import Header from '../../components/Header/Header'
import Layout from '../../containers/Layout/Layout'

const Main = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.title}>About Us</div>
			</div>
			<div className={styles.main}>
				<p className={styles.text}>
					Welcome to CookBookHub! Our website is dedicated to bringing you the
					best recipes from around the world. We believe that cooking is not
					just about nourishing your body, but also about nourishing your soul.
					That's why we have curated a collection of recipes that are not only
					delicious but also easy to make.
				</p>
				<div className={styles.list}>
					<div className={styles.circle}>
						<div>100</div>
						<div>Recipes</div>
					</div>
					<div className={styles.circle}>
						<div>500</div>
						<div>Authors</div>
					</div>
					<div className={styles.circle}>
						<div>12.000</div>
						<div>Users</div>
					</div>
				</div>
				<p className={styles.text}>
					Our team of passionate foodies is constantly scouring the globe for
					new and exciting recipes to add to our collection. From classic
					Italian pasta dishes to spicy Thai curries, we have something for
					everyone. Whether you're a seasoned chef or a beginner in the kitchen,
					CookBookHub has got you covered.
				</p>
				<p className={styles.text}>
					We understand that cooking can be a daunting task, which is why we
					have created a user-friendly platform that makes it easy to find the
					perfect recipe for any occasion. With our search filters, you can
					easily narrow down your search by cuisine.
				</p>
				<div className={styles.video}>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/n-NQ7-CExeE?si=9NJNUSwu0xZrwBtm'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/ROIZoGM-y2o?si=dYfyJI3GqufnSQkU'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				</div>
				<p className={styles.text}>
					At CookBookHub, we believe that food brings people together. We hope
					that our website inspires you to try new recipes and share them with
					your loved ones. Thank you for choosing CookBookHub as your go-to
					source for delicious recipes from around the world.
				</p>
			</div>
		</div>
	)
}

const About: FC = () => {
	return <Layout header={<Header />} main={<Main />} />
}

export default About
