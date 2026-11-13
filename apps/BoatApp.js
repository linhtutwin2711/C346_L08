import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Boats from '../components/Boats';

//Create style objects for the boat screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8eef4',
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e3a5f',
        marginHorizontal: 15,
        marginBottom: 10,
        paddingVertical: 12,
        borderRadius: 10,
    },
    headerText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});

class allBoats extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                {/* Header bar */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>GETABOAT - FOR SALE</Text>
                </View>

                <Boats name={"Sea Ray 500 Sundancer"}
                       description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                       icon_name={"sailboat"} icon_color={"blue"}
                       poster={require("../img/sea_ray.jpg")}/>

                <Boats name={"Four Winns Horizon 180"}
                       description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                       icon_name={"ship"} icon_color={"red"}
                       poster={require("../img/four_winns.jpg")}/>

                <Boats name={"Flipper 640 ST"}
                       description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                       icon_name={"anchor"} icon_color={"green"}
                       poster={require("../img/flipper.jpg")}/>

                <Boats name={"Princess V48"}
                       description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                       icon_name={"compass"} icon_color={"purple"}
                       poster={require("../img/princess.jpg")}/>

                <Boats name={"Bayliner 175 Bowrider"}
                       description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                       icon_name={"fish"} icon_color={"orange"}
                       poster={require("../img/bayliner.jpg")}/>

                <Boats name={"Fairline Targa 47"}
                       description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                       icon_name={"water"} icon_color={"teal"}
                       poster={require("../img/fairline.jpg")}/>
            </ScrollView>
        )
    }
}
export default allBoats;