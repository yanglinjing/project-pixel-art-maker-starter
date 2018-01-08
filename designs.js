// -------表格部分---------
let height, width;
//定义初始值
//height = $('#input_height').val();//行
//width = $('#input_width').val();//列
height=1;
width=1;

//输入值变化时
$('#input_height').change(function(){
  height = $(this).val();//行
});
$('#input_width').change(function(){
  width = $(this).val();//列
});

// When size is submitted by the user, call makeGrid()
let form, table;
form = $("#sizePicker");
table = $('#pixel_canvas');

form.submit(function makeGrid(){
//清除现有的height和width
    table.find('*').remove();//.find(selector)selector是必填的
//确认表格尺寸对话框
    alert("Make a " + height + " x " + width + " picture?");
//画表格
    for (let row=0; row<height; row++){//小于而不是小于等于
        table.append("<tr></tr>");
    }
    for(let column=0; column<width; column++){
        table.children('tr').append("<td></td>");
    }
    event.preventDefault();//防止一提交就归零
});


//---------颜色部分-----------
let color;
//定义默认值
//color=black;
//更改颜色值
$('#colorPicker').change(function(){
    color = $(this).val();
    $('#myColor').text(color);
});

let td;
td = table.find('td');
td.hover(function(){
//    $(this).attr("value", "#ff0080")
    $(this).css("background-color", color);
});
