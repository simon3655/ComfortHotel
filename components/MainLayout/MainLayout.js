import Link from 'next/link'
/*import React from 'react'*/
import s from '../MainLayout/MainLayout.module.css'

import fb from '../../public/socials/facebook.svg'
import insta from '../../public/socials/insta.svg'
import telegram from '../../public/socials/telegram.svg'
import twitter from '../../public/socials/twitter.svg'
import Image from 'next/image';

export default function MainLayout({ children }) {

    function getCurrentYear() {

        let newDate = new Date();
        let year = newDate.getFullYear();

        return `${year}`
    }

    return (
        <div className={s.wrapper}>

            <nav className={s.customNav}>
                <Link href={'/'}><a>Готель <span className={s.spanNav}>«Комфорт»</span></a></Link>

                <div className={s.lastPartHeader}>
                    <Link href={'/rooms'}><a>Номери</a></Link>
                    <Link href={'/booking'}><a>Бронювання</a></Link>
                    <Link href={'/transport'}><a>Транспорт</a></Link>
                    <Link href={'/contacts'}><a>Контакти</a></Link>
                    <Link href={'/comments'}><a>Відгуки</a></Link>
                    {/*<Link href={'/about'}><a>Про нас</a></Link>*/}
                </div>

                <label className={s.burgerLabel}>
                    <input type="checkbox" className={s.inputCustom} />
                    <span className={s.menu}> <span className={s.hamburger}></span> </span>
                    <ul className={s.customUl}>
                        <Link href={'/rooms'}><a className={s.customA} href="#">Номери</a></Link>
                        <Link href={'/booking'}><a className={s.customA} href="#">Бронювання</a></Link>
                        <Link href={'/transport'}><a className={s.customA} href="#">Транспорт</a></Link>
                        <Link href={'/contacts'}><a className={s.customA} href="#">Контакти</a></Link>
                        <Link href={'/comments'}><a className={s.customA} href="#">Відгуки</a></Link>
                        <Link href={'/about'}><a className={s.customA} href="#">Про нас</a></Link>
                    </ul>
                </label>

            </nav>

            <main className={s.customMain}>
                {children}
            </main>

            <footer>
                <div className={s.footer}>

                    <div className={s.social}>
                        <Link href="#">
                            <a>
                                <div className={s.wrapperLogo}>
                                    <Image
                                        src={fb}
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <div className={s.wrapperLogo}>
                                    <Image
                                        src={insta}
                                    />
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <div className={s.wrapperLogo}>
                                    <Image
                                        src={telegram}
                                    />
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <div className={s.wrapperLogo}>
                                    <Image
                                        src={twitter}
                                    />
                                </div>
                            </a>
                        </Link>
                    </div>

                    <p className={s.dated}>
                        © {getCurrentYear() - 1} - {getCurrentYear()}. Готель "Комфорт",  м. Червоноград. Всі права застережено.
                    </p>

                </div>
            </footer>

        </div>
    )
}
