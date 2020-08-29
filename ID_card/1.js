let generateID = () => {

     let uname = document.querySelector('#uname').value;
     let dob = document.querySelector('#dob').value;
     let bgrp = document.querySelector('#bgrp').value;
     let contact = document.querySelector('#contact').value;
     let imgval = document.querySelector('#myimg').files[0].name;

     //console.log(imgval.src);
     
     document.querySelector('#insertimg').src = imgval;
     document.querySelector('#sampleid').children[0].innerHTML = uname;
     document.querySelector('#sampleid').children[1].innerHTML = dob;
     document.querySelector('#sampleid').children[2].innerHTML = bgrp;
     document.querySelector('#sampleid').children[3].innerHTML = contact;


     //clearing the content
     document.querySelector('#myimg').files[0] = "";
     document.querySelector('#uname').value = "";
     document.querySelector('#dob').value = "";
     document.querySelector('#bgrp').value = "";
     document.querySelector('#contact').value = "";


}