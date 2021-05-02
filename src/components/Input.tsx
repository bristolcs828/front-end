import React from 'react'
import styled from 'styled-components'
const Label = styled.label`

           display:flex;
           align-items:center;
           >span{
               margin-right:16px;
               white-space:nowrap;
           }
           >input{
               width:100%;
               display:block;
               height:44px;
               background:none;
               border:none;
           }
       
`
type Props = {
    spanText?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Component: React.FC<Props> = (props: Props) => {
    const { spanText, children, ...rest } = props

    return (
        <Label>
            <span>{spanText}</span>
            <input {...rest} />
        </Label>
    )
}

export default Component;