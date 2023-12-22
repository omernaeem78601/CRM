import { createContext, useState } from 'react'

export const setDataContext = createContext()

const SettingContext = ({ children }) => {
  const [optionListName, setOptionListName] = useState('title')
  const [providerType, setProviderType] = useState('')
  const [settingID, setSettingID] = useState('')
  const [facilityID, setFacilityID] = useState('')
  const [pageNumber, setPageNumber] = useState('')
  const [cptID, setcptID] = useState('')
  const [npiInfoNumber, setNpiInfoNumber] = useState('')
  const [refresh, setRefresh] = useState(true)
  const [patientRefresh, setPatientRefresh] = useState(true)
  const[loadingForm,setLoadingForm]=useState(true)
  const [providerID, setProviderID] = useState('')
  const [icdType, setIcdType] = useState('icd-10');
  const[alertActive,setAlertActive]=useState()
  const[alertColor,setAlertColor]=useState()
  const[imgUrl,setImgUrl]=useState()
  const [patientData, setPatientValues] = useState({
    title: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    suffix: '',
    dob: '',
    gender: '',
    marital_status: '',
    hphone: '',
    wphone: '',
    wphone_ext: '',
    mobile: '',
    email: '',
    ssn: '',
    facility_id: '',
    race: '',
    ethnicity: '',
    gender_identity: '',
    sexual_orientation: '',
    language: '',
    occupation: '',
    education: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zip_code: '',
    remarks: '',
    is_active: true,
    company_id: 1,
  })

  return (
    <setDataContext.Provider
      value={{
        icdType,
        setIcdType,

        patientData,
         setPatientValues,

        optionListName,
        setOptionListName,
        
        imgUrl,
        setImgUrl,

        providerType,
        setProviderType,

        settingID,
        setSettingID,

        pageNumber,
        setPageNumber,

        facilityID,
        setFacilityID,

        cptID,
        setcptID,

        refresh,
        setRefresh,

        providerID,
        setProviderID,

        npiInfoNumber,
        setNpiInfoNumber,

        patientRefresh,
        setPatientRefresh,

        loadingForm,
        setLoadingForm,

        alertActive,
        setAlertActive,

        alertColor,
        setAlertColor,


      }}
    >
      {children}
    </setDataContext.Provider>
  )
}

export {SettingContext}