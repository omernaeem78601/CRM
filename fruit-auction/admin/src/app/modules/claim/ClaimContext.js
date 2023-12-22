import { createContext, useState } from 'react'
export const setClaimContext = createContext()
const ClaimContext = ({ children }) => {
    const [addClaimData, setAddClaimData] = useState({
        patient_id:'',
        rendering_provider_id:'',
        referring_provider_id:'',
        billing_provider_id:'',
        date_of_service:'',
        insurance:[],
        facility:'',
        icd_codes:[],
        cpt_codes:[]
    })
  return (
    <setClaimContext.Provider
        value={{
            addClaimData, 
            setAddClaimData
        }}
    >
      {children}
    </setClaimContext.Provider>
  )
}

export {ClaimContext}
