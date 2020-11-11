import { Card, CardColumns } from 'react-bootstrap';
import { format } from 'date-fns'
import { uz } from 'date-fns/locale'

import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
import c4 from '../../assets/c4.jpg';
import c5 from '../../assets/c5.jpg';
import c6 from '../../assets/c6.jpg';
import c7 from '../../assets/c7.jpg';

import './CardGroup.css';

const CardGroup = () => {
    return (
        <div className='card__group'>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={c1} />
                    <Card.Body>
                        <Card.Title>“Ўзбекнефтгаз”: БМТ Тараққиёт дастурининг Ўзбекистондаги ваколатхонаси вакиллари иштирокида коррупцияга қарши комплаенс тизимини жорий этиш муҳокама қилинди</Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{format(new Date(), 'do MMMM yyyy', {
                            locale: uz
                        })} </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={c2} />
                    <Card.Body>
                        <Card.Title>Муҳокамада БМТ Тараққиёт дастурининг Ўзбекистондаги ваколатхонаси ҳамда “KPMG” халқаро аудиторли</Card.Title>

                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={c3} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{format(new Date(), 'do MMMM yyyy', {
                            locale: uz
                        })} </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={c4} />
                    <Card.Body>
                        <Card.Title>Ўзбекнефтгаз”: Атмосфера ва атроф-муҳитга чиқарилаётган зарарли моддалар ва чиқиндилар миқдорини белгиланган меъёрга нисбатан 38 679,39 тоннага камайтиришга эришилди</Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{format(new Date(), 'do MMMM yyyy', {
                            locale: uz
                        })} </small>
                    </Card.Footer>

                </Card>
                <Card>
                    <Card.Img variant="top" src={c5} />
                    <Card.Body>
                        <Card.Title>Ўзбекнефтгаз”: Атмосфера ва атроф-муҳитга чиқарилаётган зарарли моддалар ва чиқиндилар миқдорини белгиланган меъёрга нисбатан 38 679,39 тоннага камайтиришга эришилди</Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{format(new Date(), 'do MMMM yyyy', {
                            locale: uz
                        })} </small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={c6} />
                    <Card.Body>
                        <Card.Title>Ўзбекнефтгаз”: “Газли” газни қайта ишлаш заводида рақамлаштириш ва ахборотлаштириш ишлари амалга оширилмоқда </Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{format(new Date(), 'do MMMM yyyy', {
                            locale: uz
                        })} </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={c7} />
                    <Card.Body>
                        <Card.Title>Ўзбекнефтгаз”: “Газли” газни қайта ишлаш заводида рақамлаштириш ва ахборотлаштириш ишлари амалга оширилмоқда</Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{format(new Date(), 'do MMMM yyyy', {
                            locale: uz
                        })} </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={c7} />
                    <Card.Body>
                        <Card.Title>Ўзбекнефтгаз”: “Газли” газни қайта ишлаш заводида рақамлаштириш ва ахборотлаштириш ишлари амалга оширилмоқда</Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{format(new Date(), 'do MMMM yyyy', {
                            locale: uz
                        })} </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={c4} />
                    <Card.Body>
                        <Card.Title>Ўзбекнефтгаз”: “Газли” газни қайта ишлаш заводида рақамлаштириш ва ахборотлаштириш ишлари амалга оширилмоқда</Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{format(new Date(), 'do MMMM yyyy', {
                            locale: uz
                        })} </small>
                    </Card.Footer>
                </Card>

            </CardColumns>
        </div>
    )
}

export default CardGroup