import React, { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'review-cycle-tool-v1';

const SUBJECTS = [
  { id: 'zaimu_keisan',  name: '財務計算' },
  { id: 'zaimu_riron',   name: '財務理論' },
  { id: 'kanri_keisan',  name: '管理計算' },
  { id: 'kanri_riron',   name: '管理理論' },
  { id: 'kansa',         name: '監査論'   },
  { id: 'kaisha',        name: '企業法'   },
  { id: 'hojin',         name: '法人税'   },
  { id: 'shotoku',       name: '所得税'   },
  { id: 'shohi',         name: '消費税'   },
  { id: 'sozei_riron',   name: '租税理論' },
  { id: 'keiei',         name: '経営学'   },
];

function getDeadline() {
  const today = new Date();
  return new Date(today.getFullYear(), 7, 21); // August 21
}

function calcRemainingDays() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.floor((getDeadline() - today) / (1000 * 60 * 60 * 24));
}

function calcReviews(hoursPerReview, hoursPerDay, remainingDays) {
  const h = parseFloat(hoursPerReview);
  const d = parseFloat(hoursPerDay);
  if (!h || !d || h <= 0 || d <= 0) return null;
  return remainingDays / (h / d);
}

function calcDaysPerReview(hoursPerReview, hoursPerDay) {
  const h = parseFloat(hoursPerReview);
  const d = parseFloat(hoursPerDay);
  if (!h || !d || h <= 0 || d <= 0) return null;
  return h / d;
}

function getBadgeStyle(reviews, remainingDays) {
  if (remainingDays <= 0) {
    return {
      label: '期限切れ',
      className: 'bg-gray-100 text-gray-500 border border-gray-300',
      barWidth: 0,
      barColor: 'bg-gray-300',
    };
  }
  if (reviews === null) {
    return {
      label: '–',
      className: 'bg-gray-50 text-gray-400 border border-gray-200',
      barWidth: 0,
      barColor: 'bg-gray-200',
    };
  }
  if (reviews >= 8)
    return { label: `${reviews.toFixed(1)}周`, className: 'bg-indigo-50 text-indigo-700 border border-indigo-200', barWidth: Math.min(100, reviews * 8), barColor: 'bg-indigo-400' };
  if (reviews >= 6)
    return { label: `${reviews.toFixed(1)}周`, className: 'bg-green-50 text-green-700 border border-green-200', barWidth: Math.min(100, reviews * 8), barColor: 'bg-green-400' };
  if (reviews >= 4)
    return { label: `${reviews.toFixed(1)}周`, className: 'bg-amber-50 text-amber-700 border border-amber-200', barWidth: Math.min(100, reviews * 8), barColor: 'bg-amber-400' };
  if (reviews >= 2)
    return { label: `${reviews.toFixed(1)}周`, className: 'bg-orange-50 text-orange-700 border border-orange-200', barWidth: Math.min(100, reviews * 8), barColor: 'bg-orange-400' };
  return { label: `${reviews.toFixed(1)}周`, className: 'bg-red-50 text-red-700 border border-red-200', barWidth: Math.min(100, reviews * 8), barColor: 'bg-red-400' };
}

function loadState() {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s) return JSON.parse(s);
  } catch (e) {}
  return {};
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

