$(document).ready(function(){
    // alert("Hello Msgcopy!");

    $('a').on('click',function(){
    	// alert($(this).attr('id'))
    	var id = $(this).attr('id').split('_')[1]
    	// alert(id)
    	$('.tabpage a').each(function(){
    		$(this).removeClass('active')
    	})
    	$(this).addClass('active')
    	$('.pageleft .content').hide();
    	$('#'+id).show()
    })

    $('.slide').unslider();

    $('#show-all').html('')
    $('#brand').html('')
    $('#one-page').html('')
    $('#wordpress').html('')
    $('#freebies').html('')

    for (var i = 0; i < 12; i++) {
        $('#show-all').append("<div class=\"item\"><img src=\"img\/item.JPG\" alt=\"item\"><h3>影之刃 SHOW ALL 填充内容<span><img src=\"img\/star.JPG\" alt=\"star\"></span></h3><p>《影之刃》是由网易注资，灵游坊团队打造的国产原创手机游戏。 </p></div>")
        $('#brand').append("<div class=\"item\"><img src=\"img\/item.JPG\" alt=\"item\"><h3>影之刃 BRAND 填充内容<span><img src=\"img\/star.JPG\" alt=\"star\"></span></h3><p>《影之刃》是由网易注资，灵游坊团队打造的国产原创手机游戏。 </p></div>")
        $('#one-page').append("<div class=\"item\"><img src=\"img\/item.JPG\" alt=\"item\"><h3>影之刃 ONE PAGE 填充内容<span><img src=\"img\/star.JPG\" alt=\"star\"></span></h3><p>《影之刃》是由网易注资，灵游坊团队打造的国产原创手机游戏。 </p></div>")
        $('#wordpress').append("<div class=\"item\"><img src=\"img\/item.JPG\" alt=\"item\"><h3>影之刃 WORD PRESS<span><img src=\"img\/star.JPG\" alt=\"star\"></span></h3><p>《影之刃》是由网易注资，灵游坊团队打造的国产原创手机游戏。 </p></div>")
        $('#freebies').append("<div class=\"item\"><img src=\"img\/item.JPG\" alt=\"item\"><h3>影之刃 FREEBIES 填充内容<span><img src=\"img\/star.JPG\" alt=\"star\"></span></h3><p>《影之刃》是由网易注资，灵游坊团队打造的国产原创手机游戏。 </p></div>")
    };
});