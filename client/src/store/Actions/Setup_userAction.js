import axios from 'axios';
import history from '../../History';

export function SetupUser() {
    return dispatch => {
        axios.get("/api/SetupUser_apis/Setup_User")
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: "SETUP_USER",
                    payload0: res.data.data0,
                    payload1: res.data.data1,
                    payload2: res.data.data2,
                    payload3:res.data.data3,
                    payload4:res.data.data4,
                    payload5:res.data.data5,
                    payload6:res.data.data6,
                    

                    // payload5:res.data.data5,
                })
            }
            )
    }
}

export function AddUser(obj) {
    return dispatch => {
        axios.post("/api/SetupUser_apis/AddUser", obj)
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: "ADD_USER",
                    payload0: res.data.data0,
                    payload1: res.data.data1,
                    payload2: res.data.data2,
                    payload3: res.data.data3,
                    

                })
            }
            )
    }
}


export function AddingUser(obj) {
    return dispatch => {
        console.log("checking function",obj)
        axios.post("/api/SetupUser_apis/AddingUser", obj)
            .then(res => {
                console.log("result", res)
                dispatch({
                    type: "ADDING_USER",
                    
                    payload1: res.data.data1,
                })
            }
            )
    }
}

export function AddingLocation(obj) {
    return dispatch => {
        console.log("checking function",obj)
        axios.post("/api/SetupUser_apis/AddingLocation", obj)
            .then(res => {
                console.log("result of location", res.data)
                dispatch({
                    type: "ADDING_LOCATION",
                    
                    payload1: res.data.data1,
                })
            }
            )
    }
}

export function AddingDepartment(obj) {
    return dispatch => {
        console.log("checking function",obj)
        axios.post("/api/SetupUser_apis/AddDepartment", obj)
            .then(res => {
                console.log("result of Department", res.data)
                dispatch({
                    type: "ADDING_DEPARTMENT",
                    
                    payload1: res.data.data1,
                })
            }
            )
    }
}

export function checkbox(obj) {
    return dispatch => {
        console.log("CheckBox",obj)
        axios.post("/api/SetupUser_apis/CheckBox", obj)
            .then(res => {
                console.log("resultTTTTTTTTT", res)
                dispatch({
                    type: "SETUP_CHECKBOX",
                    
                    payload1: res.data.data1
                })
            }
            )
    }
}

export function CheckedIn(obj) {
    return dispatch => {
        console.log("CheckBox",obj)
        axios.post("/api/SetupUser_apis/Checkedinn", obj)
            .then(res => {
                console.log("resultTTTTTTTTT", res)
                dispatch({
                    type: "SETUP_CHECKEDIN",
                    payload1: res.data.data1
                })
            }
            )
    }
}



export function EditUser(obj) {
    return dispatch => {
        axios.put(`/api/SetupUser_apis/EditUser`, obj)
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: "EDIT_USER",
                    payload0: res.data.data0,
                    payload1: res.data.data1,
                    payload2: res.data.data2
                })
            }
            )
    }
}
export function DeleteUser(obj) {
    return dispatch => {
        console.log("obj", obj);
        axios.put(`/api/SetupUser_apis/DeleteUser`, obj)
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: "DELETE_USER",
                    payload0: res.data.data0,
                    payload1: res.data.data1,
                    payload2: res.data.data2
                })
            }
            )
    }
}
export function SearchUser(obj, data,roles,department) {
    return dispatch => {
        console.log("obj", obj);
        console.log("data", data);
        let record = data.filter(a => a.RoleId === obj.RoleId )
        console.log("record", record);
        dispatch({
            type: "SEARCH_USER",
            payload0: data,
            payload1: roles,
            payload2: department,
            payload3:record

        })
    }


}


