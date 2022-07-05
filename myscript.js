const searche = () => {
    const searchbox=document.getElementById("search").value.toUpperCase();
    const productlist=document.getElementById("productlist")
    const product=document.querySelectorAll(".product")
    const items=document.getElementsByTagName("h3")

    for(var i = 0; i < items.length ; i++){
        let match=product[i].getElementsByTagName('h3')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                 console.log(searchbox)
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
        }
    }
}


var warmers=document.getElementById("warmers");
var check=document.getElementById("check");

warmers.addEventListener("click",()=>{
    console.log("clicked")
    check.classList.toggle("valid")
})

