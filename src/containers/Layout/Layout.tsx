import { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'
import cl from 'classnames'

type LayoutProps = {
	header: ReactNode
	aside?: ReactNode
	main: ReactNode
}

const Layout: FC<LayoutProps> = ({ header, aside, main }) => {
	return (
		<div className={cl(styles.wrapper, { [styles.wide]: !aside })}>
			<header>{header}</header>
			<aside>{aside}</aside>
			<main>{main}</main>
		</div>
	)
}

export default Layout
