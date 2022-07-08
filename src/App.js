import './App.css';
import Blogs from './containers/blog';
// import Product from './containers/product';
import 'antd/dist/antd.css';
import React from 'react'
import Product from './containers/product'
import Verstka from './Verstka'
import CheckboxItem from './components/checkboxItem';
import {useState} from 'react'
import Todo from './containers/to do'

function App() {
//   const name = 'Decode'
//   let age = 30
//   let isShow = false

//   if(age > 25) {
//     isShow = true
//   }

//   const style = {color: 'red', fontSize: '30px'}

//   const clickBtn = () => {
//     console.log('click')
//   }

//   const fruits = [
//     {
//       name: 'apple',
//       price: 600
//     },
//     {
//       name: 'orange',
//       price: 900
//     },
//     {
//       name: 'pineapple',
//       price: 1200
//     }
//   ]

//   const fruitItems = fruits.map((item, index) => <div key={index}>
//     <p>{item.name}</p>
//     <p>{item.price}</p>
//   </div>)

//   return (
//     <>
//      {/* {isShow ? age : ''}
//      <p style={style}>{name}</p>
//      <button onClick={clickBtn}>Click me</button>
//      {fruitItems} */}
    
//      <Product />
//      <Verstka />
   
//     </>
//   );
// }

  const languages = ['html', 'css', 'js']
  const [chosenLanguages, setChosenLanguages] = useState([])

  const handleChange = (e, item) => {
    if(e.target.checked) {
      setChosenLanguages([...chosenLanguages, item])
    } else {
      setChosenLanguages(chosenLanguages.filter(l => l !== item ))
    }
  }

  const languageItems = languages.map((item, i) => <CheckboxItem key={i} handleChange={handleChange} item={item}/>)

  const chosenLanguageItems = chosenLanguages.map((item, i) => <p key={i}>{item}</p>)

  return (
    <>
      {/* <div style={{width: '70%', margin: '100px auto'}}>
        {languageItems} 
        {chosenLanguageItems}
      </div> */}
      <Todo/>
      <Blogs/>
    
    
    </>
  );
  }

export default App;
 