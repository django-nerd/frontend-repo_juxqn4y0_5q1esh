import { Activity, TrendingUp, BarChart3, AlertTriangle } from 'lucide-react';

const emotions = [
  { name: 'Calm', color: 'bg-emerald-500', value: 42 },
  { name: 'Happy', color: 'bg-sky-500', value: 28 },
  { name: 'Focused', color: 'bg-indigo-500', value: 16 },
  { name: 'Anxious', color: 'bg-amber-500', value: 9 },
  { name: 'Sad', color: 'bg-rose-500', value: 5 },
];

export default function ClassOverview() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Class Wellbeing Overview</h2>
        <span className="inline-flex items-center gap-2 text-sm text-gray-600">
          <Activity className="h-4 w-4" /> Live snapshot
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Class mood summary */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Class average mood (today)</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">7.8/10</p>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs font-medium">+4% this week</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[78%] bg-gradient-to-r from-emerald-500 to-sky-500"></div>
            </div>
          </div>
        </div>

        {/* Risk indicator */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-amber-600">
            <AlertTriangle className="h-5 w-5" />
            <p className="text-sm font-semibold">Risk Indicator</p>
          </div>
          <p className="mt-2 text-gray-800 text-sm">3 students show low mood this week</p>
          <div className="mt-3 text-xs text-gray-500">Privacy-first: counts only, no names.</div>
        </div>

        {/* Attendance & engagement */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sky-600">
            <BarChart3 className="h-5 w-5" />
            <p className="text-sm font-semibold">Attendance & Engagement</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-gray-500">Attendance</p>
              <p className="text-lg font-semibold text-gray-900">96%</p>
              <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500" style={{ width: '96%' }} />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">Engagement</p>
              <p className="text-lg font-semibold text-gray-900">88%</p>
              <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500" style={{ width: '88%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emotion distribution */}
      <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-gray-800 mb-3">Emotion distribution</p>
        <div className="space-y-3">
          {emotions.map((e) => (
            <div key={e.name} className="flex items-center gap-3">
              <div className="w-20 text-xs text-gray-600">{e.name}</div>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${e.color}`} style={{ width: `${e.value}%` }} />
              </div>
              <div className="w-10 text-right text-xs text-gray-600">{e.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
