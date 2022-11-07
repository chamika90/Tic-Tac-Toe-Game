import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    Image,
} from 'react-native';
import { GridBackground } from './GridBackground';
import { BlinkComponent } from './BlinkComponent';
import { COLORS } from '../../resources';
import { isAllEqual } from '../../helpers/utils';

const windowWidth = Dimensions.get('window').width;
const cellWidth = windowWidth / 3.5;
const cellContainerWidth = cellWidth * 3;
const initialCellValues = [null, null, null, null, null, null, null, null, null];
const numberOfBoardCells = 9;
const winingRowIndexes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const playerXColor = COLORS.BLUE_50;
const playerYColor = COLORS.PINK_50;
const playerX = 'X';
const playerO = 'O';

export const TicTacToeGame: React.FC = () => {
    const [currentPlayer, setCurrentPlayer] = useState(playerX);
    const [playerIndicatorColor, setPlayerIndicatorColor] = useState(playerXColor);
    const [cellValues, setCellValues] = useState<Array<string | null>>(initialCellValues);
    const [isGameFinished, setIsGameFinishedStatus] = useState(false);
    const [isGameWin, setIsGameWinStatus] = useState(false);

    useEffect(() => {
        const winner = calculateWinner(cellValues);

        if (winner) {
            Alert.alert(`Congratulations ${winner}. You are the winner !`);
            setIsGameFinishedStatus(true);
            setIsGameWinStatus(true);
            setPlayerIndicatorColor(winner === playerX ? playerXColor : playerYColor);
        } else {
            const remainingSpace = cellValues.filter(element => element === null).length;
            if (remainingSpace === 0) {
                Alert.alert('Game Over !');
                setIsGameFinishedStatus(true);
                setIsGameWinStatus(false);
            }
        }
    }, [cellValues]);

    const handleCellPress = (index: number) => {
        let tempArray = [...cellValues];
        if (tempArray[index] === null) {
            tempArray[index] = currentPlayer;
            setCellValues(tempArray);
            setCurrentPlayer(currentPlayer === playerX ? playerO : playerX);
            setPlayerIndicatorColor(currentPlayer === playerX ? playerYColor : playerXColor);
        }
    };

    const calculateWinner = (inputArray: Array<String | null>) => {
        for (const row of winingRowIndexes) {
            const [a, b, c] = row;
            if (inputArray[a]) {
                const isAllInputsEqual = isAllEqual([inputArray[a], inputArray[b], inputArray[c]]);
                if (isAllInputsEqual) {
                    return inputArray[a];
                }
            }
        }
        return null;
    };

    const resetGame = () => {
        setCellValues(initialCellValues);
        setCurrentPlayer(playerX);
        setIsGameFinishedStatus(false);
        setIsGameWinStatus(false);
        setPlayerIndicatorColor(playerXColor);
    };

    const Player = () => {
        return (
            <Image
                testID="playerIcon"
                style={[styles.playerIcon, { tintColor: playerIndicatorColor }]}
                source={require('../../assets/images/icons/player-icon.png')}
            />
        );
    };

    const Winner = () => {
        return (
            <BlinkComponent duration={500}>
                <Player />
            </BlinkComponent>
        );
    };

    type boardCellProps = {
        cellIndex: number;
    };

    const BoardCell = ({ cellIndex }: boardCellProps) => {
        const cellValueColor = cellValues[cellIndex] === playerX ? playerXColor : playerYColor;

        return (
            <TouchableWithoutFeedback disabled={isGameFinished} onPress={() => handleCellPress(cellIndex)}>
                <View style={[styles.cellContainer]}>
                    <Text style={[styles.cellText, { color: cellValueColor }]}>{cellValues[cellIndex]}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    const GameBoard = () => {
        return (
            <View style={styles.boardContainer}>
                <GridBackground
                    cellWidth={cellWidth}
                    cellContainerWidth={cellContainerWidth}
                    numberOfHorizontalLines={2}
                    numberOfVerticalLines={2}
                />
                <View style={styles.boardCellContainer}>
                    {[...Array(numberOfBoardCells)].map((cell, index) => (
                        <BoardCell key={index} cellIndex={index} />
                    ))}
                </View>
            </View>
        );
    };

    const ResetButton = () => {
        return (
            <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
                <Image style={styles.resetButtonIcon} source={require('../../assets/images/icons/reset-icon.png')} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.playerContainer}>{(isGameWin && <Winner />) || <Player />}</View>
            <View style={styles.gameContainer}>
                <GameBoard />
            </View>
            <View style={styles.resetButtonContainer}>
                <ResetButton />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.BLACK,
        alignItems: 'center',
    },
    gameContainer: { flex: 3, justifyContent: 'center', alignItems: 'center' },
    boardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    boardCellContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    cellContainer: {
        width: cellWidth,
        height: cellWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellText: {
        fontSize: 50,
        fontWeight: '800',
    },
    playerContainer: { flex: 1, justifyContent: 'center' },
    playerIcon: { width: 80, height: 80 },
    resetButtonContainer: { flex: 1, width: '100%' },
    resetButton: { alignItems: 'flex-end', marginRight: 20 },
    resetButtonIcon: { width: 80, height: 80 },
});
