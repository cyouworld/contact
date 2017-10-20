import React from 'react'
import Drawer from './drawers'


const Index = ({txt,onOpenClick}) => (
	<div>
		<button type="button" onClick={()=>onOpenClick()}>opne/close</button>
		<Drawer
	        value = {txt}
	        onClick={() => onOpenClick()}
      	/>
	</div>
)
export default Index