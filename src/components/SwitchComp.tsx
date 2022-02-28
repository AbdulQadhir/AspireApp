import React, {FC} from 'react';
import {Switch} from 'react-native-switch';
import {Colors} from '../Theme';
import {normalize} from '../Theme/Fonts';

interface Props {
  onSwitch?: Function;
  on: boolean;
}

const SwitchComp: FC<Props> = props => {
  return (
    <Switch
      value={props.on}
      onValueChange={val => props.onSwitch && props.onSwitch(val)}
      activeText=""
      inActiveText=""
      backgroundInactive="#EEEEEE"
      circleBorderInactiveColor="#EEEEEE"
      backgroundActive={Colors.secondary}
      circleBorderActiveColor={Colors.secondary}
      circleSize={normalize(16)}
    />
  );
};

export default SwitchComp;
