(function() {
	alert('test');

	// Properties are variables created inside an object and methods are functions created inside an object.

	// Constructor function
	function myConstructorObject(){
		// iAm is the PROPERTY
		this.iAm = 'an object';
		// whatAmI is the METHOD
		this.whatAmI = function(){
			alert('1 I am ' + this.iAm);
		};
	};

	// To use a constructor function you need to instantiate (create a new instance of) the object
	var myNewObject = new myConstructorObject();
	myNewObject.whatAmI();



	// Literal notation
	var myLiteralObject = {
		iAm : 'an object',
	    whatAmI : function(){
	        alert('2 I am ' + this.iAm);
	    }
	};

	// To use a literally notated object, you simply reference its variable name
	myLiteralObject.whatAmI();



	// Constructor function with arguments
	function myConstructorObjectWithArgs(what){
		// iAm is the PROPERTY
		this.iAm = what;
		// whatAmI is the METHOD
		this.whatAmI = function(language){
			alert('3 I am ' + this.iAm + ' of the ' + language + ' language');
		};
	};

	// 'an object' is the 'what' and 'Javascript' is the 'language'
	var myNewObjectWithArgs = new myConstructorObjectWithArgs('an object');
	myNewObjectWithArgs.whatAmI('JavaScript');




	// To Instantiate or not to Instantiate

	
})();