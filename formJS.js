$(document).ready(function() {

    function addEvent(to, type, fn) {
        if (document.addEventListener) {
            to.addEventListener(type, fn, false);
        } else if (document.attachEvent) {
            to.attachEvent('on' + type, fn);
        } else {
            to['on' + type] = fn;
        }
    };

    // Declares a Literal Object
    var Form = {
        // adds string property of 'valid' to be used for css feedback
        validClass: 'valid',

        // define sub-objects and their properties
        fname: {
            minLength: 1,
            maxLength: 15,
            fieldName: 'First Name'
        },

        lname: {
            minLength: 1,
            maxLength: 25,
            fieldName: 'Last Name'
        },

        // define validateLength method.
        // WHY IS THIS A METHOD AND NOT A SUB-OBJECT?
        // formEl is the DOM element to validate
        // type is one of the sub-objects above
        validateLength: function (formEl, type) {
            // Check the form element is between the types specified lengths
            if (formEl.value.length > type.maxLength || formEl.value.length < type.minLength) {
                // Remove valid class (if it exists)
                formEl.className = formEl.className.replace(' ' + Form.validClass, ' ');
                //return false so the form is not submitted
                return false;
            } else {
                // If the amounts are within the specified lengths then add the valide class
                // DON'T REALLY UNDERSTAND THIS. IT LOOKS LIKE IT'S CHECKING IF IT ALREADY EXISTS AND IF IT DOESN' IT'S ADDING IT
                if (formEl.className.indexOf(' ' + Form.validClass) == -1)
                    formEl.className += ' ' + Form.validClass;
                return true;
            }
        },

        // validateEmail function accepts a form element as the argument
        validateEmail: function (formEl) {
            // email type regular expression
            var regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
            // testing the form elements value against the regular expression
            // I ASSUME THE VARIABLE HOLDS A TRUE OR FLASE
            var emailTest = regEx.test(formEl.value);
            // IF EMAILTEST SHOULD ONLY TRIGGER IF TRUE
            // Same function as above but written the other way around
            if (emailTest) {
                if (formEl.className.indexOf(' ' + Form.validClass) == -1)
                    formEl.className += ' ' + Form.validClass;
                return true;
            } else {
                formEl.className = formEl.className.replace(' ' + Form.validClass, ' ');
                return false;
            }
        },

        // Gets the form ID
        getSubmit: function (formID) {
            // Gets the forms inputs for that specific form
            var inputs = document.getElementById(formID).getElementsByTagName('input');
            // Loops through all inputs until it finds the submit
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].type == 'submit') {
                    // returns the submit button
                    return inputs[i];
                }
            }
            return false;
        }
    };


    // When the window is loaded the script runs
    addEvent(window, 'load', function () {
        // Grab form ID
        var ourForm = document.getElementById('ourForm');
        // Form is our Literal object
        // getSubmit is a method inside that object which returns the submit button
        var submit_button = Form.getSubmit('ourForm');
        // The submit buttons disabled attribute is set to disabled
        submit_button.disabled = 'disabled';

        function checkForm() {
            // Stores all the form inputs as an array
            var inputs = ourForm.getElementsByTagName('input');
            // Runs the methods to check the inputs against the sub-object properties
            // we returned true or false in our methods, so if it returns true, we pass that if statement and continue onto the next, but if it returns false, we exit the if statements.
            if (Form.validateLength(inputs[0], Form.fname)) {
                if (Form.validateLength(inputs[1], Form.lname)) {
                    if (Form.validateEmail(inputs[2])) {
                        // Re-enables the submit button
                        submit_button.disabled = false;
                        return true;
                    }
                }
            }

            submit_button.disabled = 'disabled';
            return false;
        };

        checkForm();
        addEvent(ourForm, 'keyup', checkForm);
        addEvent(ourForm, 'submit', checkForm);
    });
});
