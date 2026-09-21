import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bantoggback-production.up.railway.app'
});

export const suggererRepas = async (proteines, typeRepas, deviceId) => {
    const response = await api.post('/suggestion', {
        proteines,
        type_repas: typeRepas,
        device_id: deviceId,
    });
    return response.data;
};

export const ajouterHistorique = async (repasId, deviceId) => {
    const response = await api.post('/historique', {
        repas_id: repasId,
        device_id: deviceId,
    });
    return response.data;
};

export const getHistorique = async (deviceId) => {
    const response = await api.get('/historique', {
        params: { device_id: deviceId },
    });
    return response.data;
};

export const supprimerHistorique = async (id, deviceId) => {
    const response = await api.delete(`/historique/${id}`, {
        data: { device_id: deviceId },
    });
    return response.data;
};