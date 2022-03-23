import { getTotalOfPoints, calculatePoints } from ".";

describe("Testando a questão 10", () => {
  test("test 1", () => {
    const firstCase = `{([(<{}[<>[]}>{[]{[(<()>
    [[<[([]))<([[{}[[()]]]
    [{[{({}]{}}([{[{{{}}([]
    [<>({}){}[([])<>]]
    [<(<(<(<{}))><([]([]()
    (((((((((())))))))))
    <{([([[(<>()){}]>(<<{{`;

    expect(getTotalOfPoints(firstCase)).toBe(26397);
  });

  test("test 2", () => {
    const firstCase = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

    expect(getTotalOfPoints(firstCase)).toBe(26397);
  });

  test("test 3", () => {
    const firstCase = `(((((((((())))))))))
    <([{}])>
    {()()()}
    ([])
    [<>({}){}[([])<>]]`;

    expect(getTotalOfPoints(firstCase)).toBe(0);
  });

  test("test 4", () => {
    const firstCase = `{([(<{}[<>[]}>{[]{[(<()>`;
    expect(getTotalOfPoints(firstCase)).toBe(1197);
  });

  test("test 5", () => {
    const firstCase = `[<>({}){}[([])<>]]`;
    expect(getTotalOfPoints(firstCase)).toBe(0);
  });
});

describe("tests on calculate point", () => {
  test("test with no item in invalid characters array", () => {
    const invalidsCharacter = [];
    expect(calculatePoints(invalidsCharacter)).toBe(0);
  });

  test("test with >, ] characters", () => {
    const invalidsCharacter = [">", "]"];
    expect(calculatePoints(invalidsCharacter)).toBe(25194);
  });

  test("test with all types of characters", () => {
    const invalidsCharacter = [")", ")", "]", "}", ">"];
    expect(calculatePoints(invalidsCharacter)).toBe(26397);
  });
});
