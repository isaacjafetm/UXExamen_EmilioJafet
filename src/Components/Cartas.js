import React from 'react';
import Card from 'react-bootstrap/Card';

const Cartas = () => {
  const cardStyle = {
    marginBottom: '20px',
  };

  const imageStyle = {
    maxHeight: '700px', 
    objectFit: 'cover',
  };

  const titleStyle = {
    fontSize: '1.5rem', 
  };

  const textStyle = {
    fontSize: '1rem', 
  };

  return (
    <div>
      <Card style={cardStyle}>
        <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1400/0*S2M1R1pGHy8yVLSq" style={imageStyle} />
        <Card.Body>
          <Card.Title style={titleStyle}>¡Explora más sobre UX y DCU!</Card.Title>
          <Card.Text style={textStyle}>
            La Experiencia de Usuario (UX) se centra en cómo los usuarios interactúan con productos digitales,
            como aplicaciones o sitios web. El Diseño Centrado en el Usuario (DCU) implica poner a las personas
            en el centro del proceso de diseño, comprendiendo sus necesidades y deseos para crear productos adaptados a ellos.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/estudiantes-en-una-sala-de-clase-53019564.jpg" style={imageStyle} />
        <Card.Body>
          <Card.Title style={titleStyle}>Para estudiantes apasionados</Card.Title>
          <Card.Text style={textStyle}>
            El diseño centrado en el usuario busca hacer que la interacción con productos digitales sea agradable y fácil.
            Comprender a los usuarios y diseñar productos que se ajusten a sus necesidades es clave.
            Los estudiantes pueden beneficiarse al utilizar las herramientas digitales proporcionadas por UNITEC.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img variant="top" src="https://s3.abcstatics.com/media/familia/2016/08/29/ninos8%20(2)-U10107421996ZpE--620x349@abc.jpg" style={imageStyle} />
        <Card.Body>
          <Card.Title style={titleStyle}>Para padres informados</Card.Title>
          <Card.Text style={textStyle}>
            UX y el diseño centrado en el usuario buscan mejorar la experiencia de uso de productos digitales.
            Al diseñar pensando en los usuarios, se crea una experiencia más intuitiva y agradable,
            facilitando su uso para maximizar los beneficios. Los padres disfrutarán de productos digitales
            más fáciles de usar, adaptados a sus necesidades y preferencias.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cartas;