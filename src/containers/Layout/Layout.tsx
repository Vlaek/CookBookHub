import { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'

type LayoutProps = {
	header: ReactNode
	aside: ReactNode
	main: ReactNode
}

const Layout: FC<LayoutProps> = ({ header, aside, main }) => {
	return (
		<div className={styles.wrapper}>
			<header>{header}</header>
			<aside>{aside}</aside>
			<main>{main}</main>
		</div>
	)
}

export default Layout
