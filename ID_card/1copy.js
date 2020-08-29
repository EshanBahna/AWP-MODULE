
let counter = 0;

let generateID = () => {

    let uname = document.querySelector('#uname').value;
    let dob = document.querySelector('#dob').value;
    let bgrp = document.querySelector('#bgrp').value;
    let contact = document.querySelector('#contact').value;
    let imgval = document.querySelector('#myimg').files[0].name;






//image
document.querySelector('#ID-Card').children[0].children[0].children[0].src = imgval;


// User Name
document.querySelector('#ID-Card').children[1].children[0].children[0].children[0].children[1].innerHTML = uname;


//Roll No
counter++;
document.querySelector('#ID-Card').children[1].children[0].children[0].children[1].children[1].innerHTML = 200240320000 + counter;

//dob
document.querySelector('#ID-Card').children[1].children[0].children[0].children[2].children[1].innerHTML = dob;

//blood
document.querySelector('#ID-Card').children[1].children[0].children[0].children[3].children[1].innerHTML = bgrp;

//phone
document.querySelector('#ID-Card').children[1].children[0].children[0].children[4].children[1].innerHTML = contact;




//static Check
/*
    document.querySelector("#idimg").src = imgval;
    document.querySelector('#idname').innerHTML = uname;
    document.querySelector('#iddob').innerHTML = dob;
    document.querySelector('#idblood').innerHTML = bgrp;
    document.querySelector('#iphone').innerHTML = contact;
*/

    //clearing the content
    document.querySelector('#myimg').files[0] = "";
    document.querySelector('#uname').value = "";
    document.querySelector('#dob').value = "";
    document.querySelector('#bgrp').value = "";
    document.querySelector('#contact').value = "";

    document.querySelector('#ID-Card').style.visibility = 'visible';


}






















//image
//document.querySelector('#ID-Card').children[0].children[0].children[0].src = "img";


// User Name
//document.querySelector('#ID-Card').children[1].children[0].children[0].children[0].children[1].innerHTML = "Name";


//Roll No
//document.querySelector('#ID-Card').children[1].children[0].children[0].children[1].children[1].innerHTML = "RollNo";

//dob
//document.querySelector('#ID-Card').children[1].children[0].children[0].children[2].children[1].innerHTML = "Dob";

//blood
//document.querySelector('#ID-Card').children[1].children[0].children[0].children[3].children[1].innerHTML = "Blood";

//phone
//document.querySelector('#ID-Card').children[1].children[0].children[0].children[4].children[1].innerHTML = "phone";
