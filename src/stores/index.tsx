import { createContext, useContext } from 'react';
import TagsStore from './TagsStore'
import RecordsStore from './RecordsStore'
import UserStore from './UserStore'
import SignStore from './SignStore'
const content = createContext({
    TagsStore,
    RecordsStore,
    UserStore,
    SignStore
})

const UseStores = () => useContext(content)
export default UseStores;