const isListWithContent = (list) => {
  console.log("ALPHA:", list);
  const listItems = list.innerBlocks;
  console.log("BETA:", listItems);
  listItems.forEach((listItem, mainIndex) => {
    console.log("GAMMA", listItem);
    console.log("DELTA", listItem.attributes.content.trim())
    if (listItem.attributes.content.trim().length) {
      console.log("EPSILON", listItem.attributes.content.trim().length)
      // break here already!
    }
    // if list item has a nested list
    if (listItem.innerBlocks.length == 1) {
      const list = listItem.innerBlocks[0];
      // recurse through nested list
      return isListWithContent(list);
    }
  });
};

console.log(isListWithContent(data));

