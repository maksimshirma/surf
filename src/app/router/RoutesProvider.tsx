import { RouterProvider } from 'react-router-dom';

import { RoutesEnum, RoutesNamesMap } from '@/shared';
import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Outlet />}>
      <Route path={RoutesEnum.Home} element={<>{RoutesNamesMap[RoutesEnum.Home]}</>} />
      <Route path={RoutesEnum.Credits} element={<>{RoutesNamesMap[RoutesEnum.Credits]}</>} />
      <Route path={RoutesEnum.Services} element={<>{RoutesNamesMap[RoutesEnum.Services]}</>} />
      <Route index element={<Navigate to={RoutesEnum.Home} replace />} />
    </Route>,
  ),
);

export const RoutesProvider = () => <RouterProvider router={router} />;
