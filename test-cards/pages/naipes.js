import { useState, useEffect, useContext, useRef } from 'react'
import { NaipesContext } from './_app.js'
import { useRouter } from 'next/router'

export default function Naipes(){
	const {dadosNaipes, setDadosNaipes} = useContext(NaipesContext) //estado global
	const [componentesNaipes, setComponentesNaipes] = useState([])
	const router = useRouter()
	const deckId = useRef('')
	const contador = useRef(0)
	
	//Renderizado inicial
	useEffect(()=>{
		//esta page deve ser acessada desde o index(tendo o nome) caso contrario redirige 
		//if(nome === '') router.push('./')
			
		document.querySelector('#embaralha').disabled = true
	},[])	

	useEffect(()=>{
		//Obtem um novo baralho e guarda o id no deckId (ref)
		fetch('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
		.then(data=>data.json())
		.then(response=>{
			deckId.current === ''
				?deckId.current = response.deck_id
				:fetchNaipes(2)
		})
	},[deckId])
	
	//Obtem os naipes inicialmente 5 e depois de a um quando puxa novos naipes
	const fetchNaipes = (quantidade) => {
		let url = `http://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=${quantidade}`
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
			
			if(contador.current===3){document.querySelector('#puxaNaipe').disabled = true}
			
			renderNaipes()
		})
	}
	
	const renderNaipes = () => {
		let obj = []
		
		for(let i in dadosNaipes){
			obj.push(
				<div className="card" key={i}>
					<img src={dadosNaipes[i].imagem} width="70px" />
					<p>Nome: {dadosNaipes[i].nome}</p>
					<p>Descrição: {dadosNaipes[i].descricao}</p>
					<p>Pontos: {dadosNaipes[i].pontos}</p>
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
			<div className="mainNaipes">
				{componentesNaipes}
				<button type="button" 
					id="puxaNaipe" 
					className="boton"
					onClick={()=>{fetchNaipes(1)}}>Puxa nova carta</button>
				<button type="button" 
					id="embaralha"
					className="boton"
					onClick={()=>{embaralha()}}>Embaralha cartas</button>
			</div>
		</>
	)
}