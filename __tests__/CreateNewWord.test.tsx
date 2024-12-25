import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {expect, test} from '@jest/globals';
import CreateNewWord from '@src/screens/CreateNewWord';

test('render create new vocabulary component', async () => {
  render(<CreateNewWord />)
  const buttonAdd = screen.getByRole('Button', { name: 'Add Word'})
  expect(buttonAdd)
})
