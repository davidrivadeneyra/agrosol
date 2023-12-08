import Logo from './components/logo'
import Divider from './components/divider'
import HeaderMini from './components/header-mini'
import Footer from './components/footer'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<HeaderMini></HeaderMini>
			<div className='container'>
				<main className='section-block mb-32'>
					<h1 className='heading-bigger pb-6'>Product Designer</h1>
					<p className='p-large'>
						<span className='b-large'>Tengo 4 años</span> trabajando
						como{' '}
						<span className='b-large'>
							diseñador de experiencia de usuario y haciendo
							diseño experimental
						</span>{' '}
						para startups y empresas de Bolivia, Colombia, Uruguay,
						EEUU y Perú, las he ayudándo a lograr de sus objetivos.
						Me encanta la colaboración en equipo, las interfaces
						hermosas 🌈, y las buenas prácticas.
					</p>
				</main>

				<section className='section-block mb-0 pb-16 desktop:pb-12'>
					<h2 className='heading-big text-gray-900 desktop:mb-0'>
						📌 Proyectos destacados
					</h2>
				</section>

				<section className='section-block'></section>
			</div>
			<Footer></Footer>
		</>
	)
}
