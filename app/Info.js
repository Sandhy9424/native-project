import { View,Text} from "react-native";
import styles from "./styles/styles";

function Info({route}){
    
    const{data}=route.params;
    const{managerName}=route.params;

    return(
        <View>
            <Text style={styles.heading}>{managerName}</Text>
            {data.map((e,i)=>{

                return(
                   <View style={styles.listContaner}>
                    <Text>{i+1+" : "+e.name}</Text>
                   </View>
                )
            })}
        </View>
    )
}

export default Info;