function todos(state = [],action) {
    if(action.type === "ADD_TODO"){
        return state.concat([action.todo])
    }
    return state
    
}

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

    return{
        getState,
        subscribe
    }
    
}

