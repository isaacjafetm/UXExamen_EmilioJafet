import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "./Footer.js";

import DCU from "../Images/DCU.png";
import atomic from "../Images/atomic.png";

const InfoAdultos = () => {
    const containerStyle = {
        padding: '20px',
        marginTop: '80px',
        minHeight: 'calc(100vh - 160px)', 
        backgroundColor: '#FFF8E7'
    };

    const sectionStyle = {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '10px',
        zIndex: 0, 
        marginBottom: '20px', 
    };

    const atomicSectionStyle = {
        backgroundColor: '#e0e0e0',
        padding: '20px',
        borderRadius: '10px',
        zIndex: 0, 
        marginBottom: '200px', 
        paddingBottom:'50px'
    };

    const sideSectionStyle = {
        backgroundColor: '#e0e0e0',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
    };

    const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
    };

    return (
        <Container style={containerStyle}>
            <Row>
                {/* Sección adicional a la izquierda */}
                <Col md={4}>
                    <div style={sideSectionStyle}>
                        <h1>Ejemplos de Mejora de la Experiencia de Usuario (UX):</h1>
                        <ul>
                            <li>
                                <strong>Sitio Web de Noticias:</strong> Mejora de UX: Organizar la información de manera clara, facilitar la navegación y proporcionar opciones de personalización para los usuarios.
                            </li>
                            <li>
                                <strong>Aplicación de Salud:</strong> Mejora de UX: Implementar una interfaz intuitiva, ofrecer recordatorios y brindar acceso rápido a funciones importantes.
                            </li>
                        </ul>
                        <img src="https://c8.alamy.com/compes/c16494/correo-web-noticias-online-c16494.jpg" style={imgStyle} alt="Ejemplos de UX" />
                    </div>
                </Col>

                {/* Sección principal */}
                <Col md={4}>
                    <div style={sectionStyle}>
                        <h1>¿Diseño Centrado en el Usuario (DCU), qué es?</h1>
                        <p>
                            El diseño centrado en el usuario (DCU) es una metodología de diseño
                            que se basa en la información sobre el usuario target. Toma en cuenta
                            la experiencia del usuario en todo el proceso del diseño. La finalidad
                            principal es poder mejorar al máximo la experiencia del usuario en
                            nuestro sitio web, volviéndola más atractiva y fácil de utilizar.
                        </p>
                        <img src='https://i0.wp.com/www.nachomadrid.com/wp-content/uploads/2020/04/Proceso_DCU_featured.jpg?fit=1024%2C635&ssl=1' style={imgStyle} alt="DCU" />
                    </div>
                </Col>

                {/* Sección adicional a la derecha */}
                <Col md={4}>
                    <div style={sideSectionStyle}>
                        <h1>Ejemplos de Diseño Atómico en Acción:</h1>
                        <ul>
                            <li>
                                <strong>Sistema de Diseño de Marca:</strong> Diseño Atómico: Crear elementos de diseño reutilizables como botones, tipografías y colores para mantener la coherencia en la marca.
                            </li>
                            <li>
                                <strong>Interfaz de Administrador:</strong> Diseño Atómico: Construir componentes modulares para facilitar el desarrollo y la gestión de una interfaz de administrador compleja.
                            </li>
                        </ul>
                        <img src="https://graffica.info/wp-content/uploads/2016/05/Captura-de-pantalla-2016-04-11-a-las-16.09.42-1024x513-1024x513-1.jpg" style={imgStyle} alt="Ejemplos de Diseño Atómico" />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div style={atomicSectionStyle}>
                        <h1>¿Qué es el diseño atómico?</h1>
                        <p>
                            Un diseño atómico es crucial para que nuestro código de nuestra
                            aplicación pueda tener buena visibilidad, escalabilidad y
                            flexibilidad. El diseño atómico, creado por Brad Frost y Dave Olsen,
                            es una metodología de diseño que implica cinco bloques de diseño
                            fundamentales, que al juntarse, vuelven el código más fácil de leer y
                            modular. También, permite facilitar las pruebas y mejorar la calidad
                            en general de nuestro programa.
                        </p>
                        <img src='https://concretaux.com/wp-content/uploads/dise%C3%B1o-at%C3%B3mico-por-Brad-Frost.png' style={imgStyle} alt="Atomic Design" />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="fixed-bottom bg-light border p-2">
                        <Footer />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default InfoAdultos;
