import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  setSelectedColor = (newColor) => {
    this.setState({
        selectedColor: newColor
    })
  }


  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )
  // Cell only needs to know the currently selected color, not change it. We can pass this in to every Cell returned by genRow() as a prop called selectedColor

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
      <ColorSelector setSelectedColor={this.setSelectedColor} />
        {/* Here we are passing the needed function down as a prop to colorSelector*/}
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: learnSymbol
}