export default function ReviewCycleTool() {
  const [settings, setSettings] = useState(() => loadState());
  const importRef = useRef(null);
  const remainingDays = calcRemainingDays();

  useEffect(() => {
    saveState(settings);
  }, [settings]);

  function updateSetting(id, field, value) {
    setSettings(prev => ({
      ...prev,
      [id]: { ...(prev[id] || {}), [field]: value },
    }));
  }

  async function exportData() {
    const data = {
      version: 1,
      label: '復習周期管理ツール',
      exportedAt: new Date().toISOString(),
      settings,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const file = new File([blob], 'review_cycle_backup.json', { type: 'application/json' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file] }); return; } catch (e) {}
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'review_cycle_backup.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function importData(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!data.settings) throw new Error('invalid');
        if (!window.confirm('現在のデータを上書きして復元しますか？')) return;
        setSettings(data.settings);
        saveState(data.settings);
      } catch (err) {
        window.alert('ファイルの読み込みに失敗しました。');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  const deadline = getDeadline();
  const deadlineLabel = `${deadline.getMonth() + 1}月${deadline.getDate()}日`;

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif" }}>

      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 pt-3 pb-2">

          {/* Top row: title + actions */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">復習周期管理</p>
              <h1 className="text-base font-bold text-gray-900 leading-tight">公認会計士試験</h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={exportData}
                className="px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-md bg-white text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors whitespace-nowrap"
              >
                バックアップ
              </button>
              <button
                onClick={() => importRef.current?.click()}
                className="px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-md bg-white text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors whitespace-nowrap"
              >
                復元
              </button>
              <input ref={importRef} type="file" accept=".json" className="hidden" onChange={importData} />
            </div>
          </div>

          {/* Remaining days */}
          <div className="flex items-baseline gap-2">
            <span
              className={`font-mono text-3xl font-medium leading-none ${
                remainingDays <= 0 ? 'text-red-600' : remainingDays <= 30 ? 'text-orange-500' : 'text-gray-900'
              }`}
            >
              {remainingDays <= 0 ? '期限切れ' : remainingDays}
            </span>
            {remainingDays > 0 && <span className="text-sm text-gray-500">日</span>}
            <span className="text-xs text-gray-400">{deadlineLabel}まで</span>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-3xl mx-auto px-4 py-4">

        {/* ── Desktop Table (sm+) ── */}
        <div className="hidden sm:block bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">科目</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-gray-500 tracking-wider">
                  ① 1周の時間
                  <span className="block text-gray-400 font-normal normal-case">(時間)</span>
                </th>
                <th className="px-4 py-3 text-center text-xs font-bold text-gray-500 tracking-wider">
                  ② 1日の時間
                  <span className="block text-gray-400 font-normal normal-case">(時間/日)</span>
                </th>
                <th className="px-4 py-3 text-center text-xs font-bold text-gray-500 tracking-wider">1周の日数</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-gray-500 tracking-wider">最大周回数</th>
              </tr>
            </thead>
            <tbody>
              {SUBJECTS.map(({ id, name }, idx) => {
                const s = settings[id] || {};
                const reviews = calcReviews(s.hoursPerReview, s.hoursPerDay, remainingDays);
                const dpReview = calcDaysPerReview(s.hoursPerReview, s.hoursPerDay);
                const badge = getBadgeStyle(reviews, remainingDays);
                return (
                  <tr key={id} className={`border-b border-gray-100 last:border-0 transition-colors hover:bg-gray-50 ${idx % 2 === 0 ? '' : 'bg-gray-50/40'}`}>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">{name}</td>
                    <td className="px-4 py-3 text-center">
                      <input
                        type="number"
                        min="0"
                        step="0.5"
                        value={s.hoursPerReview ?? ''}
                        onChange={e => updateSetting(id, 'hoursPerReview', e.target.value)}
                        placeholder="–"
                        className="w-20 text-center border border-gray-200 rounded-lg py-1.5 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow"
                      />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <input
                        type="number"
                        min="0"
                        step="0.5"
                        value={s.hoursPerDay ?? ''}
                        onChange={e => updateSetting(id, 'hoursPerDay', e.target.value)}
                        placeholder="–"
                        className="w-20 text-center border border-gray-200 rounded-lg py-1.5 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow"
                      />
                    </td>
                    <td className="px-4 py-3 text-center text-sm font-mono text-gray-600">
                      {dpReview !== null ? `${dpReview.toFixed(1)}日` : '–'}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-mono font-semibold ${badge.className}`}>
                        {badge.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ── Mobile Cards (< sm) ── */}
        <div className="sm:hidden space-y-3">
          {SUBJECTS.map(({ id, name }) => {
            const s = settings[id] || {};
            const reviews = calcReviews(s.hoursPerReview, s.hoursPerDay, remainingDays);
            const dpReview = calcDaysPerReview(s.hoursPerReview, s.hoursPerDay);
            const badge = getBadgeStyle(reviews, remainingDays);
            return (
              <div key={id} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-gray-900">{name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-mono font-semibold ${badge.className}`}>
                    {badge.label}
                  </span>
                </div>

                {/* Progress bar */}
                {reviews !== null && remainingDays > 0 && (
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${badge.barColor}`}
                      style={{ width: `${badge.barWidth}%` }}
                    />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">① 1周の時間（時間）</p>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      value={s.hoursPerReview ?? ''}
                      onChange={e => updateSetting(id, 'hoursPerReview', e.target.value)}
                      placeholder="–"
                      className="w-full border border-gray-200 rounded-lg py-1.5 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">② 1日の時間（時間/日）</p>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      value={s.hoursPerDay ?? ''}
                      onChange={e => updateSetting(id, 'hoursPerDay', e.target.value)}
                      placeholder="–"
                      className="w-full border border-gray-200 rounded-lg py-1.5 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                </div>

                {dpReview !== null && (
                  <p className="text-xs text-gray-400 mt-2 font-mono">1周 = {dpReview.toFixed(1)}日</p>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Color Legend ── */}
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <span className="text-xs text-gray-400 mr-1">周回数：</span>
          {[
            { label: '8周以上', className: 'bg-indigo-50 text-indigo-700 border border-indigo-200' },
            { label: '6〜8周', className: 'bg-green-50 text-green-700 border border-green-200' },
            { label: '4〜6周', className: 'bg-amber-50 text-amber-700 border border-amber-200' },
            { label: '2〜4周', className: 'bg-orange-50 text-orange-700 border border-orange-200' },
            { label: '2周未満', className: 'bg-red-50 text-red-700 border border-red-200' },
          ].map(({ label, className }) => (
            <span key={label} className={`px-2.5 py-1 rounded-full text-xs font-mono ${className}`}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
