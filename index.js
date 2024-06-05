// TESTE 
// $(document).ready(function(){
//     // Altera a cor de fundo para preto
    // $('body').css('background-color', 'black');
// });

document.addEventListener('DOMContentLoaded', function () {
    var hamburguerButton = document.getElementById('hamburguer-button');
    var menu = new bootstrap.Collapse(document.getElementById('menu'), {toggle: false});

    document.addEventListener('click', function (event) {
        var target = event.target;
        var menuElement = document.getElementById('menu');

        // Verifica se o menu está visível, se o clique foi fora do menu e do botão hamburguer, ou se foi em um item do menu
        if (menu && menu._isShown && (!menuElement.contains(target) || target.classList.contains('nav-link')) && target !== hamburguerButton) {
            menu.hide();
        }
    });
});