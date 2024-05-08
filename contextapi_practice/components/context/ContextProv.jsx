import React from 'react'
import context_creation from './context_creation'


const ContextProv = (props)=>{
    const state={
        name:"Kanha",
        age:22
    };
    return(
        <context_creation.Provider value={state}>
            {props.children}
        </context_creation.Provider>
    )

}



export default ContextProv