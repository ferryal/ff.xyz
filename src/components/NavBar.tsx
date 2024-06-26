import { useRouter } from 'next/router'

const NavBar = ({ setSection }) => {
	const router = useRouter();
	return (
		<nav className="flex w-full justify-center">
			<div className="flex items-center justify-center rounded-full bg-white dark:bg-gray-900 text-gray-500 font-semibold py-1 px-4 space-x-4 focus:outline-none">
				<button
					className="hover:bg-gray-100 hover:rounded-2xl p-2 dark:hover:bg-gray-800 focus:outline-none"
					onClick={() => {
						setSection('all');
						router.push('/');
					}}
				>
					Home
				</button>
				{/* <button
					className="hover:bg-gray-100 hover:rounded-2xl p-2 dark:hover:bg-gray-800 focus:outline-none"
					onClick={() => setSection('about')}
				>
					About
				</button>
				<button className="hover:bg-gray-100 hover:rounded-2xl p-2 dark:hover:bg-gray-800 hidden focus:outline-none">
					Work
				</button>
				<button
					className="hover:bg-gray-100 hover:rounded-2xl p-2 dark:hover:bg-gray-800 focus:outline-none"
					onClick={() => setSection('contact')}
					id="Contact"
				>
					Contact
				</button> */}
				<button
					className="hover:bg-gray-100 hover:rounded-2xl p-2 dark:hover:bg-gray-800 focus:outline-none"
					onClick={() => router.push('/project')}
					id="Contact"
				>
					Projetcs
				</button>
			</div>
		</nav>
	)
}
export default NavBar
