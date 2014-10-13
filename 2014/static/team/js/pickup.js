// Attach a submit handler to the form
$( "#message_to_6" ).submit(function( event ) {
    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $( this ),
    sender_name = $form.find( "input[name='name']" ).val(),
    url = $form.attr( "action" );

    // Send the data using post
    var posting = $.post( url, { name: sender_name } );

    // Put the results in a div
    posting.done(function( data ) {
        console.log(data);
//    var content = $( data ).find( "#content" );
//    $( "#result" ).empty().append( content );
    });
});


//function send_message(pickup_id) {
////  var id = $(this).val();
//
//  var onData = function(o) {
//    console.log(o);
//  };
//
//  $.post("/signup/pickup/ajax_send_message/" + pickup_id + "/",
//    {
//      name:"Donald Duck",
//      email:"test@tester.com"
//    },
//    function(data,status){
//      alert("Data: " + data + "\nStatus: " + status);
//  });

//
//  $.ajax({
//    url: "/signup/pickup/ajax_send_message/" + pickup_id + "/",
//    success: onData,
//    dataType: 'json'
//  });
//};

