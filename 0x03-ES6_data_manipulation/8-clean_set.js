export default function cleanSet(set, startString) {
  for (const element of set) {
    if (element.indexOf(startString)) {
      return element;
    }
  }
}
