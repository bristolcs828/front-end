import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Account from './page/Account'
import Statistics from './page/Statistics'
import Tags from './page/Tags'
import styled from 'styled-components'
import Tag from './page/Tag'
import Login from './page/Login'
import Register from './page/Register'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import useStores from './stores'
const AppWrapper = styled.div`
   color: #333;
`
const App= observer( ()=> {
   const { initTags } = useStores().TagsStore
   const { initList } =useStores().RecordsStore
   const { userName } = useStores().UserStore
   useEffect(()=>{
    if(userName){
      initTags()
      initList()
     }
   },[initList, initTags, userName])

   
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact={true} path='/login' component={Login} />
          <Route exact={true} path='/register' component={Register} />
          <Route exact={true} path="/account" component={Account} />
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
})

export default App;
