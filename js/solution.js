function abbrevName(name) {
  var initial = name[0] + '.' + name.substr(name.indexOf(' ') + 1)[0];
  return (initial.toUpperCase());

}