'use client'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Link from 'next/link'
import Logo from './logo'
import { ReactDOM } from 'react'
import Message from './icons/message'
import Send from './icons/send'

export default function HeaderMiniOLD() {
	const [isOpen, setIsOpen] = useState(false)
	const [header, setHightHeader] = useState(false)

	const scrollViewport = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY !== 0) {
				setHightHeader(true)
			} else {
				setHightHeader(false)
			}
		}
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', scrollViewport)
	}

	// w-full py-16 desktop:py-24 container
	// fixed w-full py-16 desktop:py-24 container left-0 right-0
	return (
		<>
			<header
				className={`fixed left-0 w-full z-40 transition ease-in-out duration-300  py-4  ${
					header
						? 'backdrop-blur-xl  border-b-2 border-gray-800/[5%] transition ease-in-out duration-300'
						: 'transition ease-in-out duration-300'
				}`}>
				<div className='tablet:max-w-3xl desktop:max-w-5xl mx-auto'>
					<div className='container-header'>
						<div className='responsive-sections flex justify-between items-center'>
							<Link href='/'>
								<img
									src='/assets/img/avatar-davidrivadeneyra.png'
									alt='Avatar de David Rivadeneyra'
									className='h-16 desktop:h-24 transition hover:scale-105 ease-in-out duration-700 '
								/>
							</Link>

							<a
								href='mailto:test@email.com'
								className='transition ease-in-out duration-300 border-2 border-gray-800/[5%] tablet:hidden bg-gray-200 h-16 w-16 flex justify-center items-center rounded-[1.25em] hover:bg-blue-500 hover:border-2 hover:border-blue-500 active:bg-blue-500/90 active:border-2 active:border-blue-500'>
								<Send className='h-7 fill-base-white'></Send>
							</a>

							<a
								href='mailto:test@email.com'
								className='hidden tablet:block'>
								<button className='transition ease-in-out duration-300 bg-gray-800/[3%] border-2 border-gray-800/[5%] b-base text-base-white  py-3 px-4 rounded-[1.25em] flex items-center gap-2 hover:bg-blue-500 hover:border-2 hover:border-blue-500 active:bg-blue-500/90 active:border-2 active:border-blue-500'>
									<Send className='h-5 fill-base-white'></Send>
									Envíame un mensaje
								</button>
							</a>

							{/* <Link rel='nofollow' href={'mailto:test@email.com'}>
						<div className='bg-gray-200 h-14 w-14 flex justify-center items-center rounded-2xl'>
							<Message className='h-7 fill-gray-700'></Message>
						</div>
					</Link> */}
							{/* <Link href='mailto:test@email.com'> */}
							{/* <button className='b-base text-gray-800 bg-gray-200 py-3 px-4 rounded-2xl'>
						hi@davidrivadeneyra.com
					</button> */}
							{/* </Link> */}
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
