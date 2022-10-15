import { useContext } from 'react'
import { NomeContext } from '../pages/_app.js'
import styles from '../styles/Header.module.css'

export default function Header(){
	const {nome, setNome} = useContext(NomeContext) //estado global

	return(
		<div className={styles.header}>
			<p>Bemvindo</p>
			<span className={styles.nome}>{nome}</span>
			<span className={`${styles.led} ${nome!==''?styles.greenled:styles.redled}`} ></span>
		</div>
	)
}