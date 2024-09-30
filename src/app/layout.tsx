import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'petsAPI',
	description: 'two api together',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<header className='bg-gray-800 text-white p-4'>Navigation</header>
				<main className='container mx-auto p-4'>{children}</main>
				<footer className='bg-gray-800 text-white p-4 text-center'>
					(c) footer
				</footer>
			</body>
		</html>
	)
}
