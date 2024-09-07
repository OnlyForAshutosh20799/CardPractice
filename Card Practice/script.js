var friend = document.querySelector("#add1")
var unfriend = document.querySelector("#remove1")

friend.addEventListener("click", function(){

let userResponse = confirm("Do you want to add this as friend?");

if (userResponse) {

    alert("You added them as a friend.");
    friend.innerHTML = "Added";
} else {

    alert("You not add.");
}

})

unfriend.addEventListener("click", function(){

    friend.innerHTML= "Add Friend";
    alert("Friend Removed");
})

    // second card

    var friend1 = document.querySelector("#add2")
var unfriend1 = document.querySelector("#remove2")

friend1.addEventListener("click", function(){

let userResponse = confirm("Do you want to add this as friend?");

if (userResponse) {

    alert("You added them as a friend.");
    friend1.innerHTML = "Added";
} else {

    alert("You not add.");
}

})

unfriend1.addEventListener("click", function(){

    friend1.innerHTML= "Add Friend";
    alert("Friend Removed");
})

// third card

var friend2 = document.querySelector("#add3")
var unfriend2 = document.querySelector("#remove3")

friend2.addEventListener("click", function(){

let userResponse = confirm("Do you want to add this as friend?");

if (userResponse) {

    alert("You added them as a friend.");
    friend2.innerHTML = "Added";
} else {

    alert("You not add.");
}

})

unfriend2.addEventListener("click", function(){

    friend2.innerHTML= "Add Friend";
    alert("Friend Removed");
})