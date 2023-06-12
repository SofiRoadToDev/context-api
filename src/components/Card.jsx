import React, { useEffect, useState } from 'react'

const Card = ({ToDo}) => {
    const [isDone,setDone]=useState(false)

    useEffect(()=>{
        setDone(ToDo.completed)
    },[])
    const btnColor=isDone?'btn-success':'btn-warning'
    const btnText=isDone?'Completed':'Uncompleted'

    const setTaskDone=()=> setDone(!isDone)
    
  return (
    <div className="card col-3 m-2  text-center py-2" >
        <img src={ToDo.image} alt="Todo Image" className="card-img-top" />
        <div className="card-body">
            <p className="card-title h4">
                    {ToDo.title}
            </p>
            <p className="card-text">
                {ToDo.description}
            </p>
        </div>

        <div className="row justify-content-center mx-auto ">
            <a className={`btn ${btnColor} my-3`} onClick={setTaskDone}>{btnText}</a>
        </div>
    </div>
  )
}

export default Card