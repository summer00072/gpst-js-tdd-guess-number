const guessNum = require('../main/main');

describe('guessNum', () => {
	var sysIn;

	beforeEach(() => {
		sysIn = "1234";
	});
	
	it('the same values and the same locations', ()=> {
		let result = guessNum(sysIn , userIn = "1234");
		expect(result).toEqual("4A0B");
	});
	it('the same values and the totally different locations', ()=> {
		let result = guessNum(sysIn , userIn = "4321");
		expect(result).toEqual("0A4B");
	});
	it('the same values and part of the same locations', ()=> {
		let result = guessNum(sysIn , userIn = "1243");
		expect(result).toEqual("2A2B");
	});
	it('totally different values ', ()=> {
		let result = guessNum(sysIn , userIn = "5678");
		expect(result).toEqual("0A0B");
	});
	it('some of the same values and some of the same locations1', ()=> {
		let result = guessNum(sysIn , userIn = "1526");
		expect(result).toEqual("1A1B");
	});
	it('some of the same values and some of the same locations2', ()=> {
		let result = guessNum(sysIn , userIn = "1235");
		expect(result).toEqual("3A0B");
	});			
});