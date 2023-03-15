import { useState } from "react";
const Get =({state})=>{
    const [token,tokenbalance] =useState('')
    const handleClick = async() =>{
        // "inputRef.current.value" is input value
            const {contract}=state;
            // This is contract address 0xacFF593fd71cb000c0b428f4AbCA16C3ae5Aa985
            // 0xAB2FFD8F6Fb778b9779E7fAA76477b9d85e58305
            const contract1= await contract.ViewToken()
            const number11=Number(contract1._hex)
            console.log(number11);
            tokenbalance(number11);
            
      };
    //   const handleClick1 = async() =>{
    //     // "inputRef.current.value" is input value
    //         const {contract}=state;
    //         // This is contract address 0xacFF593fd71cb000c0b428f4AbCA16C3ae5Aa985
    //         const contract1= await contract.ViewToken()
    //         const number11=Number(contract1._hex)
    //         console.log(number11);
    //         tokenbalance(number11);
    //   };
    return (
    <>
    <table border="2" height="150" width="245">
    <tr>
        <th><h3>This contract Token Balance : {token}</h3></th>
    </tr>   
    <tr>    
    <th><button onClick={handleClick}>GetBalance</button></th>
    </tr>
       {/* <h2>This Token Balance : {token}</h2><button onClick={handleClick}>GetBalance</button>
    </div> */}
    </table>
   
    </>
    );
}
export default Get;

