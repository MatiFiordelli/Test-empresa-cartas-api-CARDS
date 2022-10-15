import React, { useState } from 'react'
import '../styles/globals.css'
import Main from '../components/Main.js'
import { getRedirectStatus } from 'next/dist/lib/load-custom-routes'

export const NomeContext = React.createContext()
export const NaipesContext = React.createContext()

export default function MyApp({ Component, pageProps }) {
	//Estados globais
	const [nome, setNome] = useState('')
	const [dadosNaipes, setDadosNaipes] = useState([])
	
	return(
		<NomeContext.Provider value={{nome, setNome}}>
			<NaipesContext.Provider value={{ dadosNaipes, setDadosNaipes}}>
				<Main>
					<Component {...pageProps} />
				</Main>
			</NaipesContext.Provider>
		</NomeContext.Provider>	
	)
}