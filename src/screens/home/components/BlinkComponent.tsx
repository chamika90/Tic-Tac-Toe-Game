import React, { ReactElement, useEffect } from 'react';
import { Animated, View } from 'react-native';

type BlinkComponentProps = {
    duration: number;
    children: ReactElement;
};
export const BlinkComponent: React.FC<BlinkComponentProps> = ({ duration, children }) => {
    const fadeAnimation = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnimation, { toValue: 0, duration: duration, useNativeDriver: true }),
                Animated.timing(fadeAnimation, { toValue: 1, duration: duration, useNativeDriver: true }),
            ]),
        ).start();
    }, []);

    return (
        <View>
            <Animated.View style={{ opacity: fadeAnimation }}>{children}</Animated.View>
        </View>
    );
};
