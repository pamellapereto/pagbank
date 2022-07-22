import { Text, View, Image } from "react-native";
import { global } from "../../css/Styles";

export default function Header(){
    return(
        <View style = {global.header}>
            <Image source={require("../../assets/logo.png")} style={global.logo}/>

            <Image source={require("../../assets/arrow.png")} style={global.arrow}/>

            <Image source={require("../../assets/notification.png")} style={global.imgNotification}/>

            <View style = {global.circleNotification}>
                <Text style = {global.txtNotification}>5</Text>
            </View>
        </View>
    );
}
