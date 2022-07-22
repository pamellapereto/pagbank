import { Text, View, Image } from "react-native";
import { global } from "../../css/Styles";

export default function Options(){
    return(
        <View style = {global.completeTrending}>

            <View style = {global.areaTrending}>
                <Text style = {global.trending}>Trending</Text>
                <Text style = {global.more}>More →</Text>
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