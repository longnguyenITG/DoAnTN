import moment from 'moment'

export default {
    formatDate: function(dateToFormat) {
      return dateToFormat == '' ? '' : moment(dateToFormat).format('DD-MM-YYYY')
    },
    formatNumber: function(num) {
      if(typeof num == 'string') return Number(num).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      if (num == null) return ''
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
}