import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to use TypeScript?",
    tags: [{ _id: "tag1", name: "TypeScript" }],
    author: { _id: "author1", name: "John Doe", picture: "profile.jpg" },
    upvotes: 10,
    views: 100,
    answers: [{ answerId: "answer1", content: "Use TypeScript like this." }],
    createdAt: new Date("2023-01-01"),
  },
  {
    _id: "2",
    title: "React component lifecycle methods",
    tags: [
      { _id: "tag2", name: "React" },
      { _id: "tag3", name: "Component" },
    ],
    author: { _id: "author2", name: "Jane Doe", picture: "profile.jpg" },
    upvotes: 15,
    views: 150,
    answers: [
      { answerId: "answer2", content: "Here are the lifecycle methods." },
    ],
    createdAt: new Date("2023-02-01"),
  },
  {
    _id: "3",
    title: "Best practices for writing clean code",
    tags: [{ _id: "tag4", name: "Coding" }],
    author: { _id: "author3", name: "Alice Smith", picture: "profile.jpg" },
    upvotes: 20,
    views: 200,
    answers: [
      {
        answerId: "answer3",
        content: "Follow these principles for clean code.",
      },
    ],
    createdAt: new Date("2023-03-01"),
  },
  {
    _id: "4",
    title: "Node.js vs. Django for backend development",
    tags: [
      { _id: "tag5", name: "Node.js" },
      { _id: "tag6", name: "Django" },
    ],
    author: { _id: "author4", name: "Bob Johnson", picture: "profile.jpg" },
    upvotes: 12,
    views: 120,
    answers: [{ answerId: "answer4", content: "Compare the two frameworks." }],
    createdAt: new Date("2023-04-01"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {/* Looing thorugh the questions */}
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkText="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
