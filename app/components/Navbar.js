import Link from "next/link"
import Image from "next/image"
import Logo from './dojo-logo.png'
import Logout from "./Logout"

export default function Navbar({ user }) {
    return (
        <nav>
            <Image
                src={Logo}
                alt='Muscle Ninja logo'
                width={70}
                quality={100}
                placeholder='blur'
            />
            <h1>Muscle Ninja</h1>
            <Link href='/'>Dashboard</Link>
            <Link href='/tickets' className="mr-auto">Tickets</Link>
            {user && <span>Hello, {user.email}</span>}

            <Logout />
        </nav>
    )
}
