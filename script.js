
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
    let email = document.getElementById("email").value
    
    if (name === "" && email === ""){
        alert("Please Enter Your Name and Email");
    }
    else if (name === ""){
        alert("Please Enter Your Name");
    }
    else if (email === ""){
        alert("Please Enter Your Email");
    }
    else{
        alert("Form Submitted Successfully");
    }

    console.log(name);
    console.log(email);
}

