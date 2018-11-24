
// show modal
// const shouldShowModal = true;
// console.log(123);

// $('.image1-r artemisia button, .close').on('click',function(){
//     $('.overlay').toggleClass('hidden');
// })

// get modal element
// var modal= document.getElementsByClassName("modal-container-a1");
//  var img = document.getElementById('artemesia1');
//  var modalImg = document.getElementById('img1');
//  var captionText = document.getElementById('caption');

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('artemesia1');
var modalImg = document.getElementById("art1");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}







// $('#artemesia1').on('click',function(){
//     const $overlay = $('<div>').addClass('overlay').appendTo('body')
//     const $modalContainerA1 = $('Div').addClass('modal-container-a1').appendTo($overlay)
//     $('<button>').text('close').appendTo($modalContainerA1).on('click', function(){
//         $overlay.remove()
//         $('.art1').append('<img src="images/artemisia-1lrg.png"/><br/>').append($(this).html());
//     $('<p>').text('Judith Beheading Holofernes').appendTo($modalContainerA1)
   
//     })
// })

// if (!buttonShouldDisplay){
//     $('.buttonholder').remove()
// }
// if (!shouldShowModal){
//     $('.overlay').remove()
// }






