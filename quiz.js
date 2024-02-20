$(document).ready(function () {
    // When the quiz form is submitted
    $("#quiz-form").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Calculate total correct answers
        let totalCorrect = 0;
        $(".question").each(function () {
            const questionId = $(this).attr("id");
            const correctAnswer = $(`#${questionId} input[type=radio]:checked`).val();
            if (correctAnswer === "a") {
                totalCorrect++;
            }
        });

        // Calculate rating score
        let rating = "";
        if (totalCorrect < 3) {
            rating = "Poor";
        } else if (totalCorrect >= 3 && totalCorrect < 7) {
            rating = "Fair";
        } else if (totalCorrect >= 7 && totalCorrect < 10) {
            rating = "Good";
        } else if (totalCorrect >= 10 && totalCorrect < 13) {
            rating = "Very Good";
        } else {
            rating = "Excellent";
        }

        // Display the quiz result
        $("#result").html(`<h2>Your Score: ${totalCorrect}/15 (${rating})</h2>`);
    });

    // Show "Back to Top" button when user scrolls down
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#backToTop").fadeIn();
        } else {
            $("#backToTop").fadeOut();
        }
    });

    // Scroll to top when "Back to Top" button is clicked
    $("#backToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});
