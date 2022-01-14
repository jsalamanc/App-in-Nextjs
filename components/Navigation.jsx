import Link from 'next/link'

export const Navigation = () => {
    return (
        <header className='grid grid-cols-2 px-4 py-6 xl:my-auto'>
            <div>
                <img src='/vercel.svg' width={100} height={100} alt='Vercel Logo' />
            </div>
            <nav className='flex justify-end items-center'>
                <ul className='flex'>
                    <li className='mx-4'>
                        <Link href="/">
                            <a className='text-slate-700 hover:text-blue-900'>Team</a>
                        </Link>
                    </li>

                    <li className='mx-4'>
                        <Link href="/About">
                            <a className='text-slate-700 hover:text-blue-900'>About</a>
                        </Link>
                    </li>

                    <li className='mx-4'>
                        <Link href="/Contact">
                            <a className='text-slate-700 hover:text-blue-900'>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
