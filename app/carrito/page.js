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
									proyecto tuvo una duración de 1 mes 😶.
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
							className='drop-shadow-lg'
						/>
						<img
							src='./assets/img/car/car-after.png'
							alt=''
							className='drop-shadow-lg'
						/>
					</div>

					<p className='i-base text-center text-gray-600'>
						Algunas vistas del antes y después
					</p>
				</section>
				<Divider className='divider-red'></Divider>
				<section className='section-block mb-0 pb-32'>
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
							<p className='p-base pb-3'>
								Teníamos la idea de{' '}
								<span className='b-base'>
									hacer un test de usabilidad con 30 usuarios
								</span>
								, que sea un test moderado y que eso nos diera
								el entendimiento que estábamos buscando. Pero,{' '}
								<span className='b-base'>no se pudo 😢</span>,
								los directivos{' '}
								<span className='b-base'>
									nos dieron 1 semana
								</span>{' '}
								para sacar algo que llevar a desarrollo, y bueno
								es que teníamos encima una campaña muy
								importante.
							</p>
							<p className='p-base'>
								Entonces, cooperación con el área de ventas,
								decidimos hacer 2 cosas para obtener datos 💪:{' '}
								<span className='b-base'>
									algunas entrevitas (fueron 8) y un análisis
									heurístico,
								</span>{' '}
								(eso era mejor que nada). Ambos estudios nos
								darían datos sobre los que trabajar 🤘.
							</p>
						</div>

						<section className='col-span-full'>
							<img
								src='./assets/img/car/helpsocut-screen.png'
								alt=''
								className='rounded shadow-lg'
							/>
							<p className='i-base text-center text-gray-600'>
								Algunos de los comentarios que recibimos en
								Helpscout
							</p>
						</section>
						<section className='col-span-full'>
							<img
								src='./assets/img/car/car-heuristic-research.png'
								alt=''
								className='rounded shadow-lg'
							/>
							<p className='i-base text-center text-gray-600'>
								Screenshot del análisis heurístico que hicimos
								junto con el área de ventas
							</p>
						</section>
						<section className='col-span-full'>
							<img
								src='./assets/img/car/car-customer-journey.png'
								alt=''
								className='rounded shadow-lg'
							/>
							<p className='i-base text-center text-gray-600'>
								Con los datos reunidos hicimos un Customer
								Journey
							</p>
						</section>
					</div>
				</section>
				<Divider className='divider-red'></Divider>
				<section className='section-block mb-0 pb-10'>
					<div className='section-block-inside'>
						<div>
							<h4 className='heading-small text-green-500'>
								Entendimiento e ideación
							</h4>
							<h3 className='heading-big'>
								Analizando la información obtenida 🔎✍
							</h3>

							<p className='p-base pb-3'>
								Estos fueron los datos más importantes más
								importantes que hallamos:
							</p>
							<ul className='p-base space-y-2 pb-3'>
								<li className='flex'>
									<span className='p-base pr-4'>✅</span>
									<span>
										Entendimos que El estado de la
										aplicación no era clara, porque porque
										elegir enviar un regalo se repetía en 2
										lugares.
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>✅</span>
									<span>
										Es decir, debíamos elimiar la opción de
										envíar regalos en uno de los 2 lados: en
										el menú of canvas o en el carrito. ¿Pero
										donde?
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>✅</span>
									<span>
										Las encuentas indicaban que al llegar al
										carrito un 83% pensaban si regalar o no,
										más que en el Menú of canvas.
									</span>
								</li>
							</ul>
							<p className='p-base pb-3'>
								Luego,{' '}
								<span className='b-base'>
									realizamos una reunión con los directivos y
									el área de ventas
								</span>{' '}
								para exponer la situación y los hallazgos , en
								esa reunión intercambiamos ideas.
							</p>
							{/* <p className='i-base pb-3'>
								<span className='b-base'>
									Un poco de contexto{' '}
									<span className='p-base'>😄</span>:
								</span>{' '}
								Los usuarios agregan cursos al carrito de
								compra, y en el menú of canvas{' '}
								<span className='b-base'>
									tenían 2 opciones de regalar:
								</span>{' '}
								una forma es generando un código de regalo y
								otra enviando un correo al destinario. Sin
								embargo,{' '}
								<span className='b-base'>
									estas opciones aparecían tanto en el menú of
									canvas y luego en el carrito.
								</span>{' '}
								Con la información obtenida llegamos a la
								conclusión que eso era lo que confundía a los
								usuarios.
							</p> */}
							<p className='p-base'>
								<span className='b-base'>Decimos que:</span>{' '}
								debíamos eliminar del menú of canvas la opción
								convertir una compra en regalo, y en cambio
								llevar la opción de regalo directamente al
								carrito, así centralizamos las formas de compra
								en una vista. Además que las 2 formas de regalar
								se mantengan en el carrito y no en 2 vistas
								separadas ✨.
							</p>
						</div>
					</div>
				</section>
				<section className='col-span-full mb-32'>
					<div className='grid row-2 gap-2'>
						<img
							src='./assets/img/car/car-wireframe-01.webp'
							alt=''
							className='rounded drop-shadow-lg'
						/>
						<div className='grid grid-cols-2 gap-2'>
							<img
								src='./assets/img/car/car-wireframe-02.webp'
								alt=''
								className='rounded drop-shadow-lg'
							/>
							<img
								src='./assets/img/car/car-wireframe-03.webp'
								alt=''
								className='rounded drop-shadow-lg'
							/>
						</div>
					</div>

					<p className='i-base text-center text-gray-600'>
						Algunos de los wireframes que realicé luego de las
						decisiones tomaddas 💪
					</p>
				</section>

				<Divider className='divider-red'></Divider>
				<section className='section-block mb-0 pb-10'>
					<div className='section-block-inside'>
						<div>
							<h4 className='heading-small text-green-500'>
								Diseñando en alta fidelidad
							</h4>
							<h3 className='heading-big'>
								Trabajando en el UI 🌈🌟👌
							</h3>

							<p className='p-base pb-3'>
								Luego lanzar ideas a mano y de estas ser
								aprobados por los directivos,{' '}
								<span className='b-base'>
									fuimos directo a crear diseños en alta
									fidelidad,
								</span>{' '}
								esto fue debido a órdenes de los directivos, ya
								que las mejoras debían pasar a producción lo más
								pronto posible, y luego testear con los usuarios
								en las semanas posteriores.{' '}
								<span className='b-base'>
									Estoy de acuerdo con que no fue la mejor
									decisión 🤔
								</span>
								, obviamente antes de pasar a producción debimos
								hacer un testing, sin embargo nos adaptamos a
								las circunstancias, ya que podríamos obtener
								feedback con el área de ventas posteriormente.
							</p>
						</div>
					</div>
				</section>
				<section className='col-span-full flex flex-col gap-10 mb-32'>
					<div className='flex flex-col gap-2'>
						<img
							src='./assets/img/car/car-final-01.webp'
							alt=''
							className='rounded shadow-lg'
						/>
						<img
							src='./assets/img/car/car-final-02.webp'
							alt=''
							className='rounded shadow-lg'
						/>
						<img
							src='./assets/img/car/car-final-03.webp'
							alt=''
							className='rounded shadow-lg'
						/>
						<img
							src='./assets/img/car/car-final-04.webp'
							alt=''
							className='rounded shadow-lg'
						/>
						<p className='i-base text-center text-gray-600'>
							Vistas finales de los cambios en desktop
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<img
							src='./assets/img/car/car-final-05.webp'
							alt=''
							className='rounded shadow-lg'
						/>
						<p className='i-base text-center text-gray-600'>
							Vistas finales de los cambios en mobile
						</p>
					</div>
				</section>
				<Divider className='divider-red'></Divider>
				<section className='section-block mb-0 pb-10'>
					<div className='section-block-inside'>
						<div>
							<h3 className='heading-big'>Resultados 🌈👌</h3>

							<p className='p-base pb-3'>
								Luego de un par de semanas, el área de ventas
								nos alcanzó comentarios de personas que había
								realizado compras de regalos, estos fueron
								algunos de los comentarios:
							</p>
							<p className='p-base'>
								En números, las quejas sobre las compras de
								regalos se{' '}
								<span className='b-base'>
									redujo de un 78% a un 23% ✨.
								</span>
							</p>
						</div>
					</div>
				</section>
				<section className='col-span-full'>
					<img
						src='./assets/img/car/car-hs-final.webp'
						alt=''
						className='rounded shadow-lg'
					/>
					<p className='i-base text-center text-gray-600'>
						Estos son algunos comentarios que pudimos rescatar
					</p>
				</section>
				<Divider className='divider-red'></Divider>
				<section className='section-block'>
					<div className='section-block-inside'>
						<div>
							<h3 className='heading-big'>Aprendizajes 🤘</h3>

							<p className='p-base pb-3'>
								Aprendí que es posible obtener resultados
								rápidos obteniendo en base a pequeñas encuestas
								y entrevistas. Muchas veces{' '}
								<span className='b-base'>
									hay que adaptar las metodologías
								</span>{' '}
								y ajustarlas según sea necesario.
							</p>
							<p className='p-base'>
								Por otro lado, opino que{' '}
								<span className='b-base'>
									debí negociar por al menos un test de
									usabilidad rápido
								</span>{' '}
								luego de los wireframes de baja fidelidad, de
								esta forma los resultados obtenidos no hubiesen
								sido en base más un presentimiendo y más basados
								en datos.
							</p>
						</div>
					</div>
				</section>
				<Divider className='divider-red'></Divider>
				<section className='section-block'>
					<div className='section-block-inside'>
						<Link
							href='/plan-empresas'
							className='p-8 transition ease-in-out duration-300 group rounded-[2rem] border-2 border-gray-100 bg-gray-900/[1.5%] border-gray-900/[5%] cursor-pointer flex flex-row gap-8 items-center'>
							<img
								src='./assets/img/pg.png'
								alt=''
								className='h-32 w-32'
							/>
							<div className='flex flex-col gap-3'>
								<h3 className='heading-big mb-0'>
									Plan empresas
								</h3>

								<span className='before:inline before:absolute before:-inset-0 tablet:group-hover:before:bg-blue-300 relative inline transition ease-in-out duration-300'>
									<button className='inline relative link-button-base link-color-blue group-active:text-blue-500/70'>
										Ir al caso estudio
									</button>
								</span>
							</div>
						</Link>
					</div>
				</section>
				<Divider className='divider-red mb-0'></Divider>
			</div>
			<Footer></Footer>
		</>
	)
}
