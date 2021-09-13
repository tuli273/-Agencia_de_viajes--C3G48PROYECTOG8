function blockCorreo(){
    if (document.getElementById("nDocumento").value != "") {
        document.getElementById("correo").disabled = true
    } 
    else{
        document.getElementById("correo").disabled = false  
    }
    /* aqui podemos poner un swal con avisos*/
}
function blocknDocumento(){
    if (document.getElementById("correo").value != "") {
        document.getElementById("nDocumento").disabled = true
    } 
}
var recuperarContrasena = function(){

    const nDocumento = document.getElementById("nDocumento").value;
    const correo = document.getElementById("correo").value;

    if ((nDocumento == "" && correo == "") || (nDocumento != "" && correo != "")) {
            swal("ERROR",
            "Ingrese un N° de documento o un Correo (solo debe llenar uno de los campos)",{
                icon: "error",
              });
            
        } else {
            swal({
                title: "GRACIAS",
                text: "Se enviará un correo electronico al eMail registrado para: " + nDocumento + correo + " ¿es correcto?",
                icon: "success",
                buttons: {
                    cancel:"REGRESAR",
                    confirm:"CONTINUAR",
                },                
            })
            .then((willDelete) => {
                if (willDelete) {
                    document.getElementById("nDocumento").value = "";
                    document.getElementById("correo").value = "";
                    swal("Revise su correo electrónico", "sino lo encuentra, puede revisar la bandeja de spam." , "warning") ;
                } else {
                  swal({
                    title: "",
                    text: "Ingrese los datos nuevamente",
                    icon: "info",
                    buttons: {
                        confirm:"OK"
                    },
                    
                  });
                document.getElementById("nDocumento").disabled = false
                document.getElementById("correo").disabled = false
                document.getElementById("nDocumento").value = "";
                document.getElementById("correo").value = "";
                }
            });
        }
             
}
