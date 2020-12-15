import {createStore } from 'redux';


const reducer = (currentState, action) => {

    if (action.type === 'SET_APPOINTMENTS') {
        return {
            ...currentState, 
            currentAppointments: action.currentAppointments,
            allCurrentEvents: [...currentState.allCurrentEvents, action.currentAppointments]
        } 
    } else if (action.type === 'SET_ERRANDS'){
        return {
            ...currentState,
            currentErrands: action.currentErrands,
            allCurrentEvents: [...currentState.allCurrentEvents, action.currentErrands]
        }

    } else if (action.type === 'SET_MEALS'){
        return {
            ...currentState,
            currentMeals: action.currentMeals,
            allCurrentEvents: [...currentState.allCurrentEvents, action.currentMeals]
        }

    } else if (action.type === 'SET_ASSIGNMENTS'){
        return {
            ...currentState,
            currentAssignments: action.currentAssignments,
            allCurrentEvents: [...currentState.allCurrentEvents, action.currentAssignments]
        }

    } else if (action.type === 'SET_PROJECTS'){
        return {
            ...currentState,
            currentProjects: action.currentProjects,
            allCurrentEvents: [...currentState.allCurrentEvents, action.currentProjects]
        }

    }
    return currentState
}

let initialState = {
    currentAppointments: [],
    currentErrands: [],
    currentAssignments: [],
    currentMeals: [],
    currentProjects: [],
    allCurrentEvents: []
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store