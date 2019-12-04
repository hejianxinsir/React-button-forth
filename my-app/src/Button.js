import React from 'react';
import './Button.css';

class Button extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			appear: false,
			deltaX: 0,
			deltaY: 0
		}
		this.myRef = React.createRef();
	}
	
	redDot(aaa){
		let {clientX, clientY} = aaa;
		let {x, y} = this.myRef.current.getBoundingClientRect();
		let deltaX = clientX - x -5;
		let deltaY = clientY - y -5;

		this.setState({
			appear: true,
			deltaX: deltaX,
			deltaY: deltaY
		})

	}

	clear(){
		this.setState({
			appear: false	
		})
	}

	render(){
		return(
			<button className="btn" ref={this.myRef} onClick={this.redDot.bind(this)}
							onAnimationEnd={this.clear.bind(this)}
			>
					{this.state.appear === true ? <span className="redDot"
							style={{left: this.state.deltaX, top: this.state.deltaY}}></span> : ''}
					{this.props.value}
			</button>
		)
	}
}

export default Button
