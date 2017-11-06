import React, { Component } from 'react'
import Tone from 'tone'
import update from 'immutability-helper'

class AutoFilter extends Component {
  constructor(props) {
    super(props)

    var autoFilter = new Tone.AutoFilter(1, 1200, 2)
    console.log(autoFilter);
    autoFilter.wet.value = 100

    this.state = {
      filter: autoFilter
    }

  //Connect synth sound from Synth.js and start filter
    this.props.sound.connect(this.state.filter)
    this.state.filter.start()
  }
  //change frequency parameters of filter
  changeFrequency(event) {
    console.log(this.state.filter.filter);
    let newFreq = event.target.value * 0.5 + 0.3
    let newFilter = {
      frequency: {
        value: { $set: newFreq }
      }
    }
    let newAutoFilter = update(this.state.filter, newFilter)
    this.setState({
      autoFilter: newAutoFilter
    }, _ => console.log(this.state.autoFilter.filter.frequency.value))
  }

  render() {
    this.props.sound.triggerAttackRelease('C4', '1n')
    this.state.filter.toMaster()

    let adjustFreq = (
      <input
        type="range"
        className="slider"
        onInput={(e) => this.changeFrequency(e)}
      />
    )

    return(
      <div className="effect-autoFilter">
        <h3 className="effect-type">Filter</h3>
        <div>
          <p className="effect-label">Frequency: </p>
          {adjustFreq}
        </div>
      </div>
    )
  }
}

export default AutoFilter
