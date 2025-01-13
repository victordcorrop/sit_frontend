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

const Forms = () => {
  return (
    <Row className="justify-content-md-center">
      <Col md={6}>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Registro de articulo
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="tipoArticulo">Tipo de Artículo</Label>
                <Input id="tipoArticulo" name="tipoArticulo" type="select">
                  <option>PC</option>
                  <option>Teclado</option>
                  <option>Ratón</option>
                  <option>Monitor</option>
                  <option>Router</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="marca">Marca</Label>
                <Input id="marca" name="marca" type="select">
                  <option>Marca 1</option>
                  <option>Marca 2</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="modelo">Modelo</Label>
                <Input id="modelo" name="modelo" type="select">
                  <option>Modelo_1</option>
                  <option>Modelo_2</option>
                  <option>Modelo_3</option>
                </Input>
              </FormGroup>
            
              <FormGroup>
                <Label for="serial">Serial</Label>
                <Input id="serial" name="serial" type="text" placeholder="Ingrese el serial del artículo"/>
              </FormGroup>
              
              <FormGroup>
                <Label for="num_b">Numero de bien</Label>
                <Input id="num_b" name="num_b" type="text" placeholder="Ingrese el numero de bien del artículo"/>
              </FormGroup>

              <FormGroup>
                <Label for="observaciones">Observaciones</Label>
                <Input id="observaciones" name="observaciones" type="text" placeholder="Ingrese Ingrese una observacion del articulo"/>

              </FormGroup>

              <FormGroup>
                <Label for="estatus">Estatus</Label>
                <Input id="estatus" name="estatus" type="select">
                  <option>Inactivo</option>
                  <option>Activo</option>
                </Input>
              </FormGroup>
              
              <FormGroup>
                <Label for="sistema_operativo">Sistema operativo</Label>
                <Input id="sistema_operativo" name="sistema_operativo" type="select">
                  <option>Windows</option>
                  <option>Linux</option>
                  <option>Mac</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="color">Color</Label>
                <Input id="color" name="color" type="text" placeholder="Ingrese el color del articulo"/>

              </FormGroup>

              <FormGroup>
                <Label for="almacenamiento">Almacenamiento</Label>
                <Input id="almacenamiento" name="almacenamiento" type="text" placeholder="Ingrese el almacenamiento del articulo"/>

              </FormGroup>

              <FormGroup>
                <Label for="procesador">Procesador</Label>
                <Input id="procesador" name="procesador" type="text" placeholder="Ingrese el procesador del articulo"/>

              </FormGroup>

              <FormGroup>
                <Label for="memoria_ram">Memoria ram</Label>
                <Input id="memoria_ram" name="memoria_ram" type="text" placeholder="Ingrese la memoria ram del articulo"/>

              </FormGroup>

              <FormGroup>
                <Label for="ghz">GHZ</Label>
                <Input id="ghz" name="ghz" type="text" placeholder="Ingrese los ghz del articulo"/>

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

export default Forms;
