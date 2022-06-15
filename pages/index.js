import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import React from 'react'
import MainLayout from '../components/MainLayout/MainLayout';
import s from '../components/MainLayout/MainLayout.module.css';

import main1 from '../public/images/main1.jpg'
import main2 from '../public/images/main2.jpg'
import main3 from '../public/images/main3.jpg'

export default function index() {
  return <MainLayout className={s.container}>
    <Head>
      <title>
        Головна
      </title>
    </Head>

    <div className={s.textIndex}>

      <div className={s.titleMainPart}>
        <Image
          src={main3}
        />
      </div>

      <div className={s.partFirstMain}>

        <div className={s.partFirstMainPhoto}>
          <Image
            src={main1}
          />
        </div>

        <p className={s.textFirst}>Вітаємо вас на веб-сайті готелю<span>«Комфорт»</span>
          - готелю домашнього затишку.
          Наш готель розташований в центрі міста Червоноград по вулиці Стуса 11-б.
          До готелю є зручний доїзд з вул. Сокальської ( детальніше на <Link href={'/contacts'}><a><span className={s.spanNav}>схемі</span></a></Link> ).
        </p>

      </div>

      <div className={s.partSecondMain}>
        <p>
          Біля готелю є загороджене місце для паркування, обладнане відеоспостереженням.
          Вдале розташування дозволяє швидко добратися до автобусного та залізничного вокзалу.
          Ми пропонуємо вам 9 комфортабельних номерів на будь-який смак.
          Всі кімнати облаштовані зручними меблями, душем, туалетом, сателітарним телебаченням, холодильником, безкоштовним Wi-Fi інтернетом.
          Ми прикладаєм всі зусилля, щоб номери задовільнили смаки найвибагливіших гостей.
          В готелі також є  кімната, обладнана кухонною технікою і посудою,
          де можна відпочити після важкого дня за кружкою кави чи бокалом пива.
        </p>
      </div>

      <div className={s.partThirdMain}>
        <p className={s.textThird}>
          Ми також пропонуємо додатковий сервіс:

          - транспортні послуги ( замовимо зручне для Вас таксі )

          - довідково-інформаційні послуги

          - замовлення і доставка їжі з ресторану-піцерії «Гульбарій»

          - місце для безкоштовного паркування
        </p>

        <div className={s.partThirdMainPhoto}>
        <Image
          src={main2}
        />
        </div>

      </div>


      <div className={s.partFourMain}>
        <p className={s.textFour}>
          Найбільші підприємства Червонограда: “Дюна-Веста”, «Київ-Захід», ВАТ «Калина», «Мебель-Сервіс», «Євробуд» давно співпрацюють з нами на предмет розміщення своїх бізнес-партнерів, в тому числі з-за кордону.

          Персонал готелю «Комфорт» робить все для того, щоб наші гості почувалися як вдома.

          Високий рівень обслуговування, конфіденційність та безпека залишать у Вас хороші враження та приємні спогади про відвідини нашого міста.
        </p>
      </div>

      <div className={s.partFiveMain}>
        <p className={s.textFive}>
          Ми завжди раді гостям !!!
          <br />
          <br />
          Чекаємо на Вас !!!
        </p>
      </div>


    </div>

  </MainLayout >

}