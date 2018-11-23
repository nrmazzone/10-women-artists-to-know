
// show modal
const shouldShowModal = true;
// console.log(123);

$('.image1-r artemisia button, .close').on('click',function(){
    $('.overlay').toggleClass('hidden');
})

// get modal element
// var modal= document.getElementsByClassName("modal-container-a1");
//  var img = document.getElementById('artemesia1');
//  var modalImg = document.getElementById('img1');
//  var captionText = document.getElementById('caption');

$('.image1-r artemisia button').on('click',function(){
    const $overlay = $('<div>').addClass('overlay').appendTo('body')
    const $modalContainerA1 = $('Div').addClass('modal-container-a1').appendTo($overlay)
   
    $('#img1').appendTo($modalContainerA1)
    $('<p>').text('Judith Beheading Holofernes')
    $('<button>').text('close').appendTo($modalContainerA1).on('click', function(){
        $overlay.remove()
    })
})

if (!buttonShouldDisplay){
    $('.buttonholder').remove()
}
if (!shouldShowModal){
    $('.overlay').remove()
}






//  img.onclick = function(){
//      modal.style.display = "block";
//      modalImg.scr = this.scr;
//      captionText.innerHTML = this.addEventListener;
//  }
// // get span element that closes the modal
//  var span = document.getElementsByClassName("close") [0];

// //  when user cliclks on span x close modal
// span.onclick = function(){
//     modal.style.diplay = "none";
// }
