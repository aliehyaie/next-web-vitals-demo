import React from 'react';
import Link from "next/link";
import classes from './style.module.css';
import {usePathname} from "next/navigation";
import Image from "next/image";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
                <Image width={80} height={80} priority src="/images/logo.png" alt='A plate with food on it'/>
                Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/' className={pathname === '/' ? classes.active : ''}>
                             Meals
                        </Link>
                    </li>
                    <li>
                        <Link href='/' className={pathname.startsWith('/community') ? classes.active : ''}>
                            Foodies Community
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;