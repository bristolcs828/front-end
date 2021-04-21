import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Account from './page/Account'
import Statistics from './page/Statistics'
import Tags from './page/Tags'
import styled from 'styled-components'
import Tag from './page/Tag'
const AppWrapper = styled.div`
   color: #333;
`
function App() {

  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact={true} path="/account">
            <Account />
          </Route>
          <Route exact={true} path="/tags/:tagId">
            <Tag />
          </Route>
          <Route exact={true} path="/tags">
            <Tags />
          </Route>
          <Route exact={true} path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/account" />
          <Route path='*' >
            <div>你访问的页面不存在</div>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
