import Logo from './components/logo'
import Divider from './components/divider'
import Header from './components/header'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='container'>
			<Header></Header>

			<main className='hero-blue'>
				{/* <h4 className='heading-small text-orange-500'>Resumen</h4> */}
				<p className='p-large text-blue-700'>
					Mi nombre es David🖖, soy{' '}
					<span className='b-large text-blue-800'>
						Product Designer
					</span>{' '}
					y{' '}
					<span className='link-large text-blue-800 hover:text-purple-500'>
						profesor
					</span>
					. Por más de 4 años he estado creando productos que conecten
					con los usuarios y ayuden a las empresas a alcanzar sus
					objetivos🎯. Me encanta la colaboración en equipo, las
					interfaces hermosas✨ y las buenas prácticas. *
				</p>
			</main>

			<section className='section-block mb-0 pb-16 desktop:pb-12'>
				<h2 className='heading-small text-yellow-500 desktop:mb-0'>
					Proyectos destacados 📌
				</h2>
			</section>

			<section className='section-block'>
				<Link
					href='/plan-empresas'
					className='transition ease-in-out duration-300 mb-24 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] cursor-pointer'>
					<div className=''>
						{/* <button className='b-base uppercase py-2 px-4 rounded-full bg-purple-200 mb-4'>
							Producto
						</button> */}
						<h3 className='heading-big tablet:group-hover:underline tablet:group-hover:underline-offset-4 tablet:group-hover:decoration-2 tablet:group-hover:decoration-blue-500 mb-3'>
							Un producto para empresas, diseñado para personas
						</h3>
						<p className='p-base mb-4'>
							Ayudé a crear un impacto de cara a clientes
							empresariales (B2B). Bajo esa premisa nace el
							producto Plan Empresas.
						</p>
						<span className='before:block before:absolute before:-inset-0 tablet:group-hover:before:bg-blue-300 relative inline-block transition ease-in-out duration-300'>
							<button className='relative link-button-base link-color-blue '>
								Ve al caso estudio
							</button>
						</span>
					</div>
					<img src='/assets/img/pg.png' alt='' />
				</Link>
				<Link
					href='/plan-empresas'
					className='transition ease-in-out duration-300 mb-24 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] cursor-pointer'>
					<div>
						<h3 className='heading-big tablet:group-hover:underline tablet:group-hover:underline-offset-4 tablet:group-hover:decoration-2 tablet:group-hover:decoration-purple-500 mb-3'>
							Un producto para empresas, diseñado para personas
						</h3>
						<p className='p-base mb-4'>
							Ayudé a crear un impacto de cara a clientes
							empresariales (B2B). Bajo esa premisa nace el
							producto Plan Empresas.
						</p>
						<span className='before:block before:absolute before:-inset-0 tablet:group-hover:before:bg-purple-300 relative inline-block transition ease-in-out duration-300'>
							<button className='relative link-button-base link-color-purple'>
								Ve al caso estudio
							</button>
						</span>
					</div>
					<img src='/assets/img/ed-carrito-timy.png' alt='' />
				</Link>

				<Link
					href='/plan-empresas'
					className='transition ease-in-out duration-300 mb-24 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] cursor-pointer'>
					<div>
						<h3 className='heading-big tablet:group-hover:underline tablet:group-hover:underline-offset-4 tablet:group-hover:decoration-2 tablet:group-hover:decoration-green-500 mb-3'>
							Un producto para empresas diseñado para personas
						</h3>
						<p className='p-base mb-4'>
							Ayudé a crear un impacto de cara a clientes
							empresariales (B2B). Bajo esa premisa nace el
							producto Plan Empresas.
						</p>
						<span className='before:block before:absolute before:-inset-0 tablet:group-hover:before:bg-green-300 relative inline-block transition ease-in-out duration-300'>
							<button className='relative link-button-base link-color-green '>
								Ve al caso estudio
							</button>
						</span>
					</div>
					<img src='/assets/img/pg.png' alt='' />
				</Link>
				<Divider className='divider-red'></Divider>
			</section>
		</div>
	)
}
