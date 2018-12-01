import React from 'react';
import { View, Text, Image } from 'react-native';
import { colors } from 'react-native-elements';

import styles from "./Styling.style.js";

class PerGarageInfo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.perGarageInfo.containerStyle}>

                <View style={styles.perGarageInfo.leftSectionStyle}>
                    <View style={styles.perGarageInfo.generalStyle}>
                        <Text style={{ fontSize: 30, color: 'blue' }}>
                            {this.props.garageName}
                        </Text>
                    </View>

                    <Text style={{ fontSize: 23, color: 'white' }}>
                        {this.props.spotsNum + " / " + this.props.garageMax}
                    </Text>
                </View>

                <View style={[styles.perGarageInfo.rightSectionStyle,{
                    justifyContent: "center",
                    alignItems: "center",
                }]}>



                    <View style={[styles.perGarageInfo.generalStyle, {
                        alignItems: "center",

                    }]}>
                        {/* <GarageBottomLine
                            perLev={'Level 1: 49  '} // per garage levels
                            miles={'    4.2 mi'} //props.parking.distance
                            price={' $$$ '}
                        /> */}
                        <Text style={{
                            fontSize: 40,
                            color: "white",
                            textAlign: "center",
                            textAlignVertical:"center",
                            backgroundColor: "orange",
                            borderRadius: 40,
                            fontWeight: "900",
                            borderColor: 'black',
                            borderWidth: 4,
                            height: 100,
                            width: 150
                        }}>
                            {Math.floor((this.props.spotsNum /this.props.garageMax * 100))}%
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}


export { PerGarageInfo };
