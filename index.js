// TESTE 
// $(document).ready(function(){
//     // Altera a cor de fundo para preto
    // $('body').css('background-color', 'black');
// });

document.addEventListener('DOMContentLoaded', function () {
    // Para fazer o menu hamburguer sumir ao clique
    var hamburguerButton = document.getElementById('hamburguer-button');
    var menu = new bootstrap.Collapse(document.getElementById('menu'), { toggle: false });

    document.addEventListener('click', function (event) {
        var target = event.target;
        var menuElement = document.getElementById('menu');

        // Verifica se o menu está visível, se o clique foi fora do menu e do botão hamburguer, ou se foi em um item do menu
        if (menu && menu._isShown && (!menuElement.contains(target) || target.classList.contains('nav-link')) && target !== hamburguerButton) {
            menu.hide();
        }
    });

    // Para chamar o toast
    const ativaToast = document.getElementById('btnSubmit');
    const msg = document.getElementById('msgEmailEnviado');

    if (ativaToast) {
        ativaToast.addEventListener("click", function (event) {
            event.preventDefault(); // Previne o envio do formulário
            const toast = new bootstrap.Toast(msg);
            toast.show();
        });
    }

    // Pega o modal
    var modal = document.getElementById("meuModal");
    var modalImg = document.getElementById("modalImagem");
    var imagens = document.querySelectorAll(".imagem-card");
    var span = document.getElementsByClassName("fechar")[0];
    var body = document.body;

    imagens.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            body.classList.add("no-scroll");
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
        modalImg.src = "";
        body.classList.remove("no-scroll");
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalImg.src = "";
            body.classList.remove("no-scroll");
        }
    }

});

