import React, { useState } from 'react'
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
  //const [users, setUsers] = useState([])
  const [loginData, setloginData] = useState({
    cedula: "",
    password: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setloginData({ ...loginData, [name]: value })
    console.log(loginData)





    /*const logear = async (evn) => {
      evn.preventDefault()
      const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      }*/

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { cedula, password } = loginData

    console.log(cedula, password)


  }


  return (
    <div className="bg-primary vh-100">
      <Row className="justify-content-center bg-primary align-items-center vh-100" >
        <Col md={4} >
          <Card className="border border-primary shadow-sm">
            <CardTitle tag="h5" className="border-bottom p-3 mb-0 text-center">
              Inicio de sesion
            </CardTitle>
            <CardBody>
              <Form onSubmit={handleSubmit}  >

                <FormGroup>
                  <Label for="cedula">Cedula</Label>
                  <Input
                    id="cedula"
                    name="cedula"
                    type="text"
                    placeholder="Ingrese su cedula"
                    value={loginData.cedula}
                    onChange={handleChange} />

                </FormGroup>
                <FormGroup>
                  <Label for="contraseña">Contraseña</Label>
                  <Input
                    id="password"
                    name="password"
                    type="text"
                    placeholder="Ingrese su contraseña"
                    value={loginData.password}
                    onChange={handleChange} />

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
                  <Button color="primary" type='submit'>Entrar</Button>
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