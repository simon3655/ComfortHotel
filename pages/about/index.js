import React from 'react'
import Head from 'next/head';
import MainLayout from '../../components/MainLayout/MainLayout';

import s from '../../components/MainLayout/MainLayout.module.css';
import Image from 'next/image';
import Link from 'next/link';

import lpnu from '../../public/socials/lpnu.jpg'

export default function About() {

    return <MainLayout>
        <Head>
            <title>
                Про нас
            </title>
        </Head>

        <div className={s.aboutPageWrap}>
            <h1 className={s.createdBy}>
                Курсова робота КН-203
                <br />
            </h1>

            <p className={s.authorText}>Проект реалізовано у співпраці з <span className={s.authorTextSpan}> Lviv Polytechnic</span> в рамках курсової роботи на тему <span className={s.authorTextSpan}>«Готель Комфорт»</span>
                <br />
                Автор:
                <br />
                <br />
                Використання матеріалів сайту і копіювання інформації без письмового дозволу автора заборонено.
            </p>

            <div className={s.lpnuWrapper}>
                <Link href="https://lpnu.ua/">
                    <a>
                        <div className={s.wrapperLogoLpnu}>
                            <Image
                                src={lpnu}
                            />
                        </div>
                    </a>
                </Link>
            </div>
        </div>


    </MainLayout >
}
