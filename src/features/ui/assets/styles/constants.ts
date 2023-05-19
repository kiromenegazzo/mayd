import { css, FlattenSimpleInterpolation } from 'styled-components';

type TBreakpoints = 'mobile' | 'tablet' | 'desktop';

export const breakpoints: Record<TBreakpoints, number> = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
};

export const media = Object
  .keys(breakpoints)
  .reduce((acc, key: TBreakpoints) => {
    acc[key] = (styles: FlattenSimpleInterpolation, ...vars: any[]) => {
      const allStyles = styles
        .map((chunk, index) => `${chunk}${vars[index] || ''}`)
        .join('');

      return css`
        @media only screen and (max-width: ${breakpoints[key]}px) {
          ${allStyles};
        }
      `;
    };

    return acc;
  }, {} as Record<TBreakpoints, (styles: FlattenSimpleInterpolation, ...vars: any[]) => ReturnType<typeof css>>);

export const MAX_CONTENT_WIDTH = 1280;
export const BORDER_RADIUS = 4;
