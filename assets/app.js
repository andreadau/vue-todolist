let vm = new Vue({
    el: "#app",
    data : {
        img : "img/logo.png",
        newTodo: "",
        arrTodo: ["Studiare Vue.js","Studiare React.js","Studiare Typescript"],
    },
    methods: {
        addTodo(){
            this.arrTodo.push(this.newTodo);
        },
        remove(index){
            this.arrTodo.splice(index,1);
        }
    }
});
