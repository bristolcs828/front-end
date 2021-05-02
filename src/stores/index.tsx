import React, { createContext, useContext } from 'react';
import TagsStore from './TagsStore'
import RecordsStore from './RecordsStore'
import UserStore from './UserStore'
const content = createContext({
    TagsStore,
    RecordsStore,
    UserStore
})

const UseStores = () => useContext(content)
export default UseStores;