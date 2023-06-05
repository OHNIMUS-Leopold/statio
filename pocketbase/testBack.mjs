import { allVilles } from "./backend.mjs";
import { allTransportsByVilleId } from "./backend.mjs";
import { allHotelsByVilleId } from "./backend.mjs";
import { allActivitesByVilleId } from "./backend.mjs";


// try {
//     const lesvilles = await allVilles();
//     console.log(JSON.stringify(lesvilles, null, 2));
// } catch (e) {
//     console.error(e);
// }

// try {
//     const transports = await allTransportsByVilleId('4z5kd1ocz8z0kc1');
//     console.log(JSON.stringify(transports, null, 2));
// } catch (e) {
//     console.error(e);
// }

// try {
//     const hotels = await allHotelsByVilleId('4z5kd1ocz8z0kc1');
//     console.log(JSON.stringify(hotels, null, 2));
// } catch (e) {
//     console.error(e);
// }

// try {
//     const activites = await allActivitesByVilleId('4z5kd1ocz8z0kc1');
//     console.log(JSON.stringify(activites, null, 2));
// } catch (e) {
//     console.error(e);
// }