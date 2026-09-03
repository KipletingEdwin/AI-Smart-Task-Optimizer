import { Link } from 'react-router-dom';
import DemoPreview from '../components/tasks/DemoPreview';

const STEPS = [
  { title: 'Type what you need to do', description: 'One line, in your own words. No structure required.' },
  { title: 'Get an ordered plan', description: 'It\'s broken into steps, each with a time estimate.' },
  { title: 'Work through it', description: 'Check off steps as you go. Nothing gets lost.' },
];

function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="font-semibold">Task Optimizer</span>
          <div className="flex items-center gap-5 text-sm">
            <Link to="/login" className="text-ink-muted hover:text-ink">
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-ink text-paper px-4 py-2 rounded-sm hover:bg-ember transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-md mb-5">
              Turn a vague task into a plan you can start right now.
            </h1>
            <p className="text-ink-muted max-w-sm mb-8 text-lg">
              Type what you need to do. It gets broken into ordered steps with time estimates, in seconds.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-ink text-paper px-6 py-3 rounded-sm hover:bg-ember transition-colors"
            >
              Start planning your tasks
            </Link>
          </div>

          <DemoPreview />
        </div>

        <div className="mt-28 grid md:grid-cols-3 gap-8 max-w-4xl">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex gap-3">
              <span className="font-mono text-sm text-ember shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-medium mb-1">{step.title}</h3>
                <p className="text-sm text-ink-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;