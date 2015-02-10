var expect = chai.expect;
	
describe('max', function() {
	it('should not allow non-numeric input', function() {
		// expect is a function
		// passing it an anonymous function for ERRORS
		expect(function() { max('a', 1) } ).to.throw('The first argument must be a number.');
		expect(function() { max(12, 'b') }).to.throw('The second argument must be a number.');
		expect(function() { max(3) }).to.throw('The second argument must be a number.');
	});
	it('should return the max', function() {
		// expect is a function
		// passing it a real function for non-error outcomes
		expect(max(1, 3)).to.equal(3);			// expect(max(3).to.equal.(3))
		expect(max(6, 4)).to.equal(6);
		expect(max(0.1, 0.2 )).to.equal(0.2);
		expect(max(-1, -2)).to.equal(-1);
	});
});

describe('maxOfThree', function () {
	it('should not allow non-numeric input', function() {
		// expect is a function
		// passing it an anonymous function for ERRORS
		expect(function() { maxOfThree('a', 1, 2); } ).to.throw('The first argument must be a number.');
		expect(function() { maxOfThree(12, 'b', 2); }).to.throw('The second argument must be a number.');
		expect(function() { maxOfThree(3, 5, 'c'); }).to.throw('The third argument must be a number.');
		expect(function() { maxOfThree(3, 5); }).to.throw('The third argument must be a number.');
	});
	it('should return the max', function() {
		// expect is a function
		// passing it a real function for non-error outcomes
		expect(maxOfThree(1, 2, 3)).to.equal(3);			// expect(maxOfThree(3).to.equal.(3))
		expect(maxOfThree(-1, 6, 4)).to.equal(6);
		expect(maxOfThree(0.1, 0.2, 0)).to.equal(0.2);
		expect(maxOfThree(-1, -2, -3)).to.equal(-1);
	});
});

describe('isVowel', function(){
	it('should accept only alphabetical input', function() {
		expect(function(){
			isVowel('5');
		}).to.throw('Argument to isVowel must be an alphabetical character');
	});

	it('should only consist of 1 character', function(){
		expect(function() { isVowel('abcdefg'); }).to.throw('Argument must only be 1 character');
	});

	// it('should only have 1 argument', function(){

	// })

	it('should return true if given a vowel', function(){
		expect(isVowel('a')).to.equal(true);
		expect(isVowel('z')).to.equal(false);
		expect(isVowel('e')).to.equal(true);
		expect(isVowel('i')).to.equal(true);
		expect(isVowel('o')).to.equal(true);
		expect(isVowel('u')).to.equal(true);
	})



});

