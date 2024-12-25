import 'react-native';
import React from 'react';

import {it, expect, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Collection from '@src/screens/Collection/Collection';
import {render} from '@testing-library/react-native';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

test('render Collection component correctly', () => {
  const tree = render(<Collection />).toJSON();
  expect(tree).toMatchSnapshot();
})

