export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#181715] text-[#F7F3EC]">
      <div className="flex flex-col items-center space-y-4">
        <span className="font-editorial text-2xl sm:text-3xl font-light tracking-[0.3em] text-[#F7F3EC]">
          AKSHARAM
        </span>
        <span className="text-[9px] uppercase tracking-[0.35em] text-[#B79A67]">
          ETHNIC LLP • SURAT
        </span>
        <div className="w-32 h-[1.5px] bg-white/10 overflow-hidden relative mt-2">
          <div className="absolute inset-0 bg-[#B79A67] animate-[pulse_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
