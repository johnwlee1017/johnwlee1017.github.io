function send(method) {
  switch (method) {
    case "page":
      analytics.page({
        title: 'new page test',
        url: 'https://johnwlee1017.github.io/#test',
        path: '/#test',
        referrer: 'https://johnwlee1017.github.io/'
      });
      break;
    case "track":
      analytics.track("Sample Track Event", {
        sampleProperty: true
      });
      break;
    case "identify":
      analytics.identify("sampleUserId", {
        sampleTrait: true
      });
      break;
    case "group":
      analytics.group("sampleGroupId", {
        sampleGroupTrait: true
      });
      break;
    default:
      alert("Method not supported")
  }
}
