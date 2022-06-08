const actionNextColor = () => ({
    type: 'NEXT_COLOR',
})

const actionPreviousColor = () => ({
    type: 'PREVIOUS_COLOR',
})

const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0
}

const reducer = (state = { INITIAL_STATE }, action) => {
    switch (action.type) {
        case 'NEXT_COLOR':
            return {
                ...state,
                index: state.index + 1,
            };
        case 'PREVIOUS_COLOR':
            return {
                ...state,
                index: state.index - 1,
            }

        default: 
        return state;
    }
}

const store = Redux.createStore(reducer);

const color = document.getElementById('value');
store.subscribe(() => {
    return color.value
})

const buttonNextColor = document.getElementById('next');
buttonNextColor.addEventListener('click', () => {
    store.dispatch(actionNextColor());
});

const buttonPreviousColor = document.getElementById('previous');
buttonPreviousColor.addEventListener('click', () => {
    store.dispatch(actionPreviousColor());
})

console.log(store.getState());