$(
    $(".add").click(function(){
        let inputVal= $("#todo").val();
        let count=0;
        if (inputVal != " "){
        count++;
        $(".container-0").css("display", "flex");
        //$("#task").text(inputVal);
        $(".todo-list").append('<li><div class="list"><input type="checkbox" id="check"'+ count
         + ' name="check"><label for="check'+ count + '"></label><span id="task">'+ inputVal 
         + '</span></div><span class="remove"><i class="material-icons">delete</i></span></li>')

        }
        $("#todo").val(" ")
    }),

    $("input[type='checkbox']").click(function(){
        if($(this).is(":checked")){
            alert("Are you done with this task?");
        }
    })

    // $(".remove").click(function(){
    //     alert ("Are you sure you want to delete?")
    // })
   
)





