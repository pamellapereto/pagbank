import { Text, View, Image } from "react-native";
import { global } from "../../css/Styles";

export default function Balance(){
    return(
        <View>
            <Text style = {global.titleBalance}>Saldo disponível</Text>
            
                <View>
                        <Text style={global.available}>R$ 2.500,00</Text>
                        <Image source={require("../../assets/invisible.png")} style={global.view}/>
        
                </View>
            

        </View>
    );
}
