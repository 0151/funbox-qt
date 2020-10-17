import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'

describe('Приложение', () => {
  it('рендерится', () => {
    shallow(<App />)
  })
})
