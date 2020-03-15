function  createStore() {
    // 1. The store should have four parts
    // 2. The state
    // 3. Get the state
    // 4. Listen to changes on the state
    // 5. Update the state


    let state
    let listeners = []

    const getState  = () => state
    const subscribe = (listener) => {
        listeners.push(listener)

    return () => {
        listeners = listeners.filter((l) => l ==! listener)
    }
    }

    const dispatch = (action) => {
        state = todos(state, action)
        listeners.forEach((listener) => listener()) // returns an array of functions
    
    }
    

    return{
        getState,
        subscribe,
        dispatch,
    }
    
}

// reducer specifies how state will change depending on the eaction that occurred in the application
function todos(state = [],action) {
    switch(action.type){
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO:
            return state.map((todo) => todo.id !== action.id ? todo:
            Object.assign({}, todo, {complete: !todo.complete}))
        default:
            return state
    }
}

function goals(state=[], action){
    switch(action.type){
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return state.filter((goal) => goal.id !== action.id)
        default:
            return state
    }
}

function app(state ={}, action){
    return{
        todos: todos(state.todos, action),
        goals: goals(state.goals,action),

    }
    
}

// Appp code

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL ='ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

function addTodoAction(todo){
    return{
        type: ADD_TODO,
        todo
    }

}

function removeTodoAction(id){
    return{
        type: REMOVE_TODO,
        id
    }
}

function toggleTodoAction(id){
    return{
        type: TOGGLE_TODO,
        id
    }
}
function addGoalAction(goal){
    return{
        type: ADD_GOAL,
        goal
    }
}

function removeGoalAction(id){
    return{
        type: REMOVE_GOAL,
        id
    }
}

const store =createStore(app) // we pass our reducer function to create store so that we can add todos
store.subscribe(()=>{
    console.log('The new state is: ', store.getState())
})



store.dispatch({ // whenever we need to update the store, call dispatch passing an action which occurred
    type: ADD_GOAL,
    todo: {
        id:0,
        name: 'Win the competition',
        complete: false
    }

})
store.dispatch(addTodoAction({
    todo: {
        id:1,
        name: 'Learn redux',
        complete: false
    }

}))
store.dispatch(addTodoAction({
    todo: {
        id:2,
        name: 'Wash the car',
        complete: true
    }

}))

store.dispatch(removeTodoAction(0))

store.dispatch(toggleTodoAction(1))

store.dispatch(addGoalAction({
    todo: {
        id:0,
        name: 'Learn redux',
    }

}))

store.dispatch(removeGoalAction({
    todo: {
        id:1,
        name: 'Go to school',
    }

}))

store.dispatch(removeGoalAction(10))





