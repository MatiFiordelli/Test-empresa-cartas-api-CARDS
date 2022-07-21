import { useState, useEffect, useContext } from 'react'
import { NomeContext } from './_app.js'
import { useRouter } from 'next/router'
import CardNaipes from '../components/naipes/CardNaipes.js'

export default function Naipes(){
	const {nome, setNome} = useContext(NomeContext)
	const router = useRouter()
	const [deckId, setDeckId] = useState('')
	
	useEffect(()=>{
		//esta page deve ser acessada desde o index(tendo o nome) caso contrario redirige 
		//if(nome === '') router.push('./')
	},[])	

	useEffect(()=>{
		//Obtem um novo baralho e guarda o id no deckId (ref)
		fetch('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
		.then(data=>data.json())
		.then(response=>{
			if(deckId==='') setDeckId(response.deck_id)
		})
	},[deckId])

	return(
		<>
			{nome}
			<div>
				<CardNaipes data={deckId}/>
				<button type="button" id="puxaCarta">Puxa nova carta</button>
				<button type="button" id="embaralha">Embaralha cartas</button>
			</div>
		</>
	)
}