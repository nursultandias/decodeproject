import React from 'react'
import {Card} from 'antd'

function Blog({blog}) {
  const {title,desc,thumbnail} = blog
    return(
    <Card
        title={title}
        extra={<a href="#">More</a>}
        style={{
          width: 300,
        }}
      >
        <p>{desc}</p>
        <img src={thumbnail} width={100} height={100}/>
    </Card>
      
    )
}

export default Blog


