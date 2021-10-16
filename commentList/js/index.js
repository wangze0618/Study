$(function () {





    // 获取评论
    // 渲染评论 到页面上
    let array = [];
    function getComment() {
        $.ajax({
            type: "get",
            url: "http://www.liulongbin.top:3006/api/cmtlist",
            dataType: "json",
            success: function (res) {
                console.log(res);
                res.data.forEach(con => {
                    // console.log(con.content);
                    array.push(
                        `<li class="list-group-item">
                        <span class="badge badge-yellow">${con.time}</span>
                        <span class="badge badge-blue">${con.username}</span>
                         ${con.content}
                    </li>`)
                    $('.list-group').empty().append(array.join(''))
                })
            }
        });
    }

    getComment()














})