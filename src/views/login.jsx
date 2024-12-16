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
  
  const login = () => {
    return (
      <div className="bg-primary vh-100">
      <Row className="justify-content-center bg-primary align-items-center vh-100" > 
      <Col md={4} >
        <Card className="border border-primary shadow-sm"> 
          <CardTitle tag="h5" className="border-bottom p-3 mb-0 text-center"> 
            Inicio de sesion
          </CardTitle>
          <CardBody>
            <Form>
        
              <FormGroup>
                <Label for="cedula">Cedula</Label>
                <Input id="cedula" name="cedula" type="text" placeholder="Ingrese su cedula"/>
              </FormGroup>
              <FormGroup>
                <Label for="contraseña">Contraseña</Label>
                <Input id="contraseña" name="contraseña" type="text" placeholder="Ingrese su contraseña"/>
              </FormGroup>
              <div className="text-center mb-3">
                <a href="" className="text-decoration-none text-primary">
                  Resgristrar usuario
                </a>
              </div>

              <div className="text-center mb-3">
                <a href="" className="text-decoration-none text-primary">
                  ¿Has olvidado tu contraseña?
                </a>
              </div>

              <div className="d-flex justify-content-center">
                <Button color="primary">Entrar</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </div>
  );
};
  export default login;