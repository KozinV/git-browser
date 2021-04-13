import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { repositoryName } = useParams()
  const { userName } = useParams()
  return (
    <div className="flex bg-indigo-800 text-white">
      <div className="p-2 m-2" id="repository-name">
        {repositoryName}
      </div>
      <div className="p-2 m-2 border-2 rounded-md">
        <Link id="go-back" to="/">
          Go back!
        </Link>
      </div>
      <div className="p-2 m-2 border-2 rounded-md">
        <Link id="go-repository-list" to={`/${userName}`}>
          Go to List!
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
