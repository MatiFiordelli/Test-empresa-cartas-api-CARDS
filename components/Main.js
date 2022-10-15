import Header from './Header.js'
import Footer from './Footer.js'

export default function Main({ children }){
	return( //Componente de Layout
		<div style={{display:"grid", 
					gridTemplateRows:"0.1fr auto 0.1fr", 
					alignItems:"center",
					justifycontent:"center",
					textAlign:"center",
					width:"100vw",
					height:"100vh",
					position:"absolute",
					margin:"0px",
					padding:"0px"
					}}>
			<Header/>
			<main style={{height:"100%",
						  display:"grid",
						  aligntems:"center"}}>{children}</main>
			<Footer/>
		</div>
	)
}