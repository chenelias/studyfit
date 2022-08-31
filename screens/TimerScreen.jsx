import React, { useState, useEffect } from 'react'
import { Text, View, Box, ScrollView, IconButton, Button, Center, Flex, Input } from 'native-base'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, TextInput, Vibration, Platform } from 'react-native'

function TimerScreen() {
    let sec = 0
    let min = 0
    let hr = 0
    const [timerisplaying, settimerisplaying] = React.useState(false)
    const [timerduration, settimerduration] = React.useState(0)
    const [spbtnstate, setspbtnstate] = React.useState(true) // true:Play false:stop
    const [fixreuse, setfixreuse] = React.useState(0)
    const [updatecircletime, setupdatecircletime] = React.useState()
    function reflashtimer({ initialRemainingTime }) {
        settimerduration(0)
        initialRemainingTime=0
    }

    const [page, setPage] = React.useState([])
    const [pagetime, setpagetime] = React.useState([])
    function addpage({ remainingTime }) {
        const newThingText = `Page ${page.length + 1} ${remainingTime}`
        setPage((prevState) => [...prevState, newThingText])
    }
    const pageElements = page.map((thing) => (
        <Text fontSize="30" textAlign="left" fontWeight="bold" key={thing}>
            {thing}
        </Text>
    ))
    // function addpagetime({ remainingTime }) {
    //     const newpagetimeText = remainingTime
    //     setpagetime((prevState) => [...prevState, newpagetimeText])
    // }

    // const pagetimeElements = pagetime.map((x) => (
    //     <Text fontSize="30" textAlign="right" fontWeight="bold" key={x}>
    //         {x}
    //     </Text>
    // ))

    function settimertime() {
        let timertimecal = min * 60 + sec + hr * 60 * 60
        const hx = timertimecal === 0 ? 0 : fixreuse
        if (timerduration === 0) {
            settimerduration(timertimecal + fixreuse)
        } else {
        }
        settimerisplaying((x) => !x)
        setfixreuse(timertimecal)
    }
    React.useEffect(() => {
        setspbtnstate((x) => !x)
    }, [timerisplaying])
    function stopshowtime({ remainingTime }) {
        if (timerduration === 0) {
            return (
                <Flex direction="row">
                    <TextInput
                        style={inputtextstyle.styles}
                        maxLength={2}
                        variant="Outline"
                        placeholder="00"
                        textAlign="right"
                        keyboardType="numeric"
                        defaultValue={0}
                        initialRemainingTime={0}
                        returntype="done"
                        onChangeText={(x) => (hr = Number(x))}
                    />
                    <Text fontSize="50" fontWeight="bold">
                        :
                    </Text>
                    <TextInput
                        style={inputtextstyle.styles}
                        maxLength={2}
                        variant="Outline"
                        placeholder="00"
                        textAlign="right"
                        keyboardType="numeric"
                        defaultValue={0}
                        returntype="done"
                        onChangeText={(x) => (min = Number(x))}
                    />
                    <Text fontSize="50" fontWeight="bold">
                        :
                    </Text>
                    <TextInput
                        style={inputtextstyle.styles}
                        maxLength={2}
                        variant="Outline"
                        placeholder="00"
                        textAlign="right"
                        keyboardType="numeric"
                        defaultValue={0}
                        returntype="done"
                        onChangeText={(x) => (sec = Number(x))}
                    />
                </Flex>
            )
        } else if (timerduration !== 0 && remainingTime !== 0) {
            return (
                <Text color="blue.500" fontSize="50" fontWeight="bold">
                    {Math.floor(remainingTime / 3600) === 0 ? '' : Math.floor(remainingTime / 3600) + ':'}
                    {Math.floor((remainingTime % 3600) / 60) === 0 ? '' : Math.floor((remainingTime % 3600) / 60) + ':'}
                    {remainingTime % 60}
                    {remainingTime < 60 ? 's' : ''}
                </Text>
            )
        } else if (timerduration === -12) {
            return (
                <Text color="blue.500" fontSize="50" fontWeight="bold">
                    Time Over
                </Text>
            )
        }
    }
    function timerover({ remainingTime }) {
        settimerduration(-12)
        remainingTime = 0
    }
    const helloworld = ({ remainingTime }) => {
        remainingTime
    }
    return (
        <View style={centerstyle.container} justifyContent="center" alignItems="center" display="flex">
            <View mt="24">
                <Center>
                    <Box alignItems="center">
                        <CountdownCircleTimer
                            rotation="counterclockwise"
                            updateInterval={0}
                            size={300}
                            strokeWidth={15}
                            isPlaying={timerisplaying}
                            duration={timerduration}
                            colors="#836bc5"
                            onComplete={timerover}
                        >
                            {stopshowtime}
                        </CountdownCircleTimer>
                    </Box>
                    <Flex mb="15" direction="row">
                        <IconButton
                            height="90"
                            width="90"
                            onPress={settimertime}
                            mt="10"
                            icon={
                                <Ionicons
                                    size={60}
                                    color="#000"
                                    name={
                                        timerduration === -12 || timerduration === 0
                                            ? 'play'
                                            : spbtnstate
                                            ? 'stop'
                                            : 'play'
                                    }
                                />
                            }
                            borderRadius="full"
                            bg="blue.500"
                            mx="5"
                        />
                        <IconButton
                            onPress={reflashtimer}
                            height="90"
                            width="90"
                            mt="10"
                            style={timerduration === -12 ? {} : { display: 'none' }}
                            icon={<Ionicons size={60} color="#000" name="refresh" />}
                            borderRadius="full"
                            bg="blue.500"
                            mx="5"
                        />
                        <IconButton
                            onPress={addpage}
                            height="90"
                            width="90"
                            mt="10"
                            icon={<Ionicons size={50} color="#000" name="flag" />}
                            borderRadius="full"
                            bg="blue.500"
                            mx="5"
                        />
                    </Flex>
                </Center>
            </View>
            {/* <ScrollView mx="5" mb="5" mt="15" borderRadius="10" bg="blue.500" width="300">
                {pageElements}
            </ScrollView> */}
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
    },
})

export default TimerScreen
