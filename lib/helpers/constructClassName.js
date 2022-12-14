
/*
  constructClassName(base string, { add: "", change: "", remove: "" })

  constructClassName("text-xl bg-blue-700 bg-opacity-50", {
    add: "font-bold bg-red-700",
    remove: "bg-blue-700"
  })
*/

const constructClassName = (base, mod) => {
  let className = base
    .replaceAll(/\s+/g, ' ')
    .trim();

  if (mod.remove) {
    const removed = mod.remove
      .trim()
      .replaceAll(/\s+/g, ' ')
      .split(' ');

    for (let i = 0; i < removed.length; i++) { 
      className = className.replaceAll(
        new RegExp(`(\\s?)${removed[i]}(\\s?)`, 'g'), 
        (match, bef, aft) => (bef && aft) ? bef : ''
      );
    }
  }

  if (mod.add) {
    className += " " + mod.add
      .replaceAll(/\s+/g, ' ')
      .trim();
  }

  return className;
}


export default constructClassName;
