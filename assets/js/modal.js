$(function(){
   
    abriJanelaModal();
    verificarCliqueFechar();

    function abriJanelaModal(){
        $('.btn').click(function(e){
              e.stopPropagation(); 
            $('.modal-form').fadeIn();
        });
    }

    function verificarCliqueFechar() {
        var el = $('body, .close-btn');

        el.click(function(){
           $('.modal-form').fadeOut();
        });

        $('.modal-form').click(function(e){
               e.stopPropagation(); 
        });

        $('form#form1').submit(function(e){
           e.preventDefault();
        });
    }

    $('form#form1').submit(function(){
       var nome = $('input[name=nome]').val();
       var telefone = $('input[name=telefone]').val();
       var email = $('input[name=email]').val();
          
       if(verificarNome(nome) == false) {
          aplicarCampoInvalido($('input[name=nome]'));
          return false;
       } else if(verificarTelefone(telefone) == false) {
            aplicarCampoInvalido($('input[name=telefone]'));
            return false;
       } else if(verificarEmail(email) == false) {
          aplicarCampoInvalido($('input[name=email]'));
          return false;
       }

       alert("Formulário enviado com sucesso!");
        //Se chegar até o final é por que está tudo okay!
    });

    function verificarNome(nome) {
          //Contanto a quantidade de espaços e os respectivos valores
          if(nome == '') {
             return false;
          }
         var amount = nome.split(' ').length;
         var splitStr = nome.split(' ');

       if(amount >= 2) {
           for(var i = 0; i < amount; i++) {
              if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {

              } else {
                 return false;
              }
           }
          
       } else {
        return false;
       }
    }

    //Funções para estilizar o campo do formulário
    function aplicarCampoInvalido(el) {
                el.css('color','red');
                el.css('border','2px solid red');
                el.data('invalido','true');
                el.val('Campo Inválido');
    }

    //funções para verificar nossos campos
    function resetarCampoInvalido() {
                el.css('color','#4760ef');
                el.css('border','2px solid #4760ef');
                el.removeData('invalido');
       }

    $('input[type=text]').focus(function(){
         resetarCampoInvalido($(this));
    })

    function verificarTelefone(telefone) {
        if(telefone == '') {
            return false;
        }

         if(!telefone.match(/^\([0-9]{2}\)\s?[0-9]{4,5}-[0-9]{4}$/)) {
          return false;
        }
    }

    function verificarEmail(email) {
       if(email == '') {
          return false;

        if(email.match(/^([a-z0-9._]{1,})+@+([a-z.]{1,})$/) == null){
             return false;
        }
       }
    }
});


