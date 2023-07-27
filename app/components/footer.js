import React from 'react'
import Logo from './logo'
import Link from 'next/link'
// import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function Footer() {
	return (
		<>
			<footer className='container '>
				<div className='responsive-sections pb-40'>
					<div className='flex flex-col gap-24'>
						<Link href='/'>
							<Logo className='fill-current fill-gray-900 h-8 tablet:h-10 hover:fill-blue-500 active:fill-blue-500/40 transition ease-in duration-200 focus:outline-none inline' />
						</Link>
						<div className='flex flex-col gap-24'>
							{/* <div>
								<h5 className='heading-small text-gray-600 mb-0 pb-6'>
									Contáctame
								</h5>
								<span className='before:block before:absolute before:-inset-0 hover:before:bg-blue-300 relative inline-block transition ease-in duration-200 '>
									<span className='relative text-gray-800 link-button-base hover:link-color-blue transition ease-in duration-200 active:text-blue-500/70'>
										david.rivadenyra.c@gmail.com
									</span>
								</span>
							</div> */}
							<div>
								<h5 className='heading-small text-gray-600 mb-0 pb-6'>
									Social
								</h5>

								<div className='space-x-8'>
									<Link
										className='before:block before:absolute before:-inset-0 hover:before:bg-green-300 relative inline-block transition ease-in duration-200'
										href='https://www.linkedin.com/in/davidrivadeneyra/'
										target='_blanck'>
										<button className='relative text-gray-800 link-button-base hover:link-color-green transition ease-in duration-200 active:text-green-500/70'>
											Linkedin
										</button>
									</Link>
									<Link
										className='before:block before:absolute before:-inset-0 hover:before:bg-red-300 relative inline-block transition ease-in duration-200'
										href='https://dribbble.com/davidrivadeneyra'
										target='_blanck'>
										<button className='relative text-gray-800 link-button-base hover:link-color-red transition ease-in duration-200 active:text-red-500/70'>
											Dribbble
										</button>
									</Link>
								</div>
							</div>
							<div>
								<h5 className='heading-small text-gray-600 mb-0 pb-6'>
									Versión
								</h5>

								<p className='p-base text-gray-800'>
									Edición © 2023
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
