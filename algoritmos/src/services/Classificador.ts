class Classificador {

    async execute(arrayObject: Array<Object>) {
        const orderArray = new Array<Object>();
        const orderArrayResponsability = new Array<Object>();
        const orderArrayNotResponsability = new Array<Object>();
        Object.keys(arrayObject).map(function (key) {
            if (arrayObject[key]['souEu']) {
                orderArray.push(arrayObject[key]);
                //     console.log(orderArray);
            };
            if (arrayObject[key]['responsavel']) {
                orderArrayResponsability.push(arrayObject[key]);
                //    console.log(orderResponsability);
            }
            if (!arrayObject[key]['responsavel']) {
                orderArrayNotResponsability.push(arrayObject[key]);
            }
        });
        console.log(orderArrayResponsability);
        Object.keys(orderArrayResponsability).map(function (key) {
            orderArrayResponsability.sort(function (person1, person2) {

                if (person1['nome'] > person2['nome']) {
                    return 1;
                }
                if (person1['nome'] < person2['nome']) {
                    return -1;
                }
                return 0;
            })


        });
        return orderArray;
    }
}

export { Classificador } 