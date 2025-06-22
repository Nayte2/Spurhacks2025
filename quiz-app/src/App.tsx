import React, {useState} from 'react';
import './App.css';

export type Question = {
  question: string;
  options: string[];
};

export const quizQuestions: Question[] = [
  {
    question: "If you were learning to fix a bicycle, you'd prefer to:",
    options: ["Watch a step-by-step video or visual guide.","Have a mechanic explain the process to you.","Read a manual or written instructions.","Understand how each part works and why.","Fix it with a friend or while getting tips.","Try it yourself, experimenting quietly."]
  },
  {
    question: "In a classroom, you understand best when:",
    options: ["The teacher uses charts or drawings.","You can hear the explanation clearly and repeatedly.","You're given written handouts and textbooks.","The content is organized logically with clear objectives.","There's class discussion and interaction.","You're given time to reflect or review independently."]
  },
  {
    question: "During a group project, you naturally gravitate toward:",
    options: ["Making visuals, like graphs or slides.","Presenting or speaking on behalf of the group.","Writing or editing the group’s written content.","Planning and outlining the workflow.","Coordinating and bringing the group together.","Completing your section alone and on time."]
  },
  {
    question: "You’re trying to memorize a list of facts. You:",
    options: ["Use color-coded flashcards or highlight important parts.","Read them aloud or listen to recordings.","Copy or rewrite the list multiple times.","Categorize them into logical groups.","Test each other with friends.","Isolate yourself and repeat them in your mind."]
  },
  {
    question: "Your favorite way to learn a software tool is by:",
    options: ["Watching video tutorials or screen recordings.","Following someone’s verbal instructions.","Reading the user guide or documentation.","Understanding the structure and settings logically.","Asking friends for help or tips.","Exploring it by yourself, trial and error."]
  },
  {
    question: "When preparing for an exam, you usually:",
    options: ["Draw concept maps and visual summaries.","Recite key ideas out loud.","Re-read notes or make written summaries.","Practice problems and apply reasoning.","Join study groups or peer quizzes.","Create a solo study schedule and follow it."]
  },
  {
    question: "When watching a documentary, you enjoy:",
    options: ["Stunning visuals or historical footage.","Engaging narration and sound.","Subtitles or factual overlays.","Analytical explanations and evidence.","Watching and discussing it with others.","Quietly watching and thinking about it later."]
  },
  {
    question: "If you're stuck on a tough task, you:",
    options: ["Reframe it visually or sketch something out.","Talk it through with someone.","Read related material or take notes.","Break it into a structured list.","Collaborate and brainstorm with a peer.","Take time alone to reflect."]
  },
  {
    question: "When giving a presentation, you prefer to:",
    options: ["Use slides, images, and animations.","Speak confidently and dynamically.","Prepare detailed notes or scripts.","Structure it with clear logical flow.","Co-present or engage the audience.","Present in your own way, with little input."]
  },
  {
    question: "You track your goals by:",
    options: ["Using visual progress trackers or bullet journals.","Talking about them and checking in verbally.","Writing detailed plans and checklists.","Creating systems to evaluate progress.","Sharing goals with accountability partners.","Keeping them private and internal."]
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([quizQuestions.length]);
  const [showResult, setShowResult] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");

  const currentQuestion = quizQuestions[currentIndex];

  const handleAnswer = (questionIndex: number, choiceIndex: number) => {
    const tmpAns = userAnswers
    tmpAns[questionIndex] = choiceIndex
    setUserAnswers(tmpAns)
    if (currentIndex + 1 < quizQuestions.length){
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const processAnswers = () => {
    return `responses given: [${userAnswers.join(", ")}]`;
  }

  if (showResult){
    return (
      <div>
        <h1> results: </h1>
        <p>{processAnswers()}</p>
        <div>
          <button onClick={()=>{
            setCurrentIndex(0);
            setCurrentAnswer("");
            setShowResult(false);
            userAnswers.forEach(element => {
              element = 0;
            });
          }}>restart</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2>{currentQuestion.question}</h2>
        <select id="dropdownSelection" onChange={(e) => setCurrentAnswer(e.target.value)}>
          <option value =""></option>
          {currentQuestion.options.map((option, index) => (
            <option value={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={() => setCurrentIndex(currentIndex-1)}>back</button>
        <button onClick={() => {
          if (currentAnswer != "") {
            handleAnswer(currentIndex, parseInt(currentAnswer))
          }}
          }>submit</button>
      </div>
    </div>
  );
}

export default App;
