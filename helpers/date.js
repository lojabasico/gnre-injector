'use strict';

class DateHelper {
  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  actualMonth() {
    return this.pad((new Date().getMonth()+1), 2, 0)
  }

  actualDay() {
    return this.pad(new Date().getDate(), 2, 0)
  }

  actualYear() {
    return new Date().getFullYear();
  }

  todayDate() {
    return [this.actualDay(), this.actualMonth(), this.actualYear()].join('/')
  }
}

module.exports = new DateHelper()
