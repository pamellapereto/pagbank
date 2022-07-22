import { Text, View, Image } from "react-native";
import { global } from "../../css/Styles";

export default function TabNavigator(){
    return(
        <View style = {global.completeDiscovery}>

            <View style = {global.areaTrending}>
                <Text style = {global.trending}>Discovery</Text>
                <Text style = {{color: '#ffde4b', fontSize: 14, fontWeight: 'bold', paddingLeft: 220, marginTop: 20,}}>More →</Text>
            </View>

            <View style={global.containerGray}>
                <View style={global.containerLightGray}>
                    <View>
                        <Image source={require ("../../assets/esporte.jpg")} style = {global.imgTrending}/>
            
                            <View style={global.containerLike}>
                                <Image source={require ("../../assets/like.png")} style = {global.likeTrending}/>
                                <Text style={global.txtLike}>Like</Text>
                            </View>
                    </View>

                    <View style={global.areaUser}>
                        <Image source={require ("../../assets/user2.jpg")} style = {global.userimg2}/>

                        <View style={global.areaNome}>
                            <Text style={{color: "white", fontSize: 16, fontWeight: 'bold'}}>Sandy</Text>
                            <Text style={{color: "white", fontSize: 12, color: '#c4c4c4', fontWeight: 'bold'}}>2 min ago</Text>
                       
                   
                        </View>
                            <Text style={{color: "white", fontSize: 14, marginTop: 80, marginLeft: -115}}>
                                Inserir comentário aqui.
                            </Text>
                        
                    </View>
                </View>
            </View>
            
        </View>
    )}