import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CardNaipes(props){
	const [nomeNaipe, setNomeNaipe] = useState('')
	const [imagem, setImagem] = useState('')
	const [descricao, setDescricao] = useState('')
	
	console.log(props)
	useEffect(()=>{
		let url = `http://deckofcardsapi.com/api/deck/${props.data}/draw/?count=1`
		fetch(url)
		.then(data=>data.json())
		.then(response=>{
			setNomeNaipe(response.cards[0].code)
			setDescricao(response.cards[0].value + ' de ' + response.cards[0].suit)
			setImagem(`${response.cards[0].image}`)
		})
	},[])
	//console.log(imagem )
	
	return(
		<div>
			<img src={imagem}  />
			<p>Nome: {nomeNaipe}</p>
			<p>Descrição: {descricao}</p>
			<p>Pontos: </p>
		</div>
	)	
}