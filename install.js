'use strict';//Para que se ejecute en modo estricto

let deferredInstallPrompt = null;
const installButton = document.getElementById('butIntsall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt){
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt){
    deferredInstallPrompt.prompt();
    svt.srcElemt.setAttribute('hidden', true);//Para que el boton de instalacion se oculte despues de instalarlo 
    deferredInstallPrompt.userChoice.then((choice)=>{//Para ver si el usuario acepta o no la instalacion
        if(choice.outcome === "accepted"){
            console.log("aceptado")
        } else{
            console.log("No aceptado")
        }
        deferredInstallPrompt=null;
    })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){//te muestra que se intsalo la aplicacion
    console.log("APP INSTALADA ")
}

//ng add @angular/pwa me sirve para que se pueda ver de forma offline y no se caiga la pagina 