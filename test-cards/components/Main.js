import Header from './Header.js'
import Footer from './Footer.js'

export default function Main({ children }){
	return( //Componente de Layout
		<>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</>
	)
}