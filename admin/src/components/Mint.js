import { useState } from "react";
const Buy =({state})=>{
    const [text, setfirst] = useState('');
    const [number, setnumber] = useState('');
   
    const buycoin = async(event) =>{
        event.preventDefault();
        const {contract}=state;
        const transection= await contract.mint(text,number);
        await transection.wait();
        console.log("transection is done"); 
    }
    return (
    <>
    <form onSubmit={buycoin}>
        <input type="text" id="text" placeholder="Enter Contract address" value={text} onChange={(e)=>setfirst(e.target.value)}></input>
        <input type="number" id="number" placeholder="Enter token value" value={number} onChange={(e)=>setnumber(e.target.value)}></input>
        <button type="submit">Transfer</button>
    </form>
    </>
    );
}
export default Buy;