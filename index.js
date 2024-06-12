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
    // Seletor do formulário
    const form = document.querySelector('form');
    
    // Seletor do toast
    const toast = new bootstrap.Toast(document.getElementById('msgEmailEnviado'));

    // Função para validar o formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Verifica se o formulário é válido
        if (form.checkValidity()) {
            // Mostra o toast
            toast.show();

            // Limpa o formulário
            form.reset();
        } else {
            // Mostra os erros de validação padrão do HTML5
            form.classList.add('was-validated');
        }
    }, false);

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

    // Botão enviar

    

});

