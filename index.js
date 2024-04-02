let myLead =[]
oldleads=[]
const inputEl = document.getElementById("input-el") // difference of let and const is cont can't reassign.ex- then inputEl="Hello"  it occurs a error
const ulEl= document.getElementById("ulEl")
const inputBtn= document.getElementById("input-btn")
const deleteBtn= document.getElementById("delete-btn")
const tabBtn =document.getElementById("tab-btn")


const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
/*
localStorage.getItem("myLead"): This method retrieves the value stored in the browser's localStorage under the key "myLead". 
localStorage is a web storage object that allows you to store key-value pairs locally in a web browser.
 getItem() is a method of the localStorage object that retrieves the value associated with a specified key.

JSON.parse(): This function parses a JSON string and converts it into a JavaScript object.
 In this case, the JSON string retrieved from localStorage needs to be converted into a JavaScript object so that it can be used in the code.

const LeadsFromLocalStorage: This line declares a constant variable named LeadsFromLocalStorage and assigns it the parsed JavaScript object obtained from localStorage.
 This variable now holds the data retrieved from localStorage in a format that can be easily manipulated and accessed within the code.
*/


if(LeadsFromLocalStorage){
    myLead=LeadsFromLocalStorage
    render(myLead)
}

inputBtn.addEventListener("click",function(){
    myLead.push(inputEl.value)// pushthe value of inputEl
    inputEl.value="" // to claer input in tne inputbar

    // save the myLead array to localStorage
    localStorage.setItem("myLead",JSON.stringify(myLead))
    render(myLead)

}) // This function is executed when the "click" event occurs on the inputBtn
// You can add your code here to perform actions when the button is clicked

/* box opener

let box = document.getElementbyId("box")
box.addEventListener("click",function(){
    console.log("I want to open the box")
})
*/

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLead=[]
    render(myLead)

})//dblclick--> double click




/*tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLead) )
        render(myLead)
    })
})
*/
tabBtn.addEventListener("click", function() {
    // Query for all tabs in the current window
    chrome.tabs.query({}, function(tabs) {
        // Iterate through each tab
        tabs.forEach(function(tab) {
            // Add the URL of each tab to myLeads array
            myLead.push(tab.url);
        });
        // Update localStorage with the updated myLeads array
        localStorage.setItem("myLead", JSON.stringify(myLead));
        // Render the updated list of leads
        render(myLead);
    });
});

/*chrome.tabs.query(): This method is part of the Chrome Extension API and is used to query for information about tabs.

{ active: true, currentWindow: true }: This is an object passed as the first argument to chrome.tabs.query().
 It serves as a query filter. Here, it specifies that we want to retrieve information about 
 
 the currently active tab (active: true) in the current window (currentWindow: true).

function(tabs) { ... }: This is the callback function that is executed after the query operation is complete.
 It receives an array of tab objects as its argument.
 
 Each tab object contains information about a tab, including its URL, title, ID, etc.
*/


/*
tabs[0]: This expression accesses the first element (tab) in the tabs array.
This assumes that tabs is a predefined array containing information about the open tabs in the browser.
*/

function render(lead) {
    let listItems = ""
    for (let i = 0; i < lead.length; i++) {
        /*
        listItems += "<li><a target='_blank' href='"+ myLead[i] +"'>"+ myLead[i] +"<a></li> "  // by innerHTML, it identifies these are lists
        //When target='_blank' is set, it instructs the browser to open the linked document in a new tab or window, depending on the user's browser settings.
        // using single quoates to target so whole line in double quotes and interpeter cant understant what is end of double qoutes
        */

        /* when above code write in without qutetion marks below way*/
        listItems += `          
            <li>
                <a target='_blank' href='${lead[i]}'>
                    ${lead[i]}
                </a>
            </li>
        `// space between two elements is auto generated
        // this sign is before 1 in keyboard.by this type in multiple lines
    }//${myLead[i]}: This expression is used to insert the value of myLead[i] into the anchor element. It's enclosed within ${...} to indicate an expression within the template literal.
    /*  another way

    const li=document.createElement("li")
    li.innerText=myLead[i]
    ulEl.append()
    */
    ulEl.innerHTML = listItems  
}





/*
const containerEl =document.getElementById("container") 
containerEl.innerHTML="<button onclick="buy()">Buy!</button>"

function buy(){
    containerEl.innerHTML +="<p> Thank you for buying!</p>"
}
it identifies buy! as a button 
*/

/*
const resipient = "james"
const email=`hey ${recipient} bye`
cosole.log(email)---> hey james bye
*/ 


/*  local storage

localStorage.setItem("myName","Pabasara")
let name = localStorage.getItem("myName")
console.log(name)----> Pabasara



*/


/*
let myLead=`["www.abcd.com"]`
1.turn the myLead string into an array
myLead= JSON.parse(myLead)

2. push new value to the array

myLead.push("www.ssss.com")
3. turn the array into string again
myLead=JSON.stringify(myLead)

console.log(typeof myLead)--->string
*/


