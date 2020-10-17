import React, { FC, HTMLProps, useState } from 'react'

import { cn } from 'helpers/classname'

import './Card.css'

export interface ICardProps {
  /**
   * Вкус
   */
  taste: string
  /**
   * Особенности
   */
  features?: string[]
  /**
   * Описание
   */
  description: string
  /**
   * Вес
   */
  weight: number
  /**
   * Неактивное состояние
   */
  disabled?: boolean
}

const TEXT = {
  SUBTITLE: 'Сказочное заморское яство',
  PRODUCT_NAME: 'Нямушка',
  CALL_TO_ACTION: 'Чего сидишь? Порадуй котэ, ',
  BUY: 'купи',
  OUT_OF_STOCK: 'Печалька, %s закончился.',
  PREVENT_REMOVE: 'Котэ не одобряет?',
  KG: 'кг',
}

const b_ = cn('card')

export const Card: FC<ICardProps & HTMLProps<HTMLDivElement>> = ({
  taste,
  description,
  features,
  weight,
  disabled,
  className,
  ...restCardProps
}) => {
  const [selected, setSelected] = useState(false)
  const [hover, setHover] = useState(false)
  const preventing = hover && selected

  const handleClick = () => {
    setSelected(!selected)

    return selected || setHover(false)
  }

  const handleMouseHover = {
    onMouseEnter: () => selected && setHover(true),
    onMouseLeave: () => selected && setHover(false),
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    event.preventDefault()

    if (event.key === ' ') {
      handleClick()
    }
  }

  return (
    <div className={b_({ selected, disabled }, [className])} {...restCardProps}>
      <div
        className={b_('outer')}
        role="checkbox"
        aria-checked={selected}
        tabIndex={disabled ? -1 : 1}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        {...handleMouseHover}
      >
        <div className={b_('inner')}>
          <span className={b_('subtitle', { preventing })}>
            {preventing ? TEXT.PREVENT_REMOVE : TEXT.SUBTITLE}
          </span>
          <h2 className={b_('title')}>
            <span className={b_('name')}>{TEXT.PRODUCT_NAME}</span>
            <span className={b_('taste')}>{taste}</span>
          </h2>
          <ul className={b_('features')}>
            {features?.map((feature) => (
              <li
                key={feature}
                className={b_('feature')}
                dangerouslySetInnerHTML={{ __html: feature }}
              />
            ))}
          </ul>
          <span className={b_('weight')}>
            {weight.toString().replace('.', ',')}
            <span className={b_('unit')}>{TEXT.KG}</span>
          </span>

          <span className={b_('image')} role="img" />
        </div>
      </div>
      <span className={b_('footnote')}>
        {selected && description}
        {disabled && TEXT.OUT_OF_STOCK.replace('%s', taste)}
        {!selected && !disabled && (
          <>
            {TEXT.CALL_TO_ACTION}
            <span
              className={b_('pseudolink')}
              role="button"
              tabIndex={0}
              onClick={handleClick}
              onKeyPress={handleKeyPress}
            >
              {TEXT.BUY}
            </span>
            <span className={b_('dot')}>.</span>
          </>
        )}
      </span>
    </div>
  )
}
