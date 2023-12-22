/* eslint-disable react/jsx-no-target-blank */
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SidebarMenuMain = () => {
  const patientData = useSelector((state) => state.patientReducerComp)

  const handleAddClaimClick = () => {
    toast.info('Select Patient First')
  }

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
        title='Vendor'
        fontIcon='bi-app-indicator'
        icon='profile-circle'
      >
        <SidebarMenuItem to='/patient/list' title='Vendor List' hasBullet={true} />

        <SidebarMenuItem to='/patient/add' title='Add Vendor' hasBullet={true} />
      </SidebarMenuItemWithSub>

      {/* Wholesaler*/}
      <SidebarMenuItemWithSub
        to='#'
        title='Wholesaler'
        fontIcon='bi-chat-left'
        icon='finance-calculator'
      >
        <SidebarMenuItem to='/claim/view' title='Wholesaler List' hasBullet={true} />
        {patientData && patientData.id ? (
          <SidebarMenuItem to='/claim/add' title='Add Wholesaler' hasBullet={true} />
        ) : (
          <>
            <div onClick={handleAddClaimClick}>
              <SidebarMenuItem to='/patient/list' title='Add Wholesaler' hasBullet={true} />
            </div>
          </>
        )}
      </SidebarMenuItemWithSub>

      {/* Provider menu*/}
      <SidebarMenuItemWithSub to='#' title='Farmer' fontIcon='bi-archive' icon='user-tick'>
        {/*  */}
        <SidebarMenuItem to='/providers/rendering' title='Farmer List' hasBullet={true} />
        <SidebarMenuItem to='/providers/refering' title='Add Farmer' hasBullet={true} />
      </SidebarMenuItemWithSub>

      {/* Agriculture */}
      <SidebarMenuItemWithSub
        to='/user-management/users'
        title='Agriculture'
        fontIcon='bi-archive'
        icon='category'
      >
        <SidebarMenuItemWithSub
          to='/user-management/users'
          title='Machinery'
          fontIcon='bi-archive'
          hasBullet={true}
        >
          <SidebarMenuItem to='/user-management/users' title='Machinery List' hasBullet={true} />
          <SidebarMenuItem
            to='/user-management/view-users'
            title='View Machinery'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub
          to='/user-management/roles'
          title='Seeds'
          fontIcon='bi-archive'
          hasBullet={true}
        >
          <SidebarMenuItem to='/user-management/roles' title='Seeds List' hasBullet={true} />
          <SidebarMenuItem to='/user-management/view-roles' title='View Seeds' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub
          to='/user-management/roles'
          title='Raw Material'
          fontIcon='bi-archive'
          hasBullet={true}
        >
          <SidebarMenuItem to='/user-management/roles' title='Raw Material List' hasBullet={true} />
          <SidebarMenuItem
            to='/user-management/view-roles'
            title='View Raw Material'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

        <SidebarMenuItem to='/user-management/permissions' title='Land Brokers' hasBullet={true} />
      </SidebarMenuItemWithSub>

      {/* Logistics */}
      <SidebarMenuItemWithSub
        to='/user-management/users'
        title='Logistics'
        fontIcon='bi-archive'
        icon='category'
      >
        <SidebarMenuItemWithSub
          to='/user-management/users'
          title='Transport'
          fontIcon='bi-archive'
          hasBullet={true}
        >
          <SidebarMenuItem to='/user-management/users' title='Transport List' hasBullet={true} />
          <SidebarMenuItem
            to='/user-management/view-users'
            title='View Transport'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub
          to='/user-management/roles'
          title='Account'
          fontIcon='bi-archive'
          hasBullet={true}
        >
          <SidebarMenuItem to='/user-management/roles' title='Account List' hasBullet={true} />
          <SidebarMenuItem to='/user-management/view-roles' title='View Account' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>

      {/* saporator*/}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Other</span>
        </div>
      </div>
      {/* News*/}
      <SidebarMenuItem
        to='tasks/view'
        title='News'
        fontIcon='bi-archive'
        icon='element-12'
      ></SidebarMenuItem>

      {/* Government Policies */}
      <SidebarMenuItem
        to='/organization/profile'
        icon='bank'
        title='Government Policies'
        fontIcon='bi-hospital'
      />
    </>
  )
}

export {SidebarMenuMain}
