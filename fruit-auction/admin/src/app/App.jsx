import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {MasterInit} from '../_metronic/layout/MasterInit'
import {ThemeModeProvider} from '../_metronic/partials'
import {SettingContext} from './utilities/SettingContext'
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ClaimContext } from './modules/claim/ClaimContext'
const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LayoutProvider>
            <ThemeModeProvider>
              <SettingContext>
                <ClaimContext>
                <Outlet />
                <MasterInit />
                </ClaimContext>
              </SettingContext>
            </ThemeModeProvider>
          </LayoutProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  )
}
export {App}
