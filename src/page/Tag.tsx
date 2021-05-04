import React from 'react'
import useStore from '../stores'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Icon from '../components/Icon'
import Button from '../components/Button'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Center from '../components/Center'
import Space from '../components/Space'
import OperateTags from '../utils/OperateTags'
type Params = {
    tagId: string
}

const TopBar = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  line-height:20px;
  padding:14px 16Px;
  background:white;

`
const InputWrapper = styled.div`
  background:white;
  padding:0 16px;
  margin-top:16px;
`
const Component: React.FC = () => {
    const { findTag, setTag, delecteTag } = useStore().TagsStore
    const { tagId } = useParams<Params>()
    const tag = findTag(tagId)
    const { onDeleteTag } = OperateTags
    const modifyTagsName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const newName = e.target.value
        setTag(tag, newName)
    }
    const redirectToTags = () => {
        const url: string = window.location.href
        const re = new RegExp("/" + tag.id + "$", 'gi')
        const newUrl = url.replace(re, "")
        window.location.href = newUrl
    }

    return (
        <Layout>
            <TopBar>
                <Link to='/tags'>  <Icon name="left" /></Link>

                <span>Edit Tags</span>
                <Icon />
            </TopBar>
            <InputWrapper>
                <Input spanText={'Tag Name：' + tag.name} placeholder="编辑新标签名" onChange={modifyTagsName} />
            </InputWrapper>
            <Center>
                <Space />
                <Space />
                <Space />
                <Button onClick={() => {
                    onDeleteTag(tag, delecteTag, redirectToTags)

                }}>Detele Tags</Button>
            </Center>


        </Layout>

    )
}
export default Component;