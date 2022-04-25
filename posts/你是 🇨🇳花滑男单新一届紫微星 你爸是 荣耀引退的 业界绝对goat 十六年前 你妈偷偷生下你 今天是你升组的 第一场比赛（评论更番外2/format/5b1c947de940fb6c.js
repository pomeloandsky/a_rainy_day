
;
var dialogJoinGroup = $(".dialog_join_group");
window._JOIN_POPUP_DIALOG = function() {
    dialogJoinGroup.css('display', 'block');
}
$(".join_group_cancel, .join_group_close").bind('click', function(e) {
    dialogJoinGroup.css('display', 'none');
})
;
    Do = (typeof Do === 'undefined')? $ : Do;
    var div = ".comment-report-wrapper";
    function addReportLink(){
      $.each($("#comments:not('.sns-comments') .comment-item ".concat(div)), function(i, el){
          if ($(el).find(".comment-report").length==0){
            $(el).append('<div class="comment-report"><a rel="nofollow" href="javascript:void(0)">投诉</a></div>');
          }
      });
    };
    Do(function(){
        $("#comments").delegate(".comment-item", 'mouseenter mouseleave', function (e) {
          switch (e.type) {
            case "mouseenter":
              $(this).find(".comment-report").css('visibility', 'visible');
              break;
            case "mouseleave":
              $(this).find(".comment-report").css('visibility', 'hidden');
              break;
          }
        });
        $("#comments").delegate(".comment-report a", 'click', function (e) {
            e.preventDefault();
            var auditUrl = "https://www.douban.com/misc/audit_report?url=",
                opt = "comment_id";
            var obj = $(e.target).closest('.comment-item');
            var cid = obj.data("cid");

                var topic_id = $('#link-report_group').data('id');

            var url = "https://www.douban.com/group/topic/261718805/?".concat(opt, '=', cid);
            var type = ['comment']
                var reasons = JSON.parse("{\"group_reasons\":[],\"douban_reasons\":[{\"reason\":\"辱骂攻击\",\"type\":1,\"desc\":\"用脏话\\\/侮辱性词汇攻击他人\"},{\"reason\":\"引战\",\"type\":1,\"desc\":\"恶意引导不同群体互相攻击\"},{\"reason\":\"广告\",\"type\":1,\"desc\":null},{\"reason\":\"色情低俗\",\"type\":1,\"desc\":null},{\"reason\":\"政治相关\",\"type\":1,\"desc\":null},{\"reason\":\"违法违规\",\"type\":1,\"desc\":null},{\"reason\":\"未授权下载资源\",\"type\":1,\"desc\":null},{\"reason\":\"泄露他人隐私\",\"type\":1,\"desc\":null},{\"reason\":\"影响评分公正性\",\"type\":1,\"desc\":null},{\"reason\":\"涉未成年人\",\"type\":1,\"desc\":null},{\"reason\":\"饭圈乱象\",\"type\":1,\"desc\":null},{\"reason\":\"涉重大灾难的不当言论\",\"type\":1,\"desc\":null}]}");
            if (/^\/subject/.test(location.pathname)) {
                type.push('subject')
            }
            var is_group_member = false;

            generate_report_dialog({
                report_url: url,
                type: type,
                reasons: reasons,
                group_id: '674168',
                comment_id: String(cid),
                topic_id: String(topic_id),
                is_group_member: is_group_member
            });
        });
        addReportLink();
    });
;
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
                    $("#replysect").html('<br/><h2>你现在加入了这个小组，可以发表回应</h2><div class="txd comment-form"><form name="comment_form" method="post" action="add_comment"><textarea name="rv_comment" rows="8" cols="54"></textarea><br/><input type="hidden" name="start" value="1200"/><span class="bn-flat-hot rr"><input type="submit" value="发送"/></span><span><label class="pl share-label share-shuo"><input type="checkbox" name="sync_to_mb"/>转发到广播 </label> </span></form></div>');
                }
            });
        return false;
    });

