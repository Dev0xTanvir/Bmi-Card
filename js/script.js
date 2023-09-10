let height=document.querySelector(".height")
let weight=document.querySelector(".weight")
let test=document.querySelector(".test")
let height_error=document.querySelector(".height_error")
let weight_error=document.querySelector(".weight_error")
let result=document.querySelector(".result")
let massage=document.querySelector(".massage")



test.addEventListener("click", function(){

     if (height.value == ""){
        height_error.innerHTML="Give a value then click"
        height_error.style.color="red"
     }else{
        height_error.innerHTML=""
     }

     if (weight.value == ""){
        weight_error.innerHTML="Give a value then click"
        weight_error.style.color="red"
     }else{
        weight_error.innerHTML=""
     }

     if (!height.value == "" && !weight.value == ""){

        let bmi=(((weight.value*2.20462)/ ((height.value*12) *( height.value*12)))*703)

        result.innerHTML=bmi.toFixed(2)

        if (bmi <= 24.9 && bmi >= 18.5){
            massage.innerHTML="You are perfect"
         }

         else if(bmi > 24.9){
            massage.innerHTML="Please lose your weight"
         }

         else if(bmi < 18.5){
            massage.innerHTML="Please increase your weight"
         }

     }


   

})

function reload(){
    window.location.reload();
}
