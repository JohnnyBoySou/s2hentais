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