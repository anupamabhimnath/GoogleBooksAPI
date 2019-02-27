$(document).ready(function() {
    $("#myform").submit(function(){
        var search = $("#books").val();
        if(search == '')
        {
            alert('Please enter something in the given field');
        }
        else
        {
            var url ='';
            var img = '';
            var author = '';
            var title = '';
            
            console.log(search) 

            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){

                for(var i=0;i<response.items.length;i++)
                {
                    //get the title of books
                   title= $('<h5 class="center-align black-text">' + response.items[i].volumeInfo.title + '</h5>');

                    author= $('<h5 class="center-align black-text">' + response.items[i].volumeInfo.authors + '</h5>');

                    img = $('<img class = "aligning card z-depth-5" id = "dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id = "imagebutton" class =" btn red aligning">Read More</button></a>'); 
 
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;

                    img.attr('src', url); // attach the image url

                    
                    title.appendTo("#result");

                    author.appendTo("#result");

                    img.appendTo("#result");


                    
                }
            });

          

        }

          return false;
    });



});


