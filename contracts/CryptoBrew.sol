// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract CryptoBrew {
    struct Brew {
        string name;
        string message;
        string amount;
        uint timestamp;
        address from;
    }

    Brew[] brews;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function brewCoffee(string memory name, string memory message, string memory amount) public payable {
        require(msg.value > 0, "Please buy my a coffee greater than 0 ether.");
        owner.transfer(msg.value);
        brews.push(Brew(name, message, amount, block.timestamp, msg.sender));
    }

    function getBrews() public view returns(Brew[] memory) {
        return brews;
    }
}