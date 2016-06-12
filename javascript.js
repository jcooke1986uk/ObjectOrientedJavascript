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

        // scope chain, which means that a function inside another function can access a variable defined in its parent function.

	    var var1 = 'this is a global and is available to everyone';

	    function function1() {
	        var var2 = 'this is only available inside function1 and function2';

	        function function2() {
                var var3 = 'this is only available inside function2'
	        }
	    }

        // in a browser, 'this' references the window object
        // If we're inside an object, 'this' will refer to the object itself
        // if you're inside a function, this will still refer to the window object
        // if you're inside a method that is within an object, 'this' will refer to the object

        // As a side note, it's also worth adding that when using functions like setInterval, setTimeout and eval, when you execute a function or method via one of these, 'this' refers to the window object as these are methods of window, so setInterval() and window.setInterval() are the same.

	    function addEvent(to, type, fn) {
	        // Check if addEventListener is supported
	        if (document.addEventListener) {
	            to.addEventListener(type, fn, false);
	        } else if (document.attachEvent) {
	            to.attachEvent('on' + type, fn);
	        } else {
	            to['on' + type] = fn;
	        }
	    };
        // to is the DOM object we are attaching the event to
        // type is the type of event
        // fn is the functio run when the event is triggered.




})();
