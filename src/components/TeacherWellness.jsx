import { Heart } from 'lucide-react';
import { useState } from 'react';

const moods = [
  { label: 'Great', emoji: '😄' },
  { label: 'Calm', emoji: '😊' },
  { label: 'OK', emoji: '🙂' },
  { label: 'Stressed', emoji: '😥' },
];

export default function TeacherWellness() {
  const [selected, setSelected] = useState('Calm');

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-rose-600 mb-2">
        <Heart className="h-5 w-5" />
        <h3 className="text-sm font-semibold">Your quick check-in</h3>
      </div>
      <p className="text-xs text-gray-600 mb-3">How are you feeling today?</p>
      <div className="flex flex-wrap gap-2">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => setSelected(m.label)}
            className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${selected === m.label ? 'border-rose-300 bg-rose-50 text-rose-700' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
          >
            <span className="text-base">{m.emoji}</span> {m.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-600">Tip: Take 2 mins to breathe before your next class 🌿</p>
    </section>
  );
}
