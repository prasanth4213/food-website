import { foodItem } from "./fooditems";

// search elements

const search = () => {
    const searchBox = document.getElementById("search-box").value.toUpperCase();
    const container = document.getElementsByClassName("box-container");
    const product =document.querySelectorAll("#item-card")
    const pname = container.getElementById("item-name");

    for(var i=0; i<pname.length; i++){
        let match = product[i].getElementById("item-card")[0];

        if(match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = " ";

            }
            else{
                product[i].style.display = "none"; 
            }
        }
   }
}