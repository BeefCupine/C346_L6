import React, { useState }from 'react';
import {Text, ScrollView, View, Image, Button, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Question = ({question, photo, options, solution, answercheck}) => {
    const [answer, setAnswer] = useState('');
    const [hasbeenanswered, setHasBeenAnswered] = useState(false);
    return(
        <View style={{ marginVertical: 15}}>
            <Text style={{
                fontSize: 20,
            }}>
                {question}
            </Text>
            <Image
                source={{uri:photo}}
                style={{width: "100%",
                    height: 250,
                    alignSelf: "center",
                    borderWidth: 5,
                    borderColor: "grey",
            }}
            />
            <Picker
                onValueChange={(itemValue) => {
                    setAnswer(itemValue);
                    answercheck && answercheck(itemValue === solution);
                    setHasBeenAnswered(true);
                }}>
                {options && options.map(option => (
                    <Picker.Item
                        label={option.label}
                        value={option.value}
                    />
                ))}
            </Picker>

        </View>
    )
}



const QuizApp = () => {
    const [correctCount, setCorrectCount] = useState(0);

    const handleanswercheck = (isCorrect, alreadyanswered) => {
        if (isCorrect) {
            setCorrectCount(prev => prev + 1);
        } else if (alreadyanswered) {
            setCorrectCount(prev => prev > 0 ? prev - 1 : 0);
        }
    }

    return(
        <ScrollView>
            <View
                style={{backgroundColor: "#F08080"}}>
                <View
                    style={{
                        marginVertical: 40,
                        alignItems: 'center',}}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: "bold",
                        textShadowColor: "black",
                        textShadowRadius: 5
                        }}>
                        <Text style={{color: "red"}}>S</Text>
                        <Text style={{color: "white"}}>i</Text>
                        <Text style={{color: "red"}}>ngaPrompt!</Text>
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                        textAlign:"center",
                        textShadowColor: "grey",
                        textShadowRadius: 10
                        }}>
                        Welcome to SingaPrompt! Show us how much you love our Country!
                    </Text>
                </View>
            </View>
            <View style={{
                marginTop: 30,
                marginHorizontal: 25,
                marginVertical: 10,
                alignContent: "center",
            }}>
                <Question
                    question= "Where is this?"
                    solution="1"
                    photo="https://images.myguide-cdn.com/singapore/companies/singapore-garden-city-iconic-landmarks-parks-best-views/large/singapore-garden-city-iconic-landmarks-parks-best-views-5143247.jpg"
                    options={[
                        { label: "Select Option", value: "0" },
                        { label: "Gardens By the Bay", value: "1" },
                        { label: "Marina Bay Sands", value: "2" },
                        { label: "Singapore", value: "3" }
                    ]}
                    answercheck={handleanswercheck}
                    hasbeenanswered={}
                />
                <Question
                    question= "The Singapore Flyer is a type of?"
                    solution="3"
                    photo="https://images.myguide-cdn.com/singapore/companies/singapore-garden-city-iconic-landmarks-parks-best-views/large/singapore-garden-city-iconic-landmarks-parks-best-views-5143245.jpg"
                    options={[
                        { label: "Select Option", value: "0" },
                        { label: "Roundabout", value: "1" },
                        { label: "Merry-Go-Round", value: "2" },
                        { label: "Ferris Wheel", value: "3" }
                    ]}
                    answercheck={handleanswercheck}
                />

                <Question
                    question= "The Merlion is a hybrid between?"
                    solution="2"
                    photo="https://cdn.wisemove.sg/image/blog/b2a880272bd67d3bf34430557988f91d.webp"
                    options={[
                        { label: "Select Option", value: "0" },
                        { label: "Fish and Tiger", value: "1" },
                        { label: "Fish and Lion", value: "2" },
                        { label: "Lion and Mermaid", value: "3" }
                    ]}
                    answercheck={handleanswercheck}
                />

                <Button
                    onPress={() => {
                        Alert.alert('Quiz Results!', `You got ${correctCount} out of 3 correct!`);
                    }}
                    title={'Submit'}/>

            </View>
            <View
                style={{backgroundColor: "#F08080"}}>
                <View
                    style={{
                        marginVertical: 40,
                        alignItems: "center",}}>
                </View>
            </View>
        </ScrollView>
    )
}

export default QuizApp;