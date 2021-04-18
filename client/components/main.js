import React, { useState } from 'react'
import { history } from '../redux'
import Head from './head'

const Home = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center">
        <div className="flex bg-indigo-600 shadow-lg p-5">
          <div>
            <input
              id="input-field"
              type="text"
              value={value}
              onChange={onChange}
              placeholder="input name"
              className="focus:placeholder-gray-100"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  history.push(`/${value}`)
                }
              }}
            />
            <button
              id="search-button"
              className="mx-5 p-2 font-normal text-white hover:bg-indigo-800 active:bg-indigo-900"
              type="button"
              onClick={() => history.push(`/${value}`)}
            >
              Search!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
