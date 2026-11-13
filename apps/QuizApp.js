import React, {useState} from 'react';
import {View, Text, Button, Alert, ScrollView, StyleSheet} from 'react-native';
import Question from '../components/Question';

//Create style objects for the quiz screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderWidth: 2,
        borderColor: '#f5c518',
        borderRadius: 12,
        paddingVertical: 15,
        marginBottom: 20,
    },
    headerIcon: {
        fontSize: 28,
        marginRight: 10,
    },
    headerText: {
        color: '#f5c518',
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    buttonBox: {
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 40,
    },
});

const QuizApp = () => {
    // Declare variables
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');

    return (
        <ScrollView style={styles.container}>

            {/* Header - icon and title side by side */}
            <View style={styles.header}>
                <Text style={styles.headerIcon}>🎬</Text>
                <Text style={styles.headerText}>MOVIE QUIZ</Text>
            </View>

            {/* Question 1 */}
            <Question image='https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg'
                      question='Q1: What is the name of this movie?'
                      option1='Cars' option2='Toy Story' option3='Finding Nemo'
                      onValueChange={(value) => setAnswer1(value)}/>

            {/* Question 2 */}
            <Question image='https://image.tmdb.org/t/p/w500/itAKcobTYGpYT8Phwjd8c9hleTo.jpg'
                      question='Q2: What is the name of the snowman in this movie?'
                      option1='Sven' option2='Olaf' option3='Hans'
                      onValueChange={(value) => setAnswer2(value)}/>

            {/* Question 3 */}
            <Question image='https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
                      question='Q3: Who is the main villain in this movie?'
                      option1='Loki' option2='Ultron' option3='Thanos'
                      onValueChange={(value) => setAnswer3(value)}/>

            {/* Question 4 */}
            <Question image='https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg'
                      question='Q4: Which emotion is NOT a main character in this movie?'
                      option1='Joy' option2='Jealousy' option3='Anger'
                      onValueChange={(value) => setAnswer4(value)}/>

            {/* Question 5 */}
            <Question image='https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg'
                      question='Q5: In which year was this movie released?'
                      option1='1995' option2='2000' option3='2005'
                      onValueChange={(value) => setAnswer5(value)}/>

            {/* Submit button with rounded corners */}
            <View style={styles.buttonBox}>
                <Button onPress={()=>{
                    let score = 0;
                    if (answer1 == 'Toy Story') {
                        score = score + 1;
                    }
                    if (answer2 == 'Olaf') {
                        score = score + 1;
                    }
                    if (answer3 == 'Thanos') {
                        score = score + 1;
                    }
                    if (answer4 == 'Jealousy') {
                        score = score + 1;
                    }
                    if (answer5 == '2000') {
                        score = score + 1;
                    }

                    let message = 'You can do better next time.';
                    if (score == 5) {
                        message = 'Perfect score! You are a true movie nerd!';
                    } else if (score >= 3) {
                        message = 'Well done!';
                    }
                    Alert.alert('You have ' + score + ' correct answers!', message);
                }} title='Submit Answers' color='#f5c518'/>
            </View>

        </ScrollView>
    );
};

export default QuizApp;