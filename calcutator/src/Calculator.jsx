import {useState} from 'react';

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick=(value)=>{
        setInput(input+value);
    };
    const clearInput=()=>{ setInput("");};

    const calculateResult=()=>{
        try {
            setInput(eval(input));
        }
        catch (error) {
            setInput("Error");
        }
    };

    return (
        <div className='calculator'>
            <input type="text" value={input} placeholder="0" readOnly/>
            <div className="buttons">
                {[7,8,9,"/",4,5,6,"*",1,2,3,"-",0,"C","=","+"].map((item)=>(<button key={item} onClick={()=>item==="C"?clearInput():item==="="?calculateResult():handleClick(item)}>{item}</button>))}
                </div>
                </div>);
};


export default Calculator;