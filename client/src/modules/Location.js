// import React, { Component } from 'react';
// import './Sidebar.css';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { connect } from 'react-redux';
// import {AddingUser,GetData} from '../store/Actions/Setup_userAction';

//   import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

// class AddLocation extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       name:'',
//       email:'',
//       address:'',
//       department:'',
//       isActive:true,
//       modal: false
//     };
//     this.toggle = this.toggle.bind(this);
//     this.AddOnChange=this.AddOnChange.bind(this);
//   }

  
    
//   componentWillMount(){
//     this.props.isGetData();
// }

//   toggle() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }

//   submit() {
//     let obj = {
//       // FullName: this.state.user_name,
//       // Email: this.state.email,
//       // Password: '123',
//       // RoleId: parseInt(this.state.modal_role),
//       // DepartmentId: parseInt(this.state.modal_dapartment),
//       id:this.state.id,
//       name:this.state.name,
//       email:this.state.email,
//       address:this.state.address,
//       department:this.state.department,
//       // IsEnable: true,
//       isActive: true,
//       CreatedDate: null,
//       CreatedBy: null,
//       ModifiedDate: null,
//       ModifiedBy: null

//     }
//     this.props.isAddEmp(obj);
//     // this.ModalclearAll();
//     // this.toggle();
// console.log(obj)
//   }
//   AddOnChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//     // console.log(e.target.value);
//   }

//   render() {
//     return (
//       <div>
        
//        <div className="animated fadeIn">
       
//       <Row>
//           <Col>
//             <Card>
//               <CardHeader>
//                 <i className="fa fa-align-justify"></i> Combined All Table
//               </CardHeader>
//               <CardBody>

//               {/* modal starting here */}
//               <div>
//         <Button color="danger" onClick={this.toggle} style={{position: "absolute",top:0, right: 0}}  > Add User{this.props.buttonLabel}</Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//           <ModalBody>

//           <label class="col-lg-12">User Name </label>
//                       <div class="col-lg-12">
//                         <input type="email" name="name" value={this.state.name} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
//                       </div>
//                       <label class="col-lg-12">Email (Login-Id)</label>
//                       <div class="col-lg-12">
//                         <input type="email" name="email" value={this.state.email} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
//                       </div>
//                       <label class="col-lg-12">Address </label>
//                       <div class="col-lg-12">
//                         <input type="email" name="address" value={this.state.address} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
//                       </div>
//                       <label class="col-lg-12">Department</label>
//                       <div class="col-lg-12">
//                         <input type="email" name="department" value={this.state.department} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
//                       </div>
            
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.submit.bind(this)}  >Add User Data</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
                
//                 <Table hover bordered striped responsive size="sm">
//                   <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Address</th>
//                     <th>department</th>
//                     <th>Status</th>
//                   </tr>
//                   </thead>
//                   <tbody>
//                   {this.props.employee.map((val,index)=>{
//                         return(
//                             <tr key={index} >
                           
//                         <td >{val.name}  </td>
//                         <td>{val.email} </td>
//                         <td>{val.address} </td>
//                         <td>{val.department} </td>
//                         {/* <td>
//                       <Badge color="success">Active</Badge>
//                     </td> */}
                       
//                     </tr>
                    
//                         )
//                     })}
                 
//                   </tbody>
//                 </Table>
//                 <nav>
//                   <Pagination>
//                     <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
//                     <PaginationItem active>
//                       <PaginationLink tag="button">1</PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
//                     <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
//                     <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
//                     <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
//                   </Pagination>
//                 </nav>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div> 

      
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   console.log('state.root.employee',state.root.employee)
//   return {
//     employee: state.Setup_UserReducer.employee,
//       // current_user_role: state.root.current_user_role,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         isAddEmp: (obj) => {
//             dispatch(AddingUser(obj))
//         },
//         isGetData: () => {
//           dispatch(GetData())
//       },
//     }
// }
// export default AddLocation;
