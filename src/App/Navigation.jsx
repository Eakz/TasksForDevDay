import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import FullPageSpinner from '../Layout/Components/Spinner/FullPageSpinner';

const LandingPage = lazy(() => import('../Layout/LandingPage'));
const Day1 = lazy(() => import('../Tasks/Day1'));

export const pages = {
  landing: '/',
  day1: '/day1',
};

const routes = [
  {
    path: pages.landing,
    component: LandingPage,
  },
  { path: pages.day1, component: Day1 },
];

const renderRoute = ({ path, component: Component }) => (
  <Route
    key={path}
    path={path}
    exact
    render={(props) => <Component {...props} />}
  />
);

const RenderRoutes = () => {
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <Switch>
        {routes.map(renderRoute)}
        <Redirect to='/' />
      </Switch>
    </Suspense>
  );
};

export default RenderRoutes;
