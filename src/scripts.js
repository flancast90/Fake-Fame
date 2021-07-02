/*
These are all the JS scripts python pops into the browser during
Fake-Fame.py runtime, commented by usage
In many cases, this reduces possible errors from unknowable
input boxes breaking "tabbing"
*/

// extracts the user email from webpage so pyautogui can easily tab
var a = `%3Cinput value="`+document.getElementById("fe_text").value+`"/%3E`; var b = decodeURIComponent(a); document.write(b);

// clears possible chrome autofill autofilling input box
document.getElementById('password').value = ''; document.getElementById('password').focus()

// see last comment. Same thing, just for username input
document.getElementById('login').value = ''; document.getElementById('login').focus();

// checks at certain interval if user is done with captcha. If so, clicks button
var inter = setInterval(function(){ var element =  document.getElementsByClassName("form-control signup-submit-button width-full py-2 js-octocaptcha-form-submit")[0]; if (element.hidden == false) { element.click(); clearInterval(inter); } }, 1000);

// When page goes back to 10minutemail, select the appropriate
// GitHub code email from the list by Id
document.getElementsByClassName('row-link')[0].click();

// Copy the code from the email to be pasted by pyautogui later using 
// pyperclip 
var a = `%3Cinput value="`+document.getElementsByClassName("branch-name f00-light text-gray-dark text-mono")[0].innerHTML+`"/%3E`; var b = decodeURIComponent(a); document.write(b);')

