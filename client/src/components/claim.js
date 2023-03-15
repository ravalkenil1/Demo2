import { ethers } from "ethers";
import { useState } from "react";
const Claim = ({ state }) => {
  const [id, setid] = useState("");
  const claimtoken = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const {ethereum}=window;
    if(ethereum){
        const account= await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20',
              options: {
                address: '0xaB7E053453828ccdD8b0A35c3A9583A392766617',
                symbol: 'Matic',
                decimals:2,
                image: 'https://imageshack.com/i/potFO2yNj',
              },
            },
          })
          // const account1= await ethereum.request({method:"eth_requestAccounts"})
    }
    
    // const amount={value:ethers.utils.("20")};
    const Claimtoken1 = await contract.claim(id);
    const data = await Claimtoken1.wait();
    console.log(data);
    // console.log("==============>", data.message);
  };

  return (
    <>
      <form onSubmit={claimtoken} border="2">
        <input
          type="number"
          id="number"
          placeholder="Enter token id"
          value={id}
          onChange={(e) => setid(e.target.value)}
        ></input>
        <button type="submit">Claim</button>
      </form>
    </>
  );
};
export default Claim;
