import React from 'react';
import Home from '../Home/Home';
import ShowPost from '../App/ShowPost/ShowPost';
import { Switch, Route } from 'react-router-dom';
import EditPost from '../EditPost/EditPost';
import { Routes } from '../../utils/routes';

export const Content = (): JSX.Element => {
  return (
    <Switch>
      <Route path={Routes.HOME.route} exact component={Home} />
      <Route path={Routes.POST.route} component={ShowPost} />
      <Route path={`${Routes.EDIT.route}/:id`} component={EditPost} />
    </Switch>
  );
};

export default Content;
