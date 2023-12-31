import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AuthenticationFrame from './components/AuthenticationFrame'
import ForgotPassword from './components/AuthenticationFrame/ForgotPassword'
import ContactUs from './components/ContactUs'
import CreateTeam from './components/CreateTeam'
import { EditProfilePage } from './components/EditProfilePage/index'
import Error400Page from './components/ErrorPages/Error400Page'
import Error401Page from './components/ErrorPages/Error401Page'
import Error404Page from './components/ErrorPages/Error404Page'
import LandingPage from './components/LandingPage'
import OwnerProfile from './components/OwnerProfile'
import ListOfSportHalls from './components/SportHalls/ListOfSportHalls'
import SportHallPage from './components/SportHalls/SportHallPage/index'
import UserProfile from './components/UserProfile'
import Verification from './components/Verification'
import withSockets from './hoc/withSockets'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/owner-profile'} element={<OwnerProfile />}></Route>
        <Route path={'/edit-profile'} element={<EditProfilePage />} />

        <Route path={'/create-team'} element={<CreateTeam />} />
        <Route path={'/my-profile'} element={<UserProfile />} />

        <Route path={'/'} element={<LandingPage />} />
        <Route path="/sporthall/:id" element={<SportHallPage />} />
        <Route
          path={'/login'}
          element={<AuthenticationFrame route={'login'} />}
        />
        <Route
          path={'/registration'}
          element={<AuthenticationFrame route={'registration'} />}
        />
        <Route path={'/sport-halls'} element={<ListOfSportHalls />} />
        <Route path={'/forgot-password'} element={<ForgotPassword />} />
        <Route path={'/contact-us'} element={<ContactUs />} />
        <Route path={'*'} element={<Error404Page />} />
        <Route path={'/email-verification'} element={<Verification />} />
        <Route path={'/error/401'} element={<Error401Page />} />
        <Route path={'/error/404'} element={<Error404Page />} />
        <Route path={'/error/400'} element={<Error400Page />} />
      </Routes>
    </BrowserRouter>
  )
}

const AppWithSockets = withSockets(App)

export default AppWithSockets
