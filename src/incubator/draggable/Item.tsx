import React, {useContext, useEffect} from 'react';
import {
  useAnimatedRef,
  useSharedValue,
  runOnUI,
  useAnimatedGestureHandler,
  measure,
  withTiming,
  useAnimatedStyle
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import View from '../../components/view';
import DraggableContext from './DraggableContext';

export default ({index, children}) => {
  const {drag} = useContext(DraggableContext);
  const aref = useAnimatedRef();
  // let positionY = useSharedValue(0);

  // useEffect(() => {
  //   runOnUI(() => {
  //     aref.current.measure((x, y) => {
  //       positionY.value = y;
  //     });
  //   });
  // });

  const handler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      const {height} = measure(aref);

      ctx.startX = drag.x.value;
      ctx.startY = drag.y.value;
      drag.index.value = index;
      drag.itemHeight.value = height;
    },
    onActive: (event, ctx) => {
      drag.y.value = ctx.startY + event.translationY;
    },
    onEnd: (_, ctx) => {
      drag.x.value = withTiming(ctx.startX);
      drag.y.value = withTiming(ctx.startY, undefined, () => {
        drag.index.value = -1;
      });
    }
  });

  const style = useAnimatedStyle(() => {
    const style = {zIndex: 0};
    if (drag.index.value === index) {
      style.zIndex = 1;
      style.transform = [
        {
          translateY: drag.y.value
        }
      ];
    }/*  else {
      if (positionY.value < drag.y.value) {
        style.transform = [
          {
            translateY: drag.itemHeight.value
          }
        ];
      }
    } */
    return style;
  });

  return (
    <PanGestureHandler onGestureEvent={handler}>
      <View ref={aref} reanimated style={style}>
        {children}
      </View>
    </PanGestureHandler>
  );
};
