let questions = document.querySelectorAll(".question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        let paragraph = question.nextElementSibling;
        let plus = question.querySelector("span");

        if (paragraph.style.display === "block") {
            paragraph.style.display = "none";
            plus.innerHTML = "+";
        }

        else {
            paragraph.style.display = "block";
            plus.innerHTML = "×";
        }

    });

});

