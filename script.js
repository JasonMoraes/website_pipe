window.onload = ()=>{
    document.addEventListener('scroll', ()=>{
        console.log("XDDDDD");
        if (window.scrollY>=(window.innerHeight*4-100)){
            document.getElementById("special-bar").style.display = "block";
        }
    });
}