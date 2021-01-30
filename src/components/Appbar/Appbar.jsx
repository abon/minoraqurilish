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
                            <NavDropdown.Item >
                                <Link to='/kasaba'>
                                    касаба уюшмаси
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='/vacancy'>
                                    бўш иш ўринлари
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="бизнесга оид" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <Link to='haridlar'>
                                    Ҳаридлар
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='konkurslar'>
                                    конкурслар
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='shartnomalar'>
                                    шартномалар
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='mahsulotlar'>
                                    маҳсулотлар
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Aksiyadorlar va investorlar" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/kapital-tarkibi'>
                                    Акциядорлик капиталининг таркиби
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/oshkora-malumot'>
                                Ошкоралик маълумотлар
                                </Link></NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='/ustav'>
                                    Устав ва ички низомлар
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='/korporativ'>
                                    Корпоратив бошқарув кодекси
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='/hisobotlar'>
                                    Ҳисоботлар
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='/inves-loyiha'>
                                    Инвестицион лойихалар
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Matbuot markazi" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/yangiliklar'>
                                    Yangiliklar
                                </Link>    
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/hujjatlar'>
                                    Axborotnomalar
                                </Link>    
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Appbar
