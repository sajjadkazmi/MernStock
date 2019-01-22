import React, { Component } from 'react';
import '../Sidebar.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { SetupUser, AddingDepartment } from '../../store/Actions/Setup_userAction';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',  //   this is department
      isActive: true,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.AddOnChange = this.AddOnChange.bind(this);

  }



  componentWillMount() {
    this.props.isGetData();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  submit() {
    let obj = {

      id: this.state.id,
      //   city:this.state.city,
      name: this.state.name,  //   this is department

      isActive: true,
      CreatedDate: null,
      CreatedBy: null,
      ModifiedDate: null,
      ModifiedBy: null

    }
    this.props.isAddDepartment(obj);
    this.setState({
      modal: !this.state.modal
    });
    console.log(obj)
  }
  AddOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })


  }

  componentWillMount() {
    this.props.isSetupUser()
  }


  render() {
    let data = this.props.department;
    // console.log("checking dataa",data);


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
                    <Button color="danger" onClick={this.toggle} style={{ position: "absolute", top: 0, right: 0 }}  > Add Department{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                      <ModalBody>

                        <label class="col-lg-12">Enter Department Name </label>
                        <div class="col-lg-12">
                          <input type="email" name="name" value={this.state.name} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
                        </div>


                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.submit.bind(this)}  >Add Department</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                  </div>

                  <Table hover bordered striped responsive size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Department</th>
                        <th>Status</th>

                      </tr>
                    </thead>
                    {data.length > 0 &&
                      <tbody>
                        {data.map((val, index) => {
                          return (

                            <tr key={index} >
                              <td>{val.Id}</td>

                              <td >{val.DepartmentName}  </td>

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
  console.log('state.Setup_UserReducer.department', state.Setup_UserReducer.department)
  return {
    employee: state.Setup_UserReducer.employee,
    department: state.Setup_UserReducer.department,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    isSetupUser: () => {
      dispatch(SetupUser())
    },
    isAddDepartment: (obj) => {
      dispatch(AddingDepartment(obj))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Department);
