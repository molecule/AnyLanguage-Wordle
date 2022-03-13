import { withTranslation, WithTranslation } from 'react-i18next'
import App from './App'

const GameTable: React.FC<WithTranslation> = ({ t, i18n }) => {
  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="flex w-80 mx-auto items-center mb-8">A PAGE</div>
      <App />
    </div>
  )
}
export default withTranslation()(GameTable)
