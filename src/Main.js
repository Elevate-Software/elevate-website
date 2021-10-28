import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./components/pages/Home'))
const Services = React.lazy(() => import('./components/pages/Services'))
const NotFoundPage = React.lazy(() => import('./components/pages/NotFoundPage'))

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/'>
                <Suspense fallback={<div></div>}><Home /></Suspense>
            </Route>
            <Route exact path='/Services'>
                <Suspense fallback={<div></div>}><Services /></Suspense>
            </Route>
            <Route component={NotFoundPage} />
        </Switch>
    );
}

export default Main;