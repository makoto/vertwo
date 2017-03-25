pragma solidity ^0.4.2;

contract Market {
	event QuoteRequestedEvent(address addr, string name, uint cover);
	event QuoteRespondedEvent(address addr, string name, uint premium);
	function request(string name, uint cover){
		QuoteRequestedEvent(msg.sender, name, cover);
	}

	function response(string name, uint premium){
		QuoteRespondedEvent(msg.sender, name, premium);
	}
}
