
/*
  constructClassName(base string, { add: "", change: "", remove: "" })

  constructClassName("text-xl bg-blue-700 bg-opacity-50", {
    add: "font-bold bg-red-700",
    remove: "bg-blue-700"
  })
*/

const constructClassName = (base, mod) => {
  let className = base
    .replace(/\s+/g, ' ')
    .trim();

  if (mod.remove) {
    const removed = mod.remove
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ');

    for (let i = 0; i < removed.length; i++) { 
      className = className.replace(
        new RegExp(`(\\s?)${removed[i]}(\\s?)`, 'g'), 
        (match, bef, aft) => (bef && aft) ? bef : ''
      );
    }
  }

  if (mod.className) {
    className += " " + mod.className
      .replace(/\s+/g, ' ')
      .trim();
  }

  return className.trim();
}


export default constructClassName;
