// import uuid from 'uuid';
const INITIAL_STATE = {
    setup_user: '',
    roles: '',
    department: [],
    employee:[],
    // location:'',
    location:[],
    menuitem:'',
    rollAccess:[],
    checkbox:[],
    checkedIn:[]


}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETUP_USER":
            return {
                setup_user: action.payload0,
                roles: action.payload1,
                department: action.payload2,
                employee:action.payload3,
                location:action.payload4,
                menuitem:action.payload5,
                rollAccess:action.payload6,
                
              



            }
        case "ADD_USER":
            return {
            
                setup_user: action.payload0,
                roles: action.payload1,
                department: action.payload2,
                



            }
        case "EDIT_USER":
            return {
                setup_user: action.payload0,
                roles: action.payload1,
                department: action.payload2,

            }
        case "DELETE_USER":
            return {
                setup_user: action.payload0,
                roles: action.payload1,
                department: action.payload2,

            }
        case "SEARCH_USER":
            return {
                setup_user: action.payload0,
                roles: action.payload1,
                department: action.payload2,
                record:action.payload3
            }
            case "ADDING_LOCATION":
            return {
                ...state,
                location: action.payload1,
                
            }
            case "ADDING_DEPARTMENT":
            return {
                ...state,
                department: action.payload1,
                
            }
            case "SETUP_CHECKBOX":
            return {
                ...state,
                checkbox: action.payload1
                
            }
            case "SETUP_CHECKEDIN":
            return {
                ...state,
                checkedIn:action.payload1
                
            }


        default:
            return state;
    }

}
