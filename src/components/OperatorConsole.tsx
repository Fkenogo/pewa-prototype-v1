import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldAlert,
  CheckCircle,
  AlertTriangle,
  UserCheck,
  Scale,
  Sparkles,
  Search,
  Check,
  X,
  FileText,
  Lock,
} from 'lucide-react';
import { OperatorCase } from '../types';

export const OperatorConsole: React.FC = () => {
  const { operatorCases, resolveOperatorCase, organization, brands, campaigns } = useApp();
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(operatorCases[0]?.id || null);
  const [resolutionInput, setResolutionInput] = useState('Reviewed against Stage 3 policy; continuity buffer verified.');
  const [filterType, setFilterType] = useState<string>('all');

  const selectedCase = operatorCases.find((c) => c.id === selectedCaseId) || operatorCases[0];

  const filteredCases = operatorCases.filter((c) =>
    filterType === 'all' ? true : c.type === filterType
  );

  const handleResolve = () => {
    if (!selectedCase) return;
    resolveOperatorCase(selectedCase.id, resolutionInput);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
          <Scale className="w-3.5 h-3.5 text-purple-400" />
          <span>PEWA Operator Console (§6.L & Stage 3-R08)</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white">
          Platform Administration & Oversight
        </h1>

        <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
          Bounded authority console: handles subscriber eligibility, consumption disputes, content
          moderation and campaign integrity.{' '}
          <strong className="text-rose-400">
            A PEWA operator cannot accept merchant orders, modify menu prices or declare food Ready.
          </strong>
        </p>
      </div>

      {/* Operator Dashboard Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
          <div className="text-[11px] text-zinc-500 uppercase font-semibold">Active Subscribers</div>
          <div className="text-2xl font-mono font-black text-white mt-1">1</div>
          <div className="text-xs text-emerald-400 mt-1">Savannah Hospitality Ltd.</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
          <div className="text-[11px] text-zinc-500 uppercase font-semibold">Published Brands</div>
          <div className="text-2xl font-mono font-black text-amber-400 mt-1">
            {brands.filter((b) => b.isPublished).length}
          </div>
          <div className="text-xs text-zinc-400 mt-1">Across 3 business types</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
          <div className="text-[11px] text-zinc-500 uppercase font-semibold">Open Oversight Cases</div>
          <div className="text-2xl font-mono font-black text-purple-400 mt-1">
            {operatorCases.filter((c) => c.status === 'open').length}
          </div>
          <div className="text-xs text-zinc-400 mt-1">Disputes & Verifications</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
          <div className="text-[11px] text-zinc-500 uppercase font-semibold">Active Sponsored Ads</div>
          <div className="text-2xl font-mono font-black text-blue-400 mt-1">{campaigns.length}</div>
          <div className="text-xs text-zinc-400 mt-1">Strictly labelled on Home</div>
        </div>
      </div>

      {/* Operator Cases & Moderation Queue */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Case List Sidebar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Oversight Queue
            </span>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded-lg text-[11px] text-zinc-300 px-2 py-1 outline-none"
            >
              <option value="all">All Cases</option>
              <option value="continuity_debt">Continuity</option>
              <option value="onboarding_review">Onboarding</option>
              <option value="dispute">Disputes</option>
            </select>
          </div>

          <div className="space-y-2">
            {filteredCases.map((c) => (
              <div
                key={c.id}
                onClick={() => setSelectedCaseId(c.id)}
                className={`p-3.5 rounded-2xl border cursor-pointer transition text-left space-y-1 ${
                  selectedCaseId === c.id
                    ? 'bg-purple-500/15 border-purple-500 text-white'
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono font-bold text-purple-300">
                    {c.type.replace('_', ' ')}
                  </span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ${
                      c.status === 'resolved'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-amber-500/20 text-amber-300'
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
                <div className="text-xs font-bold text-white truncate">{c.title}</div>
                <div className="text-[11px] text-zinc-400 truncate">{c.orgName}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Case Inspection & Decision */}
        <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-5">
          {selectedCase ? (
            <>
              <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase font-bold">
                    Case {selectedCase.id} • Priority: {selectedCase.priority}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">{selectedCase.title}</h3>
                  <div className="text-xs text-zinc-400">
                    Target: <strong className="text-white">{selectedCase.orgName}</strong> (
                    {selectedCase.orgId})
                  </div>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold uppercase ${
                    selectedCase.status === 'resolved'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-amber-500/20 text-amber-300'
                  }`}
                >
                  {selectedCase.status}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Investigation Details
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 leading-relaxed">
                  {selectedCase.description}
                </p>
              </div>

              {selectedCase.resolutionNote && (
                <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-2xl text-xs space-y-1">
                  <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Resolution Record</span>
                  </div>
                  <p className="text-zinc-300">{selectedCase.resolutionNote}</p>
                </div>
              )}

              {selectedCase.status !== 'resolved' && (
                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-zinc-300">
                    Operator Administrative Decision Note
                  </label>
                  <textarea
                    rows={3}
                    value={resolutionInput}
                    onChange={(e) => setResolutionInput(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-3 text-xs text-white outline-none focus:border-purple-500"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={handleResolve}
                      className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4" />
                      <span>Record Decision & Resolve Case</span>
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="py-12 text-center text-zinc-500 text-xs">No case selected</div>
          )}
        </div>
      </div>
    </div>
  );
};
