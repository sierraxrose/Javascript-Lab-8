$(document).ready(function () {

    // Object containing the validation rules
    let myRules =
        {
            firstName: {
                required: true,
                digits: false,
            },
            grade: {
                min: 5,
                max: 8,
                required: true,
                digits: true,
            }
        };

    // Object containing the error messages
    let myMessages =
        {
            firstName: {
                required: "Please insert a name",
            },
            grade: {
                min: "Too low, sorry!",
                max: "Too high, sorry!",
                required: "Please insert grade level",
            }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages,
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.

        let firstName = $("#firstName").val();

        let grade = parseInt($("#grade").val());

        $("p").text(`You have registered ${firstName} for grade ${grade} camp!`);

    }

})