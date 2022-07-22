import { useContext } from 'react'
import { NomeContext } from '../pages/_app.js'
import styles from '../styles/Header.module.css'

export default function Header(){
	const {nome, setNome} = useContext(NomeContext) //estado global

	return(
		<div className={styles.header}>
			<p>Bemvindo <span>{nome}</span><div className={styles.greenled}/></p>
		</div>
	)
}