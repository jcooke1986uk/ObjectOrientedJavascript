(function() {
	alert('test');

    // Constructors and Literals

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




	//To Instantiate or not to Instantiate

        // a Constructor function is instantiated and then a change is made to that instance, it won't affect any other instances of that object

	    var myObjectLiteral = {
            myProperty : 'this is a property'
	    }

        // alert current myProperty
	    alert(myObjectLiteral.myProperty); // This will alert 'this is a property'

        // change myProperty
	    myObjectLiteral.myProperty = 'this is a new property';

        // alert current myProperty
	    alert(myObjectLiteral.myProperty); // this will alert 'this is a new property', as expected



        // this is one other way of creating a Constructor function
	    var myObjectConstructor = function () {
            this.myProperty = 'this is a property'
	    }

        // instantiate our Constructor
	    var constructorOne = new myObjectConstructor();

        //change myProperty of the first instance
        constructorOne.myProperty = 'this is a new property'

        // instantiate a second instance of our Constructor
	    var constructorTwo = new myObjectConstructor();

        // alert current myProperty of constructorOne instance
	    alert(constructorOne.myProperty); // this will alert 'this is a new property'

        // alert current myProperty of constructorTwo instance
	    alert(constructorTwo.myProperty); // this will alert 'this is a property'



    // This and That: Scope
})();
