"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

function Page() {
  const placeholders = [
    "What technologies does Sabelo specialize in?",
    "Tell me about Sabelo Khoza's latest project.",
    "What experience does Sabelo have in software development?",
    "How can I collaborate with Sabelo?",
    "What is Sabelo's approach to problem solving?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="text-center mb-10 sm:mb-20">
        <h2 className="mb-6 sm:mb-10 text-xl sm:text-5xl font-bold text-black dark:text-white">
          Welcome to Sabelo's AI-Powered Portfolio
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Chat with <span className="font-semibold text-blue-600 dark:text-blue-400">Sabelo AI</span>,
          your personal guide to everything about Sabelo Khoza's professional journey, skills, and experience.
        </p>
      </div>

      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Page;
