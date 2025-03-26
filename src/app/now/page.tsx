import {
  CalendarDays,
  Coffee,
  Code,
  Headphones,
  BookOpen,
  Dumbbell,
} from "lucide-react";

export default function NowPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
          Now
        </h1>

        <div className="glass-card p-8 mb-12">
          <p className="text-lg mb-6">
            This is my now page - inspired by{" "}
            <a
              href="https://nownownow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green hover:text-neon-red transition-colors"
            >
              nownownow.com
            </a>
            . It&apos;s a snapshot of what I&apos;m focused on at this point in
            my life.
          </p>

          <div className="border-l-4 border-neon-green pl-4 italic mb-8">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Code className="h-6 w-6 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Current Projects</h2>
                <p>
                  Working on a new SaaS application using Next.js and
                  TypeScript. Exploring AI integration for enhanced user
                  experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BookOpen className="h-6 w-6 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Learning</h2>
                <p>
                  Diving deeper into WebGL and Three.js for creative web
                  experiences. Also studying system design patterns for scalable
                  applications.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Headphones className="h-6 w-6 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Listening To</h2>
                <p>
                  Synthwave playlists while coding. Tech podcasts during
                  commutes, particularly enjoying &quat;Syntax&quat; and
                  &quat;Frontend Happy Hour&quat;.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Dumbbell className="h-6 w-6 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Health & Fitness</h2>
                <p>
                  Maintaining a 3-day workout routine. Experimenting with
                  meditation for better focus and creativity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Coffee className="h-6 w-6 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Daily Routine</h2>
                <p>
                  Early riser. Morning coding sessions are my most productive.
                  Taking regular breaks to stay fresh and creative.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CalendarDays className="h-6 w-6 text-neon-green flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Future Plans</h2>
                <p>
                  Planning to launch my SaaS product in Q3. Looking to attend
                  more tech conferences and connect with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
