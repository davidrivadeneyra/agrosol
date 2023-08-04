import Logo from '../components/logo'
import Divider from '../components/divider'
import Link from 'next/link'
import HeaderMini from '../components/header-mini'
import Footer from '../components/footer'

export default function Carrito() {
	return (
		<>
			<HeaderMini></HeaderMini>
			<div className='container'>
				<main className='section-block mb-32'>
					<h4 className='p-base text-red-500 pb-6'>✍ Resumen</h4>
					<h1 className='heading-bigger pb-6'>
						Rediseño del flujo de compra
					</h1>
					<p className='p-base'>
						Uno de los paso más importantes del proceso de compra es
						la parte final del mismo proceso, el cierre de venta y
						la elección de formas de pagos. En este paso del flujo
						indentificamos que llegabam quejas al área de soporte,
						debido a que los usuarios o no cerraban la venta o no
						sabía cómo realizar regalos.{' '}
						<span className='b-base'>
							{' '}
							Un 25% de las consultas en la venta ern quejas,
						</span>{' '}
						debido a esto empezó un análisos del mismo proceso
						creamos un mejora en el flujo, abarcando las funciones
						de enviar regalos y cargar cupones.
					</p>
				</main>
				<Divider className='divider-red'></Divider>
				<section className='section-block mb-0 pb-12'>
					<div className='section-block-inside'>
						<div>
							<h3 className='heading-big '>
								Duración del proyecto ⏳
							</h3>
							<p className='p-base '>
								Entre el proceso de investigación, testing y
								desarrollo el{' '}
								<span className='b-base'>
									proyecto tuvo una duración de 2 meses.
								</span>
							</p>
						</div>
						<div>
							<h3 className='heading-base '>
								Mi rol y las personas con las que colaboré 👩‍💻👨‍💻
							</h3>
							<ul className='p-base space-y-2'>
								<li className='flex'>
									<span className='p-base pr-4'>🔥</span>
									<span>Mi rol: Product Designer</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>🔥</span>
									<span>
										Colaboré con: un pasante UX, directivos,
										área de ventas y el front y backend.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
			<Footer></Footer>
		</>
	)
}
