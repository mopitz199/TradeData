import { StyleSheet } from 'react-native';

export const primaryNormalColor = "#9c27b0";
export const primaryLightColor = "#d05ce3";
export const primaryDarkColor = "#6a0080";

export const secondaryNormalColor = "#ffeb3b";
export const secondaryLightColor = "#ffff72";
export const secondaryDarkColor = "#c8b900";

export const primaryTextColor = "rgba(255, 255, 255, 0.80)";
export const secondaryTextColor = "rgba(0, 0, 0, 0.52)";

export const borderColor = "rgb(217, 217, 217)";

export const successColor = "rgb(48, 181, 14)";
export const errorColor = "rgb(238, 83, 80)";

export const inputRequired = StyleSheet.flatten({
  enabled:{
    color: errorColor,
  }
});
