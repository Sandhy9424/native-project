import { View,Text,Image, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles/styles";
function List({navigation}){
   const [list,setList]=useState([])
   const map=new Map()
   list.forEach((e)=>{map.set(e.id,e.name)})


  useEffect(()=>{axios.get("https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d").then((res)=>{
   setList(res.data) 
   console.log(res)}).catch((err)=>console.log(err))},[])

   function filter(e){

    return list.filter((el)=>el.parentId==e.parentId)
   }
   
   function call(e){

    return(
        
        <View >
            <Text>Manager : {map.get(e.parentId)}</Text> 
            
            <TouchableOpacity  onPress={()=>{
            let temp=filter(e)
            console.log(temp,e.parentId);
            navigation.navigate("Info",{
                data:temp,
                managerName: map.get(e.parentId)
                })
                }}><Text style={styles.infoButton}>More info</Text></TouchableOpacity>
                
                </View>
    ) 
   }
 
    return(
        <ScrollView>
        <View >
         {list.map((e)=>{

            return(
                <View style={styles.listContaner}>
                    <Text>Name : {e.name}</Text>
                    <Text>Email : {e.email}</Text>
                    <Text>Phone : {e.phone}</Text>
                    {e.parentId==null?<Text>Manager : No manager Assigned</Text>:call(e)}
                 </View>
      )})}
        </View>
        </ScrollView>
    )
}
export default List;