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
//    alert("Make a " + height + " x " + width + " picture?");
//画表格
    for (let row=0; row<height; row++){//小于而不是小于等于
        table.append("<tr></tr>");
    }
    for(let column=0; column<width; column++){
        table.children('tr').append("<td style=\"background-color:\"></td>");
    }
    event.preventDefault();//防止一提交就归零
});


//---------调色盘部分-----------
let color;
color = "#ff80ff";//定义颜色初始值
$('#myColor').text(color);//文字显示当前颜色值
//更改颜色值
$('#colorPicker').change(function(){
    color = $(this).val();
    $('#myColor').text(color);//文字显示当前颜色值
});

//---------绘图部分-----------

//点击变色
table.on('click', 'td', function(){
  $(this).css({"background-color":color, "border-color":color});
});

//-----------按下鼠标+滑动=变色----------
let clicking = false;

table.on('mousedown', 'td', function(){
  clicking = true;
});

$(document).on('mouseup', function(){
  clicking = false;
});

table.on('mousemove', 'td', function(){
  if(clicking == true){
    $(this).css({"background-color":color, "border-color":color});
  };
});
//-----------按下鼠标+滑动=变色 end----------


//------------鼠标悬停时，格子变色-----------
let tdColor;


table.on('mouseenter', 'td', function(){
    tdColor = $(this).css("background-color");//获取td的颜色-可用
    $(this).css("background-color", color); //可用
    $('#tdColor').text(tdColor);//文字表述获取的td颜色
});

table.on('mouseleave', 'td', function(){
    $(this).css("background-color", tdColor);//可用

//    var htmlString = $(this).html();
//    $('#tdHtml').text(htmlString);

});
