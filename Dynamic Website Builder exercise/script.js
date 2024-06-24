function createCard(index, title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr
    if (views >= 1000 && views < 1000000) {
        views = views / 1000 + "K"
    }
    else if (views > 1000000) {
        views = views / 1000000 + "M"
    }

    console.log(views)

    let html = `<div class="card">
            <div class="index">${index}</div>
            <div class="thumbnail">
                <div class="image">
                    <img src=${thumbnail} alt="">
                </div>
                <div class="duration">${duration}</div>
            </div>
            <div class="content">
                <div class="video-heading">${title}</div>
                <div class="details">${cName} . ${views} views . ${monthsOld} months old</div>
            </div>
        </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


let count = 0
let btn = document.getElementById("btn")

// btn.onclick = function displayCard() {
//     count++

//     let title = "Sigma Web dev"
//     let cName = "CodeWithHarry"
//     let views = 23000000
//     let monthsOld = 10
//     let duration = "23:30"
//     let thumbnail = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"

//     createCard(count, title, cName, views, monthsOld, duration, thumbnail)
// }

btn.addEventListener("click", function displayCard() {
    count++

    let title = "Sigma Web dev"
    let cName = "CodeWithHarry"
    let views = 23000000
    let monthsOld = 10
    let duration = "23:30"
    let thumbnail = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"

    createCard(count, title, cName, views, monthsOld, duration, thumbnail)
})

