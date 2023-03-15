import { ethers } from "ethers";
import { useState } from "react";
const Buytoken=({state})=>{
    const [buytoken,setbuytoken]=useState('')
    const [id,setid]=useState('')
    const Buytoken =async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const Ether=buytoken/100;
        const number11=buytoken
        console.log("This is number",number11);
        const amount={value:ethers.utils.parseEther(`${Ether}`)};
        const amount1=Number(buytoken)
        const Buytoken_variable= await contract.buyTokens(amount1,amount)
        console.log(Buytoken_variable);
        const txRes = await Buytoken_variable.wait();
        const data = txRes.events[0].args.OrderID;
        const data1= Number(data._hex)
        console.log("this is value",(Number(Buytoken_variable.value._hex))/10000000000000000);
        console.log("this is value",(Number(Buytoken_variable.value._hex)));
        setid(data1);
        console.log(txRes.data.message);
        console.log("This is Balance:",data1);
    }
    return(
    <>
    <form onSubmit={Buytoken}>
        <input type="number" id="number" placeholder="Enter token value" value={buytoken} onChange={(e)=>setbuytoken(e.target.value)}></input>
        <h3>Your OrderID is:{id}</h3>
        <button type="submit">Transfer</button>
    </form>
    </>
    );
}
export default Buytoken;

// events[0].args.OrderID
// "0x00000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000063b7a7b1"