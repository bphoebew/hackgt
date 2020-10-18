var newTaskList = JSON.parse(localStorage.getItem("savedList"));

$('.task__add').on('focus',function(){
  $(this).val('');
});

$('.task__add').on('blur',function(){
  $(this).val('+ add new task');
});

$('form').on('submit', function(event){
  event.preventDefault();

  var taskText = $('.task__add').val();
  var tasksN = $('.task').length + 1;

  var newTask = '<label for="task--' + tasksN + '" class="task task--new"><input class="task__check" type="checkbox" id="task--' + tasksN + '" /> <div class="task__field task--row">' + taskText + '<button class="task__important"><i class="fa fa-check" aria-hidden="true"></i></button></div></label>'

  $('.task__list').append(newTask);

  newTaskList.push(newTask)
  $('.task__add').val('');
  localStorage.setItem("savedList", JSON.stringify(newTaskList));
  checkList();
});


var lastDeletedTask = '';

function checkList() {


  $('.task').each(function(){

    var $field = $(this).find('.task__field');
    var mousedown = false;


    $field.on('mousedown', function(){
        mousedown = true;
        $field.addClass('shaking');
        setTimeout(deleteTask,1000)
    });

    $field.on('mouseup', function(){
        mousedown = false;
        $field.removeClass('shaking');
    });

    function deleteTask(){
      if(mousedown) {
        $field.addClass('delete');
        lastDeletedTask = $field.text();
        console.log(lastDeletedTask);
        // newTaskList.splice(indexOf(lastDeletedTask), 1)
        // localStorage.setItem("savedList", JSON.stringify(newTaskList));
        // $('.task__list').remove(newTask)

        setTimeout(function(){
           $field.remove();
        }, 200);
       } else {return;}
    }

    }

  );
}

window.onload = function() {
  var pastPage = JSON.parse(localStorage.getItem("savedList"));
  for (var i = 0; i < pastPage.length; i++) {
    var added = pastPage[i]
    $('.task__list').append(added);
    //checklist();
}
}

checkList();
