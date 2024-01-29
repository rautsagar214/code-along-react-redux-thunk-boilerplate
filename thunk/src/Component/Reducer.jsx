
const initState = {
    users : [],
    error : ""
}

export default function Reducer(state=initState , {type , payload}){
    switch(type){
        case "FETCH_DATA":{
            return {users: payload , error:""}
        }
        case "ERROR":{
            return {users : [] , error: payload}
        }
        default:{
            return state
        }
    }
}