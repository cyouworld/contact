import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import Index from './containers'
import RouterMap from './router'
import { hashHistory } from 'react-router'

const store = createStore(reducer)

render(
	<div>
	  <Provider store={store}>
	  	<RouterMap history={hashHistory} />
	  </Provider>
	</div>,
  document.getElementById('root')
)