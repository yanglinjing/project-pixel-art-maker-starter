
// Select size input
let height, width;
//定义初始值
height = $('#input_height').val();//行
width = $('#input_width').val();//列

//输入值变化时
$('#input_height').change(function(){
  height = $(this).val();//行
})
$('#input_width').change(function(){
  width = $(this).val();//列
})

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function makeGrid(){

    alert("Make a " + height + " x " + width + " picture?");
    for (let row=0; row<height; row++){//小于而不是小于等于
        $('#pixel_canvas').append("<tr></tr>");
    }
    for(let column=0; column<width; column++){
      $('#pixel_canvas').children('tr').append("<th></th>");
    }
    event.preventDefault();
});


// Select color input
let color;
color = $('#colorPicker').val();

//$(color).onchange(function(){});
