/* eslint-disable react/jsx-no-target-blank */
import React , {useEffect } from 'react'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SidebarMenuMain = () => {

  const patientData = useSelector((state) => state.patientReducerComp)

  const handleAddClaimClick = () => {
      toast.info('Select Patient First');
  };

  return (
    <>

      {/* Dashboard menu*/}
      <SidebarMenuItem 
        to='/dashboard'
        icon='element-11'
        title='Dashboard'
        fontIcon='bi-app-indicator'
      />
      
    
      {/* Patient menu*/}
      <SidebarMenuItemWithSub
        to='#'
        title='Patients'
        fontIcon='bi-app-indicator'
        icon='profile-circle'
      >
        <SidebarMenuItem to='/patient/list' title='Patient List' hasBullet={true} />
        
         <SidebarMenuItem to='/patient/add' title='Add Patient' hasBullet={true} />

      </SidebarMenuItemWithSub>


      {/* Claim menu*/}
      <SidebarMenuItemWithSub to='#' title='Claim' fontIcon='bi-chat-left' icon='finance-calculator'>
        <SidebarMenuItem to='/claim/view' title='Claim List' hasBullet={true} />
        {patientData && patientData.id ? (
          <SidebarMenuItem to='/claim/add' title='Add Claim' hasBullet={true} />
        ) : (
          <>
          <div onClick={handleAddClaimClick}>
            <SidebarMenuItem  to='/patient/list' title='Add Claim' hasBullet={true} />
          </div>
          </>
        )}
      </SidebarMenuItemWithSub>
      
      {/* Provider menu*/}
      <SidebarMenuItemWithSub
        to='#'
        title='Providers'
        fontIcon='bi-archive'
        icon='user-tick'
      >
        {/*  */}
        <SidebarMenuItem  to='/providers/rendering' title='Rendering' hasBullet={true} />
        <SidebarMenuItem to='/providers/refering' title='Referring' hasBullet={true} />
      </SidebarMenuItemWithSub>


      {/* Tasks menu*/}
      <SidebarMenuItem
        to='tasks/view'
        title='Tasks'
        fontIcon='bi-archive'
        icon='element-12'
      >
      </SidebarMenuItem>

     
      {/* User management menu*/}
      <SidebarMenuItemWithSub 
        to='/user-management/users'
        title='User management'
        fontIcon='bi-archive'
        icon='category'
      >
      <SidebarMenuItemWithSub
        to='/user-management/users'
        title='Users'
        fontIcon='bi-archive'
        hasBullet={true}
      >
        <SidebarMenuItem to='/user-management/users' title='Users List' hasBullet={true} />
        <SidebarMenuItem to='/user-management/view-users' title='View User' hasBullet={true} />
      </SidebarMenuItemWithSub>
      
      <SidebarMenuItemWithSub
        to='/user-management/roles'
        title='Roles'
        fontIcon='bi-archive'
        hasBullet={true}
      >
        <SidebarMenuItem to='/user-management/roles' title='Roles List' hasBullet={true} />
        <SidebarMenuItem to='/user-management/view-roles' title='View Role' hasBullet={true} />
      </SidebarMenuItemWithSub>

        <SidebarMenuItem to='/user-management/permissions' title='Permissions' hasBullet={true} />
      </SidebarMenuItemWithSub>


      {/* saporator*/}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Settings</span>
        </div>
      </div>

      {/* Organization menu*/}
      <SidebarMenuItem
        to='/organization/profile'
        icon='bank'
        title='Organization'
        fontIcon='bi-hospital'
      />

    </>
  )
}

export {SidebarMenuMain}
