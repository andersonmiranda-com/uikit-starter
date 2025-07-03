import { Text, type TextProps } from '../Text';
import { TextVariant } from '../Text/text.tv';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface IHeadingProps extends Omit<TextProps, 'as' | 'variant'> {
  /**
   * The level of the heading, from 1 to 6.
   * This will determine the HTML tag (e.g., `<h1>`, `<h2>`) and the visual style.
   */
  level: HeadingLevel;
}

export const Heading = ({ level, ...props }: IHeadingProps) => {
  const variant = `h${level}` as TextVariant;
  return <Text {...props} variant={variant} />;
};

Heading.displayName = 'Heading';
