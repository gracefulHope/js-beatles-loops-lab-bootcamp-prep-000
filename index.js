

function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  var name
  var instrument
  for (let i = 0; i<musicians.length ; i++) {
    name = musicians[i]
    instrument = instruments[i]
    newArray.push(name + " plays " + instrument)
  }
  return newArray
}