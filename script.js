
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