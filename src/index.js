const engLower = "abcdefghijklmnopqrstuvwxyz";
const engUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const rusLower = "йцукенгшщзфывапролджэхъячсмитьбюё";
const rusUpper = "ЙЦУКЕНГШЩЗФЫВАПРОЛДЖЭХЪЯЧСМИТЬБЮЁ";

const num = "0123456789";
const extra = "!@#$%^&*()_+|}{[]:;?><,.-=";

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gen = (length, ownAlphabet) => {
	
	length = length || rand(10, 20);
	
	let alphabet = "";
	
	if(Array.isArray(ownAlphabet) && ownAlphabet.length) {
		
		for(let i = 0; i < ownAlphabet.length; ++i) {
			
			if(ownAlphabet[i] == "eng" || ownAlphabet[i] == "engLower") {
				
				alphabet += engLower;
				
			} else if(ownAlphabet[i] == "engUpper") {
				
				alphabet += engUpper;
				
			} else if(ownAlphabet[i] == "rus" || ownAlphabet[i] == "rusLower") {
				
				alphabet += rusLower;
				
			} else if(ownAlphabet[i] == "rusUpper") {
				
				alphabet += rusUpper;
				
			} else if(ownAlphabet[i] == "num") {
				
				alphabet += num;
				
			} else if(ownAlphabet[i] == "extra") {
				
				alphabet += extra;
				
			}
			
		}
		
	} else if(ownAlphabet == "eng" || ownAlphabet == "engLower") {
				
		alphabet = engLower;
		
	} else if(ownAlphabet == "engUpper") {
		
		alphabet = engUpper;
		
	} else if(ownAlphabet == "rus" || ownAlphabet == "rusLower") {
		
		alphabet = rusLower;
		
	} else if(ownAlphabet == "rusUpper") {
		
		alphabet = rusUpper;
		
	} else if(ownAlphabet == "num") {
		
		alphabet = num;
		
	} else if(ownAlphabet == "extra") {
		
		alphabet = extra;
		
	} else {
		
		alphabet = engLower + engUpper + rusLower + rusUpper + num + extra;
		
	}
	
	let result = "";
	const alphabetLMinusOne = alphabet.length - 1;
	
	for(let i = 0; i < length; ++i) {
		
		result += alphabet[rand(0, alphabetLMinusOne)];
		
	}
	
	return result;
	
};

module.exports = gen;