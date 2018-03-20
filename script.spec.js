
var app;
var result;
var firstArray = [0, 23, 'test'];
var secondArray = ['foo', 'b4r'];

describe('given "app"', function(){
	beforeEach(function(){
		app = new App();
	});
	
	
	describe('when initializeCalculations function is called', function(){
	  describe('and when areYouReady is true', function() {
	    beforeEach(function() {
	      spyOn(app, 'removeNumberValues');
	      spyOn(app, 'mergeArrays');
  	    app.initializeCalculations();
  	  });
  	  
  	  it('then removeNumberValues shouldbe called', function() {
  	    expect(app.removeNumberValues).toHaveBeenCalled();
  	  });
  	  
  	  it('then mergeArrays shouldbe called', function() {
  	    expect(app.mergeArrays).toHaveBeenCalled();
  	  });
	  });
	  
	  describe('and when areYouReady is false', function() {
	    beforeEach(function() {
	      app.areYouReady = false;
  	    app.initializeCalculations();
  	  });
  	  
  	  it('then alertMessage should be "You are not ready. Get ready!"', function() {
  	    expect(app.alertMessage).toEqual('You are not ready. Get ready!');
  	  });
	  });

	});
	
  describe('when mergeArrays function is called', function(){
	  beforeEach(function() {
	    result = app.mergeArrays(firstArray, secondArray);
	  });
	  
	  it('then it should return [0, 23, test, foo, b4r] array', function() {
	    expect(app.mergeArrays(firstArray, secondArray)).toEqual([0, 23, 'test', 'foo', 'b4r']);
	  });
	});
	
	
	describe('when removeNumberValues function is called', function(){
	  beforeEach(function() {
	    result = app.removeNumberValues(firstArray);
	  });  
	  
	  it('then it should return ["test"] array', function() {
	    expect(result).toEqual(['test']);
	  })
	});
});