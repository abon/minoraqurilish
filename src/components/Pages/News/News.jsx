import { Link } from "react-router-dom";

import './News.css'

const News = () => {
    return (
        <div className='news'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to='/bosh-sahifa'>Бош саҳифа</Link>
                    </li>
                    <li className="breadcrumb-item">Янгиликлар</li>
                </ol>
            </nav>
            <div className='news__text'>
                <p className='news__paragraph'>

                    <h1>Объявление!</h1>

                    Руководство АО «Minora qurish ekspeditsiyasi» сообщает,  что официальным наименование веб-сайта Общества является <strong> www.mqe-aj.uz</strong>
                    <br /><br />
Администрация
                </p>
            </div>
        </div>
    )
}

export default News
