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
}