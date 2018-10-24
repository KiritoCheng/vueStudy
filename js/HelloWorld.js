/**
 * Created by Kirito on 2016/12/10.
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '你在 ' + new Date() + ' 加载该页面'
    }
});
console.log(app2.message);

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});


var vif=new Vue({
    el:'#vif'
});

var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'Learn Js'},
            {text:'Learn Vue'},
            {text:'Learn C++'}
        ]
    }
});

var app5 = new Vue({
    el:'#app-5',
    data:{
        message:'Hello World!'
    },
    methods:{
        reverseMessage:function () {
            this.message=this.message.split('').reverse().join('')
        }
    }
});

var app6=new Vue({
    el:"#app-6",
    data:{
        message:'Hello World'
    },
    methods:{
        getMessage:function () {
            alert(this.message)
        }
    }
})
