import { createContext,useState } from "react"
const FormContext=createContext();

const FormData = (props) => {

    const[formData,setFormData]=useState({})
  return (
    <FormContext.Provider value={{formData:formData,setFormData:setFormData}}>
        {props.children}
    </FormContext.Provider>
  )
}

export {FormContext,FormData};