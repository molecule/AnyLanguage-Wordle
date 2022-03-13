import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import App from './App'
import jsonData from './constants/levels'

// https://stackoverflow.com/questions/67610911/how-to-use-react-table-for-a-local-json-file
function processData(jsonData: any) {
  const result = Object.keys(jsonData).map((key) => {
    return jsonData[key]
  })
  return result
}

//const data = React.useMemo(() => processData(jsonData), []);
const levels = [
  { puzzle: 'Day 0', result: 'squares', score: '0/6' },
  { puzzle: 'Day 1', result: 'squares', score: '0/6' },
]

const Archive: React.FC<WithTranslation> = ({ t, i18n }) => {
  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <table>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Puzzle</th>
            <th style={{ width: '30%' }}>Results</th>
            <th style={{ width: '40%' }}>Score</th>
          </tr>
        </thead>
        {levels.map((level) => {
          return (
            <tr>
              <td>{level.puzzle}</td>
              <td>{level.result}</td>
              <td>{level.score}</td>
            </tr>
          )
        })}
      </table>
      <App />
    </div>
  )
}
export default withTranslation()(Archive)
