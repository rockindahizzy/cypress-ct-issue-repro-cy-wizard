import React from 'react';
import { App } from '../../src/app/app';
import { mount } from '@cypress/react';

describe('ComponentName.cy.js', () => {
  it('playground', () => {
    mount(<App />);
  });
});
