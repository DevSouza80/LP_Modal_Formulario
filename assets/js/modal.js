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
    }

    $('form#form1').submit(function(){
        
       var nome = $('input[name=nome]').val();
       var telefone = $('input[name=telefone]').val();
       var email = $('input[name=email]').val();
         
       //Contanto a quantidade de espaços e os respectivos valores
         var amount = nome.split(' ').length;
         var splitStr = nome.split(' ');
       if(amount >= 2) {
           for(var i = 0; i < amount; i++) {
              if(splitStr[i].match(/[^[A-Z]{1}[a-z]{1,}$/)) {

              } else {
               aplicarCampoInvalido($('input[name=nome]'));
                 return false;
              }
           }
       } else {
               aplicarCampoInvalido($('input[name=nome]'));
                 return false;
        return false;
       }

       return false;

        //Se chegar até o final é por que está tudo okay!
    });

    function aplicarCampoInvalido(el) {
                el.css('border','2px solid red');
                el.data('invalido','true');
                el.val('Campo Inválido');
    }
});
