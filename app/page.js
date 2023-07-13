import Logo from '../app/components/logo'
import Divider from '../app/components/divider'

export default function Home() {
	return (
		<div className='grid grid-cols-4 gap-x-16 px-10 tablet:grid-cols-12 tablet:gap-x-16'>
			<header className='py-16 tablet:p-16 responsive-header'>
				<Logo className='fill-current fill-gray-900 h-14 tablet:h-16' />
			</header>

			<main className='hero'>
				<h4 className='heading-small text-orange-500'>Resumen</h4>
				<p className='p-large text-purple-700'>
					Mi nombre es David, soy{' '}
					<span className='b-large'>Product Designer</span> y{' '}
					<span className='link-large'>profesor</span>🖖. Por más de 4
					años he estado creando productos que conecten con los
					usuarios y ayuden a las empresas a alcanzar sus objetivos🎯.
					Me encanta la colaboración en equipo, las interfaces
					hermosas✨ y las buenas prácticas. *
				</p>
			</main>
			<Divider className='divider-purple'></Divider>
			<section className='section-block'>
				<div className='section-block-inside'>
					<div>
						<h4 className='heading-small text-orange-500'>
							Empatizando
						</h4>
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
			<section className='hero-mini'>
				<h4 className='heading-small text-purple-900 mb-4'>
					La reflexión | 🤔 Repensando el objetivo
				</h4>
				<p className='p-base text-purple-700'>
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
		</div>
	)
}
