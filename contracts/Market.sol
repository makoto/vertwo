pragma solidity ^0.4.2;

contract Market {
	mapping (address => uint) balances;

	struct QuoteRequest {
		address addr;
		string name;
		uint cover;
	}

	struct QuoteResponse {
		address addr;
		string name;
		uint premium;
	}

	event QuoteRequestedEvent(address addr, string name, uint cover);
	event QuoteRespondedEvent(address addr, string name, uint premium);

	function request(address addr, string name, uint cover){
		QuoteRequestedEvent(addr, name, cover);
	}

	function response(address addr, string name, uint premium){
		QuoteRespondedEvent(addr, name, premium);
	}
}
