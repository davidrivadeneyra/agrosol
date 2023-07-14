import Logo from '../components/logo'
import Divider from '../components/divider'
import Link from 'next/link'

export default function Prueba() {
	return (
		<div className='container'>
			<header className='py-16 tablet:p-16 responsive-header'>
				<Logo className='fill-current fill-gray-900 h-14 tablet:h-16' />
			</header>

			<main className='hero-gray'>
				{/* <h4 className='heading-small text-orange-500'>Resumen</h4> */}
				<p className='p-large text-purple-700'>
					Soy David <span className='b-large'>Product Designer</span>{' '}
					y <span className='link-large'>profesor</span>🖖. Por más de
					4 años he estado creando productos que conecten con los
					usuarios y ayuden a las empresas a alcanzar sus objetivos🎯.
					Me encanta la colaboración en equipo, las interfaces
					hermosas✨ y las buenas prácticas. *
				</p>
			</main>

			<section className='section-block'>
				<div className='section-block-inside'>
					<div>
						<h4 className='heading-small text-orange-500'>
							Empatizando
						</h4>
						<h2 className='heading-big'>El desafío ☝</h2>
						<p className='p-base'>
							Antes de empezar el proyecto la empresa ya vendía
							cursos a otras empresas (B2B), sin embargo estas
							ventas representaban un 2% del macro de ventas de la
							empresa. El objetivo era claro: aumentar las ventas
							corporativas. Sin embargo, nacieron algunas
							preguntas: ¿Qué necesitan las empresas para confiar
							la capacitación de sus empleado en EDteam? ¿Qué
							valor agregado necesitaban para comprar mas cursos y
							capacitar a sus empleados? ¿Les basta con “saber” 🤔
							que sus empleados están tomando cursos para
							capacitarse? ¿Les importa capacitar a sus empleados?
						</p>
					</div>
					<div>
						<h3 className='heading-base'>Buscando la idea 🔎</h3>
						<p className='p-base'>
							Para nosotros en el equipo las preguntas anteriores
							eran un misterio, obvio teníamos algunas ideas, pero
							eran supuestos. Por ellos ejecuté una encuesta con
							21 empresas, ¿y por qué ese número mágico? Porque
							algunas de esas empresas que ya nos habían comprado
							cursos y otras al menos estaban interesadas. El
							propósito era validar la necesidad que suponíamos
							existía.
							<br />
							<br />
						</p>
						<p className='p-base'>
							Las personas encuestadas tenían esta variedad de
							cargos:
						</p>
						<ul className='list-disc list-inside p-base'>
							<li className='p-base'>
								Gerentes de recursos humanos
							</li>
							<li className='p-base'>
								Dueños o Directivos de empresas relacionados con
								tecnología o start ups
							</li>
							<li className='p-base'>
								Líderes de equipo y supervisores del sector
								tecnológico, entre otros
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className='hero-mini-green'>
				<h4 className='heading-small text-green-900 mb-4'>
					La reflexión | 🤔 Repensando el objetivo
				</h4>
				<p className='p-base text-green-700'>
					En base a los insighs entendí que el objetivo del producto
					no eran las empresas como tal, sino las personas que
					administrarían el producto para la capacitación del
					personal. Las empresas podían comprar N cantidad de cursos,
					pero las personas a cargo de el seguimiento eran los que
					necesitaban una forma de gestionar la capacitación de los
					empleados. Estábamos equivocados en el enfoque lo importante
					son las personas y no la cantidad de ventas, obvio sí que
					importa la cantidad de ventas 😆, pero para obtener mejores
					resultados en la ventas , debíamos centrarnos en las
					personas que gestionan la capacitación de sus empleados.
				</p>
			</section>
			<Divider className='divider-red'></Divider>
			<section className='section-block'>
				<div className='section-block-inside'>
					<div>
						<h2 className='heading-big'>El desafío</h2>
						<p className='p-base'>
							Antes de empezar el proyecto la empresa ya vendía
							cursos a otras empresas (B2B), sin embargo estas
							ventas representaban un 2% del macro de ventas de la
							empresa. El objetivo era claro: aumentar las ventas
							corporativas. Sin embargo, nacieron algunas
							preguntas: ¿Qué necesitan las empresas para confiar
							la capacitación de sus empleado en EDteam? ¿Qué
							valor agregado necesitaban para comprar mas cursos y
							capacitar a sus empleados? ¿Les basta con “saber” 🤔
							que sus empleados están tomando cursos para
							capacitarse? ¿Les importa capacitar a sus empleados?
						</p>
					</div>
				</div>
			</section>
			<Divider className='divider-orange'></Divider>
			<section className='section-block'>
				<section className='section-block'>
					<Link
						href='/test'
						className='group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-200 tablet:hover:border-gray-900/[5%] cursor-pointer'>
						<div>
							<h3 className='heading-big tablet:group-hover:underline tablet:group-hover:underline-offset-4 tablet:group-hover:decoration-2 tablet:group-hover:decoration-red-500 mb-4'>
								Un producto para empresas diseñado para personas
							</h3>
							<p className='p-base mb-4'>
								Ayudé a crear un impacto de cara a clientes
								empresariales (B2B). Bajo esa premisa nace el
								producto Plan Empresas * 🌎🚀.
							</p>
							<button className='link-button-base link-color-red tablet:group-hover:decoration-[0.125em]'>
								Ve al proyecto
							</button>
						</div>
						<img src='/assets/img/plan-grupal-tiny.png' alt='' />
					</Link>
				</section>
			</section>
		</div>
	)
}
