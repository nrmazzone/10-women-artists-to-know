
// show modal
const shouldShowModal = true;
// console.log(123);

// $('.image1-r artemisia button, .close').on('click',function(){
//     $('.overlay').toggleClass('hidden');
// })

// get modal element
// var modal= document.getElementsByClassName("modal-container-a1");
//  var img = document.getElementById('artemesia1');
//  var modalImg = document.getElementById('img1');
//  var captionText = document.getElementById('caption');

$('#artemesia1').on('click',function(){
    const $overlay = $('<div>').addClass('overlay').appendTo('body')
    const $modalContainerA1 = $('Div').addClass('modal-container-a1').appendTo($overlay)
    $('<button>').text('close').appendTo($modalContainerA1).on('click', function(){
        $overlay.remove()
    $('<div>').img('images/artemisia-1lrg.png').appendTo($modalContainerA1)
    $('<p>').text('Judith Beheading Holofernes').appendTo($modalContainerA1)
   
    })
})

// if (!buttonShouldDisplay){
//     $('.buttonholder').remove()
// }
// if (!shouldShowModal){
//     $('.overlay').remove()
// }






