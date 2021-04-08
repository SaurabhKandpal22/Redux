import {combineReducers,createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import axios from 'axios';


//actions
export const onUserLogin =({email, password})=>{
return async(dispatch)=>{
   
    try{
        const response = await axios.post('http://192.168.1.82:8000/login',{email,password});
        dispatch({type: 'DO_LOGIN',payload:response.data});
    }catch(error){
        dispatch({type: 'ON_ERROR',payload:error});
    }
  
}
}

export const onFetchProducts =()=>{
    return async(dispatch)=>{
       
        try{
            const response = {data:[
                {name:"Facebook",price:"224"},
                {name:"Instagram",price:"224"},
                {name:"Twitter",price:"224"}
            ]}
            dispatch({type: 'FETCH_PRODUCTS',payload:response.data});
        }catch(error){
            dispatch({type: 'ON_ERROR',payload:error});
        }
      
    }
    }
    


//reducers


const userReducer = (state={},action)=>{
    switch(action.type){
        case 'DO_LOGIN':
        return{
            ...state,
            user:action.payload
        }
        case 'FETCH_PRODUCTS':
            return{
                ...state,
                products:action.payload
            }
            case 'ON_ERROR':
                return{
                    ...state,
                    appError:action.payload
                };
                default:
                    return state
    }
}



//rootreducer
 const rootReducer =combineReducers({
    userReducer
})

//store

export const store = createStore(rootReducer,applyMiddleware(ReduxThunk))