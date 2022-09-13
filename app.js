btn = document.querySelector(".btn")
count = 0

function click() {

    btn.addEventListener("click", function() {
        count += 1
        btn.value = count

        if (count % 3 == 0) {
            btn.style.backgroundColor = "green"
        } else if (count % 7 == 0) {
            btn.style.backgroundColor = "blue"
        } else if (count % 5 == 0) {
            btn.style.backgroundColor = "grey"
        } else if (count % 11 == 0) {
            btn.style.backgroundColor = "red"
        } else {
            btn.style.backgroundColor = "white"
        }
    })
}

click()