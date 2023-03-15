//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./import_token.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Buy_token {
    using SafeMath for uint;
    import_token Token;
    address _ad=address(this);
    address payable[] public user;
    struct Order{
        address Buyer;
        uint Amount;
        bool is_Claimed;
        uint claimTime; 
    }

    mapping(uint=>Order) public orderBook;
    mapping(address=>Order[]) userData;
    uint tokenPrice = 1;
    uint orderId = 1;

    event OrderPlaced(uint OrderID, uint BuyTime);
    event OrderClaimed(uint OrderID, uint ClaimTime);
    constructor(address _tokenAddress) {
        Token = import_token(_tokenAddress);
    }

    function buyTokens(uint _amount) public payable {
        // require((msg.value/(1 ether))*100==_amount.mul(tokenPrice),"Insufficiant Paid amount");
        require(Token.balanceOf(_ad)>=_amount,"Insufficiant Tokens ");
        orderBook[orderId] = Order(msg.sender,_amount,false,block.timestamp+60);
        userData[msg.sender].push(Order(msg.sender,_amount,false,block.timestamp+60));
        emit OrderPlaced(orderId,block.timestamp);
        orderId++;
    }

    function claim(uint _orderId) public {
        require(isClaimer(msg.sender, _orderId),"You are not the Buyer of this order");
        require(isClaimed(_orderId),"Tokens are already Claimed");
        require(isClaimable(_orderId),"You can't Claim Tokens Now");
        Token.transfer(orderBook[_orderId].Buyer,orderBook[_orderId].Amount);
        Order storage user1 = orderBook[_orderId];
        user1.is_Claimed = true;
        emit OrderClaimed(_orderId,block.timestamp);
    }

    function isClaimable(uint _orderId) public view returns(bool){
        if(orderBook[_orderId].claimTime <block.timestamp){
            return true;
        }
        return false;
    }

    function isClaimed(uint _orderId) public view returns(bool) {
        if(orderBook[_orderId].is_Claimed==false){
            return true;
        }
        return false;
    }

    function isClaimer(address _user, uint _orderId) public view returns(bool) {
        if(orderBook[_orderId].Buyer==_user){
            return true;
        }
        return false;
    } 
    function getUserData(address _user) public view returns(Order[] memory){
        return userData[_user];
    }

    receive() external payable
    {   
        require(msg.value>=1 ether);
        user.push(payable(msg.sender));
    }

    function value() payable public  returns(uint){
        return msg.value/(1 ether);
    }

    function ViewToken() public view returns(uint){
        return Token.balanceOf(_ad);
    }
}