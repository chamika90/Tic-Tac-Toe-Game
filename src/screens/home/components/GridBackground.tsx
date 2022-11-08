import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../resources';

export type GridBackgroundProps = {
    cellWidth: number;
    cellContainerWidth: number;
    numberOfHorizontalLines: number;
    numberOfVerticalLines: number;
};
export const GridBackground: React.FC<GridBackgroundProps> = ({
    cellWidth,
    cellContainerWidth,
    numberOfHorizontalLines,
    numberOfVerticalLines,
}) => {
    const HorizontalLine = () => {
        return (
            <View
                testID="horizontalLine"
                style={[{ marginLeft: cellWidth, height: cellContainerWidth }, styles.horizontalLine]}
            />
        );
    };

    const VerticalLine = () => {
        return <View style={[{ marginTop: cellWidth, width: cellContainerWidth }, styles.verticalLine]} />;
    };

    const HorizontalLineContainer = () => {
        return (
            <View testID="horizontalLineContainer" style={styles.horizontalLineContainer}>
                {[...Array(numberOfHorizontalLines)].map((element, index) => (
                    <HorizontalLine key={index} />
                ))}
            </View>
        );
    };
    const VerticalLineContainer = () => {
        return (
            <View testID="verticalLineContainer" style={styles.verticalLineContainer}>
                {[...Array(numberOfVerticalLines)].map((element, index) => (
                    <VerticalLine key={index} />
                ))}
            </View>
        );
    };

    return (
        <View style={{ width: cellContainerWidth, height: cellContainerWidth }}>
            <HorizontalLineContainer />
            <VerticalLineContainer />
        </View>
    );
};

const styles = StyleSheet.create({
    horizontalLineContainer: { flexDirection: 'row', position: 'absolute' },
    verticalLineContainer: { flexDirection: 'column', position: 'absolute' },
    horizontalLine: { width: 1, backgroundColor: COLORS.WHITE },
    verticalLine: { height: 1, backgroundColor: COLORS.WHITE },
});
