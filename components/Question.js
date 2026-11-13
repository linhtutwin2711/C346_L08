import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Create style objects for each question card
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1c1c1c',
        borderWidth: 1,
        borderColor: '#f5c518',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 350,
        backgroundColor: '#111111',
    },
    questionBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5c518',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    questionText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    picker: {
        color: 'white',
        backgroundColor: '#333333',
        margin: 10,
    },
});

//Create custom component Question to display each question
const Question = ({image, question, option1, option2, option3, onValueChange}) => {
    return (
        <View style={styles.card}>
            <Image source={{uri: image}} style={styles.image} resizeMode='contain'/>
            <View style={styles.questionBar}>
                <Text style={styles.questionText}>{question}</Text>
            </View>
            <Picker onValueChange={onValueChange}
                    style={styles.picker}
                    dropdownIconColor='white'>
                <Picker.Item label='Select an answer...' value=''/>
                <Picker.Item label={option1} value={option1}/>
                <Picker.Item label={option2} value={option2}/>
                <Picker.Item label={option3} value={option3}/>
            </Picker>
        </View>
    );
};

export default Question;