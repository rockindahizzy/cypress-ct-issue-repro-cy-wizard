

// /**
//  * Allow some props on `style` that would be required for Styled-JSX.
//  * @see https://stackoverflow.com/questions/66011598/styled-jsx-typescript-error-after-migrating-to-monorepo-structure-property-jsx
//  */
// declare module 'react' {
//   /* eslint-disable @typescript-eslint/naming-convention */
//   interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
//     jsx?: boolean | string;
//     global?: boolean;
//   }
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
