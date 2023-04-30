export const maskValueBR = (value) => {
    if (value) {
        const newValue = value.replace('.', '').replace(',', '').replace(/\D/g, '')

        const options = {
            minimumFractionDigits: 2
        }
        const result = new Intl.NumberFormat('pt-BR', options).format(
            parseFloat(newValue) / 100
        )
        return result
    } else {
        return null
    }
}


export const maskCEP = ( value ) => {
    const regex = /(\d{5})[-]?(\d{3})/;
    const cepValue = value.replace(regex, "$1-$2");
    return cepValue
};

