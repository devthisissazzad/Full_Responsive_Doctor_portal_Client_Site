import { format } from "date-fns";
import React from "react";

const AppointMentServices = ({ selected }) => {
  return (
    <div className="text-center">
      {selected && <p>Available Services on {format(selected, "PP")}</p>}
    </div>
  );
};

export default AppointMentServices;
