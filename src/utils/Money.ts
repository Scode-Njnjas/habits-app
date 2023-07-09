const formatCurrency = (number: number, delimiter: string = ',') => {
  return Number.isNaN(number) ? '0' : number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter)
}

function formatCurrencyD(number: number) {
  return formatCurrency(number) + ' ₫'
}

function formatCurrencyVND(number: number) {
  return formatCurrency(number * 1000) + ' VNĐ'
}

export {formatCurrency, formatCurrencyD, formatCurrencyVND}
