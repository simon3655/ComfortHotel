import React from 'react'
import Head from 'next/head';
import MainLayout from '../../components/MainLayout/MainLayout';

import s from '../../components/MainLayout/MainLayout.module.css';
import Link from 'next/link';

export default function Comments() {

    return <MainLayout>
        <Head>
            <title>
                Відгуки
            </title>
        </Head>

        <div className={s.addComments}>

            <h2>Залишити коментар:</h2>

            <form action="/" method="post" role="form" className={s.emailForm}>
                <div className={s.row}>
                    <div className={s.nameInput}>
                        <input type="text" name="name" className={s.formControl} id="name" placeholder="ID замовлення" data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars" />
                        <div className={s.validate}></div>
                    </div>
                    <div className={s.phoneInput}>
                        <div className={s.countRoom}>
                            <input type="number" className={s.formControl} name="people" id="people" placeholder="№ кімнати"
                                data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                            <div className={s.validate}></div>
                        </div>
                    </div>
                    <div className={s.formControl}>
                        <textarea className={s.formControl} name="message" rows="5" placeholder="Коментар"></textarea>
                        <div className={s.validate}></div>
                    </div>
                    <div className={s.textCenter}><button type="submit">Коментувати!</button></div>
                </div>
            </form>

        </div>

        <div className={s.comments}>

            <h2>Коментарі:</h2>

            <li key={1}>
                <p className={s.idGen}><span className={s.idComment}>1. </span>Марина</p>
                <p className={s.descComment}>Дуже сподобалось в вашому готелі!</p>
                <p className={s.dateComment}>06.06.2022 12:21:08</p>
            </li>

            <li key={2}>
                <p className={s.idGen}><span className={s.idComment}>2. </span>Андрій</p>
                <p className={s.descComment}>Обслуговування хороше, обіди смачні.</p>
                <p className={s.dateComment}>09.06.2022 01:03:14</p>
            </li>

            <li key={3}>
                <p className={s.idGen}><span className={s.idComment}>3. </span>Олег</p>
                <p className={s.descComment}>Чудовий новий готель. гарні номери і чисто. в ресторані меню ідельно підібране і страви дуже смачні. в СПА є 2 сауни, критий та відкритий басейн з підігрівом. однозначно рекомендую.</p>
                <p className={s.dateComment}>11.06.2022 04:10:18</p>
            </li>

            <li key={4}>
                <p className={s.idGen}><span className={s.idComment}>4. </span>Ольга</p>
                <p className={s.descComment}>Привітний і дружелюбний персонал, який зробить все для вашого комфорту.</p>
                <p className={s.dateComment}>03.05.2022 10:08:12</p>
            </li>

            <li key={5}>
                <p className={s.idGen}><span className={s.idComment}>5. </span>Степан</p>
                <p className={s.descComment}>Відмінне розташування. Чисті туалети та душові. Зручні ліжка. Чудовий персонал.</p>
                <p className={s.dateComment}>22.06.2022 22:13:07</p>
            </li>

            <li key={6}>
                <p className={s.idGen}><span className={s.idComment}>6. </span>Галина</p>
                <p className={s.descComment}>Відміне розташування в самому центрі але в тихому місці,чистота та охайність.Номер великий з мебелю з натурального дерева,кондиціонер та холодильник в номері.</p>
                <p className={s.dateComment}>08.04.2022 07:10:24</p>
            </li>

            <li key={7}>
                <p className={s.idGen}><span className={s.idComment}>7. </span>Дмитро</p>
                <p className={s.descComment}>Перебував у готелі одну добу. Повинен зазначити високий рівень сервісу. Чистий і тихий номер, кондиціонер, на всі запитання є абсолютно позитивні ...</p>
                <p className={s.dateComment}>09.06.2022 06:07:12</p>
            </li>

        </div>


    </MainLayout >
}
