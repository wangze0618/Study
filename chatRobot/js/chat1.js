$(function () {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()
    $('#btnSend').on('click', function () {
        let ipt_val = $('#ipt').val().trim();

        if (ipt_val.length <= 0) {
            return $('#ipt').val('')
        };

        // 将用户输入内容 渲染到页面上
        $('#talk_list').append(`<li class="right_word">
        <img src="img/person02.png" /> <span>${ipt_val}</span>
        </li>`)
        $('#ipt').val('');
        getMsg(ipt_val)
        resetui();

        // 获取机器人返回内容 并渲染到页面上
        function getMsg(text) {
            $.ajax({
                type: "get",
                url: "http://www.liulongbin.top:3006/api/robot",
                data: {
                    spoken: text
                },
                dataType: "json",
                success: function (res) {
                    //  将机器人返回内容 渲染到页面上
                    $('#talk_list').append(`<li class="left_word">
                    <img src="img/person01.png" /> <span>${res.data.info.text}</span>
                     </li>`)
                    getVoice(res.data.info.text)
                    resetui();

                }
            });
        };
        function getVoice(text) {
            $.ajax({
                type: "get",
                url: "http://www.liulongbin.top:3006/api/synthesize",
                data: {
                    text: text
                },
                success: function (res) {
                    $('#voice').attr('src', res.voiceUrl);
                }
            });
        };
    });


    $('#ipt').on('keyup', function (e) {
        if (e.keyCode === 13) {
            $('#btnSend').click();
            resetui();
        };
    });



});