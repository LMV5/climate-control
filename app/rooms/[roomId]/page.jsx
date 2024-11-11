import RoomDetails from "@/components/RoomDetails";
import connectDB from "@/config/database";
import { getRoom } from "@/utils/getRoom";
import { getRoomHistory } from "@/utils/getRoomHistory";
import { getSettings } from "@/utils/getSettings";

const Page = async ({ params }) => {
  await connectDB();
  const { roomId } = await params;

  const room = await getRoom(roomId);
  const roomHistory = await getRoomHistory(roomId);
  const settingsArray = await getSettings();
  const settings = settingsArray[0];

  if (!room) {
    return <div>Room not found</div>;
  }

  const cleanRoom = {
    ...room,
    _id: room._id.toString(),
  };

  return (
    <>
      <RoomDetails
        room={cleanRoom}
        roomHistory={roomHistory}
        settings={settings}
      />
    </>
  );
};

export default Page;
