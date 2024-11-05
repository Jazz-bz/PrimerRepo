document.getElementById("registrarse").addEventListener("click", function(){
    //es una referencia al DOM (Document Object Model), que representa la estructura de una página web. Con document, podemos acceder y manipular elementos HTML.
    //.getElementById Este método busca un elemento HTML en la página usando su atributo id.
    //.addEventListener es un método que se utiliza para asignar un evento a un elemento. Aquí estamos especificando el evento "click", lo que significa que el código definido en la función se ejecutará cada vez que el usuario haga clic en el elemento
        const nombre = document.querySelector("#nombre input").value.trim();
        //document.querySelector selecciona el primer elemento en el DOM que coincida con el selector CSS especificado.
        const email = document.querySelector("#email input").value.trim();
        const password = document.querySelector("#password input").value.trim();
        
    
        if (nombre === "") {
            //nombre === "": Aquí se está comprobando si la variable nombre es igual a una cadena vacía ("").
           alert ("Por favor ingresa tu nombre, este campo no puede quedar vacio");
           } else if (email === "") {
            alert ("LLena todo los datos");
           } else if (!email.includes ("@")){
            alert ("Correo no aceptado");
           } else if (password === ""){
            alert ("Contrasena incorrecta");
           } else if (password.length < 8) {
            alert ("Contraseña no segura");
           }else {
            alert("Registro completo" + nombre + "!");
           }
        });