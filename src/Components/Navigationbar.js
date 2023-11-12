import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="fixed-top">
            <Container>
                <Navbar.Brand href="/"><img src="https://fundahrse.org/wp-content/uploads/2022/08/Logo-35-an%CC%83os-full-color-3.png" width="100" alt='Hola' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Inicio</a>
                        </li>
                        <NavDropdown title="Para Padres" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/infoAdultos">Informacion</NavDropdown.Item>
                            
                        </NavDropdown>
                        <NavDropdown title="Para Estudiantes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/infoJovenes">Informacion</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;