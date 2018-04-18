import React from 'react'
import ReactDOM from 'react-dom'
import { shell } from 'electron'

class HistoryButton extends React.Component {
  onClick(event) {
    event.preventDefault()
    shell.openExternal(event.target.href)
  }

  render() {
    const url = 'https://team.trineo.com/s/time-logging'
    return <a href={url} onClick={this.onClick} className="button">History</a>
  }
}

const rootNode = document.createElement('div')
document.body.appendChild(rootNode)
ReactDOM.render(<HistoryButton />, rootNode)
