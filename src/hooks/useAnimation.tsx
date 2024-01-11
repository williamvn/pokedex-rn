import { useRef } from "react";
import { Animated, Easing } from "react-native";

interface Animation {
    value: Animated.Value;
    animate: (endValue?: number, duration?: number, callback?: () => void) => void;
    animateEndlessly: (endValue?: number, duration?: number) => void;
    animateReset: (endValue?: number, duration?: number, callback?: () => void) => void;
}

export const useAnimation = (initValue: number = 0, easing: ((value: number) => number) | undefined): Animation => {
    const value = useRef(new Animated.Value(initValue)).current;

    const animateEndlessly = (endValue: number = 100, duration: number = 100, cycleTime: number = 1000) => {
        const animation = Animated.timing(value, { toValue: endValue, duration: duration, useNativeDriver: true, easing: easing });
        animation.start(() => {
            animateReset(initValue, duration);
            setTimeout(() => animateEndlessly(endValue, duration, cycleTime), cycleTime);
        });
    };

    const animate = (endValue: number = 100, duration: number = 100, callback?: () => void) => {
        Animated.timing(value, { toValue: endValue, duration: duration, useNativeDriver: true, easing: easing }).start(callback);
    }

    const animateReset = (endValue: number = 100, duration: number = 100, callback?: () => void) => {
        Animated.timing(value, { toValue: endValue, duration: duration, useNativeDriver: true, easing: Easing.linear }).start(callback);
    };

    return { value, animateEndlessly, animate, animateReset };
}