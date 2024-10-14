import { useState } from "react";
import {Text, View,StyleSheet,TextInput,Button } from "react-native";

const Index = () => {
   const [input1,setinput1] = useState("");
   const [change,setchange] = useState("");

   const ClickChange = ()=>{
      setchange(input1);
   }

   return(
     <View > 
      <TextInput
       placeholder="ادخل جملة"
       style={style.input}
       value={input1}
       onChangeText={setinput1}  />

      <TextInput 
       style={style.input} 
       value={change}
       placeholder="طبع الجملة التي في الحقل الاول هنا "/>

      <Button
        title="إضغط هنا للطبع في الحقل الثاني"
        onPress={ClickChange}
       />  
     </View>
   );
};

const style = StyleSheet.create({
  fon: {
   backgroundColor: "red",
    width: "100%",
     height: "100%"
  },
  input:{
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
}

);
export default Index; 

