import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: 1,
    title: "How to use React Query?",
    tags: [
      { _id: 1, name: "react-query" },
      { _id: 2, name: "react" },
    ],
    author: "John Doe",
    upvotes: 3,
    views: 10,
    answers: 2,
    createdAt: "2021-09-01T12:00:00.000Z",
  },
  {
    _id: 2,
    title: "How to center a div?",
    tags: [
      { _id: 3, name: "css" },
      { _id: 2, name: "react" },
    ],
    author: "John Doe",
    upvotes: 3,
    views: 10,
    answers: 2,
    createdAt: "2021-09-01T12:00:00.000Z",
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
        {questions.length > 0
          ? questions.map((question) => "Question card")
          : "No questions found"}
      </div>
    </>
  );
}
