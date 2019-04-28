var tapped=false
$("#start").on("touchstart",function(e){
    if(!tapped){ //if tap is not set, set up single tap
        tapped=setTimeout(function(){
            tapped=null
            console.log("TAP");
            //insert things you want to do when single tapped
        },300);   //wait 300ms then run single click code
    } else {    //tapped within 300ms of last tap. double tap
        clearTimeout(tapped); //stop single tap callback
        tapped=null
        console.log("DOUBLE TAP");
        //insert things you want to do when double tapped
    }
    e.preventDefault()
});

// flow.DoubleTap = Class.extends({
  
//   init: function()

// });