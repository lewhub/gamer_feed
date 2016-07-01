$(".carousel").carousel({
    interval: 3000,
    pause: ""
})
$("#left-control-arrow").on("click", function(){
   $("#left-arrow-icon").animate({
       opacity: 0.5
   }, 200, function(){
       $("#left-arrow-icon").animate({
           opacity: 1.0
       }, 200)
   })
})

$("#right-control-arrow").on("click", function(){
   $("#right-arrow-icon").animate({
       opacity: 0.5
   }, 200, function(){
       $("#right-arrow-icon").animate({
           opacity: 1.0
       }, 200)
   })
})


$("#open").on("click", function(){
    // $('#modal1').openModal()
    $('#modal1').modal("show");
})

$("#close-button").on("click", function(){
        $('#modal1').modal("hide");
})



