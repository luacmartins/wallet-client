import { useState, useEffect } from 'react'
import moment from 'moment'
import Amount from '../../inputs/Amount'

const OvertimeTooltip = ({ coordinate: { x, y }, payload }) => {
  const [pos, setPos] = useState(null)

  let colors, categories, total, date, rest
  if (payload.length > 0) {
    ;({ date, ...rest } = payload[0].payload)
    colors = Object.fromEntries(payload.map(item => [item.name, item.color]))
    categories = Object.entries(rest)
      .map(item => ({ category: item[0], amount: item[1] }))
      .sort((a, b) => b.amount - a.amount)
    total = Object.values(rest).reduce((sum, item) => (sum += item))
  }

  useEffect(() => {
    let xPos
    const $width = window.innerWidth
    if ($width < 767) xPos = 0
    else if (x < 320) xPos = 20
    else if (x > $width - 320) xPos = $width - 340
    else xPos = x - 160
    setPos(xPos)
  }, [x])

  return (
    <div className='flex items-center justify-between w-screen h-32 overflow-hidden text-theme-gray-700 bg-theme-gray-100'>
      <div
        style={{ left: pos }}
        className='absolute bottom-0 flex justify-center w-full mb-2 space-x-6 transform md:w-80'
      >
        <div className='flex flex-col items-center justify-center w-24'>
          <span className='text-sm font-normal'>{moment(date).format('MMM D, YYYY')}</span>
          <div className='text-xl text-theme-gray-900'>
            <Amount value={total} />
          </div>
        </div>
        {categories && (
          <div className='text-sm xl:text-base'>
            {categories.map(item => (
              <div
                key={item.category}
                style={{ color: colors[item.category] }}
                className='flex justify-between'
              >
                <span className='flex-1 truncate whitespace-no-wrap'>{item.category}</span>
                <span className='ml-4'>
                  <Amount value={item.amount} />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default OvertimeTooltip
