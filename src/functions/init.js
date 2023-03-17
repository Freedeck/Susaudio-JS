module.exports = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices()
    devices.forEach(device => {
        if (device.kind === 'audiooutput') {
            if (device.label === 'CABLE Input (VB-Audio Virtual Cable)') {
                const audio = new Audio()
                audio.setSinkId(device.deviceId)
                Susaudio._player.sinkId = device.deviceId
            }
        }
    })
    Audio.prototype.stop = function () {
        if (!this.isSusaudio) { this.stop(); return }
        this.pause()
        this.currentTime = 0
        Susaudio._player.queue = _sa_removeFromArray(Susaudio._player.queue, this)
      }
}