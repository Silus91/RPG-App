const addActionTodo = (todo:any) => {
    console.log("I made addtodo", todo)
    return {
        type:"ADD_TODO",
        payload:{text:"new todo", id:1 }
    }
};

export default addActionTodo;