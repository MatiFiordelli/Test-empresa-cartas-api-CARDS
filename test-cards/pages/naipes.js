import { useContext } from 'react'
import { NomeContext } from './_app.js'

export default function Naipes(){
	const {nome, setNome} = useContext(NomeContext)

	return(
		<>
			{nome}
			
		</>
	)
}