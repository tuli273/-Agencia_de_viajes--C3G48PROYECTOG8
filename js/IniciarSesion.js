var getData = function(){

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (user == "" || password == "") {
            swal("ERROR",
            "Ingrese todos los datos solicitados",{
                icon: "error",
              });
            
        } else {
            swal({
                title: "Bienvenido   "+ user,
                text: "Desea continuar?",
                icon: "success",
                buttons: {
                    cancel:"REGRESAR",
                    confirm:"CONTINUAR",
                },                
            })
            .then((willDelete) => {
                if (willDelete) {
                    document.getElementById("user").value = "";
                    document.getElementById("password").value = "";
                    window.location.href = "index.html";
                } else {
                  swal({
                    title: "GRACIAS",
                    text: "...vuelva pronto!",
                    icon: "warning",
                    buttons: {
                        confirm:"OK"
                    },
                    
                  });
                document.getElementById("user").value = "";
                document.getElementById("password").value = "";
                }
            });
        }
             
}

    