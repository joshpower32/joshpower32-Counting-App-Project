$(document).ready(function(){
    console.log('ready'); 

    let count = 0;  
    console.log(count); 
 
    
    $('.subtraction').on('click', () => {
        count = (count - 1); 
        $('.count_label').text(count); 
        console.log(count); 
    }); 


    $('.clear').on('click', () => {
        count = (0); 
        $('.count_label').text(count); 
        console.log('clear'); 
    });


    $('.addition').on('click', () => {
        count = (count + 1);
        $('.count_label').text(count); 
        console.log(count); 
    });


    
    $('.submit').on('click', (event) => {
        event.preventDefault(); 
        
        // get the class of .goal input and convert it to a number instead of a string value. 
        let goal = parseInt($('.goal').val(), 10); 
        console.log("Goal:", goal); 


        // check and see if the count variable is equal to the goal variable 
        if (count == goal){
            alert(`goal reached`); 
        }; 

        // Have to click the submit button twice for the alert to fire, not sure what the issue is here, even used chatGPT for help still needs two clicks. 


        // update the h2 to show your goal 
        $('h2').text(`Your Goal Is ${goal}`); 
        
    })
    })
    
  


















