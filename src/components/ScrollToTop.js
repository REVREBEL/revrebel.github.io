import { Component } from 'react-dom'
import { useRoutes } from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children || null
  }
}

export default withRouter(ScrollToTop)
