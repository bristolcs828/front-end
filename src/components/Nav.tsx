import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Icon from '../components/Icon'



const Nav = styled.nav`
 box-shadow: 0 0 3px rgba(0,0,0,0.25);
 background:white;
   >ul{
       display:flex;
       >li{
       padding:6px 0;
       width: 33.3333333%;
           >a{
             text-align:center;
             display:flex;
             flex-direction:column;
             align-items:center;
             justify-content:center;
             color:#666;
             &.selected{
                color:#222;
                .icon{
                    fill:#222;
                }
             }
           }
       .icon{
           padding:0;
           margin:0;
           width:25px;
           height:25px;
           fill:#666;
       }
      
   }
   }
`
const Component = () => {
    return (
        <Nav>
            <ul>
                <li>

                    <NavLink to="/tags" exact={true} activeClassName="selected">
                        <Icon name='tags' />
                        <span>Tags</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/account" activeClassName="selected">
                        <Icon name='account' />
                        <span>Bookkeeping</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name='statistics' />
                        <span>Statistics</span></NavLink>
                </li>
            </ul>
        </Nav>
    )
}
export default Component;
