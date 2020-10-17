import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import _cards from 'data/cards.json'

import { Card } from './Card'
import type { ICardProps } from './Card'

const card: ICardProps = _cards[0]

describe('Карточка', () => {
  it('рендерится правильно', () => {
    const wrapper = shallow(<Card {...card} />)

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
