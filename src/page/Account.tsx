import React from 'react';
import Layout from '../components/Layout'
import TagsSection from './Account/TagsSetion'
import NoteSection from './Account/NoteSection'
import CategorySection from './Account/CategorySection'
import NumberPadSection from './Account/NumberPadSection'
import useStores from '../stores'
import { observer } from 'mobx-react'

import styled from 'styled-components'
const CategoryWrapper = styled.div`
background:#c4c4c4;`

const Component = observer( (props:any) => {
    const { userName } = useStores().UserStore 
    console.log(userName)
    if(!userName){
        props.history.push('/login')
    }
    return (
        < Layout >
            <TagsSection />
            <NoteSection />
            <CategoryWrapper>
                <CategorySection />
            </CategoryWrapper>
            <NumberPadSection />
        </Layout >
    )
})
export default Component;