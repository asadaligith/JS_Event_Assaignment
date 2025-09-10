
// Show Less Para Assainment Code
let originalPara = document.getElementById("para").innerText;
let isShort = false;

function shortPara(){
    let paragraph = document.getElementById("para");
    let btn = document.getElementById("clk-btn");

    if (isShort == false){
        let short = originalPara.slice(0, 20);
        paragraph.innerText = short + "...";
        btn.innerText = "Read More";
        console.log(short);
        console.log(btn);
        isShort = true;
    }
    else{
        paragraph.innerText = originalPara;
        btn.innerText = "Show Less";
        isShort = false;
    }
    
}


// Indivdual Check Name and Email Assainment

function result(){
    let name = document.getElementById("username").value
    if (name === ""){
        alert("Please Enter Your Name");
    }
    console.log(name);
}

function result2(){    
    let email = document.getElementById("email").value
    if (email === ""){
        alert("Please Enter Your Email");
    }
    console.log(email);
}

// Assainment 3rd
let isImage = false;

function insertImage(){
    if (isImage == false){
        document.getElementById("img").innerHTML =`
        <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Lights" style="width:100% ; object-fit:cover" > `; 
        console.log(img);
        isImage = true;
    }
    else{
        document.getElementById("img").innerHTML = "";
        console.log(img);
        isImage = false;
    }
}