import React, { useState, useRef, ChangeEventHandler } from 'react';
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
            <Input spanText="备注" type="text"
                placeholder="在这里添加备注"
                onChange={getNote}
                value={note} />
        </NoteSection>

    )
})

export default Component;