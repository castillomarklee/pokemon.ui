export const capitalize = (input) => {
  if (input) {
    let capitalizeWords = input[0].toUpperCase();
    for (let i = 1; i <= input.length - 1; i++) {
      let currentCharacter,
        previousCharacter = input[i - 1];
      if (previousCharacter && previousCharacter === " ") {
        currentCharacter = input[i].toUpperCase();
      } else {
        currentCharacter = input[i];
      }
      capitalizeWords = capitalizeWords + currentCharacter;
    }
    return capitalizeWords;
  }
  return "";
};

export const formatDisplayName = (input) => {
  if (input) {
    const newName = input.replace(/-/g, " ");
    return capitalize(newName);
  }
  return "";
};
