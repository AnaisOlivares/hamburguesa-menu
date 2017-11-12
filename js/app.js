var boton = document.getElementById('btn');
function showMenu() {
  var menu = document.getElementById('opc-menu')
//acá  creo ñas condiciones para mostrar u ocultar las clases en block y none
    if (menu.classList.contains('disable-menu')) {
      console.log('mostrar');
      menu.classList.remove('disable-menu');
      menu.classList.add('enable-menu');
    }
  else {
    console.log('ocultar')
    menu.classList.remove('enable-menu');
    menu.classList.add('disable-menu');
  }
}
boton.addEventListener('click',showMenu);
