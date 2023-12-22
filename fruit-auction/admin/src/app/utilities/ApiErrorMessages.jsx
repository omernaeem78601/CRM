import React, {useEffect, useState} from 'react'

const ApiErrorMessages = ({errormsg, errorcheck}) => {
  
  const [errIdMsg, setErrIdMsg] = useState([])
  
  useEffect(() => {
    const errorMessages = Object.values(errormsg).flat();
    setErrIdMsg(errorMessages);
    // errfunc()
  }, [errormsg])
  
  return (
    <>
      {errorcheck? (<div className='alert alert-danger d-flex align-items-center p-5 mb-10'>
        <span className='svg-icon svg-icon-2hx svg-icon-primary me-3'> <i className="bi bi-shield-fill-check text-danger fs-1" ></i></span>
        <div className='d-flex flex-column'>
          <h5 className='mb-1'>There is Some error </h5>
          {errIdMsg.map((msg, index) => (
            <span key={index}>{msg}</span>
          ))}
        </div>
      </div>):( <div></div>)}
    </>
  )
}

export default ApiErrorMessages
