import './Appbar.css'

import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Appbar = () => {
    return (
        <div className='app__bar'>
            <Navbar expand="lg">
                <Navbar.Brand> <Link to='/'>
                    Minora Qurilish
                           </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">
                            <Link to='/bosh-sahifa'>
                                Бош саҳифа
                           </Link>
                        </Nav.Link>

                        <NavDropdown title="Биз ҳақимизда" id="basic-nav-dropdown">

                            <NavDropdown.Item>
                                <Link to='jamiyat-haqida'>
                                    жамият ҳақида
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='rahbariyat'>
                                    раҳбарият
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >касаба уюшмаси</NavDropdown.Item>
                            <NavDropdown.Item >бўш иш ўринлари</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Biznesga oid" id="basic-nav-dropdown">
                            <NavDropdown.Item>Jamiyat tarixi</NavDropdown.Item>
                            <NavDropdown.Item >Tashkiliy tuzilma</NavDropdown.Item>
                            <NavDropdown.Item >Rahbariyat</NavDropdown.Item>
                            <NavDropdown.Item >Faoliyat maqsadi va vazifalar  </NavDropdown.Item>
                            <NavDropdown.Item >Kasaba uyushmasi</NavDropdown.Item>
                            <NavDropdown.Item >Bo'sh ish o'rinlari</NavDropdown.Item>
                            <NavDropdown.Item >Sohaga oid muhim hujjatlar</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Aksiyadorlar va investorlar" id="basic-nav-dropdown">
                            <NavDropdown.Item>Акциядорлик капиталининг таркиби</NavDropdown.Item>
                            <NavDropdown.Item >Акциядорлар йиғилиши</NavDropdown.Item>
                            <NavDropdown.Item >Ошкоралик маълумотлар</NavDropdown.Item>
                            <NavDropdown.Item >Устав ва ички низомлар</NavDropdown.Item>
                            <NavDropdown.Item >Корпоратив бошқарув кодекси</NavDropdown.Item>
                            <NavDropdown.Item >Ҳисоботлар</NavDropdown.Item>
                            <NavDropdown.Item >Инвестицион лойихалар</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Matbuot markazi" id="basic-nav-dropdown">
                            <NavDropdown.Item>Yangiliklar</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Appbar
