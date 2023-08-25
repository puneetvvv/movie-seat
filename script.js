const add = document.querySelector(".current");
const minus = document.querySelector(".remaining");
const clickBox = document.querySelectorAll(".box");

// clickBox.forEach((box) => {
//     box.addEventListener("mouseover", (el) => {
//         box.classList.toggle("clicked")
//         getCurrentLength()
//     });
// } )

// function getCurrentLength(){
//     var clicked = document.querySelectorAll('.clicked').length;
//     var clickBox = document.querySelectorAll('.box').length;
//     document.getElementById("current").innerHTML = clicked;
//     document.getElementById("remaining").innerHTML = boxes-clicked;
// }

// function bookConfirm(o) {
//     o.style.backgroundColor = (o.style.backgroundColor == 'green')?('rgb(185, 201, 41)'):('green');
// }




function bookConfirm(o) {
    // clickBox.style.backgroundColor = "green";
    // clickBox.style.backgroundColor = (clickBox.style.backgroundColor == 'green')?('rgb(185, 201, 41)'):('green');

    if (o.style.backgroundColor != "green"){
        add.innerText++;
        minus.innerText--;
        o.style.backgroundColor = "green";
        console.log('yes')
        
    }
    else if (o.style.backgroundColor = "rgb(185, 201, 41)") {
        // o.style.backgroundColor = "green"
        add.innerText--;
        minus.innerText++;
        console.log("no")
        
    }
}





// bookConfirm();
    



