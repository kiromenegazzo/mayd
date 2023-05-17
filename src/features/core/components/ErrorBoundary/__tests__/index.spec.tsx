import { render, fireEvent } from 'features/ui/utils/test';

import { ErrorBoundary } from '../index';

function ChildComponentWithError() {
  throw new Error('Test error');

  return null;
}

describe('Component: ErrorBoundary', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should render children when there is no error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Content</div>
      </ErrorBoundary>,
    );

    expect(getByText('Content')).toBeInTheDocument();
  });

  it('should render error message and reload button when there is an error', () => {
    const mockedReload = jest.fn();

    Object.defineProperty(window, 'location', {
      value: {
        reload: mockedReload,
      },
      writable: true,
    });
    const { getByText } = render(
      <ErrorBoundary>
        <ChildComponentWithError />
      </ErrorBoundary>,
    );

    expect(getByText('Something went wrong.')).toBeInTheDocument();

    const reloadButton = getByText('Reload');

    fireEvent.click(reloadButton);

    expect(mockedReload).toBeCalled();
  });
});
