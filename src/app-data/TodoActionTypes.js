export const TYPES={
    GET_ALL:"GET_ALL",
    ADD:"ADD_TODO",
    DELETE:"DELETE_TODO",
    SET_DONE:"SET_DONE_TODO",
    SET_ERROR:"SET_ERROR"

}


 const actionCreators=()=>{

    const getAllAction=(payload)=>{type:TYPES.GET_ALL,payload}
    const addAction=(payload)=>{type:TYPES.ADD,payload}
    const delAction=(payload)=>{type:TYPES.DELETE,payload}
    const setDoneAction=()=>{type:TYPES.SET_DONE}
    const setErrorAction=(payload)=>{type:TYPES.SET_ERROR,payload}

    return {
        getAllAction,
        addAction,
        delAction,
        setDoneAction,
        setErrorAction
    }
 }


 export const ActionCreators=actionCreators()