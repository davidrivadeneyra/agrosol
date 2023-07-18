import Logo from '../components/logo'
import Divider from '../components/divider'
import Link from 'next/link'
import Header from '../components/header'

export default function PlanEmpresas() {
	return (
		<div className='container'>
			<Header></Header>

			<section className='section-block mb-0'>
				<span className='relative'>
					<span className='block absolute -inset-0 bg-purple-300 scale-y-[150%] translate-y-[30%]'></span>
					<h1 className='relative heading-bigger text-gray-900 mb-16 inline-block '>
						Plan empresas
					</h1>
				</span>
			</section>
			<main className='hero-blue mb-8'>
				<h4 className='heading-small text-red-500 mb-lg'>✍ Resumen</h4>
				<p className='p-base text-blue-700'>
					EDteam es una empresa líder de educación en línea en
					Latinoamérica. A través de la educación, ayuda a cientos de
					personas a obtener su primer empleo en tecnología. Fui
					Product Designer durante un poco más de un año. Aunque mi
					objetivo principal fue ayudar a la empresa a crear
					soluciones amigables para los consumidores (B2C), también
					ayudé a crear un impacto de cara a clientes empresariales
					(B2B). Bajo esa premisa nace el producto Plan Empresas *
					🌎🚀.
				</p>
			</main>
			<section className='section-block'>
				<p className='p-base italic text-gray-600'>
					* Para cumplir con mi acuerdo de confidencialidad, he
					omitido y ofuscado información confidencial en este estudio
					de caso. Toda la información de este estudio de caso es mía
					y no necesariamente refleja los puntos de vista de EDteam.
				</p>
			</section>
			<Divider className='divider-red'></Divider>
			<section className='section-block mb-0 pb-12'>
				<div className='section-block-inside'>
					<div>
						<h3 className='heading-big mb-6'>
							Duración del proyecto ⏳
						</h3>
						<p className='p-base '>
							Todo el proceso de investigación tuvo una duración
							de 1 mes. El proceso de iteración y testing tomó 2
							meses. La salida a producción demoró unos 3 a 4
							meses. El producto fue lanzado aproximadamente en 2
							meses.
						</p>
					</div>
					<div>
						<h3 className='heading-base mb-6'>
							Mi rol y las personas con las que colaboré 👩‍💻👨‍💻
						</h3>
						<ul className='p-base space-y-2'>
							<li className='flex'>
								<span className='p-base pr-3'>🔥</span>
								<span>Mi rol: Product Designer</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>🔥</span>
								<span>
									Colaboré con: un pasante UX, directivos,
									área de ventas, desarrolladores frontend y
									backend.
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
					className='mb-3 rounded'
				/>
				<p className='p-base italic text-center text-gray-600'>
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
							Antes de empezar el proyecto la empresa ya vendía
							cursos a otras empresas (B2B), sin embargo estas
							ventas representaban un 2% del macro de ventas de la
							empresa. El objetivo era claro: aumentar las ventas
							corporativas. Sin embargo, nacieron algunas
							preguntas: ¿Qué necesitan las empresas para confiar
							la capacitación de sus empleado en EDteam? ¿Qué
							valor agregado necesitaban para comprar mas cursos y
							capacitar a sus empleados? ¿Les basta con “saber” 🤔
							que sus empleados están tomando cursos para
							capacitarse? ¿Les importa capacitar a sus empleados?
						</p>
					</div>
					<div>
						<h3 className='heading-base mb-6'>
							Buscando la idea 🔎
						</h3>
						<p className='p-base mb-3 '>
							Para nosotros en el equipo las preguntas anteriores
							eran un misterio, obvio teníamos algunas ideas, pero
							eran supuestos. Por ellos ejecuté una encuesta con
							21 empresas, ¿y por qué ese número mágico? Porque
							algunas de esas empresas que ya nos habían comprado
							cursos y otras al menos estaban interesadas. El
							propósito era validar la necesidad que suponíamos
							existía.
						</p>

						<p className='p-base pb-3'>
							Las personas encuestadas tenían esta variedad de
							cargos:
						</p>
						<ul className='p-base space-y-2'>
							<li className='flex'>
								<span className='p-base pr-3'>💼</span>
								<span>Gerentes de recursos humanos.</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>💼</span>
								<span>
									Dueños o Directivos de empresas relacionados
									con tecnología o start ups.
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>💼</span>
								<span>
									Líderes de equipo y supervisores del sector
									tecnológico, entre otros.
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
					className='mb-3'
				/>
				<p className='p-base italic text-center text-gray-600'>
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
							Analizando la información 🔎
						</h3>
						<p className='p-base mb-3 '>
							Basándome en las respuestas obtenidas extraje
							siguientes insights clave que me ayudaría a entender
							la verdadera necesidad. Esto fue lo más destacado:
						</p>
						<p className='p-base pb-3'>
							Las personas encuestadas tenían esta variedad de
							cargos:
						</p>
						<ul className='p-base space-y-2'>
							<li className='flex'>
								<span className='p-base pr-3'>📐</span>
								<span>
									Un 35.2% de las empresas encuestadas
									manifestó que es importante tener una forma
									de registrar el avance de estudios de los
									empleados.
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>📐</span>
								<span>
									Un 52.1% de las empresas afirmaron que
									actualmente brindan la facilidad de
									capacitarse a sus empleados
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>📐</span>
								<span>
									El 31% le gustaría tener la capacidad de
									asignar cursos de forma personalizada por
									persona.
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>📐</span>
								<span>
									Al 21.4% le gustaría necesitan tener
									métricas sobre el progreso de avance de
									estudios.
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>📐</span>
								<span>
									Solo el 52.4% considera importante tener una
									interfaz amigable (interesante).
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>📐</span>
								<span>
									Generación de informes y métricas: Las
									empresas desean obtener informes y métricas
									detallados sobre el progreso de los
									empleados, las calificaciones obtenidas, el
									tiempo dedicado a los cursos y la tasa de
									finalización. Esto permitirá evaluar la
									efectividad de la capacitación y tomar
									decisiones basadas en datos.
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>📐</span>
								<span>
									Interfaz intuitiva y amigable: Los usuarios
									esperan una interfaz de usuario intuitiva y
									fácil de usar. La simplicidad y la capacidad
									de navegación son aspectos clave para
									garantizar la adopción y el uso continuo del
									sistema.
								</span>
							</li>
						</ul>
					</div>
					<div className='hero-mini-purple mb-0'>
						<h4 className='heading-small text-purple-500 mb-lg'>
							La reflexión | 🤔 Repensando el objetivo
						</h4>
						<p className='p-base text-purple-700'>
							En base a los insighs entendí que el objetivo del
							producto no eran las empresas como tal, sino las
							personas que administrarían el producto para la
							capacitación del personal. Las empresas podían
							comprar N cantidad de cursos, pero las personas a
							cargo de el seguimiento eran los que necesitaban una
							forma de gestionar la capacitación de los empleados.
							Estábamos equivocados en el enfoque lo importante
							son las personas y no la cantidad de ventas, obvio
							sí que importa la cantidad de ventas 😆, pero para
							obtener mejores resultados en la ventas , debíamos
							centrarnos en las personas que gestionan la
							capacitación de sus empleados.
						</p>
					</div>
					<div>
						<h3 className='heading-base'>
							Determino las oportunidades a resolver de los
							usuarios
						</h3>
						<p className='p-base'>
							En este momento me detuve a pensar en la necesidad
							de crear user personas, sin embargo decidí no
							crearlas 😬 ya que con la data de las entrevistas
							obtuve los insights que por el momento del proceso
							necesitaba. Sin embargo, con esa información sí cree
							unos Job Story.
						</p>
					</div>
					<div>
						<img
							src='./assets/img/pg/ed-pg-postits-tiny.png'
							alt=''
							className='mb-3'
						/>
						<p className='p-base italic text-center text-gray-600'>
							Historias de usuario.
						</p>
					</div>
				</div>
			</section>
			<Divider className='divider-orange'></Divider>
			<section className='section-block mb-10'>
				<div className='section-block-inside'>
					<div>
						<h4 className='heading-small text-purple-500'>
							Momento del prototipado
						</h4>
						<h3 className='heading-big'>
							Antes, recolecté información de funciones similares
						</h3>
						<p className='p-base mb-3 '>
							Con suficiente información obtenida era momento de
							plasmar las ideas e unos cuantos wireframes, me
							gusta mucho lanzar las ideas primero a mano, así
							puedo esbozar de forma rápida las ideas y
							compartirlas con el equipo.
						</p>
					</div>
				</div>
			</section>

			<div className='col-span-full mb-10'>
				<img
					src='./assets/img/pg/ed-pg-study.png'
					alt=''
					className='mb-3'
				/>
				<p className='p-base italic text-center text-gray-600'>
					Historias de usuario.
				</p>
			</div>
			<section className='section-block mb-10'>
				<div className='section-block-inside'>
					<div>
						<h3 className='heading-base'>A papel y lápiz 📄✍</h3>
						<p className='p-base mb-3 '>
							Con suficiente información obtenida era momento de
							plasmar las ideas e unos cuantos wireframes, me
							gusta mucho lanzar las ideas primero a mano, así
							puedo esbozar de forma rápida las ideas y
							compartirlas con el equipo.
						</p>
					</div>
				</div>
			</section>
			<section className='col-span-full gap-2 grid cols-2 tablet:col-col-3 mb-32'>
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
			<Divider className='divider-blue'></Divider>
			<section className='section-block mb-10'>
				<div className='section-block-inside'>
					<div>
						<h4 className='heading-small text-purple-500'>
							... testing 👀
						</h4>

						<h3 className='heading-big'>
							Hora de analizar la información
						</h3>
						<p className='p-base mb-3 '>
							Testeamos los wireframes de media fidelidad con unos
							18 usuarios, usamos maze con ese fin, y...{' '}
							<span className='b-base'>
								los usuarios no lo entendieron
							</span>{' '}
							. Fue un momento de aprendizaje. Noté que no estaba
							siendo claro para los usuarios cómo ver el resumen
							de estudios de cada usuario. Además, hice unas
							entrevistas vía meet con 10 contactos y fue evidente
							que sintieron el diseño confuso. La información fue
							muy importante. tuvimos que iterar. Abajo muestro la
							prueba que salió mal, muy mal, solo un 6% de
							usuarios entendieron el flujo. Hicimos nuevos
							wireframes e hicimos otro test de usabilidad, el
							segundo, no fue un éxito total, pero para un MVP del
							producto los directivos estuvieron conformes con que
							un 67% de usuarios entendieran el fflujo, y con eso
							pasamos a la etapa de diseño de alta calidad.
						</p>
					</div>
				</div>
			</section>
			<section className='mb-32 col-span-full'>
				<img
					src='./assets/img/pg/pg-m-01.jpg'
					alt=''
					className='mb-3 rounded'
				/>
				<p className='p-base italic text-center text-gray-600'>
					Capturas los test de usabilidad: Arriba a la izquierda una
					prueba que falló en todo. Abajo una iteración que tuvo
					mejores resultados
				</p>
			</section>
			<Divider className='divider-red'></Divider>
			<section className='section-block mb-10'>
				<div className='section-block-inside'>
					<div>
						<h4 className='heading-small text-purple-500'>
							Vamos por los diseños en alta fidelidad
						</h4>

						<h3 className='heading-big'>
							Trabajando en el UI 🌈🌟👌
						</h3>
						<p className='p-base mb-3'>
							Pensé que contaba con suficiente data e información
							testeada para proceder con crear los diseños en alta
							fidelidad. Sin embargo,{' '}
							<span className='b-base'>hubieron mas cambios</span>{' '}
							, esta vez fue de parte de los stakeholders,, estás
							fueron las indicaciones:
						</p>
						<ul className='p-base space-y-2'>
							<li className='flex'>
								<span className='p-base pr-3'>⛳</span>
								<span>
									En su opinión, no era suficiente mostrar la
									vista con una lista de usuarios (en la
									pestaña Dashboard), para ellos era necesaria
									otra sección en el menú que contenga al
									total de las personas que actualmente son
									parte de mi empresa, como lo que ya no son
									parte. Esta sección del menú se debería
									llamar Mi equipo. No estuve de acuerdo con
									esa decisión, pero no hubo oportunidad de
									negociarla así que cedí, uno debe aprender a
									ceder a los tomadores decisiones, y entender
									que muchas veces tienen sus razones.{' '}
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>⛳</span>
								<span>
									Por otro lado, en el modal de Agregar más
									licencias ya no se crearía la funcionalidad
									de compra desde el modal, si no, el botón de
									Quiero más licencias abriría un formulario y
									la información recolectaba iría a Soporte,
									esto para alargar más el tiempo de
									desarrollo.
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>⛳</span>
								<span>
									Un extra, los directivos indicaron su
									afinidad con colocar el logo de la
									empresa/startup que adquiera el plan de
									empresas en lugar del logo de EDteam, así se
									sentirían mejor identificados con su
									interfaz.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className='section-block mb-0'>
				<div className='hero-mini-gray grid desktop:grid-cols-2 items-center gap-4'>
					<div>
						<h4 className='heading-base text-purple-500 mb-lg'>
							Video presentación del prototipo final 🎬
						</h4>
						<p className='p-base text-purple-700'>
							Este es un video del prototipo clicleable, esto fue
							entregado para revisión final con los directivos.
							Fue aceptado y luego pasamos al handoff.
						</p>
					</div>
					<img
						src='./assets/img/pg/play.png'
						alt=''
						className='mb-3 rounded'
					/>
				</div>
			</section>
			<Divider className='divider-purple'></Divider>
			<section className='section-block mb-10'>
				<div className='section-block-inside'>
					<div>
						<h3 className='heading-big'>Resultados 🌈👌</h3>

						<ul className='p-base space-y-2'>
							<li className='flex'>
								<span className='p-base pr-3'>🌟</span>
								<span>
									Lo mejor fue la ventas B2B subieron un 6% en
									los primeros 2 meses luego del lanzamiento,
									ya que ahora el área de ventas tenía un
									producto que las empresas podían testear
									antes de comprar los planes.
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>🌟</span>
								<span>
									Hubo satisfacción desde el lado de los
									usuarios que ya eran clientes de EDteam, un
									63% de los usuarios que ya eran clientes de
									EDteam manifestó que estaban satisfechos con
									el nuevo producto (aunque tenían feedback
									que darnos).
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
								<span className='p-base pr-3'>☁</span>
								<span>
									El trabajo fue durísimo, fueron meses de
									iteraciones, aprendizajes, frustaciones,
									errores, fracasos, muchas reuniones, etc.
									Las ideas que pensábamos que funcionaría no
									lo hacían, en fin. Me ayudó a mejorar mi
									resiliencia.
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>☁</span>
								<span>
									Valoro que este proyecto me ayudó a mejorar
									mis habilidades de comunicación, hubo
									constante contacto con los desarrolladores,
									directivos y otras áreas de la empresa, la
									buena comunicación fue clave.
								</span>
							</li>
							<li className='flex'>
								<span className='p-base pr-3'>☁</span>
								<span>
									Además, siento que aprendí a delegar
									trabajos, fuimos 2 UX en el proceso, yo
									estaba a cargo y a veces (muchas veces) yo
									quería ocuparte de mucho, pero debía
									aprender a delegar.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	)
}
