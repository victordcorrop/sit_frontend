

//  const  Model = () => {
//   return (
//     <h1>Modelos</h1>
//   );
// }
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
  return (
    <Row className="justify-content-md-center">
      <Col  md={6} >
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
                  <option>Marca 1</option>
                  <option>Marca 2</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="modelo">Modelo</Label>
                <Input id="modelo" name="modelo" type="text" placeholder="Ingrese el modelo que quiera registrar"/>
              </FormGroup>
              
              <Button color="info">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Model;
