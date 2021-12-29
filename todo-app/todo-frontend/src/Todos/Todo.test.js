import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders content', () => {
  const todo = {
    text: 'Component testing is done with react-testing-library',
    done: false,
  };

  const component = render(<Todo todo={todo} />);

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  );
});
