//SDPX-License-Identifier: MIT
pragma solidity >= 0.7.3 < 0.9.0;

contract HelloWorld{
    string public str="Hello World";
    uint public age; //state variable;
     
    constructor(){
        age = 100;
    }

    // 1st function
    function increment() public{
        age = age+1;
    }

    // 2nd function
    function setter(uint newage) public{
        age = newage;
    }
}
