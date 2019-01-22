import React, { Component } from 'react';
import '../Sidebar.css';
import { connect } from 'react-redux';
import { SetupUser, checkbox, CheckedIn } from '../../store/Actions/Setup_userAction';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';


class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      isActive:true
    };
  }
  componentWillMount() {
    this.props.isSetupUser();
  }

  handlecheckbox(value1, value2) {
    let obj = {
      Role: value1,
      Mitem: value2,
      isActive:false
    }
    this.props.ischeckbox(obj);
    this.setState({ checked: !this.state.checked });
  }

  handleUncheck(value1, value2) {
    let obj = {
      Role: value1,
      Mitem: value2,
      isActive:true
    }
    this.props.isCheckedIn(obj);
  }

  render() {
    let data = this.props.roles;
    let rollAccesss = this.props.rollAccess
    //     var Data = [];
    //     for (var key in rollAccesss) {
    //       Data.push(rollAccesss[key]);
    //     }

    //     let MenuID = Data.map(x => x.MenuId);
    //     console.log('MenuID',MenuID);

    //     var Menuitemz = this.props.menuitem;
    //     var Data = [];
    //     for (var key in Menuitemz) {
    //       Data.push(Menuitemz[key]);
    //     }

    //     let tempnames = Data.map(x => x.MenuName);
    //     console.log('tempnames',tempnames);

    //     var arr = [[tempnames,MenuID],[tempnames,MenuID]];
    //  for (var i=0; i < arr.length; i++) {
    //   for (var j=0; j < arr[i].length; j++) {
    //     console.log('resultt',arr[i][j]);
    //   }
    // }
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

                  <center> <h1> <Badge color="secondary">Setup Pages</Badge></h1></center>
                  <Table hover striped responsive size="sm" >
                    {data.length > 0 &&
                      <tbody>

                        {data.map((val, index) => {
                          return (

                            <th key={index} scope="row">
                              <td><center> <Badge color="secondary" pill>{val.RoleName}</Badge></center></td>

                              <td>

                                {this.props.menuitem.map((v, i) => {

                                  return (

                                    <tr key={i}>
                                      <td>{v.MenuName}</td>
                                      {/* <td>{v.Id}</td> */}
                                      <td>
                                        {
                                          (rollAccesss.find(obj => obj.RoleId == val.id && obj.MenuId == v.Id && obj.isActive==true)) ?
                                            <input type="checkbox" value1={v.Id} value2={val.id} defaultChecked={this.state.checked} onClick={this.handlecheckbox.bind(this, val.id, v.Id)} />

                                            : <input type="checkbox" value1={v.Id} value2={val.id} onClick={this.handleUncheck.bind(this, val.id, v.Id)} />


                                        }

                                      </td>
                                    </tr>
                                  )
                                })}
                              </td>
                            </th>
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
  console.log('roll access', state.Setup_UserReducer.rollAccess)
  return {
    roles: state.Setup_UserReducer.roles,
    menuitem: state.Setup_UserReducer.menuitem,
    rollAccess: state.Setup_UserReducer.rollAccess

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    isSetupUser: () => {
      dispatch(SetupUser())
    },
    ischeckbox: (obj) => {
      dispatch(checkbox(obj))
    },
    isCheckedIn: (obj) => {
      dispatch(CheckedIn(obj))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Roles);