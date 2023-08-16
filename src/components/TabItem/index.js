import './index.css'

const TabItem = props => {
  const {eachTab, getActiveTabId, isActiveTab} = props
  const {tabId, displayText} = eachTab
  const activeTabBtn = () => {
    getActiveTabId(tabId)
  }

  const isActiveTabClass = isActiveTab ? 'active-tab' : ''
  return (
    <li className="item-container">
      <button
        type="button"
        className={`tab-item ${isActiveTabClass}`}
        onClick={activeTabBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
