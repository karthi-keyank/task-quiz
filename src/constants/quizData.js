
export const initialQuizzes = [
  {
    id: "quiz_789",
    title: "General Knowledge Challenge",
    description: "A quick and fun GK quiz to test your knowledge.",
    author: "karthi",
    createdAt: "2025-10-12T11:00:00Z",
  
    questions: [
      {
        id: "gk1",
        text: "What is the capital city of France?",
        options: [
          { id: "gko1", text: "London" },
          { id: "gko2", text: "Berlin" },
          { id: "gko3", text: "Paris" },
          { id: "gko4", text: "Madrid" }
        ],
        correctAnswerId: "gko3"
      },
      {
        id: "gk2",
        text: "Which planet is known as the Red Planet?",
        options: [
          { id: "gko5", text: "Earth" },
          { id: "gko6", text: "Mars" },
          { id: "gko7", text: "Jupiter" },
          { id: "gko8", text: "Venus" }
        ],
        correctAnswerId: "gko6"
      },
      {
        id: "gk3",
        text: "Who wrote 'Romeo and Juliet'?",
        options: [
          { id: "gko9", text: "Charles Dickens" },
          { id: "gko10", text: "William Shakespeare" },
          { id: "gko11", text: "Jane Austen" },
          { id: "gko12", text: "Mark Twain" }
        ],
        correctAnswerId: "gko10"
      },
      {
        id: "gk4",
        text: "What is the largest mammal in the world?",
        options: [
          { id: "gko13", text: "African Elephant" },
          { id: "gko14", text: "Giraffe" },
          { id: "gko15", text: "Blue Whale" },
          { id: "gko16", text: "Hippopotamus" }
        ],
        correctAnswerId: "gko15"
      }
    ]
  },
  {
    id: "quiz_456",
    title: "Tech Trivia Challenge",
    description: "How well do you know the world of tech?",
    author: "gemini",
    createdAt: "2025-10-11T10:30:00Z",
    questions: [
      {
        id: "t1",
        text: "What does 'API' stand for?",
        options: [
          { id: "to1", text: "Application Programming Interface" },
          { id: "to2", text: "Advanced Programming Input" },
          { id: "to3", text: "Application Protocol Interface" },
          { id: "to4", text: "Automated Program Interaction" }
        ],
        correctAnswerId: "to1"
      },
      {
        id: "t2",
        text: "Which company developed the React library?",
        options: [
          { id: "to5", text: "Google" },
          { id: "to6", text: "Meta (Facebook)" },
          { id: "to7", text: "Microsoft" },
          { id: "to8", text: "Apple" }
        ],
        correctAnswerId: "to6"
      }
    ]
  }
];