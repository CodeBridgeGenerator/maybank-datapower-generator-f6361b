
import { faker } from "@faker-js/faker";
export default (count,domainIdIds,bbRoutingIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
bbRoutingId: bbRoutingIdIds[i % bbRoutingIdIds.length],

        };
        data = [...data, fake];
    }
    return data;
};
