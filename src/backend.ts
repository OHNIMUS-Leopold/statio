import PocketBase from 'pocketbase';
import type { VilleResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090');


export async function allVilles() {
    const lesvilles = await pb.collection('ville').getFullList<VilleResponse>();
    return lesvilles;
}

export async function allVillesById(id : string) {
    const lavilles = await pb.collection('ville').getOne<VilleResponse>(id);
    return lavilles;
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