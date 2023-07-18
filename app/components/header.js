import Link from 'next/link'
import Logo from './logo'
Link

export default function Header() {
	return (
		<header className='header-responsive py-24'>
			<Link href='/'>
				<Logo className='fill-current fill-gray-900 h-16 tablet:h-20' />
			</Link>
		</header>
	)
}
