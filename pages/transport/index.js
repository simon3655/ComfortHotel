import React from 'react'
import Head from 'next/head';
import MainLayout from '../../components/MainLayout/MainLayout';

import s from '../../components/MainLayout/MainLayout.module.css';

export default function Transport() {

    return <MainLayout>
        <Head>
            <title>
                Транспорт
            </title>
        </Head>

        <div className={s.bookingPageWrap}>
            <p className={s.bookingText}>
                Щоб замовити транспорт до нашого готелю скористайтесь наступними контактами:
                <br />
                <span className={s.italicBooking}>міський: </span>+38-03249-46330,  +38-03249-20383
                <br />
                <span className={s.italicBooking}>life: </span> +38-093-9152415,  <span className={s.italicBooking}>КиївCтар: </span>+38-098-6763727,  <span className={s.italicBooking}>МТС: </span>+38-095-0756862
                <br />
                <span className={s.italicBooking}>e-mail: </span>comfort.chervonograd@gmail.com
                <br />
                <span className={s.italicBooking}>skype: </span>comfort-chervonograd
                <br />
                ... або заповніть форму.  Наші адміністратори зв'яжуться з Вами для підтвердження замовлення транспорту
            </p>

            <div className={s.addComments}>

                <form action="/" method="post" role="form" className={s.emailForm}>
                    <div className={s.row}>
                        <div className={s.nameInput}>
                            <input type="text" name="name" className={s.formControl} id="name" placeholder="ID замовлення" data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars" />
                            <div className={s.validate}></div>
                        </div>
                        <div className={s.emailInput}>
                            <input type="email" className={s.formControl} name="email" id="email" placeholder="Пошта"
                                data-rule="email" data-msg="Please enter a valid email" />
                            <div className={s.validate}></div>
                        </div>
                        <div className={s.phoneInput}>
                            <input type="text" className={s.formControl} name="phone" id="phone" placeholder="Телефон"
                                data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className={s.validate}></div>
                        </div>
                        <div className={s.dateInput}>
                            <input type="text" name="date" className={s.formControl} id="date" placeholder="Дата/час прибуття" data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars" />
                            <div className={s.validate}></div>
                        </div>
                        <div className={s.timeInput}>
                            <input type="text" className={s.formControl} name="date" id="date" placeholder="Місце прибуття" data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars" />
                            <div className={s.validate}></div>
                        </div>
                        <div className={s.countPeople}>
                            <input type="number" className={s.formControl} name="people" id="people" placeholder="К-сть людей"
                                data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                            <div className={s.validate}></div>
                        </div>

                        <div className={s.bagInput}>
                            <p>Є багаж?</p>
                            <input className={s.bagCheckBox} type="checkbox" />
                        </div>

                        <div className={s.transportSelect}>
                            <label for="transport">Оберіть транспорт:</label>
                            <select name="transport" id="transport">
                                <option value="volvo">Легковий</option>
                                <option value="saab">Грузовий</option>
                                <option value="mercedes">Бус</option>
                                <option value="audi">Лімузин</option>
                            </select>
                        </div>

                    </div>
                    <div className={s.formControl}>
                        <textarea className={s.formControl} name="message" rows="5" placeholder="Додатково"></textarea>
                        <div className={s.validate}></div>
                    </div>
                    <div className={s.textCenter}><button type="submit">Замовити транспорт!</button></div>
                </form>

            </div>
        </div>


    </MainLayout >
}
