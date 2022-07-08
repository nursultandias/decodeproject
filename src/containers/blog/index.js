import {useState, useEffect} from 'react'
import Blog from '../../components/blog'
import React from 'react'
import { Button, Modal, Input } from 'antd'
import axios from 'axios'

function Blogs() {
    const [blogs, setBlogs] = useState([])

    const blogItems = blogs.map((item, i) => <Blog  index= {i} blog={item} key={i}/>)
    // const deleteBlock = (i) => {
    //     setBlogs([...blogs].filter((item, i) => index != i))
    // }

    useEffect (()=> {
        axios.get('https://api.artic.edu/api/v1/artworks').then(res =>
       setBlogs(res.data.data.map(item => {
        return {
            title: item.title,
            desc: item.credit_line,
            thumbnail: item.thumbnail.lqip
        }
       }))
       ).catch(err => console.log(err))
    },[])

    

    const[isModalVisible,setisModalVisible] = useState(false)
    const [blog,setBlog] = useState({title:'',desc:''})

    const removeValues = () => {
        setBlog({})
    }

    const handleOk =() => {
        setBlogs([...blogs, blog])
        removeValues()
        handleCancel()

    }

    const handleCancel = () => {
        setisModalVisible(false)
    }

    const openModal =() => {
        setisModalVisible(true)
    }


    
    
    const addnewBlog= (e) => {
        setBlog({...blog, [e.target.name]:[e.target.value]})
        
    }

    // const clearValue = () => {
    //     setBlogg({})
    // }

   


    return(
        <>
            <Button onClick={openModal}>
                Add block
            </Button>
            <div>
            {blogItems}
            </div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input value={blog.title} placeholder='Title' name='title' onChange={addnewBlog}/>
            <Input value={blog.desc} placeholder='Description' name='desc' onChange={addnewBlog}/>
            </Modal>
            {/* <Button onClick={deleteBlock}>
                Delete block
            </Button> */}
        </>
    )
}

export default Blogs