import { useEffect, useState, useRef, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fetch from '../components/Fetch.js'
import { NomeContext } from './_app.js'

export default function Home() {
	Fetch()
	
	const router = useRouter()
	const {nome, setNome} = useContext(NomeContext)
	const [rota, setRota] = useState('')
	const campoNomeRef = useRef(null)
	
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
			
				<input type="text" id="campoNome"
					maxLength="20"
					onChange={(e)=>{setNome(e.target.value)}}
					onKeyUp={(e)=>{detectaEnter(e)}}
					ref={campoNomeRef}/>
			
				
				<Link href={rota}>Comenza</Link> 
			</main>
				
		</div>
	)
}
