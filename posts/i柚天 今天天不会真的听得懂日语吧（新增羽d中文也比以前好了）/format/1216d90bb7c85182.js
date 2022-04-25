
    $('.img-uploader-wrapper').bind('click', function(e){
        $(this).find('.img-upload-input').click();
    })
    $('.img-upload-input').bind('click', function(e){
        e.stopPropagation();
    });
    $('.img-upload-input').bind('change', function(){
        if(!this.files.length) return;
        if(!window.FileReader) return;
        var reader = new FileReader();
        var that = this;
        $(this).parent().addClass('added');
        reader.onload = function(){
            $(that).parent().prepend('<img class="img-preview" src="' + reader.result + '">')
        }
        reader.readAsDataURL(this.files[0]);
    })
    $('.remove-img').bind('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().find('.img-preview').remove();
        $(this).parent().find('.img-upload-input').val('');
        $(this).parent().removeClass('added');
    })

    $("#joingroupbtn").click(function(e){
        url = "/j/group/" + $(this).attr("name") + "/join";
        if(window._USER_ABNORMAL) {
            e.preventDefault()
            window.show_abnormal && window.show_abnormal()
            return
        }
        $.post_withck(url, {},
            function(sjson){
                var ret = eval("(" + sjson + ")");
                $("#joingroupbtn").hide();
                if (ret.result=="toomany"){
                    $("#replysect").html('<p class="attn" align="right">你已经加入了500个小组，无法再加入更多小组。</p>');
                }else{
                    $("#replysect").html('<br/><h2>你现在加入了这个小组，可以发表回应</h2><div class="txd comment-form"><form name="comment_form" method="post" action="add_comment"><textarea name="rv_comment" rows="8" cols="54"></textarea><br/><input type="hidden" name="start" value="100"/><span class="bn-flat-hot rr"><input type="submit" value="发送"/></span><span><label class="pl share-label share-shuo"><input type="checkbox" name="sync_to_mb"/>转发到广播 </label> </span></form></div>');
                }
            });
        return false;
    });

