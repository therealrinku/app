import { TripDataModel } from "./types";

export const toggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  const style = sidebar?.getAttribute("style");

  if (style?.includes("display:block")) {
    sidebar?.setAttribute("style", "display:none");
  } else {
    sidebar?.setAttribute("style", "display:block");
  }
};

export const findTabs = (data: TripDataModel[]) => {
  const tabs = [];

  for (let d of data) {
    tabs.push(d.room[0]?.roomName);
  }

  return tabs;
};
