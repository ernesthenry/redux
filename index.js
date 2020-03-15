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
    }

    return(
        getState,
        subscribe
    )
    
}

const store = createStore
store.subscribe(()=>{
    console.log('The new state is: ', store.getState)
})

store.subscribe(()=>{
    console.log('The state changed')
})

