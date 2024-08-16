import { Quiz } from "../../types/types";

export const quizzes: Quiz[] = [
  {
    uuid: "f042818a-ebff-4f7b-89c9-f6273271822f",
    Question: "What is the correct way to create a list in Python?",
    Options: [`[1, 2, 3]`, `(1, 2, 3)`, `{1, 2, 3}`, `<1, 2, 3>`],
    Answer: 0,
    Explanation:
      "Lists in Python are created using square brackets with elements separated by commas.",
  },
  {
    uuid: "e9f90561-593c-49be-bf25-c20daac90572",
    Question: "Which method is used to add an element to the end of a list in Python?",
    Options: [`add()`, `append()`, `insert()`, `extend()`],
    Answer: 1,
    Explanation: "The `append()` method adds an element to the end of a list in Python.",
  },
  {
    uuid: "2f6b0f65-d56d-4db8-aac3-1c54782654ef",
    Question: "What is the output of the following code: `print(type(3.14))`?",
    Options: [
        `<class 'int'>`,
        `<class 'float'>`,
        `<class 'double'>`,
        `<class 'decimal'>`
    ],
    Answer: 1,
    Explanation: "In Python, a floating-point number is represented by the `float class`."
  },
  {
    uuid: "2cf503e0-ff38-4472-93d0-90d7e0ae2766",
    Question: "How do you create a dictionary in Python?",
    Options: [
        `{1, 2, 3}`,
        `[1, 2, 3]`,
        `{'one': 1, 'two': 2}`,
        `(1, 2, 3)`
        ],
    Answer: 2,
    Explanation: "Dictionaries in Python are created using curly braces with key-value pairs separated by colons."
  },
  {
    uuid: "4cf504e0-ff38-41172-23d0-90d7e0ae2766",
    Question: "Which of the following statements is used to handle exceptions in Python?",
    Options: [
        `try/except`,
        `try/catch`,
        `try/handle`,
        `try/error`
        ],
    Answer: 0,
    Explanation: "The `try/except` block in Python is used to handle exceptions."
  },
];
