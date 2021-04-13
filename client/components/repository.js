import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import Header from './header'

const Repository = () => {
  const [cont, setContent] = useState('')
  const { userName } = useParams()
  const { repositoryName } = useParams()
  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${userName}/${repositoryName}/readme`)
      .then((item) => setContent(item.data.content || ''))
  })
  return (
    <div>
      <Header />
      <div id="description">
        <Markdown>{atob(cont)}</Markdown>
      </div>
    </div>
  )
}

Repository.propTypes = {}

export default React.memo(Repository)
