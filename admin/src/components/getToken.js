import { useState } from "react";
const Get =({state})=>{
    const [token,tokenbalance] =useState('')
    const handleClick = async() => {
        // "inputRef.current.value" is input value
            const {contract}=state;
            // This is contract address 0xacFF593fd71cb000c0b428f4AbCA16C3ae5Aa985
            const contract1= await contract.balanceOf("0xEBEB3B089C842A2289188e6bC18E73640a7F78e8")
            const number11=Number(contract1._hex)
            console.log(number11);
            tokenbalance(number11);
      };
    return (
    <>
    <div>
       <h2>This Token Balance : {token}</h2><button onClick={handleClick}>GetBalance</button>
    </div>
    </>
    );
}
export default Get;

