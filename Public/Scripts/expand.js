$(document).ready(
    async function () {
        const resp = await fetch('/tasks', { method: 'GET' })
        const tasks = await resp.json()
        console.log(tasks)
        let temp = []

        for (const element in tasks) {

            task = {
                title: tasks[element].task,
                sub: [{
                    title: 'description: ' + tasks[element].description,
                    sub: null
                }, {
                    title: 'status: ' + tasks[element].status,
                    sub: null

                }, {
                    title: 'duedate: ' + tasks[element].duedate,
                    sub: null

                }, {
                    title: 'priority: ' + tasks[element].priority,
                    sub: null

                }, {
                    title: 'note: ' + tasks[element].note,
                    sub: null
                }]
            }
            temp.push(task)
        }
        // console.log(task.sub)
        

        var JSON = { menu: temp }
        console.log(JSON)


        $(function () {

            function parseMenu(ul, menu) {
                for (var i = 0; i < menu.length; i++) {
                    var li = $(ul).append(
                        '<li class=' + (menu[i].sub ? 'multi' : 'simple') + '>' + menu[i].title
                        + '</li>');
                    if (menu[i].sub != null) {
                        console.log("submenu")
                        console.log(menu[i].sub)
                        var subul = $('<ul class="list"></ul>');
                        $(li).append(subul);
                        parseMenu($(subul), menu[i].sub);
                    }
                }
                $(subul).append()
            }

            var menu = $('#myList');
            parseMenu(menu, JSON.menu);
        });
    });//]]>​


$(document).on('click', '#myList > li ', function () {
    $(this).next('ul').toggle(200);
    if (($(this).next('ul').length)) {
        $(this).toggleClass('multi-opened');
    }
})