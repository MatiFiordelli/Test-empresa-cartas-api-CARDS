import Header from './Header.js'
import Footer from './Footer.js'

export default function Main({ children }){
	return( //Componente de Layout
		<div style={{display:"grid", 
					gridTemplateRows:"0.1fr 1fr 0.2fr", 
					alignItems:"center",
					justifycontent:"center",
					textAlign:"center",
					height:"100vh",
					}}>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</div>
	)
}