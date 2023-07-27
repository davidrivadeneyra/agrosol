'use client'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Link from 'next/link'
import Logo from './logo'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	let emojiesMenu = [
		{ version: '1', close: '😺', open: '😸' },
		{ version: '2', close: '🐵', open: '🙊' },
	]

	let Links = [
		{ id: 1, name: 'Home', paths: '/', emoji: '🏡' },
		// { id: 2, name: 'Acerca de mi', paths: '/about', emoji: '🖖' },
		{ id: 3, name: 'Mi trabajo', paths: '/work', emoji: '😏' },
	]
	let Social = [
		{
			id: '2',
			name: 'dribbble',
			paths: 'https://dribbble.com/davidrivadeneyra',
			emoji: '🏀',
		},
		{
			id: '1',
			name: 'linkedin',
			paths: 'https://www.linkedin.com/in/davidrivadeneyra/',
			emoji: '👍',
		},
	]

	const [isClipboard, setClipboardCopied] = useState(false)

	let windowInnerWidth
	let documentDocumentElementClientWidth

	if (typeof window !== 'undefined') {
		windowInnerWidth = window.innerWidth
	}
	if (typeof document !== 'undefined') {
		documentDocumentElementClientWidth =
			document.documentElement.clientWidth
	}

	const [windowSize, setWindowSize] = useState([windowInnerWidth])

	const [documentWidth, setDocumentWidth] = useState([
		documentDocumentElementClientWidth,
	])
	console.log(documentDocumentElementClientWidth)

	const headerRef = useRef(null)

	const [numbers, setNumbers] = useState([])

	const [headerWidth, setWidth] = useState(0)

	useLayoutEffect(() => {
		setWidth(headerRef.current.clientWidth)
	}, [numbers])

	useEffect(() => {
		function handleHeaderWidthResize() {
			setWidth(headerRef.current.clientWidth)
		}
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleHeaderWidthResize)

			return () => {
				if (typeof window !== 'undefined') {
					window.removeEventListener(
						'resize',
						handleHeaderWidthResize
					)
				}
			}
		}
	}, [])

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize([window.innerWidth])
		}
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleWindowResize)
			return () => {
				if (typeof window !== 'undefined') {
					window.removeEventListener('resize', handleWindowResize)
				}
			}
		}
	}, [])

	// useEffect(() => {
	// 	const handleDocumentClientResize = () => {
	// 		setDocumentWidth([document.documentElement.clientWidth])
	// 	}
	// 	if (typeof window !== 'undefined') {
	// 		window.addEventListener('resize', handleDocumentClientResize)
	// 	}

	// 	return () => {
	// 		if (typeof window !== 'undefined') {
	// 			window.removeEventListener('resize', handleDocumentClientResize)
	// 		}
	// 	}
	// }, [])

	useEffect(() => {
		const body = document.querySelector('body')
		const clientWidthBeforeMenu = document.documentElement.clientWidth

		if (body) {
			body.style.overflow = isOpen ? 'hidden' : 'auto'
		}
	})
	useEffect(() => {
		const copiedMessage = document.getElementById('copiedMessage')

		if (copiedMessage) {
			copiedMessage.style.display = isClipboard ? 'inline-block' : 'none'
		}

		// console.log(copiedMessage)

		setTimeout(() => {
			setClipboardCopied(false)
		}, 5000)
	})

	let viewportWidth = windowSize[0]
	// let documentViewWidth = documentWidth[0]
	// let scrollBarWidth = viewportWidth - documentViewWidth
	let resDesktop = (viewportWidth - headerWidth) / 2

	return (
		<>
			<header className='w-full pt-16 pb-24 desktop:py-24 container'>
				<div
					ref={headerRef}
					className='responsive-sections flex justify-between relative'>
					<Link href='/'>
						<Logo className='fill-current fill-gray-900 h-12 tablet:h-14 hover:fill-blue-500 active:fill-blue-500/40 transition ease-in-out duration-300 focus:outline-none inline' />
					</Link>
					<div
						className={`fixed z-20 top:16 desktop:top-24 `}
						onClick={() => setIsOpen(!isOpen)}
						style={{ right: `${resDesktop}` + 'px' }}>
						<div className='heading-bigger text-gray-900 cursor-pointer'>
							{isOpen ? '😸' : '😺'}
						</div>
					</div>
				</div>
			</header>
			<ul
				className={`fixed w-full h-full mx-auto left-0 z-10 text-gray-900 bg-gray-100  ${
					isOpen ? 'top-0 block' : 'top-[-100vh] hidden'
				} `}>
				<div className='w-full h-full desktop:max-w-5xl mx-auto pt-40 desktop:pt-52 pb-20 desktop:pb-32 transition ease-in duration-200'>
					<div className='container h-full'>
						<div className='responsive-sections flex flex-col justify-between '>
							<div className='flex flex-col '>
								<h5 className='heading-small text-gray-600 mb-0 pb-10'>
									Menú
								</h5>
								<div className='flex flex-col gap-2'>
									{Links.map((link) => (
										<Link
											href={link.paths}
											key={link.id}
											className='flex'
											onClick={() => setIsOpen(!isOpen)}>
											<p
												className='grow rounded-full bg-gray-200 px-10 py-8 heading-big-semibold flex gap-3 text-gray-900 hover:bg-blue-500/10 active:bg-blue-500/20 border-2
											border-gray-200 
											hover:border-blue-500/10 transition ease-in duration-200'>
												<span className=''>
													{link.emoji}
												</span>
												{link.name}
											</p>
										</Link>
									))}
								</div>
							</div>
							<div className='flex flex-col'>
								<h5 className='heading-small text-gray-600 mb-0 pb-10'>
									Contáctame
								</h5>
								<div className=' flex flex-col gap-4 heading-small'>
									<CopyToClipboard
										text='david.rivadeneyra.c@gmail.com'
										onCopy={() => setClipboardCopied(true)}>
										<div className='relative space-x-4 cursor-pointer  '>
											<span>📩</span>
											<span className='inline text-gray-900 hover:text-gray-700 transition ease-in duration-200 active:text-blue-500'>
												david.rivadeneyra.c@gmail.com
											</span>

											<span
												id='copiedMessage'
												className='transition-all ease-in-out duration-300 bg-green-200 py-1 px-3 text-green-500 rounded-full inline absolute bottom-6 left-3'>
												¡Copiado!
											</span>
										</div>
									</CopyToClipboard>
									{Social.map((social) => (
										<div
											className='space-x-4 inline'
											key={social.id}>
											<span>{social.emoji}</span>
											<Link
												href={social.paths}
												target='_blank'
												className='text-gray-900  hover:text-gray-700 transition ease-in duration-200 active:text-blue-500'>
												{social.name}
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</ul>
		</>
	)
}
