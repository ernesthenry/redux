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

const store =createStore(todos) // we pass our reducer function to create store so that we can add todos
store.subscribe(()=>{
    console.log('The new state is: ', store.getState())
})

store.dispatch({ // whenever we need to update the store, call dispatch passing an action which occurred
    type: 'ADD_TODO',
    todo: {
        id:0,
        name: 'Learn redux',
        complete: false
    }

})




