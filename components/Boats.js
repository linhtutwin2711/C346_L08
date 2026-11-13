import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

//Create style objects for each boat card
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#b0bec5',
        overflow: 'hidden',
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#37474f',
        paddingVertical: 10,
    },
    titleText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    iconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionBox: {
        margin: 10,
        padding: 8,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        borderRadius: 8,
        backgroundColor: '#f5f7f9',
    },
    descriptionText: {
        textAlign: 'center',
        color: '#37474f',
        fontSize: 14,
    },
    image: {
        width: '100%',
        height: 210,
    },
});

// Ex1: User-defined component Boats with properties name, description and poster
const Boats = ({name, description, icon_name, icon_color, poster}) => {
    return (
        <View style={styles.card}>
            {/* Title bar - icon and name side by side */}
            <View style={styles.titleBar}>
                <View style={styles.iconCircle}>
                    <FontAwesome6 name={icon_name} size={16} color={icon_color}/>
                </View>
                <Text style={styles.titleText}>{name.toUpperCase()}</Text>
            </View>

            {/* Description box */}
            <View style={styles.descriptionBox}>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>

            <Image source={poster} style={styles.image}/>
        </View>
    );
};

export default Boats;