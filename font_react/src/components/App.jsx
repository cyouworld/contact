import React from 'react'
import Index from "../containers"
import BottomNavigation from './BottomNavigation'
import "./App.css"
class App extends React.Component {
    render() {
        return (
        	<div>
        		<Index />
            	<div className="container container-custom">{this.props.children}</div>
            	<BottomNavigation/>
            </div>
        )
    }
}

export default App