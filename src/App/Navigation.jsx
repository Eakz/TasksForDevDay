import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import FullPageSpinner from '../Layout/Components/Spinner/FullPageSpinner';
import { ANIMATION_TIMING } from './constants';

const LandingPage = lazy(() => {
  return Promise.all([
    import('../Layout/LandingPage'),
    new Promise((resolve) => setTimeout(resolve, ANIMATION_TIMING)),
  ]).then(([moduleExports]) => moduleExports);
});
const Day1 = lazy(() => {
  return Promise.all([
    import('../Tasks/Day1'),
    new Promise((resolve) => setTimeout(resolve, ANIMATION_TIMING)),
  ]).then(([moduleExports]) => moduleExports);
});

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
    render={(props) => {
      return <Component {...props} />;
    }}
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
