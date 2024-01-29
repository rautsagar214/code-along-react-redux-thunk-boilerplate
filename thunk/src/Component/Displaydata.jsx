import React from 'react'
import { fetchUserData , showError } from './Action'
import Reducer from './Reducer'
import axios from "axios"
import {thunk} from 'redux-thunk'
import {createStore , applyMiddleware} from "redux"

const store = createStore(Reducer , applyMiddleware(thunk))

const fetchData = () => async() =>{
    try{
        let data = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(data.data)
        store.dispatch(fetchUserData(data.data))
    }catch (error){
        store.dispatch(showError(error))
    }
}

// fetchData()

const DisplayData = () => {

    const [showData , setshowData] = React.useState(false)
    const [data , setData] = React.useState([])

    let handleClick = () =>{
        store.dispatch(fetchData())
        setshowData(!showData)
    }

    React.useEffect(()=>{
        let subscribe = store.subscribe(()=>{setData(store.getState().users)})
        return subscribe
    } , [])    

  return (
    <>
      <button onClick={handleClick}>{showData ? "Hide Data" : "Show Data"}</button>
        <div>
            {showData && data.map((ele , i)=>{
                return (<div style={{borderTop:"1px solid white" , marginTop:"20px"}} key={i}>
                            <h3>{ele.name}</h3>
                            <h3>{ele.email}</h3>
                        </div>)
            })}
        </div>

    </>
  )
}

export default DisplayData