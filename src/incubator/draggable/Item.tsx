import React, {useContext, useCallback} from 'react';
import {
  useAnimatedRef,
  measure,
  useSharedValue,
  useAnimatedGestureHandler,
  withTiming,
  useAnimatedStyle
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import View from '../../components/view';
import DraggableContext from './DraggableContext';

export default ({index, children}) => {
  const [layout, onLayout] = useComponentLayout();
  const {drag} = useContext(DraggableContext);
  const aref = useAnimatedRef();

  const handler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      const {height} = measure(aref);

      ctx.startY = drag.translateY.value;
      drag.y.value = layout.value.y;
      drag.index.value = index;
      drag.itemHeight.value = height;
      drag.itemHeight.value = height;
    },
    onActive: (event, ctx) => {
      drag.translateY.value = ctx.startY + event.translationY;
      drag.y.value = layout.value.y + event.translationY;
    },
    onEnd: (_, ctx) => {
      drag.translateY.value = withTiming(ctx.startY, undefined, () => {
        drag.index.value = -1;
      });
    }
  });

  const style = useAnimatedStyle(() => {
    const style = {zIndex: 0, transform: []};
    if (drag.index.value !== -1) {
      const isDraggedItem = drag.index.value === index;
      const isAboveDragged =
        layout.value.y < drag.y.value && drag.index.value < index;
      const isUnderDragged =
        layout.value.y + layout.value.height > drag.y.value &&
        drag.index.value > index;

      let translateY;
      if (isDraggedItem) {
        style.zIndex = 1;
        translateY = drag.translateY.value;
      } else if (isAboveDragged) {
        translateY = -drag.itemHeight.value;
      } else if (isUnderDragged) {
        translateY = drag.itemHeight.value;
      }

      if (translateY) {
        style.transform = [
          {
            translateY
          }
        ];
      }
    }
    return style;
  });
  return (
    <PanGestureHandler onGestureEvent={handler}>
      <View ref={aref} reanimated style={style} onLayout={onLayout}>
        {children}
      </View>
    </PanGestureHandler>
  );
};

const useComponentLayout = () => {
  const layout = useSharedValue({});

  const onLayout = useCallback((event) => {
    layout.value = event.nativeEvent.layout;
  }, []);

  return [layout, onLayout];
};
