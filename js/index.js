// $('#title').click(()=>{
//     $('body').css('background-color','blue')
// })

document.getElementById('#title').addEventListener('click',start,false);


function start(){
    $('#title').css('background-color','pink')
};
$('#title').on('click',start)