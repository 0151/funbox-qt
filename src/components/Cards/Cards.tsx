import React, { FC } from 'react'

import { Card } from 'components'
import type { ICardProps } from 'components'
import { cn } from 'helpers/classname'

import './Cards.css'
import _data from 'data/cards.json'

const data: ICardProps[] = _data

const TEXT = {
  TITLE: 'Ты сегодня покормил кота?',
}

const b_ = cn('cards')

export const Cards: FC = () => {
  return (
    <div className={b_()}>
      <h1 className={b_('title')}>{TEXT.TITLE}</h1>
      <div className={b_('list')}>
        {data.map(({ taste, ...restCardProps }) => (
          <Card
            key={taste}
            taste={taste}
            {...restCardProps}
            className={b_('item')}
          />
        ))}
      </div>
    </div>
  )
}
