import abi from "./contracts/import_token.json"
import Mint from "./components/Mint";
import Get from "./components/getToken";
import "./App.css";
import { useState ,useEffect } from "react";


const { ethers } = require("ethers");
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useEffect(()=>{
    const connectWallet = async () => {
      const contractaddres="0xaB7E053453828ccdD8b0A35c3A9583A392766617";
      const contrcatAbi=abi.abi;
      try{
        const {ethereum}=window;
        if(ethereum){
          const account= await ethereum.request({method:"eth_requestAccounts"})
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract= new ethers.Contract(contractaddres,contrcatAbi,signer);
        setState({provider,signer,contract})
      }
      catch(error){
        console.log(error);
      }
    }
    connectWallet();
  },[])
  // console.log(state);
  return <div className="App">
    <h1>Admin</h1>
    <table border="10" bgcolor="#CCCCFF" align="center">
 
      <tr>
        <td><Mint state={state}></Mint></td>
      </tr>
      <tr>
        <td><Get state={state}></Get></td>
      </tr>
      
    </table>
    
    
  </div>
}

export default App;

//0xEBEB3B089C842A2289188e6bC18E73640a7F78e8