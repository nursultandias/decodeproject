import React from 'react'
import {Card} from 'antd'

function Product(props) {
  const {nM,wT,pE} = props
  
    return(
    <Card
        title='Product'
        extra={<a href="#">More</a>}
        style={{
          width: 300,
        }}
      >
        <p>{nM}</p>s
        <p>{wT}</p>
        <p>{pE}</p>
    </Card>
      
    )
}

export default Product