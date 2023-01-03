import axios, { AxiosResponse } from "axios";

const apiUrl = "https://destifyfunc-api-dev.azurewebsites.net/api/rooms";
const param = "?roomIds=ceae0d77-2fd6-dbe3-0f33-61c355c106ff,4c0ad727-1652-3b6e-4adb-61c21a17a4b1";
const headers = {
  "x-functions-key": "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==",
};

export async function fetchRooms() {
  const response: AxiosResponse = await axios.get(apiUrl + param, { headers });
  return response.data?.roomInfo;
}
