import React from 'react';
import Layout from '../components/Layout'
import TagsSection from './Account/TagsSetion'
import NoteSection from './Account/NoteSection'
import CategorySection from './Account/CategorySection'
import NumberPadSection from './Account/NumberPadSection'

import styled from 'styled-components'
const CategoryWrapper = styled.div`
background:#c4c4c4;`

const Component = () => {

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
}
export default Component;