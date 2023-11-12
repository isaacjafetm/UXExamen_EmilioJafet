import React from 'react';
import { useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import Footer from './Footer';
import DCU from '../Images/DCU.png';
import DCU1 from '../Images/DCU1.png';
import DCU3 from '../Images/DCU3.png';
import DCU5 from '../Images/DCU5.png';
import atomic from '../Images/atomic.png';

const InfoJovenes = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const containerStyle = {
    backgroundColor: '#e6f7ff',  
    padding: '20px',
    marginTop: '80px',
    minHeight: 'calc(100vh - 160px)',
    paddingBottom: '120px',
  };

  const sectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  const atomicSectionStyle = {
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
  };

  const formStyle = {
    marginBottom: '20px',
  };

  return (
    <Container style={containerStyle}>
      <Row>
        {/* Sección adicional a la izquierda */}
        <Col md={4}>
          <div style={sectionStyle}>
            <h1>Ejemplos de Mejora de la Experiencia de Usuario (UX):</h1>
            <ol>
              <li>
                <strong>Bancos en Línea:</strong> Mejora de UX: Simplificar el proceso de inicio de sesión, proporcionar visualizaciones claras de las transacciones y ofrecer herramientas de gestión financiera intuitivas.
              </li>
              <li>
                <strong>Aplicaciones de Salud y Bienestar:</strong> Mejora de UX: Personalizar la aplicación para adaptarse a las preferencias de los usuarios, proporcionar recordatorios de medicamentos y ofrecer información fácilmente comprensible sobre la salud.
              </li>
              <li>
                <strong>Plataformas de Streaming de Contenido:</strong> Mejora de UX: Ofrecer recomendaciones personalizadas, facilitar la navegación entre categorías y permitir una reproducción sin interrupciones.
              </li>
            </ol>
            <img src="https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2021/1/8/imagen_1_0.jpg?itok=3tN-yrkF" style={imgStyle} alt="DCU" />
          </div>
        </Col>

        {/* Sección principal */}
        <Col md={4}>
          <div style={sectionStyle}>
            <h1>¡Descubre el Diseño Centrado en el Usuario (DCU)!</h1>
            <p>
              El diseño centrado en el usuario (DCU) es una manera emocionante de
              crear experiencias digitales increíbles. ¿Quieres aprender cómo hacerlo?
              ¡Aquí te contamos todo!
            </p>
            <img src={DCU} style={imgStyle} alt="DCU" />
          </div>
        </Col>

        {/* Sección adicional a la derecha */}
        <Col md={4}>
          <div style={sectionStyle}>
            <h1>Ejemplos de Aplicación del Diseño Centrado en el Usuario (DCU):</h1>
            <ol>
              <li>
                <strong>Redes Sociales:</strong> Proceso DCU: Entender las necesidades de los usuarios para mejorar la interfaz y la facilidad de uso. Realizar pruebas de usabilidad para optimizar la navegación.
              </li>
              <li>
                <strong>Aplicaciones de Compras en Línea:</strong> Proceso DCU: Analizar el comportamiento del usuario al buscar productos, simplificar el proceso de compra, y recibir retroalimentación para mejorar la experiencia.
              </li>
              <li>
                <strong>Plataformas Educativas:</strong> Proceso DCU: Diseñar la arquitectura basada en las necesidades educativas de los usuarios, permitiendo una fácil navegación entre cursos y recursos.
              </li>
            </ol>
            <img src="https://concepto.de/wp-content/uploads/2014/08/redes-sociales-1-e1551307320533.jpg" style={imgStyle} alt="DCU" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <div style={atomicSectionStyle}>
            <h1>Sumérgete en el Diseño Atómico</h1>
            <p>
              El diseño atómico es como construir con bloques de LEGO. Cada átomo y
              molécula se unen para crear algo increíble. ¿Listo para el viaje atómico?
            </p>
            <img src={atomic} style={imgStyle} alt="Atomic Design" />
            {/* Resto del contenido, sin cambios */}
          </div>
        </Col>

        <Col md={6}>
          <div id="participa" className="mt-5" style={atomicSectionStyle}>
            <h1>Participa en nuestro foro</h1>
            <Form>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escribe tu nombre"
                  onChange={(e) => handleChange(e, setNombre)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Escribe tu email"
                  onChange={(e) => handleChange(e, setEmail)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="comentario">
                <Form.Label>Comentario</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escribe tu comentario"
                  onChange={(e) => handleChange(e, setComentario)}
                />
              </Form.Group>

              <Button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Enviar
              </Button>
            </Form>
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

export default InfoJovenes;
