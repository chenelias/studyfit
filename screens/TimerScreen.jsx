import React, { useState } from 'react'
import { Text, View, Box, IconButton, Center, Input } from 'native-base'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native'

function TimerScreen() {
    const [timerisplaying, settimerisplaying] = React.useState(false)
    const [timerduration,settimerduration] = React.useState(10)
    

    // <Flex direction="row">
    //                                 <Input
    //                                     maxLength={2}
    //                                     fontSize="50"
    //                                     fontweight="bold"
    //                                     variant="Outline"
    //                                     p="0"
    //                                     width="60"
    //                                     placeholder="00"
    //                                     textAlign="right"
    //                                     keyboardType="numeric"
    //                                     defaultValue={0}
    //                                     // onChangeText={(x) => (sec = Number(x.target.value))}
    //                                 />
    //                                 <Text fontSize="55" fontWeight="bold">
    //                                     :
    //                                 </Text>
    //                                 <Input
    //                                     defaultValue={0}
    //                                     maxLength={2}
    //                                     fontSize="50"
    //                                     fontweight="bold"
    //                                     variant="Outline"
    //                                     p="0"
    //                                     width="60"
    //                                     placeholder="00"
    //                                     textAlign="right"
    //                                     keyboardType="numeric"
    //                                 />
    //                                 <Text fontSize="55" fontWeight="bold">
    //                                     :
    //                                 </Text>
    //                                 <Input
    //                                     maxLength={2}
    //                                     defaultValue={0}
    //                                     fontSize="50"
    //                                     fontweight="bold"
    //                                     variant="Outline"
    //                                     p="0"
    //                                     width="60"
    //                                     placeholder="00"
    //                                     textAlign="right"
    //                                     keyboardType="numeric"
    //                                 />
    //                             </Flex>
    return (
        <View style={centerstyle.container} justifyContent="center" alignItems="center" display="flex">
            <Center>
                <Box alignItems="center">
                    <CountdownCircleTimer
                        updateInterval={0}
                        size={300}
                        strokeWidth={15}
                        isPlaying={timerisplaying}
                        duration={10}
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
