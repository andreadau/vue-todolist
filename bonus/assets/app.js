let vm = new Vue({
    el: "#app",
    data : {
        img : "img/logo.png",
        newTodo: "",
        modTodo: "",
        arrTodo: [
            {
                id:1,
                title: "Studiare Vue.js",
                done: false,
                isEditable: false,
            },
            {
                id:2,
                title: "Studiare React.js",
                done: false,
                isEditable: false,
            },
            {
                id:3,
                title: "Studiare Typescript",
                done: false,
                isEditable: false,
            }
            ],
    },
    methods: {
        addTodo(){
            this.arrTodo.push({
                id: this.arrTodo.length+1,
                title: this.newTodo,
                done: false,
                isEditable: false,
            });
        },
        remove(index){
            this.arrTodo.splice(index,1);
        },
        isEditable(index){
            this.arrTodo[index].isEditable = true;
        },
        onEdit(index,value){
            let edit = value;
            this.arrTodo[index].title = edit;
            this.arrTodo[index].isEditable = false;
            return value = "";
        },
        isDone(index){
            this.arrTodo[index].done = true;
        },
        isNotDone(index){
            this.arrTodo[index].done = false;
        }
    }
});
