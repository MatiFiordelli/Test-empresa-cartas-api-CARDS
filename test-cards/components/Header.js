import { useContext } from 'react'
import { NomeContext } from '../pages/_app.js'

export default function Header(){
	const {nome, setNome} = useContext(NomeContext) //estado global

	return(
		<>
			<p>Bemvindo {nome}</p>
		</>
	)
}