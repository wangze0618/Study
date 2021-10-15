$(function () {
    render()
    // 按下回车 把完整数据 存储到本地存储里
    $('#title').on("keydown", function (event) {
        if (event.keyCode === 13) {
            let localData = getData();
            // 更新本地存储数据
            localData.push({
                title: $(this).val(),
                done: false
            });

            // 存储数据
            saveData(localData);

            // 渲染数据
            render()
        };
    });

    // 删除数据
    $('ol').on('click', 'a', function () {
        let data = getData();
        // console.log(data);
        // 获取当前a的索引号
        let index = $(this).attr('id');
        // 删除数据
        data.splice(index, 1);
        // 保存改变
        saveData(data)
        // 重新渲染数据
        render()
    })



    $("ol li").on('click', 'input', function () {

        // 获取本地存储数据
        let data = getData();
        let index = $(this).siblings('a').attr('id');
        // // console.log(data, index);
        // // $(this).
        data[index].done = $(this).prop('checked');
        saveData(data)
        // console.log(data[index]);
        render()

    })
    // 获取本地存储的数据函数
    function getData() {
        let data = localStorage.getItem('todolist');
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        };
    };
    // 存储本地存储的数据函数
    function saveData(data) {
        localStorage.setItem('todolist', JSON.stringify(data));
    };

    // 渲染本地数据函数
    function render() {
        let data = getData();
        $('ol,ul').empty()
        let todoCount = 0;
        let doneCount = 0;

        $.each(data, function (index, value) {
            if (value.done) {
                $('ul').prepend(`<li> <input type='checkbox' checked='checked'> <p> ${value.title} </p> <a href='javascript:;' id =${index}></a></li>`);
                doneCount++;
                $('#donecount').text(doneCount)
            } else {
                $('ol').prepend(`<li> <input type='checkbox'> <p> ${value.title} </p> <a href='javascript:;' id =${index}></a></li>`);
                todoCount++;
                if ($('#todocount').text != 0) {
                    $('#todocount').text(todoCount)
                } else {
                    $('#todocount').text(0)
                }
            }
        });
    };

























})