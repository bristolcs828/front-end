import React, { useState } from 'react'
import styled from 'styled-components'
import LongPress from '../../utils/longPress'
import Tag from '../../types/Tag'
import useStores from '../../stores'
import { observer } from 'mobx-react'
import OperateTags from '../../utils/OperateTags'

const TagsSection = styled.section`
       background:#fff;
       padding: 12px 16px;
       flex:1;
       display:flex;
       flex-direction:column;
       justify-content:flex-end;
       align-items:flex-start;
        >div{
           margin-bottom:auto;
           color:#666;
        }
        >ol{ 
             margin: 0 -12px;

            >li{
                background:#D9D9D9;
                border-radius: 18px;
                display:inline-block;
                padding: 3px 18px;
                font-size: 14px;
                margin: 8px 12px;
                &.selected{
                    box-shadow:0 0 0 1px rgba(0,0,0,0.7);
                }
            }
        }
        >button{
                background:none;
                border: none;
                padding:2px 4px;
                border-bottom: 1px solid #333;
                color: #666;
                margin-top:8px;
            }
`


const Component: React.FC = observer(() => {
    const { tags, addTag, delecteTag, selectedTags, changeSelectedTags } = useStores().TagsStore
    const { seTags } = useStores().RecordsStore

    const { onAddTag, onDeleteTag } = OperateTags

    const { touchStart, touchEnd, touchMove } = LongPress;

    const toggleTag = (item: Tag) => {
        const index: number = selectedTags.indexOf(item)
        if (index >= 0) {
            const newSelectedTags: Array<Tag> = selectedTags.filter(tags => tags !== item)
            changeSelectedTags(newSelectedTags)
            seTags()

        } else {
            changeSelectedTags([...selectedTags, item])
            seTags()
        }
    }
    const isSelected = (item: Tag) => {
        const index: number = selectedTags.indexOf(item)
        if (index >= 0) {
            return 'selected'
        }
        else return ''
    }
    return (
        <TagsSection >
            <div>(长按标签可删除)</div>
            <ol>
                {tags.map((item) => {
                    return (<li key={item.id}
                        onClick={() => toggleTag(item)}
                        onTouchMove={touchMove}
                        onTouchEnd={touchEnd}
                        onTouchStart={() => touchStart(() => { onDeleteTag(item, delecteTag) })}
                        className={isSelected(item)}
                    >  {item.name}</li>)
                })}

            </ol>
            <button onClick={() => {
                onAddTag(tags, addTag)
            }} >新增标签</button>
        </TagsSection >
    )
})

export default Component;