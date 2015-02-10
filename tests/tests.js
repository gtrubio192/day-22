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