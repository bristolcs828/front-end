import React, { useState } from 'react';
import styled from 'styled-components'
import useStores from '../../stores'
import { observer } from 'mobx-react'
const CategorySection = styled.section`
  >ul{
      display:flex;
      justify-content:center;
      align-items:center;
      
      
      >li{
          width:50%;
          font-size:24px;
          text-align:center;
          position:relative;
          padding: 16px 0;
          &.selected::after{
              content:'';
              height:3px;
              background:#333;
              position:absolute;
              width:100%;
              bottom:0;
              left:0;
          }
      }
  }
`


const Component: React.FC = observer(() => {
    const { setCategory, currentRecord } = useStores().RecordsStore
    const category = currentRecord.category
    const categoryMay = { '-': '支出', '+': '收入' }
    type CategoryType = keyof typeof categoryMay
    const [categoryList] = useState<CategoryType[]>(['+', '-'])

    return (
        <CategorySection>
            <ul>
                {categoryList.map(item =>
                    <li onClick={() => {
                        setCategory(item)
                    }}
                        className={category === item ? 'selected' : ''}
                        key={item}
                    >
                        {categoryMay[item]}
                    </li>
                )}
            </ul>
        </CategorySection>
    )
})
export default Component;