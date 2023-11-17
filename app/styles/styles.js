import { StyleSheet } from "react-native"
import { COLORS,FONT,SIZES} from "./theme"
const styles = StyleSheet.create({

    heading:{
        fontFamily: "Cochin",
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        margin:"1%",
        marginLeft:"40%",
        
    },
    listContaner:{
       border:"2px solid black",
       borderRadius:"12px",
       margin:"2%",
       backgroundColor:COLORS.lightWhite,
       padding:"2%"

    },
    infoButton:{
        width: "25%",
        height: 30,
        borderRadius: "32px",
        padding:"2%",
        margin:"2%",
        marginLeft:"0%",
        backgroundColor: COLORS.gray2
    },
    headerStyle:{
        margin:"0%",
        padding:"0%",
        fontFamily: "Cochin",
        fontSize: SIZES.xLarge,
        backgroundColor: COLORS.primary,
    }
})

export default styles;