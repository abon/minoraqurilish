import { Link } from "react-router-dom";

import './Jamiyat.css'

const Jamiyat = () => {
    return (
        <div className='society'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to='/bosh-sahifa'>Бош саҳифа</Link>
                    </li>
                    <li className="breadcrumb-item">Биз ҳақимизда</li>
                    <li className="breadcrumb-item active" aria-current="page">Жамият тарихи</li>
                </ol>
            </nav>
            <div className='society__history'>
                <p className='history'>

                    Мустақиллик йилларида соҳанинг ривожланиши:
                    Ўзбекистон Республикаси мустақиллигининг биринчи кунларидан соҳанинг янги ҳаёти, нефт ва газ саноати ривожланишининг янги босқичи бошланди. Мамлакат раҳбарияти ушбу соҳанинг кенг кўламли ривожланишига катта аҳамият берди.
<br /><br />
                    Ўзбекистон мустақилликка эришиши ва 1992 йилдан республикада иқтисодий ислоҳотлар бошланиши билан нефт-газ комплексига алоҳида эътибор қаратилди.
                    <br /><br />
                    Маъмурий буйруқбозлик усулларидан бозор механизми бўйича фаолиятга эволяцияли ўтишни таъминловчи структуравий ўзгаришлар босқичлари Ўзбекистон Республикаси Президенти И.А.Каримов томонидан 1992 йилда белгилаб берилган қуйидаги стратегик вазифаларни бажариш билан олиб борилди:
                    <br /><br />
                    Биринчи газ 1953 йил Қизилқум чўлидаги Сеталантепа конидан қазиб олинди. 1962 йилда ноёб Газли кони ишга туширилгандан кейин Бухоро — Урал ва Ўрта Осиё — Марказ трансконтиненталь газ қувурйўллари ўтказилди.
                    <br /><br />
                    — Республиканинг нефт мустақиллигига эришиш мақсадида нефт ва газ конденсати қазиб чиқаришни жиддий равишда ошириш;
                    <br />
                    — Ишлаб чиқарилаётган маҳсулот сифатини жаҳон андозалари даражасига етказиш мақсадида нефт ва газни технологик қайта ишлаш жараёнларини чуқурлаштириш;
                    — Ўзбекистон нефт-газ соҳаси хом ашё базасини ишончли таъминлаш мақсадида янги конларни очиш ҳисобига биринчи навбатда суюқ углеводородлар заҳирасини кўпайтириш.
                </p>
            </div>
        </div>
    )
}

export default Jamiyat
