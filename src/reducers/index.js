import { combineReducers } from 'redux';
import { ACTION } from '../actions'

function templateReducer ( state = { 
    
    dummy : []

    }, action) {
    
    switch (action.type) {

      case ACTION: {

        const boards = [...state.dummy];
        
        return Object.assign({}, state, {
            boards : boards
            }) 
      }  
      
      default: {

        return state

      }  

    }
      
}



const rootReducer = combineReducers({

    templateReducer

})
  
export default rootReducer;

