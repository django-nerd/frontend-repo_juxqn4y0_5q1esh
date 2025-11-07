import { Award, BadgeCheck, CheckCircle2, MessageCircle, FileDown, BookOpenText } from 'lucide-react';
import { useState } from 'react';

export default function InterventionsRecognition() {
  const [interventions, setInterventions] = useState([
    { id: 1, student: 'A. Patel', type: 'Emotional Support', start: 'Nov 5', end: 'Nov 19', status: 'Ongoing', notes: 'Weekly check-in' },
    { id: 2, student: 'J. Kim', type: 'Focus Building', start: 'Nov 1', end: 'Nov 15', status: 'Ongoing', notes: 'Pomodoro strategy' },
  ]);

  const stats = {
    sessions: 12,
    growth: 8,
    badges: ['Empathy Builder', 'Mindful Mentor'],
  };

  function quickNote(id) {
    setInterventions((prev) => prev.map((it) => (it.id === id ? { ...it, notes: 'Reviewed today — steady progress.' } : it)));
  }

  return (
    <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-4">
      {/* Interventions Tracker */}
      <div className="xl:col-span-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-900">Interventions Tracker</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {interventions.map((it) => (
            <div key={it.id} className="py-3 flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900">{it.student} — {it.type}</p>
                <p className="text-xs text-gray-600">{it.start} → {it.end} • <span className={it.status === 'Ongoing' ? 'text-amber-600' : 'text-emerald-600'}>{it.status}</span></p>
                <p className="text-xs text-gray-500 mt-1">{it.notes}</p>
              </div>
              <button onClick={() => quickNote(it.id)} className="text-xs rounded-lg border border-gray-200 px-3 py-1.5 hover:bg-gray-50">Quick note</button>
            </div>
          ))}
        </div>
      </div>

      {/* Recognition & Resources */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2"><Award className="h-4 w-4" /> Recognition & Progress</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-emerald-50 p-3 text-center">
              <p className="text-xs text-emerald-700">Sessions</p>
              <p className="text-xl font-bold text-emerald-900">{stats.sessions}</p>
            </div>
            <div className="rounded-lg bg-sky-50 p-3 text-center">
              <p className="text-xs text-sky-700">Growth</p>
              <p className="text-xl font-bold text-sky-900">{stats.growth}%</p>
            </div>
            <div className="rounded-lg bg-indigo-50 p-3 text-center">
              <p className="text-xs text-indigo-700">Badges</p>
              <p className="text-xl font-bold text-indigo-900">{stats.badges.length}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {stats.badges.map((b) => (
              <span key={b} className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
                <BadgeCheck className="h-3.5 w-3.5" /> {b}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Communication & Resources</h3>
          <div className="space-y-2">
            <button className="w-full inline-flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
              <span>Message counselor</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </button>
            <button className="w-full inline-flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
              <span className="inline-flex items-center gap-2"><BookOpenText className="h-4 w-4" /> Wellness templates</span>
              <span className="text-xs text-gray-500">View</span>
            </button>
            <button className="w-full inline-flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
              <span className="inline-flex items-center gap-2"><FileDown className="h-4 w-4" /> Download report</span>
              <span className="text-xs text-gray-500">PDF</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
