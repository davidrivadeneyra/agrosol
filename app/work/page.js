import Logo from '../components/logo'
import Divider from '../components/divider'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Work() {
	return (
		<>
			<Header></Header>
			<div className='container'>
				<section className='section-block mb-0'>
					<span className='relative'>
						<span className='block absolute -inset-0 bg-purple-300 scale-y-[150%] translate-y-[30%]'></span>
						<h1 className='relative heading-bigger text-gray-900 mb-16 inline-block '>
							Mi trabajo
						</h1>
					</span>
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
									Ve al caso estudio
								</button>
							</span>
						</div>
						<img src='/assets/img/pg.png' alt='' />
					</Link>
					<div
						href=''
						className='transition ease-in-out duration-300 mb-24 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] cursor-not-allowed'>
						<div>
							<h4 className='heading-small text-gray-600'>
								Experiencia de usuario 👈
							</h4>
							<h3 className='heading-big  mb-3'>
								Una mejor experiencia, para ganar más clientes
							</h3>
							<p className='p-base mb-4'>
								Mejoré el flujo de cierre de venta y así
								disminuir la cantidad de los carritor
								abandonados.
							</p>
							<span className='before:block before:absolute before:-inset-0 tablet:group-hover:before:bg-purple-300 relative inline-block transition ease-in-out duration-300'>
								<button className='relative link-button-base link-color-purple group-active:text-purple-500/70 cursor-not-allowed'>
									Pronto disponible
								</button>
							</span>
						</div>
						<img src='/assets/img/ed-carrito-timy.png' alt='' />
					</div>

					<div
						href=''
						className='transition ease-in-out duration-300  group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] cursor-not-allowed'>
						<div>
							<h4 className='heading-small text-gray-600'>
								Design system 👈
							</h4>
							<h3 className='heading-big  mb-3'>
								Un sistema de diseño mejorar impulsar la
								velocidad
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
			</div>
			<Divider className='divider-purple'></Divider>
			<Footer></Footer>
		</>
	)
}
