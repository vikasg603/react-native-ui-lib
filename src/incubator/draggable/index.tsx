import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import DraggableContext from './DraggableContext';
import Item from './Item';

const Draggable = ({children}) => {
  const drag = {
    x: useSharedValue(0),
    y: useSharedValue(0),
    itemHeight: useSharedValue(0),
    dragging: useSharedValue(0),
    index: useSharedValue(-1)
  };
  return (
    <DraggableContext.Provider value={{drag}}>
      {children}
    </DraggableContext.Provider>
  );
};

Draggable.Item = Item;
export default Draggable;
