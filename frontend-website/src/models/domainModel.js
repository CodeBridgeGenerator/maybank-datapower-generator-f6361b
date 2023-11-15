import client from '../services/restClient';


// domain
// Domain
// domains

export const domain = {
    state: {
        selectedDomain: {}
    }, // initial state
    reducers: {
        selectDomain(state, domain) {
            let toReturn = { ...state, selectedDomain: domain };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE ~cb-ref-service-title-singular ////
        ///////////////////////////
        async getOneDomain(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.domain.selectedDomain?._id === _id) {
                    resolve(reduxState.domain.selectedDomain);
                    return;
                }
                client
                    .service('domains')
                    .get(_id)
                    .then((res) => {
                        // console.log("domains",res)
                        this.selectDomain(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get domain', error);
                        dispatch.toast.alert({ type: 'error', title: 'Domain', message: 'Failed to get domain' });
                        reject(error);
                    });
            });
        },
    })
};