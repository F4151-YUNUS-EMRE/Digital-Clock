setInterval(() => {
    const clock = document.querySelector("#clock")
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let day;

    if (hour > 12) {
        hour = hour - 12
        day = "PM"
    } else {
        day = "AM"
    }

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second



    clock.innerHTML = `${hour}:${minute}:${second} ${day}`
}, 1000)

setInterval()