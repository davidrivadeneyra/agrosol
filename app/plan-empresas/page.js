import Logo from '../components/logo'
import Divider from '../components/divider'
import Link from 'next/link'

export default function PlanEmpresas() {
	return (
		<div className='container'>
			<header className='py-16 tablet:p-16 responsive-header'>
				<Logo className='fill-current fill-gray-900 h-14 tablet:h-16' />
			</header>
			<main className='hero-gray mb-8'>
				<h4 className='heading-small text-orange-500 mb-4'>Resumen</h4>
				<p className='p-base text-purple-700'>
					EDteam es una empresa líder de educación en línea en
					Latinoamérica. A través de la educación, ayuda a cientos de
					personas a obtener su primer empleo en tecnología. Fui
					Product Designer durante un poco más de un año. Aunque mi
					objetivo principal fue ayudar a la empresa a crear
					soluciones amigables para los consumidores (B2C), también
					ayudé a crear un impacto de cara a clientes empresariales
					(B2B). Bajo esa premisa nace el producto Plan Empresas *
					🌎🚀.
				</p>
			</main>
			<section className='section-block'>
				<p className='p-base italic text-gray-600'>
					* Para cumplir con mi acuerdo de confidencialidad, he
					omitido y ofuscado información confidencial en este estudio
					de caso. Toda la información de este estudio de caso es mía
					y no necesariamente refleja los puntos de vista de EDteam.
				</p>
			</section>
		</div>
	)
}
