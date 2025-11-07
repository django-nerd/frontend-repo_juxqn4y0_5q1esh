import { Plus, Calendar, Clock, Users } from 'lucide-react';
import { useState } from 'react';

export default function ActivitiesSessions() {
  const [activities, setActivities] = useState([
    { id: 1, type: 'Mindfulness', date: 'Tue, Nov 12', duration: '10m', desc: 'Breathing + grounding' },
    { id: 2, type: 'Gratitude', date: 'Wed, Nov 13', duration: '15m', desc: 'Group sharing circle' },
  ]);
  const [sessions, setSessions] = useState([
    { id: 1, type: 'Group', date: 'Thu, Nov 14', time: '10:30 AM', agenda: 'Focus building' },
  ]);

  function addActivity() {
    const next = { id: Date.now(), type: 'Emotional Learning', date: 'Fri, Nov 15', duration: '12m', desc: 'Feelings wheel' };
    setActivities([next, ...activities]);
  }
  function addSession() {
    const next = { id: Date.now(), type: 'Individual', date: 'Fri, Nov 15', time: '1:00 PM', agenda: 'Check-in + support' };
    setSessions([next, ...sessions]);
  }

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Activities & Sessions</h2>
        <div className="flex gap-2">
          <button onClick={addActivity} className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50">
            <Plus className="h-4 w-4" /> Add Activity
          </button>
          <button onClick={addSession} className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-800">
            <Plus className="h-4 w-4" /> Schedule Session
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Activities list */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-800 mb-3">Upcoming Activities</p>
          <ul className="space-y-3">
            {activities.map((a) => (
              <li key={a.id} className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{a.type}</p>
                    <p className="text-xs text-gray-600">{a.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-xs text-gray-600 justify-end">
                    <Calendar className="h-4 w-4" /> {a.date}
                    <Clock className="h-4 w-4 ml-2" /> {a.duration}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Sessions list */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-800 mb-3">Scheduled Sessions</p>
          <ul className="space-y-3">
            {sessions.map((s) => (
              <li key={s.id} className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">{s.type} session</p>
                  <p className="text-xs text-gray-600">Agenda: {s.agenda}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Calendar className="h-4 w-4" /> {s.date}
                  <Clock className="h-4 w-4" /> {s.time}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
