export function calculatePoints(invalidsCharacter) {
  const tableOfPoint = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
  };
  let sumOfPoints = 0;
  invalidsCharacter.forEach((character) => {
    sumOfPoints = sumOfPoints + tableOfPoint[character];
  });
  return sumOfPoints;
}

function getFirstOpositorIndex(characters) {
  const countersCharacters = [")", "]", "}", ">"];

  return characters.findIndex((el) => countersCharacters.includes(el));
}

export function getTotalOfPoints(lines) {
  const linesArray = lines.split("\n").filter(Boolean);
  const arrayOfInvalidCharacter = linesArray.reduce((acc, line) => {
    const auxLine = line.trim();
    const characters = [...auxLine];
    const concurrent = {
      "}": "{",
      ")": "(",
      ">": "<",
      "]": "[",
    };

    const countersCharacters = [")", "]", "}", ">"];

    const count = characters.filter((el) =>
      countersCharacters.includes(el)
    ).length;

    for (let i = 0; i < count; i++) {
      let firstOpositorIndex = getFirstOpositorIndex(characters);
      if (
        concurrent[characters[firstOpositorIndex]] ==
        characters[firstOpositorIndex - 1]
      ) {
        characters.splice(firstOpositorIndex - 1, 2);
      }
    }

    if (
      characters.length > 0 &&
      characters[getFirstOpositorIndex(characters)]
    ) {
      acc.push(characters[getFirstOpositorIndex(characters)]);
    }

    return acc;
  }, []);

  // console.log(arrayOfInvalidCharacter);
  return calculatePoints(arrayOfInvalidCharacter);
}
