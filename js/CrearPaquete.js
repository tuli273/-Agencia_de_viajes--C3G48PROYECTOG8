var getPaq = function () {

    const Paq = document.getElementById("inputNombrePaq").value;
    document.getElementById("nHotel").innerHTML = Paq;
}

var getPrecio = function () {

    const Precio = document.getElementById("inputPrecio").value;
    document.getElementById("precio").innerHTML = "$" + Precio + " COP";
}

var getUbicacion = function () {

    const Ubicacion = document.getElementById("inputUbicacion").value;
    document.getElementById("ubicacion").innerHTML = Ubicacion;
}


function mostrar(){
    var archivo = document.getElementById("inputImagen").files[0];
    var reader = new FileReader();
    if (inputImagen) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }

  var clearText = function () {
    document.getElementById("tImagen").innerHTML = "";
}