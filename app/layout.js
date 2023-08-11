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
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-NR50LTLNF9'></Script>
				<Script>
					{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-NR50LTLNF9');
					`}
				</Script>

				<Script>
					{`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "idrjglaw32");
`}
				</Script>

				<body className='main'>{children}</body>
			</html>
		</>
	)
}
