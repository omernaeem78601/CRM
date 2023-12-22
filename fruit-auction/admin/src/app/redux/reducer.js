import {
  ADD_USER,
  EDIT_CPT_ID,
  EDIT_ICD_ID,
  EDIT_FACILITY_ID,
  EDIT_PROVIDER_ID,
  EDIT_SETTING_ID,
  SHOW_CPT_ID,
  SHOW_ICD_ID,
  SHOW_FACILITY_ID,
  SHOW_PROVIDER_ID,
  SHOW_SETTING_ID,
  SHOW_PATIENT_ID,
  SHOW_INSURANCE_ID,
  EDIT_INSURANCE_ID,
  SHOW_ALERT_ID,
  EDIT_ALERT_ID,
  SHOW_BILLING_ID,
  EDIT_BILLING_ID,
  SHOW_TASK_ID,
  EDIT_TASK_ID,
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
  MY_PROFILE_EDIT_ID,
  LOGOUT_STATE

} from './constant'

export const userReducerComp = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      // console.log("Adding user to state reducer:", action.payload);
      state = action.payload
      // console.log("Adding user to state reducer state:", state);
      return state
    default:
      return state
  }
}


export const patientAllReducerComp = (state = [], action) => {
  switch (action.type) {
    case PATIENT_ALL_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export const patientReducerComp = (state = [], action) => {
  switch (action.type) {
    case PATIENT_DATA:
      state = action.payload
      return state
    default:
      return state
  }
}
export const insuranceReducerComp = (state = [], action) => {
  switch (action.type) {
    case INSURANCE_DATA:
      state = action.payload
      return state
    default:
      return state
  }
}

export const chartNotesDataReducerComp = (state = [], action) => {
  switch (action.type) {
    case CHART_NOTES_DATA:
      state = action.payload
      return state
    default:
      return state
  }
}



export const facilityClaimReducerComp = (state = [], action) => {
  switch (action.type) {
    case FACILITY_CLAIM:
      state = action.payload
      return state
    default:
      return state
  }
}
export const renderingReducerComp = (state = [], action) => {
  switch (action.type) {
    case RENDERING_DATA:
      state = action.payload
      return state
    default:
      return state
  }
}
export const referingReducerComp = (state = [], action) => {
  switch (action.type) {
    case REFERRING_DATA:
      state = action.payload
      return state
    default:
      return state
  }
}


export const chartNotesReducerComp = (state = [], action) => {
  switch (action.type) {
    case CHART_NOTES:
      state = action.payload
      return state
    default:
      return state;
  }
}
// now
export const chartNotesClaimReducerComp = (state = [], action) => {
  switch (action.type) {
    case CHART_NOTES_CLAIM:
      state = action.payload
      return state
    default:
      return state;
  }
}


export const settingIdEditReducer = (state = [], action) => {
  if (action.type === EDIT_SETTING_ID) {
    // console.log("setting reducer EDIT_SETTING_ID:", action.payload);
    return action.payload
  } else {
    return state
  }
}

export const settingIdShowReducerComp = (state = [], action) => {
  switch (action.type) {
    case SHOW_SETTING_ID:
      // console.log("setting reducer SHOW_SETTING_ID:", action.payload);
      return action.payload
    default:
      return state
  }
}

export const cptIdEditReducer = (state = [], action) => {
  if (action.type === EDIT_CPT_ID) {
    return action.payload
  } else {
    return state
  }
}
export const cptIdShowReducerComp = (state = [], action) => {
  if (action.type === SHOW_CPT_ID) {
    return action.payload
  } else {
    return state
  }
}


export const icdIdEditReducer = (state = [], action) => {
  if (action.type === EDIT_ICD_ID) {
    return action.payload
  } else {
    return state
  }
}
export const icdIdShowReducerComp = (state = [], action) => {
  if (action.type === SHOW_ICD_ID) {
    return action.payload
  } else {
    return state
  }
}

export const facilityIdEditReducer = (state = [], action) => {
  if (action.type === EDIT_FACILITY_ID) {
    return action.payload
  } else {
    return state
  }
}
export const facilityIdShowReducerComp = (state = [], action) => {
  if (action.type === SHOW_FACILITY_ID) {
    return action.payload
  } else {
    return state
  }
}
export const providerIdShowReducerComp = (state = [], action) => {
  if (action.type === SHOW_PROVIDER_ID) {
    return action.payload
  } else {
    return state
  }
}

export const providerIdEditReducer = (state = [], action) => {
  if (action.type === EDIT_PROVIDER_ID) {
    return action.payload
  } else {
    return state
  }
}


export const taskIdShowReducerComp = (state = [], action) => {
  if (action.type === SHOW_TASK_ID) {
    return action.payload
  } else {
    return state
  }
}

export const taskIdEditReducer = (state = [], action) => {
  if (action.type === EDIT_TASK_ID) {
    return action.payload
  } else {
    return state
  }
}

export const patientIdShowReducerComp = (state = [], action) => {
  if (action.type === SHOW_PATIENT_ID) {
    return action.payload
  } else {
    return state
  }
}

export const insuranceIdShowReducerComp = (state = [], action) => {
  if (action.type === SHOW_INSURANCE_ID) {
    return action.payload
  } else {
    return state
  }
}

export const insuranceIdEditReducer = (state = [], action) => {
  if (action.type === EDIT_INSURANCE_ID) {
    return action.payload
  } else {
    return state
  }
}

export const billingIdShowReducerComp = (state = [], action) => {
  if (action.type === SHOW_BILLING_ID) {
    return action.payload
  } else {
    return state
  }
}

export const billingIdEditReducer = (state = [], action) => {
  if (action.type === EDIT_BILLING_ID) {
    return action.payload
  } else {
    return state
  }
}

export const alertIdShowReducerComp = (state = [], action) => {
  if (action.type === SHOW_ALERT_ID) {
    return action.payload
  } else {
    return state
  }
}

export const alertIdEditReducer = (state = [], action) => {
  if (action.type === EDIT_ALERT_ID) {
    return action.payload
  } else {
    return state
  }
}
export const providerTypeReducer = (state = [], action) => {
  if (action.type === PROVIDER_TYPE) {
    return action.payload
  } else {
    return state
  }
}

export const myProfileIdReducer = (state = [], action) => {
  if (action.type === MY_PROFILE_ID) {
    return action.payload
  } else {
    return state
  }
}
// export const myProfileEditIdReducer = (state = [], action) => {
//   if (action.type === MY_PROFILE_EDIT_ID) {
//     return action.payload
//   } else {
//     return state
//   }
// }


