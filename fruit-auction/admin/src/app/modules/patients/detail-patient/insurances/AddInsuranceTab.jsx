import { useContext, useEffect } from 'react'
import AddUpdateInsuranceForm from './component/AddUpdateInsuranceForm'
import { setDataContext } from '../../../../utilities/SettingContext'
import { useDispatch } from 'react-redux'
import { editInsuranceIdAction } from '../../../../redux/action'

const AddInsuranceTab = () => {
  
  const dispatch = useDispatch()
  const editInsuranceIdDispatch = (insuranceId) => {
    dispatch(editInsuranceIdAction(insuranceId))
  }
  const {loadingForm } = useContext(setDataContext)
  
  useEffect(()=>{
    if(loadingForm){
    editInsuranceIdDispatch(null)
    }
  },[loadingForm])
  
  return (
    <div className='card py-10 px-10'>
      { (<AddUpdateInsuranceForm/>)}
    </div>
  )
}

export { AddInsuranceTab }  
