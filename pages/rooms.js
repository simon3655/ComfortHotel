import React from 'react'
import Head from 'next/head';
import Link from 'next/link'
import MainLayout from '../components/MainLayout/MainLayout';
import s from '../styles/Items.module.css'

export default function Rooms() {

    return <MainLayout>
        <Head>
            <title>
                Номери
            </title>
        </Head>
        <p className={s.textRooms}>
            До вашої уваги детальний опис кімнат та вартість проживання у <Link href={'/'}><a><span className={s.spanNav}>готелі "Комфорт"</span></a></Link> у місті Червоноград.
            Всі ціни надані в гривнях.
            <br />
            Проживання третьої особи на розкладному кріслі - <span className={s.spanNav}>100,00 грн.</span>
            <br />
            Розрахунковий час: 12-00 год.
        </p>

        <ul className={s.customUl}>

            <Link href={`/room/1`}>

                <li key={1}>

                    <div className={s.partVisual}>

                        <img src="https://comfort-hotel.com.ua/attachments/Image/1_1.jpg?template=generic" alt="img1" />

                        <div className={s.infoPartRoom}>

                            <p className={s.infoPartRoomText}><span className={s.infoPartRoomTextID}>№1 - </span><span className={s.infoPartRoomTextNumber}>"Одномісний" </span><span className={s.infoPartRoomPriceText}>ціна: </span><span className={s.infoPartRoomTextPrice}>600 грн.</span></p>

                            <p className={s.infoPartSecondText}>Одне широке ліжко, тумбочка, шафа для одягу, стіл з двома стільцями, безкоштовний Wi-Fi інтернет, холодильник, сателітарне телебачення, душ, туалет, місце для безкоштовного паркування.</p>

                        </div>

                    </div>

                </li>

            </Link>

            <Link href={`/room/2`}>

                <li key={2}>

                    <div className={s.partVisual}>

                        <img src="https://comfort-hotel.com.ua/attachments/Image/2-1.jpg?template=generic" alt="img2" />

                        <div className={s.infoPartRoom}>

                            <p className={s.infoPartRoomText}><span className={s.infoPartRoomTextID}>№2 - </span><span className={s.infoPartRoomTextNumber}>"Двомісний" </span><span className={s.infoPartRoomPriceText}>ціна: </span><span className={s.infoPartRoomTextPrice}>700 грн. <span className={s.infoPartRoomTextDetails}>(за умови проживання 1-ї особи - 600 грн.)</span></span></p>

                            <p className={s.infoPartSecondText}>Два окремих ліжка, дві тумбочки, шафа для одягу, стіл з двома стільцями, безкоштовний Wi-Fi інтернет, холодильник, сателітарне телебачення, душ, туалет, місце для безкоштовного паркування.</p>

                        </div>

                    </div>

                </li>

            </Link>

            <Link href={`/room/3`}>

                <li key={3}>

                    <div className={s.partVisual}>

                        <img src="https://comfort-hotel.com.ua/attachments/Image/3.jpg?template=generic" alt="img3" />

                        <div className={s.infoPartRoom}>

                            <p className={s.infoPartRoomText}><span className={s.infoPartRoomTextID}>№3 - </span><span className={s.infoPartRoomTextNumber}>"Двокімнатний" </span><span className={s.infoPartRoomPriceText}>ціна: </span><span className={s.infoPartRoomTextPrice}>700 грн.</span></p>

                            <p className={s.infoPartSecondText}>
                                Дві окремих кімнати. В першій - шкіряний диван, журнальний столик, холодильник, телевізор.

                                В іншій  - двоспальне ліжко,  дві тумбочки, велика шафа для одягу, телевізор.

                                Безкоштовний Wi-Fi інтернет, душ, туалет, місце для безкоштовного паркування.</p>

                        </div>

                    </div>

                </li>

            </Link>

            <Link href={`/room/4`}>

                <li key={4}>

                    <div className={s.partVisual}>

                        <img src="https://comfort-hotel.com.ua/attachments/Image/4.jpg?template=generic" alt="img4" />

                        <div className={s.infoPartRoom}>

                            <p className={s.infoPartRoomText}><span className={s.infoPartRoomTextID}>№4 - </span><span className={s.infoPartRoomTextNumber}>"Двомісний" </span><span className={s.infoPartRoomPriceText}>ціна: </span><span className={s.infoPartRoomTextPrice}>700 грн. <span className={s.infoPartRoomTextDetails}>(за умови проживання 1-ї особи - 600 грн.)</span></span></p>

                            <p className={s.infoPartSecondText}>
                                Два окремих ліжка,  шафа для одягу, м'яке крісло, дві тумбочки, стіл з двома стільцями, безкоштовний Wi-Fi інтернет, холодильник, сателітарне телебачення, душ, туалет, місце для безкоштовного паркування.</p>

                        </div>

                    </div>

                </li>

            </Link>

            <Link href={`/room/5`}>

                <li key={5}>

                    <div className={s.partVisual}>

                        <img src="https://comfort-hotel.com.ua/attachments/Image/5.jpg?template=generic" alt="img5" />

                        <div className={s.infoPartRoom}>

                            <p className={s.infoPartRoomText}><span className={s.infoPartRoomTextID}>№5 - </span><span className={s.infoPartRoomTextNumber}>"Двоспальний" </span><span className={s.infoPartRoomPriceText}>ціна: </span><span className={s.infoPartRoomTextPrice}>700 грн.</span></p>

                            <p className={s.infoPartSecondText}>
                                Одне двоспальне ліжко,  шафа для одягу, диван, журнальний столик, дві тумбочки, безкоштовний Wi-Fi інтернет, холодильник, сателітарне телебачення, душ, туалет, місце для безкоштовного паркування.</p>

                        </div>

                    </div>

                </li>

            </Link>

            <Link href={`/room/6`}>

                <li key={6}>

                    <div className={s.partVisual}>

                        <img src="https://comfort-hotel.com.ua/attachments/Image/6.jpg?template=generic" alt="img6" />

                        <div className={s.infoPartRoom}>

                            <p className={s.infoPartRoomText}><span className={s.infoPartRoomTextID}>№6 - </span><span className={s.infoPartRoomTextNumber}>"Двомісний" </span><span className={s.infoPartRoomPriceText}>ціна: </span><span className={s.infoPartRoomTextPrice}>700 грн. <span className={s.infoPartRoomTextDetails}>(за умови проживання 1-ї особи - 600 грн.)</span></span></p>

                            <p className={s.infoPartSecondText}>
                                Два окремих ліжка,  шафа для одягу, м'яке крісло, стіл, дві тумбочки, безкоштовний Wi-Fi інтернет, холодильник, сателітарне телебачення, душ, туалет, місце для безкоштовного паркування.</p>

                        </div>

                    </div>

                </li>

            </Link>

            <Link href={`/room/7`}>

                <li key={7}>

                    <div className={s.partVisual}>

                        <img src="https://comfort-hotel.com.ua/attachments/Image/7.jpg?template=generic" alt="img7" />

                        <div className={s.infoPartRoom}>

                            <p className={s.infoPartRoomText}><span className={s.infoPartRoomTextID}>№7 - </span><span className={s.infoPartRoomTextNumber}>"Двомісний" </span><span className={s.infoPartRoomPriceText}>ціна: </span><span className={s.infoPartRoomTextPrice}>700 грн. <span className={s.infoPartRoomTextDetails}>(за умови проживання 1-ї особи - 600 грн.)</span></span></p>

                            <p className={s.infoPartSecondText}>
                                Два окремих ліжка,  шафа для одягу, м'яке крісло, стіл, дві тумбочки, безкоштовний Wi-Fi інтернет, холодильник, сателітарне телебачення, душ, туалет, місце для безкоштовного паркування.</p>

                        </div>

                    </div>

                </li>

            </Link>

            <Link href={`/room/8`}>

                <li key={8}>

                    <div className={s.partVisual}>

                        <img src="https://comfort-hotel.com.ua/attachments/Image/8.jpg?template=generic" alt="img8" />

                        <div className={s.infoPartRoom}>

                            <p className={s.infoPartRoomText}><span className={s.infoPartRoomTextID}>№8 - </span><span className={s.infoPartRoomTextNumber}>"Двомісний" </span><span className={s.infoPartRoomPriceText}>ціна: </span><span className={s.infoPartRoomTextPrice}>800 грн. <span className={s.infoPartRoomTextDetails}>(за умови проживання 1-ї особи - 600 грн.)</span></span></p>

                            <p className={s.infoPartSecondText}>
                                Два окремих ліжка,  шафа для одягу, м'яке крісло, стіл, дві тумбочки, безкоштовний Wi-Fi інтернет, холодильник, сателітарне телебачення, душ, туалет, місце для безкоштовного паркування.</p>

                        </div>

                    </div>

                </li>

            </Link>

            <Link href={`/room/9`}>

                <li key={9}>

                    <div className={s.partVisual}>

                        <img src="https://comfort-hotel.com.ua/attachments/Image/9_1.jpg?template=generic" alt="img9" />

                        <div className={s.infoPartRoom}>

                            <p className={s.infoPartRoomText}><span className={s.infoPartRoomTextID}>№9 - </span><span className={s.infoPartRoomTextNumber}>"Двомісний" </span><span className={s.infoPartRoomPriceText}>ціна: </span><span className={s.infoPartRoomTextPrice}>700 грн. <span className={s.infoPartRoomTextDetails}>(за умови проживання 1-ї особи - 600 грн.)</span></span></p>

                            <p className={s.infoPartSecondText}>
                                Два окремих ліжка,  шафа для одягу, м'яке крісло, стіл, дві тумбочки, безкоштовний Wi-Fi інтернет, холодильник, сателітарне телебачення, душ, туалет, місце для безкоштовного паркування.</p>

                        </div>

                    </div>

                </li>

            </Link>


        </ul>

    </MainLayout>
}