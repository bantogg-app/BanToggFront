export const getDeviceId = () => {
    let deviceId = localStorage.getItem('bantogg_device_id');
    if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem('bantogg_device_id', deviceId);
    }
    return deviceId;
};