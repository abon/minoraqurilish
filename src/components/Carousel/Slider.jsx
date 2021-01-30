import { Carousel } from 'react-bootstrap'
import s1 from '../../assets/s1.jpg'
import s2 from '../../assets/s2.jpg'
import s3 from '../../assets/s3.jpg'

import './Slider.css'

const Slider = () => {
    return (
        <div className='carousel'>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        src={s1}

                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>”Минора қуриш экспедициясиз”: Комплаенс инспекторлари лавозимларига номзодларни танлаш учун тест синовлари ўтказилди </h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        src={s2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>”Минора қуриш экспедицияси”: Комплаенс инспекторлари лавозимларига номзодларни танлаш учун тест синовлари ўтказилди </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={s3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>”Минора қуриш экспедицияси”: Комплаенс инспекторлари лавозимларига номзодларни танлаш учун тест синовлари ўтказилди </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
