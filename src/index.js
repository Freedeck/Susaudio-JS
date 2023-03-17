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
    playPause: stop.playPause,
    sa_removeFromArray: function (arr, value) {
        return arr.filter(function (ele) {
            return ele !== value
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

module.exports = Susaudio;

setInterval(() => {
    Susaudio._player.timeSinceLastRequest++
}, 1)
