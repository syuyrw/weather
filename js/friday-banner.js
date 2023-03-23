//Banner
var cur_date = new Date()
var weekday = cur_date.getDay()
if (weekday != 5) {
    document.getElementById("banner").style.display = "none"
}