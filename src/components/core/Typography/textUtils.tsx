import { objMap } from 'src/utils/general';
import { TextThemeVariantPropsType } from '../../../styles/themes/themes.types';
import { rem, flFontWeight } from '../../../styles/typography/font';
import {
  ITextPresets,
  textVariants,
} from '../../../styles/typography/textVariants';
// import { flFontWeight } from 'src/styles/typography/font';

/**
 * Generate style properties for the base text.
 */
const generateTextStyles = (
  presets: ITextPresets & TextThemeVariantPropsType,
): React.CSSProperties => {
  const { fontWeight, fontSize, lineHeight, color } = presets;

  console.log('size', rem(fontSize));

  return {
    fontWeight: fontWeight || 400,
    fontSize: rem(fontSize),
    color,
    lineHeight: rem(lineHeight),
  };
};

export const flBaseTextVariantStyles = objMap(
  textVariants,
  (variant, styles) => [`&.${variant}`, generateTextStyles(styles)],
);
