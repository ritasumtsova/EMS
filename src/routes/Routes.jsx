// import React, { Suspense } from 'react';
// import { Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';

// import Login from '../components/Login';
// import Error from '../components/Error';

// export const publicRoutes = [
//   {
//     path: '/',
//     Component: Login,
//   },
//   {
//     path: '*',
//     Component: Error,
//   },
// ];

// export const privateRoutes = [
//   {
//     path: '/departments',
//     Component: React.lazy(() => import('../components/Departments')),
//     exact: true,
//   },
//   {
//     path: '/departments/:id',
//     Component: React.lazy(() => import('../components/Department')),
//   },
// ];

// export const publicRouteComponents = publicRoutes.map((route, i) => (
//   <Route
//     key={i}
//     exact={route.exact}
//     path={route.path}
//     component={route.Component}
//   />
// ));

// export const privateRouteComponents = privateRoutes.map((route, i) => {
//   const { Component } = route;

//   return (
//     <PrivateRoute key={i} exact={route.exact} path={route.path}>
//       <Suspense fallback={<p>Loading...</p>}>
//         <Component />
//       </Suspense>
//     </PrivateRoute>
//   );
// });
