Vue.component('my-component', {
    template: '<div>A custom component!</div>'
});
// 创建根实例
new Vue({
    el: '#example'
});

var Child = {
    template: '<div>Two custom component!</div>'
};
new Vue({
    el: '#example2',
    components: {
        'my-component': Child
    }
});


/************************/

Vue.component('simple-counter', {
    data: function () {
        var data = {counter: 0}
        return data
    },
    template: '<button v-on:click="counter += 1"">{{counter}}</button>'
});
Vue.component('child',{
    props:['message'],
    template:'<span>{{message}}</span>'
});


new Vue({
    el: '#count1',
});

Vue.component("child03",{
    props:['myMessage01'],
    template:'<div>{{myMessage01}}</div>'
})
new Vue({
    el:'#example3',
    data:{
        parentMsg:'Hello , this is parentMsg'
    }
})