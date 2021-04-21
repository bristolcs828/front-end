import React from 'react';
import Layout from '../components/Layout'
import styled from 'styled-components'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'
import useStores from '../stores'
import { observer } from 'mobx-react'
import OperateTags from '../utils/OperateTags'
import Button from '../components/Button'
import Center from '../components/Center'
import Space from '../components/Space'
const TagList = styled.ol`
    font-size: 16px; 
    background:white;
    > li{
      border-bottom: 1px solid #d5d5d9;
      line-height: 20px;
      margin-left: 16px;
     
    
      >a{ display:flex;
        padding: 12px 16px 12px 0;
      justify-content: space-between;
      align-items: center;
    
    }
    }
  `;



const Component = observer(() => {
  const { tags, addTag } = useStores().TagsStore
  const { onAddTag } = OperateTags
  return (
    <Layout>
      <TagList>
        {tags.map((item) =>
          <li key={item.id}>
            <Link to={'/tags/' + item.id}>
              <span className="oneLine">{item.name}</span>
              <Icon name='right' />
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={() => {
          onAddTag(tags, addTag)
        }}>新增标签</Button>
      </Center>
    </Layout>
  )
})
export default Component;