import { Card, CardColumns } from 'react-bootstrap';
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { uz } from 'date-fns/locale'

import elon from '../../assets/elon.jpg'
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
import c4 from '../../assets/c4.jpg';
import c5 from '../../assets/c5.jpg';
import c6 from '../../assets/c6.jpg';

import './CardGroup.css';


const CardGroup = () => {
    return (
        <div className='card__group'>
            <CardColumns>

                <Card className='news__card'>
                    <Card.Img variant="top" src={elon} />
                    <Card.Body>
                        <Link to="/yangiliklar">
                            <Card.Title>Объявление!</Card.Title>
                            <Card.Text>
                                Руководство АО «Minora qurish ekspeditsiyasi» сообщает...<br />
                            </Card.Text>
                        </Link>
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
