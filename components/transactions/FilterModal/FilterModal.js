import { useState } from 'react'
import FilterIcon from '../../icons/Filter'
import Modal from '../../shared/Modal'
import FiltersList from '../FiltersList'
import useOverlay from '../../../utils/useOverlay'

const FilterModal = ({ list, value, setValue }) => {
  const { isVisible, open, close } = useOverlay()

  return (
    <>
      <FilterIcon onClick={open} />
      <Modal isVisible={isVisible} close={close} title={'Filters'}>
        <div className='mx-4 mt-4 mb-12'>
          <FiltersList list={list} value={value} setValue={setValue} />
        </div>
      </Modal>
    </>
  )
}

export default FilterModal
