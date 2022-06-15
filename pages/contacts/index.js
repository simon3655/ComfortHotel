import React from 'react'
import Head from 'next/head';
import MainLayout from '../../components/MainLayout/MainLayout';

import s from '../../components/MainLayout/MainLayout.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Contacts() {

    return <MainLayout>
        <Head>
            <title>
                Контакти
            </title>
        </Head>

        <div className={s.contactsPageWrap}>
            <p className={s.bookingText}>

                <span className={s.italicBooking}>Поштова адреса: </span>80100, Львівська обл, м.Червоноград, Стуса 11-б, <Link href={'/'}><a><span className={s.spanNav}>готель "Комфорт"</span></a></Link>
                <br />

                <span className={s.italicBooking}>Міські: </span>+38-03249-46330,  +38-03249-20383
                <br />

                <span className={s.italicBooking}>LIFE: </span>+38-093-9152415
                <br />

                <span className={s.italicBooking}>KиївCтар: </span>+38-098-6763727
                <br />

                <span className={s.italicBooking}>МТС: </span>+38-095-0756862
                <br />

                <span className={s.italicBooking}>E-mail: </span>comfort.chervonograd@gmail.com
                <br />

                <span className={s.italicBooking}>Skype: </span>comfort-chervonograd
                <br />

                <span className={s.italicBooking}>GPS координати: </span>50.401126, 24.236999
            </p>

            <div className={s.containerObject}>

                <div className={s.mapContainer}>
                    <p>Схема проїзду</p>
                    <img src="https://comfort-hotel.com.ua/attachments/Image/map.png?template=generic" alt="imgSchema" />
                </div>

                <div className={s.schemaContainer}>
                    <p>На карті</p>
                    <a className={s.link} href="https://goo.gl/maps/Td7QMiHdWtWVZkG88">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.1557962087486!2d24.236955663755516!3d50.40093403286149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4724ded8350e4e1d%3A0xdc351edb1125cd80!2z0JrQvtC80YTQvtGA0YI!5e0!3m2!1suk!2sua!4v1577541357816!5m2!1suk!2sua" frameborder="0" width="400" height="300">
                        </iframe></a>
                    <p>Переглянути Червоноград, <br /> <Link href={'/'}><a><span className={s.spanNav}>готель "Комфорт"</span></a></Link> на карті більшого розміру</p>
                </div>

            </div>

        </div>


    </MainLayout >
}
