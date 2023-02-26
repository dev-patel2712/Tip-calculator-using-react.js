import React from 'react';

import { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Heading from '../components/Heading/Heading';
import Input from '../components/Input/Input';
import Output1 from '../components/Output1/Output1';
import Output2 from '../components/Output2/Output2';
import style from './pages.module.css';
const Pages = ()=>{
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [list, setList] = useState([]);
    const [option, setOption]= useState();
    const [sum, setSum]=useState(0)
   
    const onchange= (event)=>{
        const selected = (event.target.value)
        setOption(selected)
    }
    // console.log(option)
   
 const handleText1 =(event)=>{
        const value = event.target.value;
        // console.log("Changing")
        setText1(value)
       
 }
 const handleText2 =(event)=>{
    const value2 = event.target.value;
    // console.log("Changing")
    setText2(value2)
    
}


const btnClickHandler = ()=>{
    const items = [...list];
    if(option==='Excellent'){
    if(text1.trim() && text2.trim()){
        items.push( text2 + " offers a tip of rs "  + (text1)/100*20 );
        setList(items)
      setSum(sum + ((text1)/100*20))
         console.log(items)
    }

    }
else if(option==='Moderate'){
    if(text1.trim() && text2.trim()){
        items.push( text2 + " offers a tip of rs "  + (text1)/100 *10);
        setList(items) 
            setSum(sum + ((text1)/100*10))

    }

}
else if(option==='Bad'){
    if(text1.trim() && text2.trim()){
        items.push( text2 + " offers a tip of rs "  + (text1)/100*5 );
        setList(items) 
            setSum(sum + ((text1)/100*5))

    }

}

    setText1('')
    setText2('') 
     
};

 

const clickHandle = () => {
       alert("You get your total customers")
       
     
    
} 


 

    return (
        <div className={style.page}>
                <Heading/>

                <Input value={text1}
                change={handleText1}
                change2= {handleText2}
                value2={text2}
                click={btnClickHandler}
                select= {onchange}
                vselect={option}/>

                <Output1 list = {list}/>

                <Output2 length={list.length}
                 clickHandle = {clickHandle}
                  sum ={sum}/>
                  
                <Footer/>
                
        </div>
    )



}
export default Pages;