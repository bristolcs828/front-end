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
      border-bottom: 1px solid #4ba398;
      line-height: 20px;
      margin-left: 16px;
     
    
      >a{ display:flex;
        padding: 12px 16px 12px 0;
      justify-content: space-between;
      align-items: center;
    
    }
    }
  `;

const Topbar = styled.div`
  background: #4ba398;
  height: 50px;
  color: white;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 10px;
`

const Show = styled.div`
  display: flex;
  border: 1px solid red;
  height: 50px;
  bottom: 50px;
`

const Component = observer(() => {
  const { tags, addTag } = useStores().TagsStore
  const { onAddTag } = OperateTags
  return (
    <Layout>
      <Topbar>
        Manage My Tags
      </Topbar>
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
        }}>Add new tag</Button>
      </Center>
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Show>Badges: </Show>
      <Show>Number of days signed in: </Show>
    </Layout>
  )
})
export default Component;
