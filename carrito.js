var cantMargarita = 0

/* este es para el mensajito
        $("#mensaje").prop('innerText', "¡Hola Quenoma! queria pedir" + cantMargarita + "margarita")
        $("#wasap").prop('href', "https://api.whatsapp.com/send?phone=5492216797230&text=" + "¡Hola Quenoma! queria pedir" + cantMargarita + "margarita")
 */


$(".sumar").change((evento)=>alCambiarNumero(evento)) // Buscamos Inputs tipo "number", cuando change ejecuta la funcion al cambiar//
function alCambiarNumero (evento)
{ //funcion al cambiarNumero//
    var NombreProducto = evento.target.dataset.producto //guarda en una variable (var) que se llama "tipo" el producto que cambia//
    var cantidad=evento.target.value //guarda en una Var, que se llama "cantidad" el valor//
        if (cantidad> 0) {
            $('*[data-check='+ NombreProducto+']') // busca ($) el input que tenga la propiedad ej: data-check='margarita'//
                .prop('checked', true) //al input encontrado se le aplica el valor de esta propiedad//
        }
        else {
            $('*[data-check='+ NombreProducto+']')
            .prop('checked', false)
        }

} //hasta aca funcion al cambiar//
$(".checkboxes").change((evento)=>Alcheckear(evento)) //buscamos ($) la clase .checkboxes, cuando change ejecuta la funcion Alcheckear//
function Alcheckear (evento) //funcion Alcheckear recibe el evento"
    { 
        var NombreProducto= evento.target.dataset.check //variable NombreProducto guarda la info del data-check del input//
        var EstaCheckeado=evento.target.checked //Variable EstaCheckeado guarda el estado del check-box// 
            if (!EstaCheckeado) //si no esta chequeado continua//
             {
                $('*[data-producto='+ NombreProducto+']')//busca el input que tenga la prop. data-producto=NombreProducto ej: data-producto='margarita'//
                .val(0)
            }
    }
    