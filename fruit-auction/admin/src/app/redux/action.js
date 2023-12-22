import {
  ADD_USER,
  EDIT_SETTING_ID,
  SHOW_SETTING_ID,
  SHOW_CPT_ID,
  EDIT_CPT_ID,
  SHOW_ICD_ID,
  EDIT_ICD_ID,
  SHOW_FACILITY_ID,
  EDIT_FACILITY_ID,
  EDIT_PROVIDER_ID,
  SHOW_PROVIDER_ID,
  EDIT_TASK_ID,
  SHOW_TASK_ID,
  SHOW_PATIENT_ID,
  SHOW_INSURANCE_ID,
  EDIT_INSURANCE_ID,
  SHOW_ALERT_ID,
  EDIT_ALERT_ID,
  SHOW_BILLING_ID,
  EDIT_BILLING_ID,
  PATIENT_DATA,
  INSURANCE_DATA,
  PATIENT_ALL_DATA,
  CHART_NOTES,
  FACILITY_CLAIM,
  RENDERING_DATA,
  REFERRING_DATA,
  CHART_NOTES_CLAIM,
  CHART_NOTES_DATA,
  PROVIDER_TYPE,
  PROFILE_ID,
  MY_PROFILE_ID,
  PROFILE_EDIT_ID,
  LOGOUT_STATE,
  // MY_PROFILE_EDIT_ID
  
} from './constant'

export const addUser = (user) => {
  // console.log("Adding user action:", user);
  return {
    type: ADD_USER,
    payload: user,
  }
}
export const logoutAction = (singlePatient) => {
  return {
    type: LOGOUT_STATE,
    payload: singlePatient,
  };
};
export const patientDataAction = (singlePatient) => {
  return {
    type: PATIENT_DATA,
    payload: singlePatient,
  }
}

export const patientAllDataAction = (allPatient) => {
  return {
    type: PATIENT_ALL_DATA,
    payload: allPatient,
  }
}

export const insuranceDataAction = (singleInsurance) => {
  return {
    type: INSURANCE_DATA,
    payload: singleInsurance,
  }  
} 
  
export const chartNotesDataAction = (singleInsurance) => {
  return {
    type: CHART_NOTES_DATA,
    payload: singleInsurance,
  } 
} 
 
export const facilityClaimDataAction = (singleInsurance) => {
  return {
    type: FACILITY_CLAIM,
    payload: singleInsurance,
  }
}
export const renderingDataAction = (singleInsurance) => {
  return {
    type: RENDERING_DATA,
    payload: singleInsurance,
  }
}
export const referingDataAction = (singleInsurance) => {
  return {
    type: REFERRING_DATA,
    payload: singleInsurance,
  }
}

export const chartNotesPatientAction = (chartNotes) => {
  return {
    type: CHART_NOTES,
    payload: chartNotes,
  }
}

export const chartNotesClaimtAction = (chartNotes) => {
  return {
    type: CHART_NOTES_CLAIM,
    payload: chartNotes,
  }
}

export const editSettingIdAction = (editSettingId) => {
  console.log('setting action ' + editSettingId)
  return {
    type: EDIT_SETTING_ID,
    payload: editSettingId,
  }
}

export const showSettingIdAction = (showSettingId) => {
  return {
    type: SHOW_SETTING_ID,
    payload: showSettingId,
  }
}

export const editCptIdAction = (cptId) => {
  return {
    type: EDIT_CPT_ID,
    payload: cptId,
  }
}

export const showCptIdAction = (cptId) => {
  return {
    type: SHOW_CPT_ID,
    payload: cptId,
  }
}

export const editIcdIdAction = (icdId) => {
  return {
    type: EDIT_ICD_ID,
    payload: icdId,
  }
}

export const showIcdIdAction = (icdId) => {
  return {
    type: SHOW_ICD_ID,
    payload: icdId,
  }
}


export const editFacilityIdAction = (cptId) => {
  return {
    type: EDIT_FACILITY_ID,
    payload: cptId,
  }
}

export const showFacilityIdAction = (cptId) => {
  return {
    type: SHOW_FACILITY_ID,
    payload: cptId,
  }
}

export const editProviderIdAction = (providerId) => {
  return {
    type: EDIT_PROVIDER_ID,
    payload: providerId,
  }
}

export const showProviderIdAction = (providerId) => {
  return {
    type: SHOW_PROVIDER_ID,
    payload: providerId,
  }
}

export const editTaskIdAction = (taskId) => {
  return {
    type: EDIT_TASK_ID,
    payload: taskId,
  }
}

export const showTaskIdAction = (taskId) => {
  return {
    type: SHOW_TASK_ID,
    payload: taskId,
  }
}

export const showPatientIdAction = (patientId) => {
  return {
    type: SHOW_PATIENT_ID,
    payload: patientId,
  }
}

export const showInsuranceIdAction = (insuranceId) => {
  return {
    type: SHOW_INSURANCE_ID,
    payload: insuranceId,
  }
}

export const editInsuranceIdAction = (providerId) => {
  return {
    type: EDIT_INSURANCE_ID,
    payload: providerId,
  }
}

export const showBillingIdAction = (billingId) => {
  return {
    type: SHOW_BILLING_ID,
    payload: billingId,
  }
}

export const editBillingIdAction = (providerId) => {
  return {
    type: EDIT_BILLING_ID,
    payload: providerId,
  }
}

export const showAlertIdAction = (alertId) => {
  return {
    type: SHOW_ALERT_ID,
    payload: alertId,
  }
}

export const editAlertIdAction = (alertId) => {
  return {
    type: EDIT_ALERT_ID,
    payload: alertId,
  }
}
export const providerTypeAction = (providertype) => {
  return {
    type: PROVIDER_TYPE,
    payload: providertype,
  }
}

// export const myProfileEditIdAction = (myprofileuuid) => {
//   return {
//     type: MY_PROFILE_EDIT_ID,
//     payload: myprofileuuid,
//   }
// }

export const myProfileIdAction = (myprofileuuid) => {
  return {
    type: MY_PROFILE_ID,
    payload: myprofileuuid,
  }
}

