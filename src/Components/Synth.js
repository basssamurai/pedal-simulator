import React, {Component} from 'react'
import Tone from 'tone'
import AutoFilter from './AutoFilter.js'
import update from 'immutability-helper'

class Synth extends Component {
  constructor(props) {
    super(props)

    var signal = new Tone.Synth ({
      oscillator: { type: 'square' },
      envelope  : {
        attack  : 0.005 ,
        decay  : 0.1 ,
        sustain  : 0.3 ,
        release  : 1
      }
    })

    var autoFilter = new Tone.AutoFilter(160, 80, 2)
    autoFilter.wet.value = 100

    this.state = {
      sound: signal,
      filter: autoFilter
    }
  }

  render() {
    this.state.sound.toMaster()
    return(
      <AutoFilter
        sound={this.state.sound}
      />
    )
  }
}

export default Synth
