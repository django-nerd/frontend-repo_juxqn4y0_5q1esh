import Spline from '@splinetool/react-spline';
import { Brain, Rocket } from 'lucide-react';

export default function HeroHeader() {
  return (
    <section className="relative w-full min-h-[380px] md:min-h-[460px] lg:min-h-[520px] rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 h-full flex items-center">
        <div className="backdrop-blur-sm bg-white/40 rounded-xl p-5 sm:p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-9 w-9 rounded-lg bg-gray-900 text-white flex items-center justify-center shadow-md">
              <Brain className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-gray-700 uppercase">Teacher Dashboard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Class Wellbeing Command Center
          </h1>
          <p className="mt-2 md:mt-3 text-gray-700 max-w-2xl">
            Fast, insight-first overview of mood, activities, and interventions — all in under 3 clicks.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <Rocket className="h-4 w-4" />
            <span>Privacy-first • Aggregated insights • Minimal input</span>
          </div>
        </div>
      </div>
    </section>
  );
}
