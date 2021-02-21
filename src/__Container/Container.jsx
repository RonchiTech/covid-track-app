import React from 'react';
import classes from './Container.module.css';
import Navigation from '../components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import LatestResults from '../components/Results/LatestResults/LatestResults'
const container = () => {
  return (
    <div className={classes.Container}>
      <aside className={classes.Navigation}>
        <h1 className={classes.Title}>Covid-19 Track App</h1>
        <Navigation />
      </aside>
      <main className={classes.Main}>
        <Switch>
          <Route path="/" exact component={LatestResults} />
          <Route
            path="/result-by-country"
            render={() => <h2>Result by Country</h2>}
          />
        </Switch>
      </main>
    </div>
  );
};
export default container;
