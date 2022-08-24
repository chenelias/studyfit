import React, { useState } from 'react'
import { Text, View, Box, IconButton, Center, Input } from 'native-base'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native'

function TimerScreen() {
    const [timerisplaying, settimerisplaying] = React.useState(false)
    // const hours = Math.floor(remainingTime / 3600)
    // const minutes = Math.floor((remainingTime % 3600) / 60)
    // const seconds = remainingTime % 60
    return (
        <View style={centerstyle.container} justifyContent="center" alignItems="center" display="flex">
            <Center>
                <Box alignItems="center">
                    {/* <Input
                        position="absolute"
                        top="40%"
                        fontSize="30"
                        fontWeight="bold"
                        variant="Outline"
                        placeholder="time"
                        TextAlign="center"
                        bg="gray.500"
                        width="210"
                    /> */}
                    <CountdownCircleTimer
                        updateInterval={0}
                        size={300}
                        strokeWidth={15}
                        isPlaying={timerisplaying}
                        duration={0}
                        colors="#836bc5"
                    >

                        {({ remainingTime }) => {
                            return (
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
            <IconButton
                height="90"
                width="90"
                onPress={() => settimerisplaying((x) => !x)}
                mt="10"
                icon={
                    timerisplaying ? (
                        <Ionicons size={60} color="#000" name="stop" />
                    ) : (
                        <Ionicons size={60} color="#000" name="play" />
                    )
                }
                borderRadius="full"
                bg="blue.500"
            />
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

export default TimerScreen
