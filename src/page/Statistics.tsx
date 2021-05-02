import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Category from './Account/CategorySection'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import useStores from '../stores'
import Icon from '../components/Icon'
import day from 'dayjs'
const Wrapper = styled.div`
      width:(100vw-1px);
      overflow:hidden;
      background:white;
      font-size:18px;
    line-height:20px;
    margin-top:16px;
 
    box-shadow:0 0 5px 0 rgba(0,0,0,0.25) 
`
const CategoryWrapper = styled.div`
    position: relative;
   background:white`


const Item = styled.div`
 
   position: relative;
   height:50px;
   line-height:20px;
   content: '';
     clear: both;
     display:block;
    transition: transform  0.5s linear;
    &.selected{
        transform:translateX(-50px) ;
    }
    >.amount{
        float:left;
        position: absolute;
        right:16px;
        bottom:50%;
        transform: translateY(50%)
       
    }
    >.note{
        float:left;
        position: absolute;
        width:50px;
        color: #999;
        bottom:50%;
        transform: translateY(50%);
        left: 100px;
    }
    .tags{
        float:left;
        position: absolute;
        left:16px;
        bottom:50%;
        transform: translateY(50%);

    }
    .delete{
        float:left;
        position: absolute;
          right:-28px;
          bottom:50%;
        transform: translateY(50%)
    }
   
`

const Component = observer(() => {
    const [deleteRecordClass, setDeleteRecordClass] = useState<number>(0)
    const { recordsList, currentRecord, deleteRecord, initList } = useStores().RecordsStore
    const isDeleteSelected = (record: any) => {
        if (record.id === deleteRecordClass) {
            return 'selected'
        } else {
            return ''
        }
    }
    useEffect(()=>{
        initList()
    },[recordsList, initList])
    const selectedRecords = recordsList.filter(record => record.category === currentRecord.category)
    let startX: number;
    let moveMar: number;

    return (
        <Layout>
            <CategoryWrapper >
                <Category />
            </CategoryWrapper>
            <div>
                {selectedRecords.map(record => {
                    return <Wrapper key={record.id}>
                        <Item
                            key={record.id}
                            onTouchStart={(e) => { startX = e.targetTouches[0].pageX }}
                            onTouchMove={(e) => { moveMar = e.targetTouches[0].pageX - startX }}
                            onTouchEnd={() => {
                                if (moveMar < -40) {
                                    setDeleteRecordClass(record.id)
                                } else if (moveMar > 40) {
                                    setDeleteRecordClass(0)
                                }
                            }}
                            onClick={() => { setDeleteRecordClass(0) }}
                            className={isDeleteSelected(record)}
                        >
                            <div className="tags">{record.tags.map(tag => <span key={tag.id}>{tag.name}</span>)}</div>
                            <div className="note">
                                {record.notes}
                            </div>
                            <div className="amount">
                                ¥{record.amonut}
                            </div>
                            <div className="delete" onClick={() => { deleteRecord(record) }} ><Icon name="delete"></Icon></div>
                        </Item>

                    </Wrapper>
                })}
            </div>
        </Layout>
    )
})
export default Component;