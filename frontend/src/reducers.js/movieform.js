import {
    ADD_MOVIE, GET_MOVIE
} from '../type'

const intialstate={
    movie:[], 
    
    error:{},
    

};

export default (state = intialstate , action) => {
       
    switch (action.type) {
            
        case ADD_MOVIE:
            return{
                ...state,
                movie:[...state.movie , action.payload],
                loading:false
               
            };
            case GET_MOVIE:
            return{
                ...state,
                movie:action.payload,
                loading:false  
            };
                default:
                    return state;
            
        }
    }



