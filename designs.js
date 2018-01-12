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
        table.children('tr').append("<td style=\"background-color:#fff\"></td>");
    }
    event.preventDefault();//防止一提交就归零
});


//---------调色盘部分-----------
let color;
color = "#ff80ff";//定义颜色初始值
$('#myColor').text(color);//文字显示当前颜色值
$('#colorPicker').change(function(){//更改颜色值
    color = $(this).val();
    $('#myColor').text(color);//文字显示当前颜色值
});

//---------绘图部分-----------
table.on('click', 'td', function(){//点击变色
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


var rgb;
table.on('mouseenter', 'td', function(){
    rgb = $(this).css("background-color");//获取td的颜色-可用
    $(this).css("background-color", color); //可用
    $('#tdColor').text(rgb2hex(rgb));//文字表述获取的td颜色
});

//-----------rgb转换hex（因为jQuery提取的颜色格式rgb hex rgba各不相同）----------
function rgb2hex(rgb) {
    let preColor;
    if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(rgb)){
      preColor=rgb;
      return preColor;
    }else{//如何应对rgba(0,0,0,0)呢？暂时把背景色设置成#fff
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2);}
      preColor = "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
      return preColor;
    }
}
//-----------rgb转换hex-----end---------------

table.on('mouseleave', 'td', function(){
    $(this).css("background-color", rgb2hex(rgb));//可用

//    var htmlString = $(this).html();
//    $('#tdHtml').text(htmlString);

});
