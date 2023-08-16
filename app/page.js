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
					<p className='p-base text-gray-700 pb-6'>
						David Rivadeneyra -{' '}
						<span className='b-base text-gray-700'>
							Product Designer
						</span>
					</p>
					<h1 className='heading-bigger pb-6'>
						Por más de 4 años he diseñado productos que conecten con
						los usuarios e impulsen startups a lograr sus objetivos
						🎯
					</h1>
					<p className='p-large'>
						¡Hola🖖! Me encanta la colaboración en equipo, las
						interfaces hermosas 🌈, las buenas prácticas y enseñar
						lo que he aprendido.
					</p>
				</main>
{/
*
				<Divider className='divider-red'></Divider>

				<section className='section-block mb-0 pb-16 desktop:pb-12'>
					<h2 className='heading-big text-gray-900 desktop:mb-0'>
						📌 Proyectos destacados
					</h2>
				</section>

				<section className='section-block'>
					<Link
						href='/plan-empresas'
						className='transition ease-in-out duration-300 mb-24 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] cursor-pointer'>
						<div className=''>
							<h4 className='heading-small text-gray-600'>
								Diseño de producto 👈
							</h4>

							<h3 className='heading-big mb-3'>
								Un producto para empresas, diseñado para
								personas
							</h3>
							<p className='p-base mb-4'>
								Ayudé a crear un impacto de cara a clientes
								empresariales (B2B).
							</p>
							<span className='before:block before:absolute before:-inset-0 tablet:group-hover:before:bg-blue-300 relative inline-block transition ease-in-out duration-300'>
								<button className='relative link-button-base link-color-blue group-active:text-blue-500/70'>
									Ir al caso estudio
								</button>
							</span>
						</div>
						<img src='/assets/img/pg.png' alt='' />
					</Link>
					<Link
						href='carrito'
						className='transition ease-in-out duration-300 mb-24 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] '>
						<div>
							<h4 className='heading-small text-gray-600'>
								Experiencia de usuario 👈
							</h4>
							<h3 className='heading-big  mb-3'>
								Una mejor experiencia, para ganar más clientes
							</h3>
							<p className='p-base mb-4'>
								Mejoramos la experiencia de envío de regalos
								digitales.
							</p>
							<span className='before:block before:absolute before:-inset-0 tablet:group-hover:before:bg-purple-300 relative inline-block transition ease-in-out duration-300'>
								<button className='relative link-button-base link-color-purple group-active:text-purple-500/70'>
									Ir al caso estudio
								</button>
							</span>
						</div>
						<img src='/assets/img/ed-carrito-timy.png' alt='' />
					</Link>

					<div
						href=''
						className='transition ease-in-out duration-300  group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] cursor-not-allowed'>
						<div>
							<h4 className='heading-small text-gray-600'>
								Design system 👈
							</h4>
							<h3 className='heading-big  mb-3'>
								Mejorando la comunicación entre diseñadores y
								desarrolladores
							</h3>
							<p className='p-base mb-4'>
								Senté las basese del sistema de diseño de
								RecursosDev.
							</p>
							<span className='before:block before:absolute before:-inset-0 tablet:group-hover:before:bg-green-300 relative inline-block transition ease-in-out duration-300'>
								<button className='relative link-button-base link-color-green group-active:text-green-500/70 '>
									Pronto disponible
								</button>
							</span>
						</div>
						<img src='/assets/img/recursosdev-tiny.png' alt='' />
					</div>
				</section>
			</div> *
/} 
			<Divider className='divider-red'></Divider>
			<Footer></Footer>
		</>
	)
}
