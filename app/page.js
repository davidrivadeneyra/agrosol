import Image from 'next/image'

export default function Home() {
	return (
		<div className=''>
			<div className='bg-gray-200  tablet:border-gray-900/[.08] border-2 p-10'>
				<h1 className='heading-link pb-4 text-orange-500'>Registro</h1>
				<p className='p-base text-gray-700'>
					Mi nombre es David 🖖, soy{' '}
					<span className='text-gray-800 b-base'>
						Product Designer
					</span>{' '}
					y <span className='p-link'>profesor</span> . Por más de 4
					años he estado creando productos que conecten con los
					usuarios y ayuden a las empresas a alcanzar sus objetivos
					🎯. Me encanta la colaboración en equipo, las interfaces
					hermosas ✨ y las buenas prácticas. *
				</p>
			</div>
		</div>
	)
}
