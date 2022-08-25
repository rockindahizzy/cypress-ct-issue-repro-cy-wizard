/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export type ButtonVariant =
  | 'black'
  | 'ghostblack'
  | 'ghostwhite'
  | 'inactive'
  | 'underlined'
  | 'white'
export type ButtonSize = 'large' | 'medium' | 'small';

export type CustomProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  text?: string;
};


/**
 * Render a button.
 * TODO: The `ghostwhite` variant is not visible on a white background.
 * Likewise, `ghostblack` is barely visible on some darkmode background.
 * Should this perhaps become a single variant that adapts automatically?
 */
export const Button = (props: CustomProps) => {

  const {text} = props

  return (
    <button {...props}>
      <span>{text}</span>
    </button>
  );
}
