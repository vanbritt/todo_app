import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/layout/Header'
import Landing from './components/layout/Landing'

 class App extends Component {
  
    render() {
        return (
            <div className="container">
                <Header/>
                <Landing/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
