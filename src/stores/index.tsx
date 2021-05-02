import React, { createContext, useContext } from 'react';
import TagsStore from './TagsStore'
import RecordsStore from './RecordsStore'
const content = createContext({
    TagsStore,
    RecordsStore
})

const UseStores = () => useContext(content)
export default UseStores;