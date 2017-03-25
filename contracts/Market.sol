pragma solidity ^0.4.2;

contract Market {
	event QuoteRequestedEvent(uint cover, string name, address addr);
	event QuoteRespondedEvent(uint premium, string name, address addr);
	function request(string name, uint cover){
		QuoteRequestedEvent(cover, name, msg.sender);
	}

	function response(string name, uint premium){
		QuoteRespondedEvent(premium, name, msg.sender);
	}
}
