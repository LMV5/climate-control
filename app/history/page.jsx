import HistoryTable from "@/components/HistoryTable";
import { getHistory } from "@/utils/getHistory";
import connectDB from "@/config/database";

export default async function Page() {
  await connectDB();

  const history = await getHistory();

  if (!history) {
    return <p>History is empty</p>;
  }

  return (
    <>
      <h2 className="text-paleGrey mb-6 text-center text-2xl uppercase tracking-widest">
        History
      </h2>
      <HistoryTable history={history} />
    </>
  );
}
