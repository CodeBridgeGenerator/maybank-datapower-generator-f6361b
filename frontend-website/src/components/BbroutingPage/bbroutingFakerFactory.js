
import { faker } from "@faker-js/faker";
export default (count,domainIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
domainId: domainIdIds[i % domainIdIds.length],

        };
        data = [...data, fake];
    }
    return data;
};
