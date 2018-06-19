$(document).ready(function () {

    // Make our variables global to the runtime of our application
    var firstValue = 0;
    var secondValue = 0;
    var thirdValue = 0;
    var fourthValue = 0;
    var targetValue = 0;
    var wins = 0;
    var losses = 0;
    var userScore = 0;

    initiateGame();

    //function to chose a value if a crystal is clicked and perform calculations
    $('body').on('click', 'img', function () {

        if ($(this).data("myvalue") == 1) {
            userScore = userScore + firstValue
        }

        else if ($(this).data("myvalue") == 2) {
            userScore = userScore + secondValue
        }

        else if ($(this).data("myvalue") == 3) {
            userScore = userScore + thirdValue
        }

        else {
            userScore = userScore + fourthValue
        }
        //Jquery to update users total
        $("#running-total").text(userScore);

        // Logic to tell if user has achieved a win or loss condition.
        if (userScore == targetValue) {
            $("#result").text("Perfectly balanced, as all things should be.");
            wins++;
            $("#wins").text("Wins: " + wins);
            initiateGame()
        }
        else if (userScore > targetValue) {
            $("#result").html("In time, you will know what it's like to lose. To feel so desperately that you're right. Yet to fail all the same. Dread it. Run from it. Destiny still arrives.")
            losses++;
            $("#losses").text("Losses: " + losses);
            initiateGame()
        }



        // alert($(this).data("myvalue") + ' ' + firstValue + ' ' + secondValue + ' ' + thirdValue + ' ' + fourthValue + ' ' + targetValue+ ' ' + userScore);

    })

    //function that initiates new game and resets crystal values, target and user total values and html. 
    function initiateGame() {
        firstValue = Math.floor(Math.random() * 11) + 1;
        secondValue = Math.floor(Math.random() * 11) + 1;
        thirdValue = Math.floor(Math.random() * 11) + 1;
        fourthValue = Math.floor(Math.random() * 11) + 1;

        targetValue = Math.floor(Math.random() * 108) + 12;
        userScore = 0;

        $("#target").text("Target:" + " " + targetValue);

        $("#running-total").empty();

    }





});