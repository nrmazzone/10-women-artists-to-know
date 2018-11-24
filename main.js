
// show modal
const shouldShowModal = true;
console.log(123);

$('.modal button, .close').on('click', function() {
  $('.overlay').toggleClass('hidden');
})
$('#artemesia1').on('click',function(){
    const $overlay = $('<div>').addClass('overlay').appendTo('body')
    const $modalContainer1 = $('Div').addClass('modal-container 1').appendTo($overlay) 
    $('.art1').append('<img src="images/artimesia-1lrg.png"/><br/>').append($(this).html());
        $('<div>').text('Judith Beheading Holofernes').appendTo($modalContainer1)
        $('<button>').text('X').appendTo($modalContainer1).on('click', function() {
            $overlay.remove()
    })
})

// $('#artemesia2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer2 = $('Div').addClass('modal-container 2').appendTo($overlay) 
//     $('.art2').append('<img src="images/artimesia2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Conversion of the Magdalene').appendTo($modalContainer2)
//         $('<button>').text('X').appendTo($modalContainer2).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#julia1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer3 = $('Div').addClass('modal-container 3').appendTo($overlay) 
//     $('.art1').append('<img src="images/artimesia-1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Self Portrait').appendTo($modalContainer3)
//         $('<button>').text('X').appendTo($modalContainer3).on('click', function() {
//             $overlay.remove()
//     })
// })
// $('#julia2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer4 = $('Div').addClass('modal-container 4').appendTo($overlay) 
//     $('.art1').append('<img src="images/artimesia-1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('The Martyre of Saint Jean L Evangeliste' ).appendTo($modalContainer4)
//         $('<button>').text('X').appendTo($modalContainer4).on('click', function() {
//             $overlay.remove()
//     })
// })


if (!buttonShouldDisplay){
    $('.button').remove()
}
if (!shouldShowModal){
    $('.overlay').remove()}











