btn = document.querySelector(".btn")
count = 0

function click() {

    btn.addEventListener("click", function() {
        count += 1
        btn.value = count

        var randomColor = Math.floor(Math.random()*16777215).toString(16);

        btn.style.backgroundColor = "#" + randomColor
    })
}

click()