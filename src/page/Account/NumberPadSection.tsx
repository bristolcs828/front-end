import React from 'react';
import styled from 'styled-components'
import useStores from '../../stores'
import { observer } from 'mobx-react'
const NumberPadSection = styled.section`
    display:flex;
    flex-direction:column;
    >.input{
        background : white;
        font-size:36px;
        line-height:72px;
        text-align:right;
        padding: 0 16px;
        box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
        inset 0 5px 5px -5px rgba(0,0,0,0.25);
     }
     >.pad{
       
         >button{
             font-size:18px;
             float:left;
             width:25%;
             height:64px;
             border:none;
             &.summit{
                 float:right;
                 height:128px;
             }
             &.zero{
                 width:50%;
             }
             &:nth-child(1){
                 background:#f2f2f2;
             }
             &:nth-child(2),
             &:nth-child(5){
                background:#e0e0e0;
             }
             &:nth-child(3),
             &:nth-child(6),
             &:nth-child(9){
                background:#d3d3d3;
             }
             &:nth-child(4),
             &:nth-child(7),
             &:nth-child(10){
                background:#c1c1c1;
             }
             &:nth-child(8),
             &:nth-child(11),
             &:nth-child(13){
                 background:#b8b8b8;
             }
             &:nth-child(14){
                background:#a9a9a9;
             }
             &:nth-child(12){
                background:#9a9a9a;
             }
        }
     }
`



const Component: React.FC = observer(() => {
    const { currentRecord, addRecord, output, setOutput } = useStores().RecordsStore

    const _setOutput = (oldOutput: string) => {
        let newOutput: string;
        if (output.length >= 16) {
            newOutput = oldOutput.slice(0, 16)
        } else {
            newOutput = oldOutput
        }
        setOutput(newOutput);
    }
    const generateOutput = (text: string, output: string) => {

        switch (text) {
            case '.':
                if (output.indexOf('.') > 0) {
                    return output
                } else {
                    return output + text
                }
            case 'DELETE':
                if (output.length <= 1) {
                    return '0'
                } else {
                    return output.slice(0, -1)
                }
            case 'CLEAR':
                return '0'
            case 'ok':
                summitRecord()
                return output
        }
        return dealNumberText(text, output)

    }
    const summitRecord = () => {
        if (currentRecord.tags.length <= 0) {
            window.alert('Please select at least one tag')
            return false
        } if (output === "0") {
            window.alert('Please enter the amount to be recorded')
            return false
        } else {
            const comfirmSummit = window.confirm('Add this record or not')
            if (comfirmSummit) {
                addRecord()
                window.alert('add Success')
            }
        }

    }
    const dealNumberText = (text: string, output: string) => {
        const number: number = parseInt(text, 10);
        if (number === 0) {
            if (output === '0') {
                return text
            } else {
                return output + text

            }
        }
        else if (number <= 9 && number >= 1) {
            if (output === '0') {
                return text
            } else {
                return output + text
            }
        }
        return '0'
    }

    const changeOutput = (e: React.MouseEvent) => {
        const text: string = (e.target as HTMLButtonElement).innerText
        _setOutput(generateOutput(text, output))
    }
    return (
        <NumberPadSection>
            <div className="input">{output}</div>
            <div className='pad clearfix' onClick={changeOutput} >
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>DELETE</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>CLEAR</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className='summit'>ok</button>
                <button className="zero">0</button>
                <button>.</button>

            </div>
        </NumberPadSection>
    )
})

export default Component;
