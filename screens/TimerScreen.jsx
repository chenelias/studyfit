import React, { useState, useEffect } from 'react'
import { Text, View, Box, IconButton, Button, Center, Flex, Input } from 'native-base'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, TextInput } from 'react-native'

function TimerScreen() {
    const [timerisplaying, settimerisplaying] = React.useState(false)
    const [timerduration, settimerduration] = React.useState(0)
    const [spbtnstate, setspbtnstate] = React.useState(true) // true:Play false:stop
    React.useEffect(() => {
        setspbtnstate((x) => !x)
    }, [timerisplaying])
    return (
        <View style={centerstyle.container} justifyContent="center" alignItems="center" display="flex">
            <Center>
                <Box alignItems="center">
                    <CountdownCircleTimer
                        updateInterval={0}
                        size={300}
                        strokeWidth={15}
                        isPlaying={timerisplaying}
                        duration={timerduration}
                        colors="#836bc5"
                    >
                        {({ remainingTime }) => {
                            return timerduration === 0 ? (
                                <TextInput
                                    style={inputtextstyle.styles}
                                    maxLength={2}
                                    variant="Outline"
                                    placeholder="00"
                                    textAlign="right"
                                    keyboardType="numeric"
                                    defaultValue={0}
                                    returntype="done"
                                    onSubmitEditing={(x) => settimerduration(Number(x))}
                                />
                            ) : (
                                <Text color="blue.500" fontSize="50" fontWeight="bold">
                                    {Math.floor(remainingTime / 3600) === 0
                                        ? ''
                                        : Math.floor(remainingTime / 3600) + ':'}
                                    {Math.floor((remainingTime % 3600) / 60) === 0
                                        ? ''
                                        : Math.floor((remainingTime % 3600) / 60) + ':'}
                                    {remainingTime % 60}
                                    {remainingTime < 60 ? 's' : ''}
                                </Text>
                            )
                        }}
                    </CountdownCircleTimer>
                </Box>
            </Center>
            <Flex direction="row">
                <IconButton
                    height="90"
                    width="90"
                    onPress={() => settimerisplaying((x) => !x)}
                    mt="10"
                    icon={<Ionicons size={60} color="#000" name={timerduration===0?'play':(spbtnstate ? 'stop' : 'play')} />}
                    borderRadius="full"
                    bg="blue.500"
                    mx="10"
                />
                <IconButton
                    height="90"
                    width="90"
                    mt="10"
                    icon={<Ionicons size={50} color="#000" name="flag" />}
                    borderRadius="full"
                    bg="blue.500"
                    mx="10"
                />
            </Flex>
        </View>
    )
}
//style
const centerstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
const inputtextstyle = StyleSheet.create({
    styles: {
        fontSize: 60,
        backgroundColor: 'gray',
    },
})

export default TimerScreen
