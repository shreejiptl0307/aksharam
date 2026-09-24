import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAFAF8] text-[#171717] px-6 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#66635F]">
          404 Error
        </p>
        <h1 className="text-3xl sm:text-4xl font-light text-[#171717] tracking-tight">
          This page seems to have left the collection.
        </h1>
        <p className="text-sm text-[#66635F] font-light">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#171717] text-[#FAFAF8] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:bg-black transition-colors"
          >
            Return to Aksharam
          </Link>
        </div>
      </div>
    </div>
  );
}
