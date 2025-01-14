


import { useEffect } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Model = () => {

  const selectMarca = async () => {
    const API_URL = 'http://localhost:3000'
    const response = await fetch(`${API_URL}/marca`)
    const marcas = await response.json()
    return marcas

  }

  const datos = selectMarca()  
  console.log(datos)

  return (
    <Row className="justify-content-md-center">
      <Col md={6} >
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Registro de Modelo
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="marca">Marca</Label>
                <Input id="marca" name="marca" type="select">
                  
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="modelo">Modelo</Label>
                <Input id="modelo" name="modelo" type="text" placeholder="Ingrese el modelo que quiera registrar" />
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

export default Model;
