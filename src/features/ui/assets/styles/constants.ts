import { css, FlattenSimpleInterpolation   } from 'styled-components';

export enum EMaxWidth {
  Mobile = 375,
  Desktop = 1140,
}

const mobile = (styles: FlattenSimpleInterpolation, ...vars: any[]) => {
  const allStyles = styles
    .map((chunk, index) => `${chunk}${vars[index] || ''}`)
    .join('');

  return css`
    @media only screen and (max-width: ${EMaxWidth.Desktop}px) {
      ${allStyles};
    }
  `;
};

export const media = {
  mobile,
  // desktop,
};
