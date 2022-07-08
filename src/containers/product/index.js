import {useState} from 'react'
import Blog from '../../components/blog'
import React from 'react'
import Product from '../../components/product'

function Products() {
    const [products, setBlogs] = useState([{name : 'banana', weight : 50, price: 120},
        {name : 'apple', weight : 50, price: 120},
        {name : 'pineapple', weight : 50, price: 120}]
    )

    const ProductItems = products.map((item, i) => <Product nM={item.name} wT ={item.weight} pE ={item.price} key={i}/>)

    return(
        <div>
        {ProductItems}
           
        </div>
    )
}

export default Products