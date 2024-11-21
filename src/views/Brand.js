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

const Brand = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Registro de Marca
          </CardTitle>
          <CardBody>
            <Form>
        
              <FormGroup>
                <Label for="Marca">Marca</Label>
                <Input id="Marca" name="Marca" type="text" placeholder="Ingrese la marca que quiera registrar"/>
              </FormGroup>
              

              <Button color="info">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};


//  const  Brand =() =>{
//   return (
//     <h1>Marcas</h1>
//   );
// }

export default Brand
