import React from 'react'
import {shallow} from 'enzyme'
import App from './app'

test('it renders the shell input', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('#shell-input').length).toBe(1)
})
