import React from 'react';
import {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolateColors
} from 'react-native-reanimated';
import View from '../../components/view';
import Text from '../../components/text';
import TouchableOpacity from '../../components/touchableOpacity';
import {Colors} from '../../style';

export default function SegmentControl() {
  let toggleValue = 0;
  const indicatorAnimation = useSharedValue(toggleValue);
  const pressAnimation = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    return {
      shadowColor: Colors.grey50,
      shadowOpacity: 0.5,
      shadowOffset: {width: 4, height: 4},
      transform: [{scale: interpolate(pressAnimation.value, [0, 1], [1, 0.99])}]
    };
  });

  const indicatorStyle = useAnimatedStyle(() => {
    const left = interpolate(indicatorAnimation.value, [0, 1], [0, 50]) + '%';
    const scale = interpolate(
      indicatorAnimation.value,
      [0, 0.5, 1],
      [1, 0.95, 1]
    );
    return {
      borderRadius: 100,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left,
      transform: [{scale}]
    };
  });

  const firstTextStyle = useAnimatedStyle(() => {
    const color = interpolateColors(indicatorAnimation.value, {
      inputRange: [0, 1],
      outputColorRange: [Colors.white, Colors.grey10]
    });
    // TODO: This Crashes the app, we need to wait till reanimated 
    return {
      // color
    };
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        toggleValue = Number(!toggleValue);
        indicatorAnimation.value = withSpring(toggleValue, {damping: 14});
        pressAnimation.value = withTiming(
          Number(1),
          {duration: 100},
          () => (pressAnimation.value = withTiming(0, {duration: 100}))
        );
      }}
    >
      <View
        reanimated
        bg-white
        row
        height={60}
        width={300}
        br100
        style={containerStyle}
      >
        <View
          reanimated
          width={'50%'}
          bg-red40
          style={indicatorStyle}
          pointerEvents="none"
        />
        <View flex center>
          <Text text70R reanimated style={firstTextStyle}>
            Profile
          </Text>
        </View>
        <View flex center>
          <Text text70R reanimated>
            Reviews
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
