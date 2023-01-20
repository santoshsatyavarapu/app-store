// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, imageUrl, appName} = appDetails
  return (
    <>
      <li className="app-item-container">
        <img src={imageUrl} alt={appName} className="logo-image" />
        <p className="heading">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
