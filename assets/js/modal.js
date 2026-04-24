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
})
