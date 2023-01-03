import {
  Cancel,
  CheckCircle,
  EditLocation,
  KeyboardArrowDown,
  MeetingRoom,
  MonetizationOn,
  MoreVert,
} from "@mui/icons-material";
import { CircularProgress, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useAppDispatch, useAppSelector } from "../redux/root/hooks";
import { RootState } from "../redux/root/store";
import { fetchAllRooms } from "../redux/trips/reducer";

export function MyTrips() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.rooms);

  useEffect(() => {
    !data.loaded &&  dispatch(fetchAllRooms());
  }, []);

  const selected = data.rooms[selectedIndex];

  return (
    <>
    <Header title="My Trips"/>

      {!data.loading && (
        <div className="md:ml-64 sm:ml-0">
          <Box className="mx-4">
            <Tabs value={selectedIndex} onChange={(_, val) => setSelectedIndex(val)}>
              <Tab label="WAYNE ROOM" value={0} />
              <Tab label="DAVID ROOM" value={1} />
            </Tabs>
          </Box>

          <Box className="max-w-screen-md border mx-4 mb-5 shadow-md rounded-sm">
            <div className="relative flex items-center gap-3 m-4">
              <button className="bg-[#04bcc4] text-white h-12 w-12 rounded-full">
                <MeetingRoom />
              </button>

              <div>
                <p>{selected?.room[0]?.roomName}</p>
                <p className="text-sm text-gray-500 my-1">{selected?.room[0]?.roomType}</p>
                <p className="text-sm text-gray-500 my-1">
                  {selected?.room[0]?.travelStartDate} - {selected?.room[0]?.travelEndDate}
                </p>
              </div>

              <MoreVert className="absolute right-0 top-6" />
            </div>

            <div>
              <img src={selected?.hotel[0]?.hotelImage} alt="hotelimage" className="h-72 w-full" />

              <section className="flex items-center flex-col md:flex-row gap-3 m-4">
                <button className="flex items-center gap-2 border border-black rounded-full px-3 py-1">
                  {selected?.room[0]?.roomStatus === "Active" ? <CheckCircle /> : <Cancel />}
                  <p>{selected?.room[0]?.roomStatus === "Active" ? "Booked" : "Not Booked"}</p>
                </button>

                <button className="flex items-center gap-2 border border-black rounded-full px-3 py-1">
                  <MonetizationOn />
                  <p>Balance Due - ${selected?.room[0]?.remainingBalance}</p>
                </button>
              </section>
            </div>

            <p className="mx-4 my-6 text-md text-gray-500">{selected?.hotel[0]?.hotelDescription}</p>

            <div className="relative flex flex-col md:flex-row items-center m-4 gap-5">
              <button className="flex items-center gap-2 text-[#04bcc4] hover:text-blue-500">
                <EditLocation />
                <p>MODIFY</p>
              </button>

              <button className="flex items-center gap-2 text-[#04bcc4] hover:text-blue-500">
                <MonetizationOn />
                <p>MAKE PAYMENT</p>
              </button>

              <KeyboardArrowDown className="absolute right-0" />
            </div>

            {/*border line*/}
            <p className="border-0 border-t mt-10" />

            <div className="m-4">
              <h5 className="my-3 text-gray-500 text-sm">Past Rooms</h5>
              <div className="flex items-center gap-3">
                <button className="bg-[#04bcc4] text-white h-12 w-12 rounded-full">
                  <MeetingRoom />
                </button>

                <div>
                  <p>No Past Rooms</p>
                  <p className="text-sm my-1 text-gray-500">We couldn't find any past rooms in your account.</p>
                </div>
              </div>
            </div>
          </Box>
        </div>
      )}

      {data.loading && (
        <Box className="flex mx-auto h-screen items-center justify-center ml-64">
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
