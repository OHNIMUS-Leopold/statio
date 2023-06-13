import PocketBase from 'pocketbase';
import type { ActiviteResponse, VilleResponse, TransportResponse, HotelResponse, InfoResponse } from './pocketbase-types';
// export const pb = new PocketBase('http://127.0.0.1:8090');
export const pb = new PocketBase('https://statio.pockethost.io/');


export async function allVilles() {
    const lesvilles = await pb.collection('ville').getFullList<VilleResponse>();
    return lesvilles;
}

export async function allVillesById(id : string) {
    const lavilles = await pb.collection('ville').getOne<VilleResponse>(id);
    return lavilles;
}

export async function allActivitesById(id : string) {
    const activite = await pb.collection('activite').getOne<ActiviteResponse>(id);
    return activite;
}

export async function allTransportsById(id : string) {
    const transport = await pb.collection('transport').getOne<TransportResponse>(id);
    return transport;
}

export async function allHotelsById(id : string) {
    const hotel = await pb.collection('hotel').getOne<HotelResponse>(id);
    return hotel;
}

export async function allTransportsByVilleId(id : string) {
    const transports = await pb.collection('ville').getOne<VilleResponse>(id,{
        expand: 'transport'
     });
    return transports;
}

export async function allHotelsByVilleId(id : string) {
    const hotels = await pb.collection('ville').getOne<VilleResponse>(id,{
        expand: 'hotel'
     });
    return hotels;
}

export async function allActivitesByVilleId(id : string) {
    const activites = await pb.collection('ville').getOne<VilleResponse>(id,{
        expand: 'activite'
     });
    return activites;
}

// export async function allInfosByVilleId(id : string) {
//     const infos = await pb.collection('ville').getOne<VilleResponse>(id,{
//         expand: 'info'
//      });
//     return infos;
// }

export async function infoID(id : string) {
    const oneInfo = await pb.collection('info').getOne<InfoResponse>(id);
    return oneInfo;
}