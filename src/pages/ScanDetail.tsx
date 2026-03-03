export default function ScanDetail() {
  return (
    <>
      {/* Top */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">

          <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center">
            0%
          </div>

          <div className="flex flex-wrap gap-6">
            <Step label="Spidering" />
            <Step label="Mapping" />
            <Step label="Testing" />
            <Step label="Validating" />
            <Step label="Reporting" />
          </div>
        </div>

      </div>

      {/* Console */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <div className="border-b p-4 font-medium text-teal-600">
          Activity Log
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">

          <div className="md:col-span-2 p-6 text-xs space-y-3">
            <p>[09:00] Starting scan...</p>
            <p>[09:02] Target reachable...</p>
            <p>[09:05] SQL Injection found...</p>
          </div>

          <div className="border-t md:border-t-0 md:border-l p-6 space-y-4">
            <Finding severity="Critical" />
            <Finding severity="High" />
          </div>

        </div>
      </div>
    </>
  );
}

function Step({ label }: any) {
  return (
    <div className="flex flex-col items-center text-sm">
      <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center">
        ✓
      </div>
      <span className="mt-2">{label}</span>
    </div>
  );
}

function Finding({ severity }: any) {
  return (
    <div className="border rounded-xl p-4">
      <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
        {severity}
      </span>
      <p className="mt-2 text-sm">
        SQL Injection in Authentication Endpoint
      </p>
    </div>
  );
}