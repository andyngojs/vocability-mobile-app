import React, {Ref, useMemo} from 'react';
import {IconProps as RNIconProps} from 'react-native-vector-icons/Icon';
import {BUNDLE_ICON_SETS, BundleIconSetName} from './constant';

export type BundleIcon =
  | BundleIconSetName.ANT_DESIGN
  | BundleIconSetName.ENTYPO
  | BundleIconSetName.EVIL_ICONS
  | BundleIconSetName.FEATHER
  | BundleIconSetName.FONTISTO
  | BundleIconSetName.FONT_AWESOME
  | BundleIconSetName.FONT_AWESOME_5
  | BundleIconSetName.FOUNDATION
  | BundleIconSetName.IONICONS
  | BundleIconSetName.MATERIAL_COMMUNITY_ICONS
  | BundleIconSetName.MATERIAL_ICONS
  | BundleIconSetName.OCTICONS
  | BundleIconSetName.SIMPLE_LINE_ICONS
  | BundleIconSetName.ZOCIAL;

export interface IconProps extends RNIconProps {
  bundle?: BundleIcon;
}

const _Icon = React.forwardRef(
  (
    {bundle = BundleIconSetName.IONICONS, ...props}: IconProps,
    ref: Ref<any>,
  ) => {
    const IconComponent = useMemo(() => {
      return BUNDLE_ICON_SETS[bundle];
    }, [bundle]);

    return <IconComponent {...props} ref={ref} />;
  },
);

export const Icon = React.memo(_Icon);
export {BUNDLE_ICON_SETS, BundleIconSetName};
