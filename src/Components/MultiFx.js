import React, {Component} from 'react'
import Tone from 'tone'

var signal = new Tone.Synth ({
  frequency: 440,
  oscillator: {type: 'square'},
  envelope  : {
    attack  : 0.005 ,
    decay  : 0.1 ,
    sustain  : 0.3 ,
    release  : 1
  }
})

class MultiFx extends Component {
  constructor() {
    super()
    this.state = {
      sound: signal,
      effects: [],
      connected: false
    }
  }
  // to apply FX
  // synth.chain(...this.state.effects)

  connectToMaster() {
    this.state.sound.toMaster()
  }

    render() {
      this.connectToMaster()
      this.state.sound.triggerAttackRelease('C4', '1n')
      return(
        "boop"
      )
    }
}

export default MultiFx
