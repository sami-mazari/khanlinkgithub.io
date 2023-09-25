let date1 = document.getElementById("checkin");
let date2 = document.getElementById("checkout");
let room = document.getElementById("room");
let guest = document.getElementById("guest");
let flagDate1 = true;
let flagDate2 = true;
let flagRoom = true;
let flagGuest = true;

function validateForm(e) {
 
    flagDate1 = true;
    flagDate2 = true;
    flagRoom = true;
    flagGuest = true;

    if (date1.value == "") {
        document.getElementById("checkinerror").innerHTML = "Please select a date.";
        flagDate1 = false;
    } else {
        document.getElementById("checkinerror").innerHTML = "";
    }

    if (date2.value == "") {
        document.getElementById("checkouterror").innerHTML = "Please select a date.";
        flagDate2 = false;
    } else {
        document.getElementById("checkouterror").innerHTML = "";
    }

    if (room.value == "") {
        document.getElementById("roomerror").innerHTML = "Please select a room.";
        flagRoom = false;
    } else {
        document.getElementById("roomerror").innerHTML = "";
    }

    if (guest.value == "") {
        document.getElementById("guesterror").innerHTML = "Please select the number of guests.";
        flagGuest = false;
    } else {
        document.getElementById("guesterror").innerHTML = "";
    }

    if (flagDate1 && flagDate2 && flagRoom && flagGuest) {
      return true;
       
        // Swal.fire(
        //   'Good job!',
        //   'You clicked the button!',
        //   'success'
        // )
       
        
      
    } else {
        return false;
    }
   
}


  $("#viewimg1").click(function () {
      $(".card-display").toggle();
     $(this).text(function(i, text){
         return text === "View Less" ? "View More" : "View Less";
     })
  });


// Gallery section

function myFunction() {
  let x = document.getElementById("part3");
  let z = document.getElementById("part2");
  if (x.style.display == "none" && z.style.display == "inline") {
    x.style.display = "inline";
    z.style.display = "none";
    document.getElementById("show").innerHTML = "Learn Less";
  } else {
    x.style.display = "none";
    z.style.display = "inline";
    document.getElementById("show").innerHTML = "Learn More";
  }
}
function myFunctionView() {
  let x = document.getElementById("pic-1");
  let p = document.getElementById("pic-2");

  if (x.style.display == "none" && p.style.display == "none") {
    x.style.display = "inline";
    p.style.display = "inline";

    document.getElementById("viewimg").innerHTML = "View Less";
  } else {
    x.style.display = "none";
    p.style.display = "none";
    document.getElementById("viewimg").innerHTML = "View More";
  }
}

// Email section

let email = document.getElementById("email");
let flagemail = true;
function emailForm() {
  if (email.value == "") {
    document.getElementById("emailerror").innerHTML = "please write your email.";
    flagemail = false;
  } else {
    document.getElementById("emailerror").innerHTML = "";
    flagemail = true;
  }
  if (flagemail) {
    return true;
  } else {
    return false;
  }

}


//slider section



// let flag = 0;
// let num = 0;
// function con(x) {
//   flag = flag + x;
//   abc(flag);
//   getdark(flag);
// }
// abc(flag);
// getdark(flag);
// function abc(num) {

//   let slides = document.getElementsByClassName("slide");
//   if (flag == slides.length) {
//     flag = 0;
//     num = 0;
//   }
//   if (flag < 0) {
//     flag = slides.length - 1;
//     num = slides.length - 1;
//   }
//   for (var y of slides) {
//     y.style.display = "none";
//   }
//   slides[num].style.display = "flex";
// }
// getdark(flag);
// function getdark(num) {
//   let dots = document.querySelectorAll(".dot");
//   if (flag == dots.length) {
//     flag = 0;
//     num = 0;
//   }
//   if (flag < 0) {
//     flag = dots.length - 1;
//     num = dots.length - 1;
//   }
//   for (let y of dots) {
//     y.style.backgroundColor = "grey";
//   }
//   dots[num].style.backgroundColor = "black";

// }

// let dots = document.querySelectorAll(".dot");
// dots.forEach(box => {
//   box.addEventListener('click', function onclick(event) {
   
   

//     for (let y of dots) {
//       y.style.backgroundColor = "grey";
//     }
//     console.log('box clicked', event);
   
//     box.style.backgroundColor = "black";
   
//   });
// });

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
      // dots: true,
      nav: true,
      loop: true,
      items: 1,
    
  });
  $(".owl-prev").html('<i class="fa-solid fa-arrow-left fa-2xs"></i>');
  $(".owl-next").html('<i class="fa-solid fa-arrow-right fa-2xs"></i>');
})