export const callAction = () => dispatch => {
    dispatch({
     type: 'CALL_ACTION',
     payload: 'result_of_call_action'
    })
   }