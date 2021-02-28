
    const clear= document.getElementById("refresh");
    const dateElement= document.getElementById("date");
    const list = document.getElementById("list");
    
    const add=document.querySelector(".add");

    //Show today's date
    const options={weekday:"long", month:"short", day:"numeric"};
    const today=new Date();

    dateElement.innerHTML=today.toLocaleDateString("en-US", options);
  
    
    add.addEventListener("click", ()=>{
        let input=document.getElementById("item").value;
        
        const text='<li class="item"><p><i class="material-icons check">check_box_outline_blank</i><span>' + input +'</span> <i class="material-icons" id="delete">delete</i></p></li>'; 

        const position="beforeend";
        list.insertAdjacentHTML(position, text);

    
      
    });

    let check = document.querySelector(".check");
    

//     check.addEventListener("click", ()=>{
//         console.log(check);
//   })


    
    












