import Header from './Header'
import SideNav from './SideNav'
import PropTypes from 'prop-types'

function MainLayout({children}) {
  return(
    <>
      <Header />
      <div className="main-layout-content-container">
        <SideNav />
        <div className="main-layout-content">
          {children}
        </div>
      </div>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout;
