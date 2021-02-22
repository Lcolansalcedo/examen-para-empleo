$(document).ready(main);
var contador=1;

function main(){
$('.menu_bar').click(function(){

if (contador==1){
    $('.caja-menu').animate({
       left:'0'
    });
    contador=0;
}else{
    contador=1;
    $('.caja-menu').animate({
        left:'-100%'

    });
}


});

 
}
$(document).ready(function(){
    $('.texto1,.texto2,.texto3').hide();

 $('.titulo1').on('click',function(){

    $('.texto1').slideToggle();
 });
 $('.titulo2').on('click',function(){

    $('.texto2').slideToggle();
 });
 $('.titulo3').on('click',function(){

    $('.texto3').slideToggle();
 });

});