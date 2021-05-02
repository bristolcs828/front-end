import React from 'react';
import useStores from '../stores'
import { observer } from 'mobx-react'
import { Form, Input, Button, Checkbox } from 'antd'

import styled from 'styled-components'

const FormWrapper = styled.div`
  margin-top: 30px;
  width: 80vw;
  margin-right:auto;
  margin-left:auto;
  >.loginHeader{
      color:#222;
      display:flex;
      align-item:center;
      justify-content: space-between;
      margin-bottom:10px;
  }
`

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


const Component = observer( (props:any) => {
    const { login, setUserName } = useStores().UserStore
    const onFinish = (values: any) => {
        const {password, username} = values
        console.log(typeof password)
        login(username, password)
          .then((res:any)=> {
             const {data} = res
             if(data.success === "true"){
                setUserName(username)
                props.history.push('/')
             }
             else{
                window.alert("验证失败，用户名或密码错误")
             }
          }) 
          .catch((error)=>{console.log(error)})
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <FormWrapper>
        <div className="loginHeader"> 
           <div>
               Login
           </div>

            <button onClick={()=>{props.history.push('/register')}}>
                register
            </button>
        </div>
        <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </FormWrapper>
    )
})
export default Component;