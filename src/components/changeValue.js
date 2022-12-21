export default (e, changeState, currentState) => {
    // console.log(e)
    const state = currentState;
    state[e?.target.name] = e.target.value;
    changeState(state);
    // console.log(currentState);
}