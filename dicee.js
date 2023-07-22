bttn.addEventListener('click',()=>{
    let var1 = Math.floor(Math.random() * 6 + 1);
    let img1_src="images/dice"+var1+".png";
    
    let var2 = Math.floor(Math.random() * 6 + 1);
    let img2_src="images/dice"+var2+".png";
    let b=document.getElementById("bttn");

    document.querySelectorAll("img")[0].setAttribute("src",img1_src);
    document.querySelectorAll("img")[1].setAttribute("src",img2_src);
    let tri=document.querySelector("h1");
    if(var1>var2){
        tri.innerHTML="🚩Player 1 wins";
    }else if(var1==var2){
        tri.innerHTML="Draw";
    }else{    
        tri.innerHTML="Player 2 wins🚩";
    }
})
    

