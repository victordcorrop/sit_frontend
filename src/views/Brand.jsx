import React, { useState } from "react";
import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input } from "reactstrap";

const Brand = () => {
  const [marca, setMarca] = useState("");

  const registrarMarca = async (e) => {
    e.preventDefault()


    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ marca })
    }
    try {
      const response = await fetch('http://localhost:3000/marca', requestOption)
      const result = await response.json()
      console.log(result)

    }


    catch (error) {
      console.error("Error:", error);
      alert("Error al crear la marca");


    }

  };


  return (
    <Row className="justify-content-md-center">
      <Col md={6}>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Registro de Marca
          </CardTitle>
          <CardBody>
            <Form onSubmit={registrarMarca}>
              <FormGroup>
                <Label for="Marca">Marca</Label>
                <Input
                  id="Marca"
                  name="Marca"
                  type="text"
                  placeholder="Ingrese la marca"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                />
              </FormGroup>
              <div className=" d-flex  justify-content-center">
                <Button className="mx-8" color="primary" type="submit">Registrar</Button>
              </div>

            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Brand;
