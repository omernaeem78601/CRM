import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SubmitButton from '../../../utilities/SubmitButton'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { addUser, logoutAction, myProfileIdAction, profileIdAction, profileeditIdAction } from '../../../redux/action'
import { useDispatch } from 'react-redux';
import { myProfileEditIdReducer } from '../../../redux/reducer';

export function Login() {

  const navigate = useNavigate()
  const empty = { 
    email: "",
    password: ""
  }

  const [btnLoading, setBtnLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // const [handle, setHandle] = useState(empty)

  const [errorMsg, setErrorMsg] = useState('Please login! if you have credential or contact NeoMD Billing team')

  const dispatch = useDispatch();
  // const adduserfunc = (newUserId) => {
  //     dispatch(addUser(newUserId)); 
  // }

  const adduserfunc = (newUserId) => {
    dispatch(addUser(newUserId));
    dispatch(myProfileIdAction(newUserId._id))
    // dispatch(myProfileEditIdReducer(newUserId.id))
  }

  // state for handle the login inputs  
  // const loginHandler = (e) => {
  //   const { name, value } = e.target;
  //   setHandle({ ...handle, [name]: value })
  //   setIsError(false)
  // }

  //Submit Login form
  // const loginApi = async () => {
  //   setIsLoading(true)
  //   if (handle.email == "" || handle.password == "") {
  //     setIsError(true)
  //     setErrorMsg('Please enter login credentials! empty value would not acceptables')
  //     setIsLoading(false)
  //     return false 
  //   } 
  //   else {
  //     axios.post(`${process.env.REACT_APP_API_URL}/login`, handle)
  //     .then((response) => {
  //       window.location.reload();
  //       setIsError(false)

  //       const newUserId = response.data.data.id;
  //       adduserfunc({newUserId});
  //       // id 
  //       sessionStorage.setItem("token", response.data.data.bearer_token.accessToken)
  //       axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.bearer_token.accessToken}`;
  //       // navigate("/dashboard") 


  //     }).catch((error) => {
  //       setIsError(true)
  //       setErrorMsg(error.response.data.message)      
  //       setIsLoading(false)
  //       return false
  //     });
  //   }
  // }


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .required('Required'),
    }),
    onSubmit: values => {
      setBtnLoading(true)
      setIsError(false)
      axios.post(`${'http://localhost:5000'}/fruit/user/login`, values)
        .then((response) => {
          dispatch(logoutAction(true))
          const newUserId = response.data.user;
          adduserfunc(newUserId);
          sessionStorage.setItem("token", response.data.token)
          localStorage.setItem("token", response.data.token)
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
          setBtnLoading(false)
        }).catch((error) => {
          console.log(error);
          setBtnLoading(false)
          setErrorMsg(error.response)
          setIsError(true)

          return false
        });
    },
  });


  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      id='kt_login_signin_form'
    >
      {/*<div className="mb-10 p-8 rounded bg-light-info">
        <div className="text-info"><span>Please login! if you have credential or contact NeoMD Billing team</span></div> 
      </div>*/}

      <div className={`mb-10 p-8 rounded ${isError ? 'bg-light-danger' : 'bg-light-info'}`}>
        <div className={`${isError ? 'text-danger' : 'text-info'}`}><span>{errorMsg}</span></div>
      </div>

      <div className='fv-row mb-8'>
        <label className="form-label fs-6 fw-bolder text-dark ">Email</label>
        <input
          type='email'
          name='email'
          placeholder='Email'
          autoComplete='off'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`form-control bg-transparent ${formik.errors.email ? 'border border-danger' : ''} `}
        />
        {formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
      </div>

      <div className='fv-row mb-3'>
        <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
        <input
          type='password'
          name="password"
          placeholder='Password'
          autoComplete='off'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={`form-control bg-transparent  ${formik.errors.password ? 'border border-danger' : ''} `}
        />
        {formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}
      </div>

      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <Link to='/auth/forgot-password' className='link-primary'>
          Forgot Password ?
        </Link>
      </div>

      <div className='d-grid mb-10'>
        <SubmitButton
          type="submit"
          class_name="btn btn-primary"
          title='Contine'
          callback_event=''
          btnLoading={btnLoading}
        />
      </div>

    </form>
  )
}
