import List from "./List";
import Info from "./Info";
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles/styles";
import { StyleSheet } from "react-native";

function Home(){
  const Stack=createNativeStackNavigator()
    return(
        
        <NavigationContainer independent={true}>
            <Stack.Navigator >        
                <Stack.Screen name="List" component={List} />
                <Stack.Screen name="Info" component={Info} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Home;