import {Route, Routes, Outlet } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import Tasks from './TaskList'

const tasksBreadcrumbs: Array<PageLink> = [
  {
    title: 'dashboard',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const TaskPage = () => {
 
  return (   
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='view'
          element={
            <>
              <PageTitle breadcrumbs={tasksBreadcrumbs}>Task List</PageTitle>
              <Tasks />
            </>
          }
        />
      </Route>
    </Routes>
  )
}
export default TaskPage

