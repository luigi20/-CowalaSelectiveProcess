class Validador {
    async execute(data: string, validity: string) {
        const currentDate = new Date();
        const date = new Date(data);
        date.setDate(currentDate.getDate() + parseInt(validity));
        if (date > currentDate) {
            return true;
        }
        return false;
    }
}

export { Validador }