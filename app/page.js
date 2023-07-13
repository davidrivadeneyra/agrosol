import Logo from '../app/components/logo'

export default function Home() {
	return (
		<div className='desktop:max-w-5xl mx-auto'>
			<div className='grid grid-cols-10 gap-x-16 mx-auto'>
				<header className='col-start-2 col-span-8 mx-16 py-16'>
					<Logo className='fill-current fill-gray-900 h-16 ' />
				</header>

				<div className='bg-purple-200 tablet:border-purple-900/[.08] border-2 p-16 tablet:rounded-[2rem] col-start-2 col-span-8'>
					{/* <h2 className='pb-4'>
						Un producto para empresas diseñado para personas
					// </h2> */}
					<p className='p-large text-purple-700'>
						Mi nombre es David, soy{' '}
						<span className='b-large'>Product Designer</span> y{' '}
						<span className='link-large'>profesor</span>🖖. Por más
						de 4 años he estado creando productos que conecten con
						los usuarios y ayuden a las empresas a alcanzar sus
						objetivos🎯. Me encanta la colaboración en equipo, las
						interfaces hermosas✨ y las buenas prácticas. *
					</p>

					{/* <a href='#' className='link-button-base link-color-green '>
						Ve al producto
					</a> */}
				</div>
			</div>
		</div>
	)
}
