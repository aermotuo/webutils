function getDate(time) {
  var pastDate = new Date(time.replace(/-/g, "/")).getTime();
  var thisDate = new Date().getTime();
  var day = (thisDate - pastDate) / (60 * 60 * 24 * 1000);
  if (day >= 30) {
    var month = Math.floor(day / 30);
    if (month >= 12) {
      var year = Math.floor(month / 12);
      return year + '年前';
    }
    return month + '个月前';
  }
  if (day < 1) {
    var hour = Math.floor((thisDate - pastDate) / (60 * 60 * 1000));
    if (hour == 0) {
      return '刚刚';
    }
    return hour + '小时前';
  }
  return Math.floor(day) + '天前';
}