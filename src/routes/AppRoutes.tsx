import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import SignInPage from '../pages/SignInPage/SignInPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import {
 GROUPS_ROUTE,
 LOGIN_ROUTE,
 PRICE_ROUTE,
 REPORTS_ROUTE,
 SCHEDULE_ROUTE,
} from '../consts/routes'
import SchedulePage from '../pages/SchedulePage/SchedulePage'
import GroupsPage from '../pages/GroupsPage/GroupsPage'
import PricePage from '../pages/PricePage/PricePage'
import ReportsPage from '../pages/ReportsPage/ReportsPage'

const AppRoutes: React.FC = () => (
 <Routes>
  <Route path="/" element={<MainLayout />}>
   <Route path={LOGIN_ROUTE} element={<SignInPage />} />
   <Route path={SCHEDULE_ROUTE} element={<SchedulePage />} />
   <Route path={GROUPS_ROUTE} element={<GroupsPage />} />
   <Route path={PRICE_ROUTE} element={<PricePage />} />
   <Route path={REPORTS_ROUTE} element={<ReportsPage />} />
   <Route path="*" element={<NotFoundPage />} />
  </Route>
 </Routes>
)

export default AppRoutes
