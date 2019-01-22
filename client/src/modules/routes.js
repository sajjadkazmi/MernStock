import React from 'react';

import Loadable from 'react-loadable'
function Loading() {
    return <div>Loading...</div>;
  }
  const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading,
  });
  const Angular = Loadable({
    loader: () => import('./Angular'),
    loading: Loading,
  });
  const Laravel = Loadable({
    loader: () => import('./Laravel'),
    loading: Loading,
  });
  const Main = Loadable({
    loader: () => import('./Main'),
    loading: Loading,
  });
  const Setup_User = Loadable({
    loader: () => import('./Setup_pages/Setup_User'),
    loading: Loading,
  });
  const Setup_Department = Loadable({
    loader: () => import('./Setup_pages/Setup_Department'),
    loading: Loading,
  });
  const Setup_Location = Loadable({
    loader: () => import('./Setup_pages/Setup_Location'),
    loading: Loading,
  });
  const Setup_Employee = Loadable({
    loader: () => import('./Setup_pages/Setup_Employee'),
    loading: Loading,
  });
  const Setup_Roles = Loadable({
    loader: () => import('./Setup_pages/Setup_Roles'),
    loading: Loading,
  });
const routes = [
    { path: '/Main', exact: true, name: 'Main', component: Main },
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/Laravel', exact: true,  name: 'Laravel', component: Laravel },
    { path: '/Angular', exact: true,  name: 'Angular', component: Angular },
    { path: '/Setup_User', exact: true,  name: 'Setup_User', component: Setup_User },
    { path: '/Setup_Department', exact: true,  name: 'Setup_Department', component: Setup_Department },
    { path: '/Setup_Location', exact: true,  name: 'Setup_Location', component: Setup_Location },
    { path: '/Setup_Employee', exact: true,  name: 'Setup_Employee', component: Setup_Employee },
    { path: '/Setup_Roles', exact: true,  name: 'Setup_Roles', component: Setup_Roles },
   ];
  
  export default routes;