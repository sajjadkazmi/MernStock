import React, { Component } from 'react';
import './Sidebar.css';
import { Button, Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
class Angular extends Component {
  render() {
    return (
      <div>

        <div className="animated fadeIn">

          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Combined All Table
              </CardHeader>
                <CardBody>


                  <div>
                    <Button color="danger" onClick={this.toggle} style={{ position: "absolute", top: 0, right: 0 }}  > Add User{this.props.buttonLabel}</Button>

                  </div>
                  <Table hover bordered striped responsive size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>department</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>1</td>
                        <td>Azeem</td>
                        <td>azeem@gmail.com</td>
                        <td>khairpur</td>
                        <td>SDG</td>
                        <td>
                          <Badge color="success" display={false}>Active</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Hssan</td>
                        <td>Hassan@gmail.com</td>
                        <td>hyderabad</td>
                        <td>HR</td>
                        <td>
                          <Badge color="success" display={false}>Active</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>hussain</td>
                        <td>hussain@gmail.com</td>
                        <td>sukkur</td>
                        <td>SDG</td>
                        <td>
                          <Badge color="success" display={false}>Active</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Azeem</td>
                        <td>ahmed@gmail.com</td>
                        <td>badin</td>
                        <td>SDG</td>
                        <td>
                          <Badge color="success" display={false}>Active</Badge>
                        </td>
                      </tr>


                    </tbody>

                  </Table>

                </CardBody>
              </Card>


            </Col>
          </Row>
        </div>


      </div>
    );
  }
}


export default Angular
