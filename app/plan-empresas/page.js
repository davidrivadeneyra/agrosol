import Logo from '../components/logo'
import Divider from '../components/divider'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function PlanEmpresas() {
	return (
		<>
			<Header></Header>
			<div className='container'>
				<section className='section-block mb-0'>
					<span className='relative'>
						<span className='block absolute -inset-0 bg-purple-300 scale-y-[150%] translate-y-[30%]'></span>
						<h1 className='relative heading-bigger text-gray-900 mb-16 inline-block '>
							Plan empresas
						</h1>
					</span>
				</section>
				{/* <section className='section-block mb-16'>
				<span className='relative'>
					<span className='before:block before:absolute before:-inset-0 before:bg-red-500 relative inline-block bottom-0 h-[1/2]'>
						<h1 className='relative heading-bigger text-gray-900  inline-block'>
							Plan empresas
						</h1>
					</span>
				</span>
			</section> */}
				<main className='hero-blue mb-3'>
					<h4 className='heading-base text-red-500'>✍ Resumen</h4>
					<p className='p-base text-blue-700'>
						EDteam es una empresa líder de educación en línea en
						Latinoamérica. A través de la educación, ayuda a cientos
						de personas a obtener su primer empleo en tecnología.
						Fui Product Designer durante más de un año. Aunque mi
						objetivo principal fue ayudar a la empresa a crear
						soluciones amigables para los consumidores (B2C),
						también
						<span className='b-base text-blue-800'>
							{' '}
							ayudé a crear un impacto de cara a clientes
							empresariales (B2B).
						</span>{' '}
						Bajo esa premisa nace el producto Plan Empresas * 🌎🚀.
					</p>
				</main>
				<section className='section-block'>
					<p className='i-base text-gray-600'>
						* Para cumplir con mi acuerdo de confidencialidad, he
						omitido y ofuscado información confidencial en este
						estudio de caso. Toda la información de este estudio de
						caso es mía y no necesariamente refleja los puntos de
						vista de EDteam.
					</p>
				</section>
				<Divider className='divider-red'></Divider>
				<section className='section-block mb-0 pb-12'>
					<div className='section-block-inside'>
						<div>
							<h3 className='heading-big '>
								Duración del proyecto ⏳
							</h3>
							<p className='p-base '>
								Todo el proceso de investigación tuvo una
								duración de 1 mes. El proceso de iteración y
								testing tomó 2 meses. El desarrollo tomó de 3 a
								4 meses. El producto fue lanzado aproximadamente
								en 6 aproximadamente.
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
										área de ventas, desarrolladores frontend
										y backend.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className='mb-32 col-span-full'>
					<img
						src='./assets/img/pg/pg-final.jpg'
						alt=''
						className='rounded'
					/>
					<p className='i-base text-center text-gray-600'>
						Una de las vistas finales del proyecto.
					</p>
				</section>

				<Divider className='divider-blue'></Divider>
				<section className='section-block mb-0 pb-12'>
					<div className='section-block-inside'>
						<div>
							<h4 className='heading-small text-purple-500'>
								Empatizando
							</h4>
							<h3 className='heading-big'>El desafío 🏁</h3>
							<p className='p-base '>
								Antes de empezar el proyecto la empresa ya
								vendía cursos a otras empresas{' '}
								<span className='b-base'>(B2B)</span>, sin
								embargo estas ventas{' '}
								<span className='b-base'>
									representaban un 2%
								</span>{' '}
								del macro de ventas de la empresa. El objetivo
								era claro: aumentar las ventas corporativas. Sin
								embargo, nacieron algunas preguntas: ¿Qué
								necesitan las empresas para confiar la
								capacitación de sus empleado en EDteam? ¿Qué
								valor agregado necesitaban para comprar mas
								cursos y capacitar a sus empleados? ¿Les basta
								con “saber” 🤔 que sus empleados están tomando
								cursos para capacitarse? ¿Les importa capacitar
								a sus empleados?
							</p>
						</div>
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
				<section className='mb-32 col-span-full'>
					<img
						src='./assets/img/pg/ed-pg-encues.png'
						alt=''
						className=''
					/>
					<p className='i-base text-center text-gray-600'>
						Capturas de la encuesta que realizamos.
					</p>
				</section>
				<Divider className='divider-red'></Divider>
				<section className='section-block'>
					<div className='section-block-inside'>
						<div>
							<h4 className='heading-small text-purple-500'>
								Definiendo el desafío
							</h4>
							<h3 className='heading-big'>
								Analizando la información 📊
							</h3>
							<p className='p-base mb-3 '>
								Basándome en las respuestas obtenidas extraje
								siguientes insights clave que me ayudaría a
								entender la verdadera necesidad. Esto fue lo más
								destacado:
							</p>
							<p className='p-base pb-3'>
								Las personas encuestadas tenían esta variedad de
								cargos:
							</p>
							<ul className='p-base space-y-2'>
								<li className='flex'>
									<span className='p-base pr-4'>🔎</span>
									<span>
										<span className='b-base'>Un 35.2%</span>{' '}
										de las empresas encuestadas manifestó
										que es importante tener una forma de
										registrar el avance de estudios de los
										empleados.
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>🔎</span>
									<span>
										<span className='b-base'>
											Un 52.1% de las empresas
										</span>{' '}
										afirmaron que actualmente brindan la
										facilidad de capacitarse a sus empleados
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>🔎</span>
									<span>
										<span className='b-base'>
											El 31% le gustaría tener
										</span>{' '}
										la capacidad de asignar cursos de forma
										personalizada por persona.
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>🔎</span>
									<span>
										<span className='b-base'>Al 21.4%</span>{' '}
										le gustaría necesitan tener métricas
										sobre el progreso de avance de estudios.
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>🔎</span>
									<span>
										<span className='b-base'>
											Solo el 52.4% consideraba
										</span>{' '}
										importante tener una interfaz amigable
										(interesante).
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>🔎</span>
									<span>
										Generación de informes y métricas: para
										las empresas es importante{' '}
										<span className='b-base'>
											obtener informes y métricas
											detallados sobre el progreso de los
											empleados
										</span>
										, las calificaciones obtenidas, el
										tiempo dedicado a los cursos y la tasa
										de finalización. Esto permitirá evaluar
										la efectividad de la capacitación y
										tomar decisiones basadas en datos.
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>🔎</span>
									<span>
										Interfaz intuitiva y amigable: Los
										usuarios esperan una interfaz de usuario
										intuitiva y fácil de usar. La
										simplicidad y la capacidad de navegación
										son aspectos clave para garantizar la
										adopción y el uso continuo del sistema.
									</span>
								</li>
							</ul>
						</div>
						<div className='hero-mini-purple mb-0'>
							<h4 className='heading-base text-purple-500'>
								La reflexión | 🤔 Repensando el objetivo
							</h4>
							<p className='p-base text-purple-700'>
								En base a los insighs entendí que{' '}
								<span className='b-base text-purple-800'>
									{' '}
									el objetivo del producto no eran las
									empresas como tal
								</span>
								, sino las personas que administrarían el
								producto para la capacitación del personal. Las
								empresas podían comprar N cantidad de cursos,{' '}
								<span className='b-base text-purple-800'>
									pero las personas a cargo de el seguimiento
									eran los que necesitaban una forma de
									gestionar
								</span>{' '}
								la capacitación de los empleados. Estábamos
								equivocados en el enfoque lo importante son las
								personas y no la cantidad de ventas, obvio sí
								que importa la cantidad de ventas 😆, pero para
								obtener mejores resultados en la ventas ,
								debíamos centrarnos en las personas que
								gestionan la capacitación de sus empleados.
							</p>
						</div>
						<div>
							<h3 className='heading-base'>
								Determino las oportunidades a resolver de los
								usuarios
							</h3>
							<p className='p-base'>
								En este momento me detuve a pensar en la
								necesidad de crear user personas, sin embargo
								decidí no crearlas 😬 ya que con la data de las
								entrevistas obtuve los insights que por el
								momento del proceso necesitaba. Sin embargo, con
								esa información sí{' '}
								<span className='b-base text-gray-800'>
									creé unos Job Story.
								</span>
							</p>
						</div>
						<div>
							<img
								src='./assets/img/pg/ed-pg-postits-tiny.png'
								alt=''
								className=''
							/>
							<p className='i-base text-center text-gray-600'>
								Historias de usuario.
							</p>
						</div>
					</div>
				</section>
				<Divider className='divider-orange'></Divider>
				<section className='section-block mb-14'>
					<div className='section-block-inside'>
						<div>
							<h4 className='heading-small text-purple-500'>
								Momento del wireframing
							</h4>
							<h3 className='heading-big'>
								Antes, recolecté información de funciones
								similares
							</h3>
							<p className='p-base'>
								Hicimos un{' '}
								<span className='b-base text-gray-800'>
									research de funcionalidades similares,
								</span>{' '}
								pero de otras industrias. Por ejemplo, vimos que
								Netflix, Spotify o Dropbox, entre otras, tienen
								un sistema de plan para grupos. Lo que ya
								estaban haciendo otras industrias nos sirvión
								para darnos una idea de la dirección visual en
								las funcionalidades que necesitábamos para
								nuestro producto.
							</p>
						</div>
					</div>
				</section>
				<div className='col-span-full mb-14'>
					<img
						src='./assets/img/pg/ed-pg-study.png'
						alt=''
						className=''
					/>
					<p className='i-base text-center text-gray-600'>
						Research de funcionalidades
					</p>
				</div>
				<section className='section-block mb-14'>
					<div className='section-block-inside'>
						<div>
							<h3 className='heading-base'>
								A papel y lápiz 📄✍
							</h3>
							<p className='p-base mb-3 '>
								Con suficiente información obtenida era momento
								de{' '}
								<span className='b-base text-gray-800'>
									plasmar las ideas
								</span>{' '}
								e hice unos cuantos wireframes, me gusta mucho
								lanzar las ideas primero a mano, así puedo
								esbozar de forma rápida las ideas y compartirlas
								con el equipo.
							</p>
						</div>
					</div>
				</section>
				<section className='col-span-full gap-2 grid grid-cols-2 tablet:grid-cols-3'>
					<img
						src='/assets/img/pg/pg-w-01.jpg'
						alt=''
						className='rounded shadow-lg tablet:col-start-1 tablet:col-span-1'
					/>
					<img
						src='/assets/img/pg/pg-w-02.jpg'
						alt=''
						className='rounded shadow-lg tablet:col-start-2 tablet:col-span-1'
					/>
					<img
						src='/assets/img/pg/pg-w-03.jpg'
						alt=''
						className='rounded shadow-lg tablet:col-start-3 tablet:col-span-1'
					/>
					<img
						src='/assets/img/pg/pg-w-04.jpg'
						alt=''
						className='rounded shadow-lg tablet:col-start-1 tablet:col-span-1'
					/>
					<img
						src='/assets/img/pg/pg-w-05.jpg'
						alt=''
						className='rounded shadow-lg tablet:col-start-2 tablet:col-span-1'
					/>
					<img
						src='/assets/img/pg/pg-w-06.jpg'
						alt=''
						className='rounded shadow-lg tablet:col-start-3 tablet:col-span-1'
					/>
				</section>
				<p className='section-block i-base text-center text-gray-600'>
					Algunos de los wireframes con los que empezamos
				</p>
				<Divider className='divider-blue'></Divider>
				<section className='section-block mb-14'>
					<div className='section-block-inside'>
						<div>
							<h4 className='heading-small text-purple-500'>
								... testing 👀
							</h4>

							<h3 className='heading-big'>
								Hora de analizar la información
							</h3>
							<p className='p-base mb-3 '>
								Testeamos los wireframes de media fidelidad con
								unos 18 usuarios, usamos maze con ese fin, y...{' '}
								<span className='b-base'>
									los usuarios no lo entendieron
								</span>{' '}
								. Fue un momento de aprendizaje. Noté que no
								estaba siendo claro para los usuarios cómo ver
								el resumen de estudios de cada usuario. Además,
								hice unas entrevistas vía meet con 10 contactos
								y fue evidente que{' '}
								<span className='b-base text-gray-800'>
									{' '}
									sintieron el diseño confuso.
								</span>{' '}
								La información fue muy importante. tuvimos que
								iterar. Abajo muestro la prueba que salió mal,
								muy mal, solo un 6% de usuarios entendieron el
								flujo.{' '}
								<span className='b-base text-gray-800'>
									Hicimos nuevos wireframes e hicimos otro
									test de usabilidad
								</span>{' '}
								, el segundo, no fue un éxito total, pero para
								un MVP del producto los directivos estuvieron
								conformes con que un{' '}
								<span className='b-base text-gray-800'>
									67% de usuarios
								</span>{' '}
								entendieran el flujo, y con eso pasamos a la
								etapa de diseño de alta calidad.
							</p>
						</div>
					</div>
				</section>
				<section className='mb-32 col-span-full'>
					<img
						src='./assets/img/pg/pg-m-02.jpg'
						alt=''
						className='rounded'
					/>
					<p className='i-base text-center text-gray-600'>
						Capturas los test de usabilidad: A la izquierda, una
						prueba que falló en todo. A la derecha, una iteración
						que tuvo mejores resultados.
					</p>
				</section>
				<Divider className='divider-red'></Divider>
				<section className='section-block mb-14'>
					<div className='section-block-inside'>
						<div>
							<h4 className='heading-small text-purple-500'>
								Diseñando en alta fidelidad
							</h4>

							<h3 className='heading-big'>
								Trabajando en el UI 🌈🌟👌
							</h3>
							<p className='p-base mb-3'>
								Pensé que contaba con suficiente data e
								información testeada para proceder con crear los
								diseños en alta fidelidad. Sin embargo,{' '}
								<span className='b-base text-gray-800'>
									hubieron mas cambios
								</span>{' '}
								, esta vez fue de parte de los directivos, estás
								fueron las indicaciones:
							</p>
							<ul className='p-base space-y-2'>
								<li className='flex'>
									<span className='p-base pr-4'>⛳</span>
									<span>
										En su opinión, no era suficiente mostrar
										la vista con una lista de usuarios (en
										la pestaña Dashboard),{' '}
										<span className='b-base text-gray-800'>
											para ellos era necesaria otra
											sección en el menú
										</span>{' '}
										que contenga al total de las personas
										que actualmente son parte de mi empresa,
										como lo que ya no son parte. Esta
										sección del menú
										<span className='b-base text-gray-800'>
											{' '}
											se debería llamar Mi equipo.
										</span>{' '}
										No estuve de acuerdo con esa decisión,
										pero no hubo oportunidad de negociarla
										así que cedí, uno debe aprender a ceder
										a los tomadores decisiones, y entender
										que muchas veces tienen sus razones.{' '}
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>⛳</span>
									<span>
										Por otro lado, en el modal, en la
										sección de Agregar más licencias,{' '}
										<span className='b-base text-gray-800'>
											ya no se tendría una funcionalidad
											de compra desde el modal,
										</span>{' '}
										si no, el botón de Quiero más licencias
										abriría un formulario y la información
										recolectaba iría a Soporte, esto para
										alargar más el tiempo de desarrollo.
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>⛳</span>
									<span>
										Un extra, los directivos indicaron su
										afinidad{' '}
										<span className='b-base text-gray-800'>
											con colocar el logo de la
											empresa/startup
										</span>{' '}
										que adquiera el plan de empresas en
										lugar del logo de EDteam, así se
										sentirían mejor identificados con su
										interfaz.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className='col-span-full mb-12'>
					<div className='relative pb-[56.25%] h-0'>
						<iframe
							src='https://www.loom.com/embed/aaa4681e44ab4a5391cfb130c97cb670?sid=68773a9e-7315-4651-b64a-28f642837c5a'
							frameBorder='0'
							allowFullScreen
							className='absolute top-0 left-0 w-full h-full rounded'></iframe>
					</div>
					<p className='i-base text-center text-gray-600'>
						Video presentación del prototipo final 🎬
					</p>
				</section>
				<section className='mb-12 col-span-full'>
					<img
						src='./assets/img/pg/ed-pg-handoff.png'
						alt=''
						className='rounded'
					/>
					{/* <p className='i-base text-center text-gray-600'>
					Algunas vistas del handoff
				</p> */}
				</section>
				<section className='mb-12 col-span-full'>
					<img
						src='./assets/img/pg/handoff-modals.png'
						alt=''
						className='rounded drop-shadow-md'
					/>
					{/* <p className='i-base text-center text-gray-600'>
					Algunas vistas del handoff
				</p> */}
				</section>
				<section className='mb-12 col-span-full'>
					<img
						src='./assets/img/pg/layout-dark.png'
						alt=''
						className='rounded shadow-md'
					/>
				</section>
				<section className='mb-32 col-span-full'>
					<img
						src='./assets/img/pg/layout-light.png'
						alt=''
						className='rounded shadow-md'
					/>
					<p className='i-base text-center text-gray-600'>
						Algunas vistas del handoff y mockups
					</p>
				</section>
				<Divider className='divider-purple'></Divider>
				<section className='section-block mb-14'>
					<div className='section-block-inside'>
						<div>
							<h3 className='heading-big'>Resultados 🌈👌</h3>

							<ul className='p-base space-y-2'>
								<li className='flex'>
									<span className='p-base pr-4'>🚀</span>
									<span>
										<span className='b-base text-gray-800'>
											Las ventas B2B subieron un 6%
										</span>{' '}
										en los primeros 2 meses luego del
										lanzamiento.
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>🚀</span>
									<span>
										Hubo satisfacción desde el lado de los
										usuarios que ya eran clientes de EDteam,{' '}
										<span className='b-base text-gray-800'>
											un 63% de los usuarios
										</span>{' '}
										que ya eran clientes de EDteam manifestó
										que estaban satisfechos con el nuevo
										producto (aunque tenían feedback que
										darnos).
									</span>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className='section-block'>
					<div className='section-block-inside'>
						<div>
							<h3 className='heading-big'>Aprendizajes 📚</h3>

							<ul className='p-base space-y-2'>
								<li className='flex'>
									<span className='p-base pr-4'>☁</span>
									<span>
										El trabajo fue durísimo, fueron meses de
										iteraciones, aprendizajes, frustaciones,
										errores, fracasos, muchas reuniones,
										etc. Las ideas que pensábamos que
										funcionaría no lo hacían, en fin. Me
										ayudó a mejorar mi resiliencia.
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>☁</span>
									<span>
										Valoro que este proyecto me ayudó a
										mejorar mis habilidades de comunicación,
										hubo constante contacto con los
										desarrolladores, directivos y otras
										áreas de la empresa, la buena
										comunicación fue clave.
									</span>
								</li>
								<li className='flex'>
									<span className='p-base pr-4'>☁</span>
									<span>
										Además, siento que aprendí a delegar
										trabajos, fuimos 2 UX en el proceso, yo
										estaba a cargo y a veces (muchas veces)
										yo quería ocuparte de mucho, pero debía
										aprender a delegar.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
			<Divider className='divider-gray'></Divider>
			<Footer></Footer>
		</>
	)
}
