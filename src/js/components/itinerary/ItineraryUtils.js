export function	dateFormatted(dateInSeconds) {
  let dtfDate;
  // Date formatted
  if (typeof(Intl) === 'object') {
    dtfDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'UTC',
    });
  }

  if (dtfDate) {
    return dtfDate.format(dateInSeconds * 1000);
  } else {
    const date = new Date(dateInSeconds * 1000);
    const dateString = date.toUTCString();
    return dateString.slice(0, dateString.indexOf(' GMT'));
  }
}
