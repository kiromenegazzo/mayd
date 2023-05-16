import { ReactNode } from 'react';

import { render as rtlRender } from '@testing-library/react';
import { Provider, WritableAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/react/utils';

interface IHydrateAtomsProps {
  initialValues: [[WritableAtom<unknown, any[], any>, any]];
  children: ReactNode;
}

const HydrateAtoms = (props: IHydrateAtomsProps) => {
  const { initialValues, children } = props;

  useHydrateAtoms(initialValues);

  return (
    <>
      {children}
    </>
  );
};

const renderWithProvider = (children: ReactNode, value?: IHydrateAtomsProps['initialValues']) => {
  const content = value ? (
    <HydrateAtoms initialValues={value}>
      {children}
    </HydrateAtoms>
  ) : children;

  return rtlRender(
    <Provider>
      {content}
    </Provider>,
  );
};

export * from '@testing-library/react';
export { renderWithProvider };
