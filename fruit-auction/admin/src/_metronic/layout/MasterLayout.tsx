import {useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {HeaderWrapper} from './components/header'
import {ScrollTop} from './components/scroll-top'
import {Content} from './components/content'
import {FooterWrapper} from './components/footer'
import {Sidebar} from './components/sidebar'
import { DrawerMessenger, InviteUsers, UpgradePlan} from '../partials'
import {PageDataProvider} from './core'
import {reInitMenu} from '../helpers'
import {ToolbarWrapper} from './components/toolbar'

import { AddUpdateFacility } from '../../app/modules/organization/components/facilities/AddUpdateFacility'
import { FacilityDetail } from '../../app/modules/organization/components/facilities/FacilityDetail'

import { AddUpdateCptCode } from '../../app/modules/organization/components/cpt-codes/AddUpdateCptCode'
import { CptDetail } from '../../app/modules/organization/components/cpt-codes/CptDetail'


import { AddUpdateSettings } from '../../app/modules/organization/components/settings/AddUpdateSettings'
import { DetailSettings } from '../../app/modules/organization/components/settings/DetailSettings'
import { AddUpdateProvider } from '../../app/modules/providers/AddUpdateProvider'

import { AddUpdateTasks } from '../../app/modules/tasks/AddUpdateTasks'
import { DetailProvider } from '../../app/modules/providers/DetailProvider'
import { ToastContainer } from 'react-toastify'

import { AddInsuranceDrawer } from '../../app/modules/patients/detail-patient/insurances/AddInsuranceDrawer'
import DetailInsurance from '../../app/modules/patients/detail-patient/insurances/InsuranceDetail'
import { TaskDetail } from '../../app/modules/tasks/TaskDetail'
import { AddUpdateIcdCode } from '../../app/modules/organization/components/icd-codes/AddUpdateIcdCode'
import { IcdDetail } from '../../app/modules/organization/components/icd-codes/IcdDetail'
import { AddUpdateAlerts } from '../../app/modules/patients/detail-patient/alerts/AddUpdateAlerts'
import { Comments } from '../../app/modules/tasks/Comment'
import InsuranceImage from '../../app/modules/patients/detail-patient/insurances/InsuranceImage'
import { AddUser } from '../../app/modules/userManagement/users/AddUser'

const MasterLayout = () => {
  const location = useLocation()
  useEffect(() => {
    reInitMenu()
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root app-root' id='kt_app_root'>
        <div className='app-page flex-column flex-column-fluid' id='kt_app_page'>
          <HeaderWrapper />
          
          <div className='app-wrapper flex-column flex-row-fluid' id='kt_app_wrapper'>
            <Sidebar />
            <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
              <div className='d-flex flex-column flex-column-fluid pt-5'>
                {/*<ToolbarWrapper />*/}
                <Content>
                  <Outlet />
                </Content>
              </div>
              <FooterWrapper />
            </div>
          </div>
        </div>
      </div>

      {/* begin:: Drawers */}
      <ToastContainer />

      <AddUpdateFacility/>
      <FacilityDetail/>

      <AddUpdateCptCode/>  
      <CptDetail/>

      <AddUpdateIcdCode/>
      <IcdDetail/>

      <AddUpdateSettings/>
      <DetailSettings/> 

      <AddUpdateProvider />
      <DetailProvider/>

      <DrawerMessenger />

      <AddUpdateTasks/>
      <TaskDetail/>
      <Comments/>

      <AddInsuranceDrawer />
      <DetailInsurance/>
      <InsuranceImage/>

      <AddUpdateAlerts/>

      <AddUser/>

      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <InviteUsers />
      <UpgradePlan />
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  )
}

export {MasterLayout}
