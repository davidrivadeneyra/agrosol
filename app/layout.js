import '/public/styles.css'
import Script from 'next/script'

export const metadata = {
	title: 'David Rivadeneyra | Portafolio',
	description:
		'Mi nombre es David, soy Product Designer y profesor. Por más de 4 años he estado creando productos que conecten con los usuarios y ayuden a las empresas a alcanzar sus objetivos. Me encanta la colaboración en equipo, las interfaces hermosas y las buenas prácticas.',
}

export default function RootLayout({ children }) {
	return (
		<>
			<html lang='en'>
				{/* <!-- Google tag (gtag.js) --> */}
				<Script>{``}</Script>
				<body className='main'>{children}</body>
			</html>
		</>
	)
}
