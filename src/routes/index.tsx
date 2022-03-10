import { useRoutes } from 'react-router-dom';
import Basket from '../pages/Basket'; 
import Account from '../pages/Account'; 
import MedicalCard from '../pages/MedicalCard'; 
import SignUpPage from '../pages/SignUpPage'; 
import SignInPage from '../pages/SignInPage'; 
import UserDashboard from '../pages/UserDashboard';
import NewSheetById from '../pages/NewSheetById';
import Page404 from '../pages/Page404';
import Welcome from '../pages/Welcome';
import React from 'react';
import ChangePassword from '../pages/ChangePassword';
import ForgotPassword from '../pages/ForgotPassword';
import ConfirmUser from '../pages/ConfirmUser';

export type Location = {
  state?: {
    from?: string
  }
}

export const routes = [
  {
    path: '/auth', children: [
      {
        path: 'confirm',
        children: [
          {
            path: ':confirmAccountToken',
            element: <ConfirmUser />
          }
        ]
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />
      },
      {
        path: 'change-password',
        children: [
          {
            path: ':changePasswordToken',
            element: <ChangePassword />
          }
        ]
      }
    ]
  },
  { path: '/', element: <Welcome /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/sign-in', element: <SignInPage /> },
  {
    path: '/users', children: [
      { path: 'me', element: <Account /> },
      { path: 'basket', element: <Basket /> },
      { path: 'all', element: <UserDashboard />},
      { path: ':userId', element: <MedicalCard /> },
      { path: 'sheet-by-id', element: <NewSheetById />},
    ]
  },
  { path: '*', element: <Page404 /> }
]

export default function Routes() {
  return useRoutes(routes);
};
