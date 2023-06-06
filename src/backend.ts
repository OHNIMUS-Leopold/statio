import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');


export async function allVilles() {
    const lesvilles = await pb.collection('ville').getFullList();
    return lesvilles;
}

export async function allTransportsByVilleId(id : string) {
    const transports = await pb.collection('ville').getOne(id,{
        expand: 'transport'
     });
    return transports;
}

export async function allHotelsByVilleId(id : string) {
    const hotels = await pb.collection('ville').getOne(id,{
        expand: 'hotel'
     });
    return hotels;
}

export async function allActivitesByVilleId(id : string) {
    const activites = await pb.collection('ville').getOne(id,{
        expand: 'activite'
     });
    return activites;
}