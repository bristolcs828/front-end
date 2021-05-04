import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components'
import Input from '../../components/Input'
import useStores from '../../stores'
import { observer } from 'mobx-react'
const NoteSection = styled.section`
       background:#f5f5f5;
       padding:14px  16px;
       font-size:14px;
`


const Component: React.FC = observer(() => {
    const { currentRecord, setNotes } = useStores().RecordsStore
    const note = currentRecord.notes
    const getNote: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNotes(e.target.value)
    }

    return (
        <NoteSection>
            <Input spanText="Notes" type="text"
                placeholder="Add note here"
                onChange={getNote}
                value={note} />
        </NoteSection>

    )
})

export default Component;
