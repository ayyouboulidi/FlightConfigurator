export default function readConfig(success, failure) {
  const myConfig = {};

  $.getJSON( 'config.json', {
    format: "json",
    cache: false
  })
    .done(success)
    .fail(failure);
}
