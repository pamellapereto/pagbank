import { StyleSheet } from "react-native";

export const global = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#f4f4f7',
    },

    header: {
        height: 190,
        flexDirection: "row",
        paddingTop: 55,
        backgroundColor: '#5cbc4e',
    },

    logo: {
        marginTop: -35,
    },

    arrow: {
        marginTop: 2,
        marginLeft: 75,
    },

    imgNotification: {
        width: 20,
        height: 20,
        marginTop: 6,
        marginLeft: 141,
    },

    circleNotification: {
        backgroundColor: '#bb555f',
        borderRadius: 20,
        height: 15,
        width: 15,
        marginTop: 3,
        marginLeft: -9,
    },

    txtNotification: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    titleBalance: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 5,
    },

    view: {
        resizeMode: 'cover',
        margin: 10,
    },

    containerLive: {
        flexDirection: "row",
        zIndex: 1000,
        position: "absolute",
        marginTop: 20,
        marginLeft: 20,
    },

    available: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 13,
        padding: 7,
        borderRadius: 8,
        textAlign: "center",
        backgroundColor: '#090909'
    },

    tag2: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 13,
        padding: 7,
        borderRadius: 6,
        textAlign: "center",
        backgroundColor: 'red'
    },

    like: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 13,
        marginLeft: 9,
        textAlign: "center",
        marginTop: 4,
        textShadowColor: '#000000',
        textShadowOffset: {width: 0, height: 0.8},
        textShadowRadius: 1,
  
    },

    username: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 13,
        marginLeft: 20,

    },

    checkimg: {
        width: 15,
        height: 15,
    },

    areaTrending: {
        marginTop: 15,
        marginBottom: 20,
        height: 60,
        flexDirection: "row",
    },

    trending: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 15,
    },

    more: {
        color: '#ffde4b',
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 230,
        marginTop: 20,
    },

    containerGray: {
        backgroundColor: '#1e1e1e',
        borderRadius: 20,
        width: 300,
        height: 250,
        alignItems: "center",
        marginLeft: 92,

    },

    containerLightGray: {
        backgroundColor: '#282828',
        borderRadius: 20,
        width: 330,
        height: 300,
        padding: 20,
        marginRight: 70,
        marginTop: -25,
    },

    imgTrending: {
        width: 287,
        height: 140,
        borderRadius: 20,
        resizeMode: 'cover',
    },

    containerLike: {
        backgroundColor: '#ffde4b',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 20,
        padding: 5,
        width: 80,
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 105,
        marginLeft: 208,

    },

    likeTrending: {
        width: 25,
        height: 25,
    },

    txtLike: {
        color: '#090909',
        fontSize: 13,
        fontWeight: 'bold',
        paddingLeft: 6,
        paddingTop: 4,
    },

    areaUser: {
        flexDirection: 'row',
    },

    userimg2: {
        width: 55,
        height: 55,
        borderRadius: 15,

        marginTop: 12,
    },

    areaNome: {
        paddingTop: 18,
        paddingLeft: 10,
    },

    completeTrending: {
        height: 375,
    },

    completeDiscovery: {
        height: 450,
    }

});