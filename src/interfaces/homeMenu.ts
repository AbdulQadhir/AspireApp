import React from 'react';

export default interface HomeMenu {
  icon: React.ReactNode;
  title: string;
  description: string;
  hasSwitch?: boolean;
  onSwitch?: Function;
  switchOn?: boolean;
}
