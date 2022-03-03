document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    
   document.querySelector("#btnReloj1").addEventListener("touchend", 
        function(){
           
            alert(" Nombre: Smartwatch SE \nCaracteristicas: A prueba de agua \nMaterial: Titanio \nColor de correa: Blanco \nPrecio: $82" , null, "Aviso", "OK!");  
        }, false);

    document.querySelector("#btnReloj2").addEventListener("touchend", 
        function(){
           
            alert("Nombre: Smartwatch PRO \nCaracteristicas: A prueba de agua y antirayaduras \nMaterial: Titanio \nColor de correa: Rojo \nPrecio: $96", null, "Aviso", "OK!");  
        }, false);

    document.querySelector("#btnReloj3").addEventListener("touchend", 
        function(){
           
            alert("Nombre: Smartwatch \nCaracteristicas: A prueba de agua y antirayaduras \nMaterial: Aluminio \nColor de correa: Verde \nPrecio: $75", null, "Aviso", "OK!");  
        }, false);
}