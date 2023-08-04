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
					<h1 className='heading-bigger pb-12'>
						Una mejor experiencia para enviar regalos
					</h1>
					<div className='py-12 border-y-[1px] border-gray-900/[8%]'>
						<h4 className='p-base text-green-500 pb-6'>
							✍ Resumen
						</h4>
						<p className='p-base'>
							EDteam es una empresa que vende cursos online. Uno
							de las opciones a la hora de comprar cursos es la
							posibilidad de regalar cursos. Es decir comprar un
							curso, o suscripción para otra persona. Sin embargo,{' '}
							<span className='b-base'>
								recurrentemente teníamos quejas
							</span>{' '}
							que llegaban al área de soporte indicando{' '}
							<span className='b-base'>
								que no podían hacer los regalos
							</span>
							, estas quejas representaban un 78% del total de los
							casos de regalo. De ese 78% un 53% finalizaban la
							compra. Me encargaron analizar el flujo de compra
							con el objetivo de{' '}
							<span className='b-base'>aumentar ese 53%.</span>
						</p>
					</div>
				</main>

				<section className='section-block mb-12'>
					<div className='section-block-inside'>
						<div>
							<h3 className='heading-big '>
								Duración del proyecto ⏳
							</h3>
							<p className='p-base '>
								Entre el proceso de investigación, testing y
								desarrollo el{' '}
								<span className='b-base'>
									proyecto tuvo una duración de 1 mes.
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
									<span>
										Mi rol: Research, UI Designer (Product
										Designer)
									</span>
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
				<section className='mb-32 col-span-full'>
					<div className='grid grid-rows-2 gap-4'>
						<img
							src='./assets/img/car/car-before.png'
							alt=''
							className='shadow-lg'
						/>
						<img
							src='./assets/img/car/car-after.png'
							alt=''
							className='shadow-lg'
						/>
					</div>

					<p className='i-base text-center text-gray-600'>
						Algunas vistas del antes y después
					</p>
				</section>
				<Divider className='divider-red'></Divider>
				<section className='section-block mb-0 pb-12'>
					<div className='section-block-inside'>
						<div>
							<h4 className='heading-small text-green-500'>
								Empatizando
							</h4>
							<h3 className='heading-big'>El desafío 🏁</h3>
							<p className='p-base pb-3'>
								Este proyecto empezó por escuchar a nuestros
								clientes actuales, ya que de parte de ellos
								venían las quejas, queríamos entender en que
								parte de flujo los usuarios se veían afectados y
								cómo podríamos mejorar nuestra respuesta. Sin
								embargo, el hecho haya confusión a la hora de
								comprar los regalos era el síntoma{' '}
								<span className='b-base'>
									¿Pero cuál era la razón detrás?
								</span>
							</p>
							<p className='p-base '>
								En cooperación con el área de ventas realizamos
								entrevistas con los usuarios que habían mandado
								mensajes en el inbox de HS. Las entrevistas nos
								dieron información de las necesidades de los
								usuarios.
							</p>
						</div>
						<section className='col-span-full'>
							<img
								src='./assets/img/car/helpsocut-screen.png'
								alt=''
								className='rounded shadow-lg'
							/>
							<p className='i-base text-center text-gray-600'>
								Algunas vistas del antes y después
							</p>
						</section>
						<div>
							<h3 className='heading-base '>
								Buscando la idea 🔎
							</h3>
							<p className='p-base mb-3 '>
								Para nosotros en el equipo las preguntas
								anteriores{' '}
								<span className='b-base'>eran un misterio</span>{' '}
								, obvio teníamos algunas ideas, pero eran
								supuestos. Por ellos ejecuté{' '}
								<span className='b-base'>
									una encuesta con 21 empresas
								</span>{' '}
								, ¿y por qué ese número mágico? Porque algunas
								de esas empresas que ya nos habían comprado
								cursos y otras al menos estaban interesadas. El
								propósito era validar la necesidad que
								suponíamos existía.
							</p>

							<p className='p-base pb-3'>
								Las personas encuestadas tenían esta variedad de
								cargos:
							</p>
							<ul className='p-base space-y-2'>
								<li className='flex'>
									<span className='p-base pr-4'>💼</span>
									<span>Gerentes de recursos humanos.</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>💼</span>
									<span>
										Dueños o Directivos de empresas
										relacionados con tecnología o start ups.
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>💼</span>
									<span>
										Líderes de equipo y supervisores del
										sector tecnológico, entre otros.
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
