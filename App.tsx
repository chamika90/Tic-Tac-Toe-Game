/**
 * TicTacToe Game
 * https://github.com/chamika90
 *
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { Home } from './src/screens/home/Home';
import { COLORS } from './src/resources';

const App = () => {
    return (
        <>
            <SafeAreaView style={styles.topSafeArea} />
            <SafeAreaView style={styles.bottomSafeArea}>
                <StatusBar barStyle="light-content" />
                <Home />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    topSafeArea: {
        flex: 0,
        backgroundColor: COLORS.GRAY_60,
    },
    bottomSafeArea: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
});

export default App;
