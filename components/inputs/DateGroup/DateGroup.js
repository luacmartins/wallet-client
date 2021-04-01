const DateGroup = ({ value, setValue }) => {
  const handleStartDateChange = e => {
    if (e.target.value === '') {
      const state = { ...value }
      delete state['startDate']
      setValue(state)
    } else {
      setValue({ ...value, startDate: e.target.value })
    }
  }

  const handleEndDateChange = e => {
    if (e.target.value === '') {
      const state = { ...value }
      delete state['endDate']
      setValue(state)
    } else {
      setValue({ ...value, endDate: e.target.value })
    }
  }

  return (
    <>
      <header className='mb-2 text-sm'>Date</header>
      <div className='flex items-center h-16 bg-white border divide-x rounded-lg divide-theme-gray-600 border-theme-gray-600'>
        <div className='flex flex-col justify-center w-1/2 px-3 h-ful'>
          <label className='w-full text-sm text-theme-gray-700' htmlFor='from'>
            From
          </label>
          <input
            className='appearance-none'
            value={value['startDate'] || ''}
            onChange={handleStartDateChange}
            name='startDate'
            type='date'
          />
        </div>
        <div className='flex flex-col justify-center w-1/2 h-full px-3'>
          <label className='w-full text-sm text-theme-gray-700' htmlFor='to'>
            To
          </label>
          <input
            className='appearance-none'
            value={value['endDate'] || ''}
            onChange={handleEndDateChange}
            name='endDate'
            type='date'
          />
        </div>
      </div>
    </>
  )
}

export default DateGroup
