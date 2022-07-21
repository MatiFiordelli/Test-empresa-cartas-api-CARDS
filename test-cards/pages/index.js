import { useEffect, useState, useRef, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { NomeContext } from './_app.js'
import styles from '../styles/Home.module.css'

export default function Home() {
	const router = useRouter()
	const campoNomeRef = useRef(null)
	const {nome, setNome} = useContext(NomeContext) //Estado global
	const [rota, setRota] = useState('')
	
	useEffect(()=>{
		campoNomeRef.current.focus()
	},[])
	
	useEffect(()=>{
		nome!==''
			?setRota('./naipes')
			:setRota('')
	},[nome])
	
	const detectaEnter = (e) => {
		if(e.keyCode === 13) router.push('./naipes')
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Test Cards</title>
				<meta name="description" content="Test Front End de Naipes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Baralho de cartas aleatórias
				</h1>
				<label htmlFor="campoNome">Insira o seu Nome: </label>
			
				<input type="text" 
					id="campoNome"
					className="campoNome"
					maxLength="20"
					onChange={(e)=>{setNome(e.target.value)}}
					onKeyUp={(e)=>{detectaEnter(e)}}
					ref={campoNomeRef}/>
			
				<Link href={rota} className="boton">Ver Cartas</Link> 
			</main>
		</div>
	)
}
