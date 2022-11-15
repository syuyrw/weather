// program to display the date
// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", day:"numeric", month:"long"});
// display date
document.write(n);