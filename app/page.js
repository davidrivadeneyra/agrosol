import Logo from './components/logo'
import Divider from './components/divider'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='container'>
			<header className='py-16 tablet:p-16 responsive-header'>
				<Logo className='fill-current fill-gray-900 h-14 tablet:h-16' />
			</header>

			<main className='hero-gray'>
				{/* <h4 className='heading-small text-orange-500'>Resumen</h4> */}
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

			<section className='section-block mb-0'>
				<h4 className='heading-small text-yellow-500'>
					Proyectos destacados
				</h4>
			</section>

			<section className='section-block'>
				<Link
					href='/plan-empresas'
					className='mb-20 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-200 tablet:hover:border-gray-900/[5%] cursor-pointer '>
					<div>
						<h3 className='heading-big tablet:group-hover:underline tablet:group-hover:underline-offset-4 tablet:group-hover:decoration-2 tablet:group-hover:decoration-blue-500 mb-4'>
							Un producto para empresas diseñado para personas
						</h3>
						<p className='p-base mb-4'>
							Ayudé a crear un impacto de cara a clientes
							empresariales (B2B). Bajo esa premisa nace el
							producto Plan Empresas * 🌎🚀.
						</p>
						<button className='link-button-base link-color-blue tablet:group-hover:decoration-[0.125em]'>
							Ve al proyecto
						</button>
					</div>
					<img src='/assets/img/plan-grupal-tiny.png' alt='' />
				</Link>
				<Link
					href='/plan-empresas'
					className='mb-20 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-200 tablet:hover:border-gray-900/[5%] cursor-pointer'>
					<div>
						<h3 className='heading-big tablet:group-hover:underline tablet:group-hover:underline-offset-4 tablet:group-hover:decoration-2 tablet:group-hover:decoration-purple-500 mb-4'>
							Un producto para empresas diseñado para personas
						</h3>
						<p className='p-base mb-4'>
							Ayudé a crear un impacto de cara a clientes
							empresariales (B2B). Bajo esa premisa nace el
							producto Plan Empresas * 🌎🚀.
						</p>
						<button className='link-button-base link-color-purple tablet:group-hover:decoration-[0.125em]'>
							Ve al proyecto
						</button>
					</div>
					<img src='/assets/img/plan-grupal-tiny.png' alt='' />
				</Link>
				<Link
					href='/plan-empresas'
					className='mb-20 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-200 tablet:hover:border-gray-900/[5%] cursor-pointer'>
					<div>
						<h3 className='heading-big tablet:group-hover:underline tablet:group-hover:underline-offset-4 tablet:group-hover:decoration-2 tablet:group-hover:decoration-green-500 mb-4'>
							Un producto para empresas diseñado para personas
						</h3>
						<p className='p-base mb-4'>
							Ayudé a crear un impacto de cara a clientes
							empresariales (B2B). Bajo esa premisa nace el
							producto Plan Empresas * 🌎🚀.
						</p>
						<button className='link-button-base link-color-green tablet:group-hover:decoration-[0.125em]'>
							Ve al proyecto
						</button>
					</div>
					<img src='/assets/img/plan-grupal-tiny.png' alt='' />
				</Link>
			</section>
		</div>
	)
}
