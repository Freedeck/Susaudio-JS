/* eslint-disable camelcase */
const init = require('./functions/init')
const settings = require('./functions/settings')
const stop = require('./functions/stop')
const Susaudio = {
    _player: settings,
    init: init,
    playSound: playSound,
    stopAll: stop.all,
    stopRecent: stop.recent,
    playPause: () => {
      Susaudio._player.queue.forEach(audio => {
        if (paused == true) {
          paused = false
          audio.play()
        } else {
          paused = true
          audio.pause()
        }
      })
    },
    changeAllPlayingPitch: (num) => {
      Susaudio._player.queue.forEach(audio => {
        audio.pause()
        audio.preservesPitch = false
        audio.playbackRate = num
        audio.play()
      })
    }
  }
  
  Audio.prototype.stop = function () {
    if (!this.isSusaudio) { this.stop(); return }
    this.pause()
    this.currentTime = 0
    Susaudio._player.queue = _sa_removeFromArray(Susaudio._player.queue, this)
  }
  // other functions
  function _sa_removeFromArray (arr, value) {
    return arr.filter(function (ele) {
      return ele !== value
    })
  }
  
  setInterval(() => {
    Susaudio._player.timeSinceLastRequest++
  }, 1)
  