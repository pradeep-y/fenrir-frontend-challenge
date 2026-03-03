import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card title="Critical" value="86" />
        <Card title="High" value="16" />
        <Card title="Medium" value="26" />
        <Card title="Low" value="16" />
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <input
          placeholder="Search scans..."
          className="border px-4 py-2 rounded-lg w-full md:w-96"
        />

        <div className="flex flex-wrap gap-3">
          <button className="border px-4 py-2 rounded-lg">Filter</button>
          <button className="border px-4 py-2 rounded-lg">Column</button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
            + New Scan
          </button>
        </div>
      </div>


      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 text-left">
            <tr>
              <th className="p-5">Scan Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Last Scan</th>
            </tr>
          </thead>
          <tbody>
            <Row onClick={() => navigate("/scan")} />
            <Row onClick={() => navigate("/scan")} />
          </tbody>
        </table>
      </div>
    </>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h4 className="text-sm text-gray-600">{title}</h4>
      <p className="text-3xl font-bold mt-4">{value}</p>
    </div>
  );
}

function Row({ onClick }: any) {
  return (
    <tr
      onClick={onClick}
      className="border-t hover:bg-gray-50 cursor-pointer"
    >
      <td className="p-5 font-medium">Web App Servers</td>
      <td>Greybox</td>
      <td>
        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
          Completed
        </span>
      </td>
      <td>
        <div className="w-40 bg-gray-200 h-2 rounded-full">
          <div className="bg-teal-600 h-2 rounded-full w-[70%]" />
        </div>
      </td>
      <td>4d ago</td>
    </tr>
  );
}