const passGen = require("../src");
const { passTest, throwTest } = require("./logs");

const engLower = "abcdefghijklmnopqrstuvwxyz".split("");
const engUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const rusLower = "йцукенгшщзфывапролджэхъячсмитьбюё".split("");
const rusUpper = "ЙЦУКЕНГШЩЗФЫВАПРОЛДЖЭХЪЯЧСМИТЬБЮЁ".split("");

const num = "0123456789".split("");
const extra = "!@#$%^&*()_+|}{[]:;?><,.-=".split("");

const tests = [

	[10, ["num"]],
	[20],
	[],
	[30, "rusLower"],

];

for(let i = 0; i < tests.length; ++i) {
	
	const test = tests[i];
	
	const result = passGen.apply(null, test);
	
	if(typeof result != "string") {
		
		throwTest(i, "not string");
		continue;
		
	}
	
	if(test[0] != undefined && test[0] != result.length) {
		
		throwTest(i, "length");
		continue;
		
	}
	
	if(Array.isArray(test[1]) && test[1].length == 1) test[1] = test[1][0];
	
	if(typeof test[1] == "string") {
			
		const alphabet = test[1];
			
		let have = false;
		
		for(let j = 0; j < eval(alphabet).length; ++j) {
			
			if(result.includes(eval(alphabet)[j])) {
				
				have = true;
				break;
				
			}
			
		}
		
		if(!have) {
			
			throwTest(i, alphabet);
			
			continue;
			
		}
		
	}
	
	passTest(i);
	
}