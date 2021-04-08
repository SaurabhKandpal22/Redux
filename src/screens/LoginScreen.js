import React from 'react'
import { View ,Text,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { onUserLogin,onFetchProducts} from '../redux'

const _LoginScreen = (props) => {
    const {userReducer,onUserLogin,onFetchProducts} = props;
    const {user,products} = userReducer;
    console.log(user,products)
    return (
        <View 
        style={{flex: 1,alignItems:"center",justifyContent:"center"}}>
            {/* {user !== undefined &&<Text>{user.firstName}</Text>} */}
            <TouchableOpacity
             onPress={()=>onUserLogin({email:"abc@yopmail.com",password:"12345"})}
                //  onPress={signin} 
                style={{backgroundColor:'#48bab1',
     alignItems:'center',justifyContent:'center',
     borderRadius:20,
     width:230,marginTop:15,height:40
     }}>
<Text style={{color:"white",fontWeight:"bold",fontSize:17}}>Login</Text>
     </TouchableOpacity>
     <TouchableOpacity
             onPress={()=>onUserLogin({email:"abc@yopmail.com",password:"12345"})}
                 onPress={()=>onFetchProducts()} 
                style={{backgroundColor:'#48bab1',
     alignItems:'center',justifyContent:'center',
     borderRadius:20,
     width:230,marginTop:15,height:40
     }}>
<Text style={{color:"white",fontWeight:"bold",fontSize:17}}>Fetch</Text>
     </TouchableOpacity>
     {products != undefined&& (
     <Text style={{marginLeft:20,marginRight:20}}>
     {''}
     {JSON.stringify(products)}{''}</Text>)}
        </View>
    )
}
const mapStateToProps=(state) =>({
    userReducer:state.userReducer
})
const LoginScreen = connect(mapStateToProps,{onUserLogin,onFetchProducts})(_LoginScreen);

export default LoginScreen