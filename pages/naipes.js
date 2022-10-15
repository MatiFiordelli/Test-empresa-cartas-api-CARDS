import { useState, useEffect, useContext, useRef } from 'react'
import { NaipesContext, NomeContext } from './_app.js'
import { useRouter } from 'next/router'
import styles from '../styles/Naipes.module.css'

export default function Naipes(){
	const {dadosNaipes, setDadosNaipes} = useContext(NaipesContext) //estado global
	const {nome, setNome} = useContext(NomeContext) //Estado global
	const [componentesNaipes, setComponentesNaipes] = useState([])
	const router = useRouter()
	const deckId = useRef('')
	const contador = useRef(0)
	
	//Renderizado inicial
	useEffect(()=>{
		//esta page deve ser acessada desde o index(tendo o nome) caso contrario redirige 
		if(nome === ''){
			router.push('./')
		}
		document.querySelector('#embaralha').disabled = true
		document.querySelector('#mesanaipes').style.opacity = '1'
		document.querySelector('#mesabotones').style.opacity = '1'
	},[])	

	useEffect(()=>{
		//Obtem um novo baralho e guarda o id no deckId (ref)
		fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
		.then(data=>data.json())
		.then(response=>{
			deckId.current === ''
				?deckId.current = response.deck_id
				:fetchNaipes(5)
		})
	},[deckId])
	
	//Obtem os naipes inicialmente 5 e depois de a um quando puxa novos naipes
	const fetchNaipes = (quantidade) => {
		if(nome !== ''){
			let url = `https://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=${quantidade}`
			fetch(url)
			.then(data=>data.json())
			.then(response=>{
				let	arrayTemp = dadosNaipes
				let objDadosNaipes 
				
				for(let i in response.cards){
					objDadosNaipes = { nome: response.cards[i].code,
									descricao: response.cards[i].value + ' de ' + response.cards[i].suit,
									imagem: response.cards[i].image,
									pontos: numeroAleatorio()
					}
					arrayTemp.push(objDadosNaipes)  
				}
				setDadosNaipes(arrayTemp)
				
				//Se puxou uma carta conta +1
				quantidade === 1
					?contador.current += 1
					:document.querySelector('#embaralha').disabled = false
				
				if(contador.current===3){
					document.querySelector('#puxaNaipe').disabled = true
				}
				renderNaipes()
			})
		}
	}
	
	const renderNaipes = () => {
		let obj = []
		console.log(dadosNaipes)
		for(let i in dadosNaipes){
			obj.push(
				<div className={styles.card} key={i}>
					<img src={dadosNaipes[i].imagem} width="70%" className={styles.card__img}/>
					<section className={styles.card__section}>
						<p className={styles.card__p}>Nome: {dadosNaipes[i].nome}</p>
						<p className={styles.card__p}>Descrição: <br/>{dadosNaipes[i].descricao}</p>
						<p className={styles.card__p}>Pontos: {dadosNaipes[i].pontos}</p>
					</section>
				</div>
			)
		}
		
		setComponentesNaipes(obj)
	}
	
	const embaralha = () => {
		let array = dadosNaipes
		
		for(let i=array.length-1; i>0; i--){
			let j=Math.floor(Math.random() * (i+1));
			[array[i], array[j]] = [array[j], array[i]]
		}
		setDadosNaipes([...array])
		renderNaipes()
	}
	
	const numeroAleatorio = () => {
		return Math.floor(Math.random() * 11)
	}
	
	return(
		<>
			<div className={styles.mainnaipes} id="mesanaipes">
				{[...componentesNaipes]}
			</div>
			<div className={styles.mainbotones} id="mesabotones">
				<button type="button" 
					id="puxaNaipe" 
					className={styles.mainbotones__boton}
					onClick={()=>{fetchNaipes(1)}}>Puxa nova carta</button>
				<button type="button" 
					id="embaralha"
					className={styles.mainbotones__boton}
					onClick={()=>{embaralha()}}>Embaralha cartas</button>
			</div>
		</>
	)
}