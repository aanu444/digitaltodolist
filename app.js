$(document).ready(function(){
    const clear= $("#refresh");
    const dateElement= $("#date");
    const list = $("#list");
    const input=$("#item");
    const add=$(".add");

    //Show today's date
    const options={weekday:"long", month:"short", day:"numeric"};
    const today=new Date();

    dateElement.text(today.toLocaleDateString("en-US", options));
  

    function firstFunc(toDo){
      const text='<li class="item"><p><i class="material-icons">check_box_outline_blank</i> <span>'+toDo+'</span> <i class="material-icons" id="delete">delete</i></p></li>'; 
     
     list.append(text);
    };

    
    $(add).click(function(){
        firstFunc(input.value);
        

    }

)
   

   
})










