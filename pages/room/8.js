import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import Head from 'next/head';

import Image from 'next/image';
import img1 from '../../public/images/rooms/8/carousel/1.jpg'
import img2 from '../../public/images/rooms/8/carousel/2.jpg'
import img3 from '../../public/images/rooms/8/carousel/3.jpg'
import img4 from '../../public/images/rooms/8/carousel/4.jpg'

export default function Room() {

    return (
        <MainLayout>

            <Head>
                <title>
                    Кімната 8
                </title>
            </Head>

            <div>
                <div className={s.itemTop}>
                    <h1 className={s.title}>Фото Кімнати 8</h1>
                    <Link href={'/rooms'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>
                    <Image
                        src={img1}
                    />
                    <Image
                        src={img2}
                    />
                    <Image
                        src={img3}
                    />
                    <Image
                        src={img4}
                    />
                </div>
            </div>


        </MainLayout>
    )
}