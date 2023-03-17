module.exports = {
    all: () => {
        Susaudio._player.queue.forEach(audio => {
            audio.stop()
        })
    },
    recent: () => {
        Susaudio._player.queue[0].stop()
        Susaudio._player.queue = _sa_removeFromArray(Susaudio._player.queue, Susaudio._player.queue[0])
    }
}