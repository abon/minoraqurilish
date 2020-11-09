import { Row, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";


import c6 from '../../../assets/c6.jpg'


const Rahbarlar = () => {
    return (
        <div className='card__group'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to='/bosh-sahifa'>Бош саҳифа</Link>
                    </li>
                    <li className="breadcrumb-item">Биз ҳақимизда</li>
                    <li className="breadcrumb-item active" aria-current="page">Раҳбарият</li>
                </ol>
            </nav>
            <Row>
                <div className="card mb-3" style={{ margin: '30px' }} >
                    <div className="row no-gutters">
                        <div class="col-md-4">
                            <img src={c6} style={{ height: '300px', width: '100%', objectFit: 'cover' }} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Абдуллаев Меҳриддин Раззоқович</h5>
                                <p className="card-text">«Ўзбекнефтгаз» АЖ: Бошқарув раиси</p>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i className="fas fa-calendar-alt"></i><strong style={{ marginLeft: '5px' }}>
                                            Қабул куни:</strong> </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <InputGroup.Text>Ҳар ҳафтанинг Жума куни соат 09:00 дан 12:00 гача</InputGroup.Text>
                                </InputGroup>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i className="fas fa-phone-square-alt"></i><strong style={{ marginLeft: '5px' }}>
                                            Мурожаат учун телефон:</strong> </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <InputGroup.Text>+99899 999-99-99</InputGroup.Text>
                                </InputGroup>
                                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>

        </div>
    )
}

export default Rahbarlar
