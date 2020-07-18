var username = "",name="";
function askUsername() {
  send_message("Hello, What's Your name?");
}
 
function send_message(message) {
  var prevMessage = $("#container").html();
  if(prevMessage!=0)
  prevMessage = prevMessage+"<br/>";
 
  $("#container").html(prevMessage+ "<span class='current_message'><span class='bot'> Chatbot: </span>" + message+"</span>");
  $(".current_message").hide();
  $(".current_message").delay(400).fadeIn();
  $(".current_message").removeClass("current_message");
 
}
 
function ai(message) {
	message = message.toLowerCase();
  if (username.length <3) {
    username = message;
    send_message("Welcome " + message+ ", What kind of person are you?");
  }
 
 if(message.indexOf("kind hearted")>=0|| message.indexOf("and you")>=0)
  {
    send_message( "That's amazing bro:)..How can I help you? ");
  }
  if(message.indexOf("how are you")>=0|| message.indexOf("and you")>=0)
  {
    send_message( "I am good. Thanks for asking and How you doin?");
  }
  
  if(message.indexOf("thanks")>=0|| message.indexOf("and you")>=0)
  {
    send_message( "Anytime:)");
  }
 
  if(message.indexOf("time")>=0|| message.indexOf("can you tell me time")>=0)
  {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    send_message("Current Time is :  "+ h+":"+m );
  }
 
}
 
$(function() {
 
  askUsername();
 
  $("#textbox").keypress(function(event) {
    if (event.which == 13) {
      //if ($("#enter").prop("checked")) {
        event.preventDefault();
        $("#send").click();
      //}
    }
  });
 
  $("#send").click(function() {
	 if($("#textbox").val()!=""){
		  if(name==""){
		  name=$("#textbox").val();
	  }
	  var updateName = (name=="")?"You":name;
    var username = "<span class='username'>"+updateName+" : </span>"
    var message = $("#textbox").val();
    $("#textbox").val("");
 
    var prevMessage = $("#container").html();
 
    // console.log(prevMessage.length);
    if (prevMessage.length != 0 || prevMessage != "")
      prevMessage = prevMessage + "<br/>";
 
    $("#container").html(prevMessage + username + message);
 
    $("#container").scrollTop($("#container").prop("scrollHeight"));
 
    ai(message);
	 }
 
  });
 
 
});
 

function openForm() {
	testAjax();
	  document.getElementById("myForm").style.display = "block";
	   document.getElementById("chatButtonId").style.display = "none";
	}

	function closeForm() {
	  document.getElementById("myForm").style.display = "none";
	   document.getElementById("chatButtonId").style.display = "block";
	}
	
	
	
	
	function testAjax(){
		console.log("Here in ajax...")
		var request = new XMLHttpRequest();
		request.open('GET', '/Chatbot/welcome', true);  //"true" makes the request asynchronous
		 
		request.onreadystatechange = function() {
		    if (request.readyState == 4) {
		        if (request.status == 200)
		        {
		           console.log("in success")
		        }
		        else
		        {
		        	console.log("in fail")
		        }
		    }
		};
		 
		request.send(null)
	}
