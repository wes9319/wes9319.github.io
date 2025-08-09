import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Home from '../../pages/Home';
import Knowledge from '../../pages/Knowledge';
import Education from '../../pages/Education';
import WorkProjects from '../../pages/WorkProjects';
import Contact from '../../pages/Contact';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/knowledge', element: <Knowledge /> },
  { path: '/education', element: <Education /> },
  { path: '/work-projects', element: <WorkProjects /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <Home /> },
];

export function AppRoutes() {
  return useRoutes(routes);
}