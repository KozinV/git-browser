import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Header from './header'

const User = () => {
  const { userName } = useParams()
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => setList(it.data))
  })

  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          {list.map((item) => {
            return (
              <div key={item.id}>
                <Link
                  className="block border-2 rounded-md m-2 p-2"
                  key={item.id}
                  to={`/${userName}/${item.name}`}
                >
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

User.propTypes = {}

export default React.memo(User)
