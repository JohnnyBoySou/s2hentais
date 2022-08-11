import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';
import { MotiView, AnimatePresence } from 'moti'

export default function MapButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? ['#F1F3FF', '#F1F3FF']
            : ['#0858D6', '#5B72F2']
        }
        start={[1, 0.2]}
      >
        <Feather
          name="map"
          size={30}
          color={focused ? '#5B72F2' : '#fff'}
        />
        {focused && <Label focused={focused}>Mapa</Label>}
      </Button>
    </TouchableWithoutFeedback>
  );
}