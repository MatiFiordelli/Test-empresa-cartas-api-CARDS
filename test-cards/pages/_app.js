import React, { useState } from 'react'
import '../styles/globals.css'
import Main from '../components/Main.js'

export const NomeContext = React.createContext()

export default function MyApp({ Component, pageProps }) {
	const [nome, setNome] = useState('')
	
	return(
		<Main>
			<NomeContext.Provider value={{ nome, setNome}}>
				<Component {...pageProps} />
			</NomeContext.Provider>
		</Main>
	)
}