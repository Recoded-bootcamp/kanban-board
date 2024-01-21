import React from "react";

const MEMBER_DATA = [
  {
    name: "Danah Osta",
    githubUsername: "Danah-94",
  },
  {
    name: "Banel Mikhael",
    githubUsername: "Banel-Mikhael",
  },
  {
    name: "Hevar Tofiq",
    githubUsername: "RageOfKurd",
  },
  {
    name: "Aland Abdullah",
    githubUsername: "alandio",
  },
];

function About() {
  return (
    <section className="about container mx-auto flex flex-col justify-center items-center px-4 lg:px-0 py-8 max-w-5xl">
      <div className="flex flex-col gap-8 w-full min-h-[80vh] justify-center items-center">
        <div className="about-header text-center mb-8 flex flex-col gap-4 max-w-2xl">
          <h2 className="text-5xl font-bold my-12">About Boredify</h2>
          <p className="text-lg leading-relaxed">
            We are a group of 4 participants from the Re:Coded frontend
            bootcamp, who are passionate about programming and web development.
            We worked on this project as a team, and we are proud of the result.
            we collaborated on the design and the code, and made sure that the
            UI is responsive and user-friendly, and the code is clean and easy
            to read.
          </p>

          <p className="text-lg mt-4 leading-relaxed">
            We used React.js for the frontend, and firebase for the backend. We
            a Github repository to collaborate on the code. And performed daily
            meetings to discuss the progress and the next steps.
          </p>

          <p className="text-xl" />
        </div>
        <h2 className="text-3xl font-bold mb-6">Meet the team ⚡</h2>
        <div className="about-content flex flex-wrap justify-center gap-8">
          {MEMBER_DATA.map((member) => (
            <div
              key={member.githubUsername}
              className="about-card flex flex-col items-center gap-2 bg-white rounded-lg shadow-lg w-full sm:w-fit sm:px-8 py-4 dark:bg-neutral-800 hover:shadow-2xl transition"
            >
              <img
                className="rounded-full w-32 h-32"
                src={`https://github.com/${member.githubUsername}.png`}
                alt={`${member.name}'s Avatar`}
              />
              <h3 className="text-xl font-bold mt-4">
                <a href={`https://github.com/${member.githubUsername}`}>
                  {member.name}
                </a>
              </h3>
              <p className="text-center text-sm">Front-End Developer</p>
              <ul className="">
                <li>
                  <a
                    href={`https://github.com/${member.githubUsername}`}
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                    aria-label={`${member.name}'s GitHub Profile`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center">
          The source code is available on &nbsp;
          <a
            aria-label="GitHub Repository"
            href="https://github.com/Recoded-bootcamp/kanban-board"
            className="text-blue-700 hover:text-blue-500 dark:hover:text-blue-400 dark:text-blue-300 font-bold transition duration-200 flex items-center gap-2"
          >
            GitHub
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
