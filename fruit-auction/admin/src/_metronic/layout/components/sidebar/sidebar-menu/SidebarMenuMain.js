/* eslint-disable react/jsx-no-target-blank */
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {checkPermission} from '../../../../../app/utilities/Helper'

const SidebarMenuMain = () => {
  const patientData = useSelector((state) => state.patientReducerComp)
  const loginUserData = useSelector((state) => state.userReducerComp)
  console.log('loginUserData: ', loginUserData.role)

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
      {/* {loginUserData.role === 'admin' ? (
        <> */}
      {checkPermission('view_users', loginUserData.role) && (
        <SidebarMenuItemWithSub
          to='#'
          title='User Management'
          fontIcon='bi-app-indicator'
          icon='profile-circle'
        >
          {checkPermission('view_users', loginUserData.role) && (
            <SidebarMenuItem to='/patient/list' title='User List' hasBullet={true} />
          )}

          {checkPermission('add_users', loginUserData.role) && (
            <SidebarMenuItem to='/patient/add' title='Add User' hasBullet={true} />
          )}
        </SidebarMenuItemWithSub>
      )}
      {/* Vendor */}
      {checkPermission('view_vendor', loginUserData.role) && (
        <SidebarMenuItemWithSub
          to='#'
          title='Vendor'
          fontIcon='bi-app-indicator'
          icon='profile-circle'
        >
          {checkPermission('view_vendor', loginUserData.role) && (
            <SidebarMenuItem to='/patient/list' title='Vendor List' hasBullet={true} />
          )}

          {checkPermission('add_vendor', loginUserData.role) && (
            <SidebarMenuItem to='/patient/add' title='Add Vendor' hasBullet={true} />
          )}
        </SidebarMenuItemWithSub>
      )}

      {/* Wholesaler*/}
      {checkPermission('view_wholesaler', loginUserData.role) && (
        <SidebarMenuItemWithSub
          to='#'
          title='Wholesaler'
          fontIcon='bi-chat-left'
          icon='finance-calculator'
        >
          {checkPermission('view_wholesaler', loginUserData.role) && (
            <SidebarMenuItem to='/patient/list' title='Wholesaler List' hasBullet={true} />
          )}

          {checkPermission('add_wholesaler', loginUserData.role) && (
            <SidebarMenuItem to='/patient/add' title='Add Wholesaler' hasBullet={true} />
          )}
        </SidebarMenuItemWithSub>
      )}

      {/* Farmer*/}
      {checkPermission('view_farmer', loginUserData.role) && (
        <SidebarMenuItemWithSub to='#' title='Farmer' fontIcon='bi-archive' icon='user-tick'>
          {checkPermission('view_farmer', loginUserData.role) && (
            <SidebarMenuItem to='/patient/list' title='Farmer List' hasBullet={true} />
          )}

          {checkPermission('add_farmer', loginUserData.role) && (
            <SidebarMenuItem to='/patient/add' title='Add Farmer' hasBullet={true} />
          )}
        </SidebarMenuItemWithSub>
      )}
      {checkPermission('agriculture', loginUserData.role) && (
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Agriculture</span>
        </div>
      </div>)}
      {/* Machinery*/}
      {checkPermission('view_machinery', loginUserData.role) && (
        <SidebarMenuItemWithSub to='#' title='Machinery' fontIcon='bi-archive' icon='user-tick'>
          {checkPermission('view_machinery', loginUserData.role) && (
            <SidebarMenuItem to='/patient/list' title='Machinery List' hasBullet={true} />
          )}

          {checkPermission('add_machinery', loginUserData.role) && (
            <SidebarMenuItem to='/patient/add' title='Add Machinery' hasBullet={true} />
          )}
        </SidebarMenuItemWithSub>
      )}
      {/* Seeds*/}
      {checkPermission('view_seeds', loginUserData.role) && (
        <SidebarMenuItemWithSub to='#' title='Seeds' fontIcon='bi-archive' icon='user-tick'>
          {checkPermission('view_seeds', loginUserData.role) && (
            <SidebarMenuItem to='/patient/list' title='Seeds List' hasBullet={true} />
          )}

          {checkPermission('add_seeds', loginUserData.role) && (
            <SidebarMenuItem to='/patient/add' title='Add Seeds' hasBullet={true} />
          )}
        </SidebarMenuItemWithSub>
      )}
      {/* Raw Material*/}
      {checkPermission('view_raw_material', loginUserData.role) && (
        <SidebarMenuItemWithSub to='#' title='Raw Material' fontIcon='bi-archive' icon='user-tick'>
          {checkPermission('view_raw_material', loginUserData.role) && (
            <SidebarMenuItem to='/patient/list' title='Raw Material List' hasBullet={true} />
          )}
          {checkPermission('add_raw_material', loginUserData.role) && (
            <SidebarMenuItem to='/patient/add' title='Add Raw Material' hasBullet={true} />
          )}
        </SidebarMenuItemWithSub>
      )}
      {/* Land Brokers*/}
      {checkPermission('view_land_broker', loginUserData.role) && (
        <SidebarMenuItemWithSub to='#' title='Land Brokers' fontIcon='bi-archive' icon='user-tick'>
          {checkPermission('view_land_broker', loginUserData.role) && (
            <SidebarMenuItem to='/patient/list' title='Land Brokers List' hasBullet={true} />
          )}
          {checkPermission('add_land_broker', loginUserData.role) && (
            <SidebarMenuItem to='/patient/add' title='Add Land Brokers' hasBullet={true} />
          )}
        </SidebarMenuItemWithSub>
      )}
{checkPermission('logistics', loginUserData.role) && (
  <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Logistics</span>
        </div>
      </div>
        )}
      {/* Transport*/}
      {checkPermission('view_transport', loginUserData.role) && (
        <SidebarMenuItemWithSub to='#' title='Transport' fontIcon='bi-archive' icon='user-tick'>
          {checkPermission('view_transport', loginUserData.role) && (
            <SidebarMenuItem to='/patient/list' title='Transport List' hasBullet={true} />
          )}
          {checkPermission('add_transport', loginUserData.role) && (
            <SidebarMenuItem to='/patient/add' title='Add Transport' hasBullet={true} />
          )}
        </SidebarMenuItemWithSub>
      )}
      {/* Account*/}{checkPermission('view_accounts', loginUserData.role) && (
      <SidebarMenuItemWithSub to='#' title='Account' fontIcon='bi-archive' icon='user-tick'>
        {checkPermission('view_accounts', loginUserData.role) && (
        <SidebarMenuItem to='/patient/list' title='Account List' hasBullet={true} />)}
        {checkPermission('add_accounts', loginUserData.role) && (
        <SidebarMenuItem to='/patient/add' title='Add Account' hasBullet={true} />)}
      </SidebarMenuItemWithSub>)}
      {/* Logistics */}
      {/* <SidebarMenuItemWithSub
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
      </SidebarMenuItemWithSub> */}
      {/* </>
      ) : (
        <>
          {loginUserData.role === 'logistics' ||
          loginUserData.role === 'vendor' ||
          loginUserData.role === 'wholesaler' ||
          loginUserData.role === 'agriculture' ||
          loginUserData.role === 'golden_member' ? (
            <>
              <SidebarMenuItem
                to='tasks/farmer'
                title='Farmer'
                fontIcon='bi-archive'
                icon='user-tick'
              ></SidebarMenuItem>
              <SidebarMenuItem
                to='tasks/whole-saler'
                title='Whole Saler'
                fontIcon='bi-app-indicator'
                icon='profile-circle'
              ></SidebarMenuItem>
            </>
          ) : (
            <>
              {loginUserData.role === 'farmer' ? (
                <>
                  <SidebarMenuItem
                    to='tasks/farmer'
                    title='Farmer'
                    fontIcon='bi-archive'
                    icon='user-tick'
                  ></SidebarMenuItem>
                  <SidebarMenuItem
                    to='tasks/whole-saler'
                    title='Whole Saler'
                    fontIcon='bi-app-indicator'
                    icon='profile-circle'
                  ></SidebarMenuItem>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )} */}
      {/* saporator*/}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Others</span>
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
