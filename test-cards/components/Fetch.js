import { useEffect, useRef} from 'react'

export default function Fetch() {
	const deckId = useRef('')
	useEffect(()=>{
		fetch('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
		.then(data=>data.json())
		.then(response=>{
			if(deckId.current==='') deckId.current = response.deck_id
			console.log(deckId.current) 
		})
	},[])
}