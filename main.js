


const shouldShowModal = true;
console.log(123);

$('.modal button, .close').on('click', function() {
  $('.overlay').toggleClass('hidden');
})

$('#artemesia1').on('click',function(){
    const $overlay = $('<div>').addClass('overlay').appendTo('body')
    const $modalContainer1 = $('Div').addClass('modal-container1').appendTo($overlay) 
    
     $('.art1').append('<img src="images/artimesia-1lrg.png"/>').append($(this).html());
     $('.caption').text('Judith Beheading Holofernes').appendTo($modalContainer1)
     $('<button>').text('X').appendTo($modalContainer1).on('click', function() {
            $overlay.remove()
    })
})

// $('#artemesia2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer2 = $('Div').addClass('modal-container2').appendTo($overlay) 
//     $('.art2').append('<img src="images/artimesia2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Conversion of the Magdalene').appendTo($modalContainer2)
//         $('<button>').text('X').appendTo($modalContainer2).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#julia1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer3 = $('Div').addClass('modal-container3').appendTo($overlay) 
//     $('.art3').append('<img src="images/julia1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Self Portrait').appendTo($modalContainer3)
//         $('<button>').text('X').appendTo($modalContainer3).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#julia2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer4 = $('Div').addClass('modal-container4').appendTo($overlay) 
//     $('.art4').append('<img src="images/julia2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('The Martyre of Saint Jean L Evangeliste' ).appendTo($modalContainer4)
//         $('<button>').text('X').appendTo($modalContainer4).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#morisot1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer5 = $('Div').addClass('modal-container5').appendTo($overlay) 
//     $('.art5').append('<img src="images/berthe1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Reading' ).appendTo($modalContainer5)
//         $('<button>').text('X').appendTo($modalContainer5).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#morisot2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer6 = $('Div').addClass('modal-container6').appendTo($overlay) 
//     $('.art6').append('<img src="images/berthe2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('The Martyre of Saint Jean L Evangeliste' ).appendTo($modalContainer6)
//         $('<button>').text('X').appendTo($modalContainer6).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#cassatt1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer7 = $('Div').addClass('modal-container7').appendTo($overlay) 
//     $('.art7').append('<img src="images/mary1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Mother Combing Childs Hair' ).appendTo($modalContainer7)
//         $('<button>').text('X').appendTo($modalContainer7).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#cassatt2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer8 = $('Div').addClass('modal-container8').appendTo($overlay) 
//     $('.art8').append('<img src="images/mary2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('The Bath' ).appendTo($modalContainer8)
//         $('<button>').text('X').appendTo($modalContainer8).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#munter1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer9 = $('Div').addClass('modal-container9').appendTo($overlay) 
//     $('.art9').append('<img src="images/gabriele1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Portrait of Marianne von Werefkin' ).appendTo($modalContainer9)
//         $('<button>').text('X').appendTo($modalContainer9).on('click', function() {
//             $overlay.remove()
//     })
// })


// $('#munter2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer10 = $('Div').addClass('modal-container10').appendTo($overlay) 
//     $('.art10').append('<img src="images/gabriele2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Self-portrait in front of an Easel' ).appendTo($modalContainer10)
//         $('<button>').text('X').appendTo($modalContainer10).on('click', function() {
//             $overlay.remove()
//     })
// })


// $('#kollwitz1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer11 = $('Div').addClass('modal-container11').appendTo($overlay) 
//     $('.art11').append('<img src="images/kathe1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Woman with Dead Child').appendTo($modalContainer11)
//         $('<button>').text('X').appendTo($modalContainer11).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#kollwitz2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer12 = $('Div').addClass('modal-container12').appendTo($overlay) 
//     $('.art12').append('<img src="images/kathe2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('The Survivors').appendTo($modalContainer12)
//         $('<button>').text('X').appendTo($modalContainer12).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#mitchell1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer13 = $('Div').addClass('modal-container13').appendTo($overlay) 
//     $('.art13').append('<img src="images/joan1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Joan Mitchell 1961').appendTo($modalContainer13)
//         $('<button>').text('X').appendTo($modalContainer13).on('click', function() {
//             $overlay.remove()
//     })
// })


// $('#mitchell2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer14 = $('Div').addClass('modal-container14').appendTo($overlay) 
//     $('.art14').append('<img src="images/joan2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Untitled 1992').appendTo($modalContainer14)
//         $('<button>').text('X').appendTo($modalContainer14).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#frankenthaler1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer15 = $('Div').addClass('modal-container15').appendTo($overlay) 
//     $('.art15').append('<img src="images/helen1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Blue Bellows').appendTo($modalContainer15)
//         $('<button>').text('X').appendTo($modalContainer15).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#frankenthaler2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer16 = $('Div').addClass('modal-container16').appendTo($overlay) 
//     $('.art16').append('<img src="images/helen2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Blue Bellows').appendTo($modalContainer16)
//         $('<button>').text('X').appendTo($modalContainer16).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#joffe1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer17 = $('Div').addClass('modal-container17').appendTo($overlay) 
//     $('.art17').append('<img src="images/chantel1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Chantal Joffe').appendTo($modalContainer17)
//         $('<button>').text('X').appendTo($modalContainer17).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#joffe2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer18 = $('Div').addClass('modal-container18').appendTo($overlay) 
//     $('.art18').append('<img src="images/chantel2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('The squid and the whale').appendTo($modalContainer18)
//         $('<button>').text('X').appendTo($modalContainer18).on('click', function() {
//             $overlay.remove()
//     })
// })


// $('#saville1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer19 = $('Div').addClass('modal-container19').appendTo($overlay) 
//     $('.art19').append('<img src="images/jenny1lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('Reverse').appendTo($modalContainer19)
//         $('<button>').text('X').appendTo($modalContainer19).on('click', function() {
//             $overlay.remove()
//     })
// })

// $('#saville2').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainer20 = $('Div').addClass('modal-container20').appendTo($overlay) 
//     $('.art20').append('<img src="images/jenny2lrg.png"/><br/>').append($(this).html());
//         $('<div>').text('The blue Pieta').appendTo($modalContainer20)
//         $('<button>').text('X').appendTo($modalContainer20).on('click', function() {
//             $overlay.remove()
//     })
// })




if (!buttonsShouldDisplay){
    $('.buttonholder').remove()
}
if (!shouldShowModal){
    $('.overlay').remove()
}











