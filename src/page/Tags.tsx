/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
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

const BottomWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  
`
const SignWrapper = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-around;
  margin-bottom:30px;
`

const BadgeWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Badgeheader = styled.div`
  display: flex;
  justify-content: center;
  algin-item: center;
  margin-bottom: 20px;
`
const BadgeBody = styled.div`
   display: flex;
   flex-wrap: wrap;
`
const Badge = styled.div`
display:flex;
  height: 50px;
  width: 50px;
  margin-left:20px;
  margin-bottom: 20px;
  justify-content: center;
  algin-item: center;
`

const getCurDate = ()=>{
  const newDate = new Date()
  const year = newDate.getFullYear()
  const month = newDate.getMonth()
  const day = newDate.getDate()
  return `${year}/${month}/${day}`
}

const Component = observer(() => {
  const { tags, addTag } = useStores().TagsStore
  const { sign, setSignMap, signMap, addSign } = useStores().SignStore
  const { onAddTag } = OperateTags

  const handleSign = () =>{
    const dateValue = getCurDate()
    localStorage.setItem('signDate', dateValue)
    setSign(true)
    addSign()
    setSignMap()
  }

  useEffect(()=>{
    
    setSignMap() },[setSignMap,sign])
  
  const initSign = localStorage.getItem('signDate') === getCurDate() ? true : false
  

  const [hasSign, setSign] = useState (initSign)

  
  console.log(signMap)

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
     <BottomWrapper>
       <SignWrapper>
         {
           hasSign ? <div>已签到</div> : <div onClick={handleSign}>签到</div>
         }
          <div>{`已经签到${sign}天`}</div>
       </SignWrapper>
       <BadgeWrap>
         <Badgeheader>现在拥有的徽章</Badgeheader>
         <BadgeBody>
           {
             signMap.map(item => <Badge>
               <Icon name={item.name} noClass={true} />
             </Badge>)
           }
          </BadgeBody>
       </BadgeWrap>
     </BottomWrapper>
     
    </Layout>
  )
})
export default Component;
