class Faxina {
    async execute(obj: Object) {
        for (let key in obj) {
            if (obj[key] === null) {
                delete obj[key];
            }
        }
        return obj;
    }
}

export { Faxina }