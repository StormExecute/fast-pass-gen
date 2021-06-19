type ownAlphabet = ("eng" | "engLower" | "engUpper" | "rus" | "rusLower" | "rusUpper" | "num" | "extra")[] | "eng" | "engLower" | "engUpper" | "rus" | "rusLower" | "rusUpper" | "num" | "extra";

declare namespace passGen {}

declare const passGen: {
	
	(length?: number, ownAlphabet?: ownAlphabet): string;
	
}

export = passGen;