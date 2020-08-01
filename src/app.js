// import { Chord } from "@tonaljs/chord";
const { Chord } = require("@tonaljs/tonal");
import * as Tone from "tone";
import { PolySynth } from "tone";

let chordTxt = (textId) => {
  let preChord = document.getElementById(textId);
  let realChord = undefined;

  preChord.addEventListener('blur', function(event) {
    if (!preChord.value.length == 0) {
      event.preventDefault();
      let chordValue = preChord.value
      let chordNotes = Chord.get(chordValue).notes

      realChord = chordNotes.map(i => i + '3')

      console.log(realChord)
    } else {
      console.log('enter a chord')
    }

    
  })

  return {
    getRealChord: () => {
      return realChord;
    }
  }
}


//assign object to a variable in the global scope
let chordOne = chordTxt("chordOneInput")

let chordTwo = chordTxt("chordTwoInput")

// let synth = new Tone.PolySynth(Tone.AMSynth).toDestination();
//   synth.set({ detune: 7});

let playChord = () => {
  let synth = new Tone.PolySynth(Tone.AMSynth).toDestination();
  synth.set({ detune: 7});

  

  let playBtn = document.getElementById("playBtn")
  let stopBtn = document.getElementById("stopBtn")
  let resetBtn = document.getElementById("resetBtn")

  let chordPicker = document.getElementById("chordPicker")

  playBtn.addEventListener('click', (e) => {
    if (chordPicker.checked == false) {
      // event.preventDefault();
      synth.releaseAll()
      synth.triggerAttack(chordOne.getRealChord())
    } if (chordPicker.checked == true) {
      // event.preventDefault();
      synth.releaseAll()
      synth.triggerAttack(chordTwo.getRealChord())
    }
  })

  //Toggle chords when synth is playing
  chordPicker.addEventListener('click', (e) => {
    playBtn.click()
  })


  stopBtn.addEventListener('click', (e) => {
    synth.releaseAll()
  })

  resetBtn.addEventListener('click', (e) => {
    synth.releaseAll();
    document.getElementById("chordOneInput").value = "";
     document.getElementById("chordTwoInput").value = "";

     chordOne.getRealChord()
     chordTwo.getRealChord()



  })

}

playChord()













