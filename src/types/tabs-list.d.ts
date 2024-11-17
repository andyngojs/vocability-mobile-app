import React from 'react';

export interface BottomTabList {
  name: string;
  component: React.ComponentType | React.FC;
  icon: string;
  selectedIcon: string;
}
