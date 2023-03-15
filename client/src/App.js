import abi from "./contracts/Buy_token.json"
// import Mint from "./components/Mint";
// import Get from "./components/getToken";
import Buytoken from "./components/Buytoken";
import GetToken from "./components/Balance";
import Claim from "./components/claim";
import "./App.css";
import { useState ,useEffect } from "react";
// import { Web3Provider } from "./web3-provider";

const { ethers } = require("ethers");
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useEffect(()=>{
    const connectWallet = async () => {
      const contractaddres="0x239AABd2A137e929E70aec1e256ad0C9D9664FeD";
      const contrcatAbi=abi.abi;
      try{
        const {ethereum}=window;
        if(ethereum){
          const account= await ethereum.request({method:"eth_requestAccounts"})
          // const account1= await ethereum.request({method:"eth_requestAccounts"})
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        console.log(provider);
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
  return (
  <div className="App"> 
  <h1>Buy Token</h1>
    <table border="10" align="center" >
    <table bgcolor="#B0E0E6">
      <tr>
      <td><GetToken state={state}></GetToken></td>
      </tr>
    </table>
    <br/>
    <table border="2" width="250" bgcolor="#F0F8FF">
      <tr>
      <td><Buytoken state={state}></Buytoken></td>
      </tr>
    </table>
    <br/>
    <table border="2" bgcolor="#AB784E">
      <tr>
      <td><Claim state={state}></Claim></td>
      </tr>
    </table>
      
    </table>
    
    
  </div>);
}

// 0x98d5C1f06DAaD6AeaA7D82A048CA2b5e0A4d87eA
// csdc

export default App;