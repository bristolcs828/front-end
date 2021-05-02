import React from 'react';

import Nav from '../components/Nav'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
height: 100vh;
border:1px solid black;
flex-direction:column;
`
const Main = styled.main`
display:flex;
flex-direction:column;
flex-grow:1;
`

interface LayoutProps {
    children: React.ReactNode
}
const Component = (props: LayoutProps) => {

    return (
        <Wrapper>
            <Main>
                {props.children}
            </Main>
            <Nav />
        </Wrapper>
    )

}

export default Component;