import React, { Component } from 'react';
import '../Sidebar.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { AddingUser, SetupUser } from '../../store/Actions/Setup_userAction';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      // address:'',
      // department:'',
      modal_dapartment: 0,
      modal_Location: 0,
      isActive: true,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.AddOnChange = this.AddOnChange.bind(this);
    this.ModelDepartmentChange = this.ModelDepartmentChange.bind(this);
    this.ModelLocationChange = this.ModelLocationChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  submit() {
    let obj = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      DepartmentId: parseInt(this.state.modal_dapartment),
      LocationId: parseInt(this.state.modal_Location),
      isActive: true,
      CreatedDate: null,
      CreatedBy: null,
      ModifiedDate: null,
      ModifiedBy: null

    }
    this.props.isAddEmp(obj);
    this.setState({
      modal: !this.state.modal
    });
    console.log(obj)
  }
  AddOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentWillMount() {
    this.props.isSetupUser()
  }

  ModelDepartmentChange(event) {
    this.setState({ modal_dapartment: event.target.value });
  }

  ModelLocationChange(event) {
    this.setState({ modal_Location: event.target.value });
  }

  render() {
    let data = this.props.employee;
    // console.log("angular dataa",data)
    let department = [];
    department = this.props.department;
    let location = [];
    location = this.props.location;

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

                  {/* modal starting here */}
                  <div>
                    <Button color="danger" onClick={this.toggle} style={{ position: "absolute", top: 0, right: 0 }}  > Add User{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                      <ModalBody>

                        <label class="col-lg-12">User Name </label>
                        <div class="col-lg-12">
                          <input type="email" name="name" value={this.state.name} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
                        </div>
                        <label class="col-lg-12">Email (Login-Id)</label>
                        <div class="col-lg-12">
                          <input type="email" name="email" value={this.state.email} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
                        </div>
                        <label class="col-lg-12">Address </label>
                        <div class="col-lg-12">
                        </div>



                        <div class="col-lg-12">
                          <label for="exampleInputPassword2">Department </label>
                          <span id="MainContent_RequiredFieldValidator4" style={{ color: 'Red', display: 'none' }}></span>
                          <select className="form-control" value={this.state.modal_dapartment} onChange={this.ModelDepartmentChange}>
                            <option value={0}>--Select--</option>
                            {department.length > 0 &&
                              (department.map((val, ind) => {
                                return (
                                  <option key={ind} value={val.Id}>{val.DepartmentName}</option>
                                )
                              }))
                            }
                          </select>
                        </div>

                        <div class="col-lg-12">
                          <label for="exampleInputPassword2">Location </label>
                          <span id="MainContent_RequiredFieldValidator4" style={{ color: 'Red', display: 'none' }}></span>
                          <select className="form-control" value={this.state.modal_Location} onChange={this.ModelLocationChange}>
                            <option value={0}>--Select--</option>
                            {location.length > 0 &&
                              (location.map((val, ind) => {
                                return (
                                  <option key={ind} value={val.id}>{val.city}</option>
                                )
                              }))
                            }
                          </select>
                        </div>

                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.submit.bind(this)}  >Add User Data</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
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
                    {data.length > 0 &&
                      <tbody>
                        {data.map((val, index) => {
                          return (

                            <tr key={index} >
                              <td>{val.id}</td>

                              <td >{val.emp_name}  </td>
                              <td>{val.emp_email} </td>
                              <td>{val.city} </td>
                              <td>{val.DepartmentName} </td>
                              <td>
                                <Badge color="success" display={false}>Active</Badge>
                              </td>

                            </tr>

                          )
                        })}

                      </tbody>
                    }
                  </Table>
                  <nav>
                    <Pagination>
                      <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                      <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                    </Pagination>
                  </nav>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state.Setup_UserReducer.employee', state.Setup_UserReducer.employee)
  return {
    employee: state.Setup_UserReducer.employee,
    department: state.Setup_UserReducer.department,
    location: state.Setup_UserReducer.location,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    isSetupUser: () => {
      dispatch(SetupUser())
    },
    isAddEmp: (obj) => {
      dispatch(AddingUser(obj))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Employee);
