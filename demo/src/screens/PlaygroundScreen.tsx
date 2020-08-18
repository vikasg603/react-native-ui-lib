import _ from 'lodash';
import React, {Component, useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {View, Text, Colors, Avatar, Incubator} from 'react-native-ui-lib'; //eslint-disable-line

const {Draggable} = Incubator;

export default class PlaygroundScreen extends Component {
  render() {
    return (
      <View bg-dark80 flex>
        <Draggable>
          <ScrollView>
            {_.times(10, (index) => {
              return (
                <Draggable.Item key={index} index={index}>
                  <View
                    flex
                    row
                    bg-white
                    centerV
                    paddingH-20
                    paddingV-5
                    style={{borderBottomWidth: 1, borderColor: Colors.grey50}}
                  >
                    <Avatar backgroundColor={Colors.purple60} size={48} />
                    <Text marginL-10 text60 grey40>
                      {index}
                    </Text>
                  </View>
                </Draggable.Item>
              );
            })}
          </ScrollView>
        </Draggable>
      </View>
    );
  }
}
