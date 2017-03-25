pragma solidity ^0.4.2;

contract Market {
	event QuoteRequestedEvent(address addr, string name, uint cover);
	event QuoteRespondedEvent(address addr, string name, uint premium);

	function request(address addr, string name, uint cover){
		QuoteRequestedEvent(addr, name, cover);
	}

	function response(address addr, string name, uint premium){
		QuoteRespondedEvent(addr, name, premium);
	}
}
