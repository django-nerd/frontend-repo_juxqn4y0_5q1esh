import HeroHeader from './components/HeroHeader';
import ClassOverview from './components/ClassOverview';
import ActivitiesSessions from './components/ActivitiesSessions';
import InterventionsRecognition from './components/InterventionsRecognition';
import TeacherWellness from './components/TeacherWellness';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 space-y-6">
        <HeroHeader />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <ClassOverview />
            <ActivitiesSessions />
            <InterventionsRecognition />
          </div>
          <div className="space-y-6">
            <TeacherWellness />
            {/* Space reserved for future compact widgets if needed */}
          </div>
        </div>

        <footer className="pt-4 pb-8 text-center text-xs text-gray-500">
          Built for insight-first classroom wellbeing — private, simple, effective.
        </footer>
      </div>
    </div>
  );
}

export default App;
