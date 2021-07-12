var cantMargarita=0
$(
    "#p-margarita-cant"
)
.change(
   (evento)=>{cantMargarita=evento.target.value
     if(evento.target.value>0){
    $("#p-margarita-check")
    .prop('checked', true)
       
}
else{$("#p-margarita-check")
   .prop('checked', false)}

   $("#mensaje").prop('innerText',"¡Hola Quenoma! queria pedir"+cantMargarita+"margarita")
   $("#wasap").prop('href',"https://api.whatsapp.com/send?phone=5492216797230&text="+"¡Hola Quenoma! queria pedir"+cantMargarita+"margarita")

}
)