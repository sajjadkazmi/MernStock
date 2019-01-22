import React, { Component } from 'react';
import './Sidebar.css';
import SideBar from './sidebar';
import Header from './Header';
import routes from './routes';
import Login from './Login';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
class Main extends Component {

    render() {
        let data=JSON.parse(localStorage.getItem('users'))
        
        if(data==undefined && data==null){
            return <Redirect push to="/Login" />
            console.log("current_user",this.props.current_user)
            console.log("current_user_role",this.props.current_user_role)
        }
        return (
            <div>
                <Header />
                <SideBar data={this.props.current_user} data2={this.props.current_user_role} />
                <main className="main">
                    <div>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                    <route.component {...props} />
                                )} />)
                                    : (null);
                            },
                            )}
                            <Redirect from="/" to="/" />
                        </Switch>
                    </div>
                </main>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        current_user: state.root.current_user,
        current_user_role: state.root.current_user_role,
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         isLogin_user: (obj) => {
//             dispatch(Login_user(obj))
//         }
//     }
// }
export default connect(mapStateToProps, null)(Main);