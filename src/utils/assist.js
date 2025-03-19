function findComponentUpward(context, componentName) {
  let parent = context.$parent
  let name = parent.$option.name

  while (parent && (!name || ![componentName].includes(name))) {
    parent = parent.$parent
    if (parent) name = parent.$option.name
  }

  return parent
}

export { findComponentUpward }
