export const fetchUserData = (users) =>{
    return {type : "FETCH_DATA" , payload : users}
}

export const showError = (errors) =>{
    return {type : "ERROR" , payload:errors}
}