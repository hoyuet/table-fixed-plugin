;(function(){
	var div_height=300;
	var table_html='';
	for(var i=0;i<20;i++)
	{
	table_html+='<tr><td class="tr_first_td">我是中国</td><td>2</td><td>3</td><td>4</td><td>5</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>'
	}
	iF_Scroll(div_height);
function iF_Scroll(div_height){
	var left=$('.iTable_div').offset().left;
	var top=$('.iTable_div').offset().top;
	$('#itable').html(table_html).width(15*130);
	$(".iTable_div").height(div_height);
	$(".itable_content").height(div_height-17);
	$(".iLeft_tit").height(div_height-17);
	var iLeft_tit_height=div_height-17;
	var iTop_tit_left=$(".iTop_tit").offset().left;
	var iTop_tit_width=$(".iTop_tit").width();
	$(".itable_content").scroll(function(){
	var div_scrollLeft=$(this).scrollLeft();
	var div_scrollTop=$(this).scrollTop();
	$(".iLeft_tit").css({"top":-div_scrollTop+"px","height":iLeft_tit_height+div_scrollTop+"px"});
	$(".iTop_tit").css({"left":iTop_tit_left-div_scrollLeft-left,"width":iTop_tit_width+div_scrollLeft+"px"})
	$("#iFixed_li").css("top",div_scrollTop)
	})
}
})();