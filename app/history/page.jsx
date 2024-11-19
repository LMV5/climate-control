"use client";

import HistoryTable from "@/components/HistoryTable";
import { useState, useEffect } from "react";
import Message from "@/components/Message";
import Loading from "../loading";

export default function Page() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [history, setHistory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const response = await fetch("/api/history", {
          method: "GET",
        });

        if (!response.ok) throw new Error("Failed to fetch history");

        const data = await response.json();

        if (data.length > 0) {
          setHistory(data);
        } else {
          setMessage("No history records found.");
        }
      } catch (error) {
        setMessageType("error");
        setMessage("Error fetching history");
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h2 className="text-paleGrey mb-6 text-center text-2xl uppercase tracking-widest">
        History
      </h2>
      {message && <Message message={message} type={messageType} />}
      <HistoryTable history={history} />
    </>
  );
}
