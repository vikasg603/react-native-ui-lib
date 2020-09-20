import React, {Component, useCallback, useState} from 'react';
import {View, Text, Colors, /* TouchableOpacity, */ Incubator} from 'react-native-ui-lib';
import _ from 'lodash';

const TouchableOpacity = Incubator.TouchableOpacity;

/* Class  */
// export default class Screen extends Component {
//   state = {
//     counter: 0
//   };

//   count = ({id}) => {
//     this.setState({counter: this.state.counter + 1});
//   };

//   render() {
//     console.warn('counter', this.state.counter);
//     return (
//       <View padding-page flex center>
//         <Text>With Class Screen</Text>
//         <TouchableOpacity padding-20 bg-orange30 marginB-10 onPress={this.count}>
//           <Text>{this.state.counter}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

/* Function */
export default () => {
  const [counter, setCounter] = useState(0);

  const count = () => {
    setCounter(counter + 1);
  };

  console.warn('counter', counter);
  return (
    <View padding-page flex center>
      <Text>With Function</Text>

      <TouchableOpacity padding-20 bg-orange30 marginB-10 onPress={count}>
        <Text>{counter}</Text>
      </TouchableOpacity>
    </View>
  );
};
