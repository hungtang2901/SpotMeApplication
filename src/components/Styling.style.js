import {
    StyleSheet,
    View,
    Dimensions,
    Text
} from "react-native";

const garListHeight = 180;
const borderRadius = 20;

const styles = {
    dataTable: { //DataTable.js
        box: {

            position: "absolute",
            height: 100,
            width: 100
        },
    },
    favorite: { //Favorite.js
        containerStyle: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height

        },
        imageStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15
        },
        garageNameStyle: {
            flex: 0,
            flexDirection: 'row'
        },
        headerStyle: {
            margin: 30,
            flexDirection: 'row'
        },
        detailStyleLeftColumn: {
            width: 150,
            marginLeft: 40,
            marginTop: 10,
            marginBottom: 10,
            marginRight: 10
        },
        detailStyleRightColumn: {
            width: 150,
            margin: 10
        },
        headerText: {
            fontSize: 30,
            color: '#379b8c',
            fontWeight: '900'

        },
        detailText: {
            fontSize: 20
        },
        subHeaderText: {
            fontSize: 25,
            textDecorationLine: 'underline'
        }
    },

    garDetail: { //GarDetail.js
        headerContentStyles: {
            flexDirection: 'coloumn',
            justifyContent: 'space-around'
        },
        garageStyle: {
            borderBottomColor: 'blue',
            borderBottomWidth: 0.75,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 5,
            marginBottom: 5
        },
        containerStyle: {
            backgroundColor: '#A0CFEC',
            justifyContent: 'center'
        },
    },

    garList: { //GarList.js
        height: garListHeight,

        garageStyle: {
            borderBottomColor: 'blue',
            borderBottomWidth: 0.75,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 5,
            marginBottom: 5 + 20,
            height: garListHeight
        },
        headerContentStyles: {
            flexDirection: 'coloumn',
            justifyContent: 'space-around'
        },
        containerStyle: {
            backgroundColor: '#A0CFEC',
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
            justifyContent: 'flex-start',
            position: "absolute",
            left: 0,
            borderRadius: borderRadius
        },
    },

    history: { //History.js
        containerStyle: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        garageNameStyle: {
            flexDirection: 'row'
        },
        imageStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15
        },
        headerStyle: {
            margin: 10,
            flexDirection: 'row'
        },
        detailStyleLeftColumn: {
            width: 110,
            marginLeft: 40,
            marginTop: 5,
            marginBottom: 5,
            marginRight: 5
        },
        detailStyleRightColumn: {
            width: 110,
            margin: 5
        },
        headerText: {
            fontSize: 30,
            color: '#379b8c',
            fontWeight: '900'
        },
        detailText: {
            fontSize: 20

        },
        subHeaderText: {
            fontSize: 25,
            textDecorationLine: 'underline'
        }
    },

    loginPage: { //LoginPage.js
        errorTextStyle: {
            fontSize: 20,
            alignSelf: 'center',
            color: 'red'
        }
    },

    MapContainer: { //MapContainer.js
        map: {
            ...StyleSheet.absoluteFillObject,
        },
        markerStyle: {
            zIndex: 98
        },
        locationStyle: {
            zIndex: 99
        },
        callOut: {
            justifyContent: "flex-start",
        },
    },

    mapScreen: { //MapScreen.js
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        outerContainer: {
            marginTop: 30,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        menuButton: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: 0,
            top: 30,
            zIndex: 99,
            width: "15%",
            height: 50
        }
    },

    menu: { //Menu.js
        containerStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    },

    menuScreen: { //MenuScreen.js
        containerStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    },

    payment: { //Payment.js
        containerStyle: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginTop: 15,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        },
        headerStyle: {
            margin: 30
        },
        detailStyle: {
            margin: 10
        },
        payStyle: {
            marginTop: 20,
            marginLeft: 130
        },
        imageStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        headerText: {
            fontSize: 30,
            color: '#379b8c',
            fontWeight: '900'
        },
        detailText: {
            fontSize: 20
        },
        detailTextTitle: {
            fontSize: 20,
            textDecorationLine: 'underline'
        }
    },

    perGarageInfo: { //PerGarageInfo.js
        containerStyle: {
            flexDirection: 'row',
            marginLeft: 7,
            marginRight: 7,
            marginTop: 10,
            marginBottom: 2,
            alignItems: 'center',
            justifyContent: 'center',
        },
        leftSectionStyle: {
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
            width: "20%",

        },
        rightSectionStyle: {
            flexDirection: 'column',
            flex: 1,
            width: "20%",
            height: "100%"
        },
        generalStyle: {
            marginTop: 2,
            marginBottom: 2,

        }
    }

}


export default styles;
