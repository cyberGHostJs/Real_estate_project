import React from "react";

function servicesDropdownmenu() {
  return (
    <div className=" ServicesDropdown_menu flex flex-col h-36 w-32 top-14  absolute bg-amber-600 rounded-sm">
      <ul className=" flex flex-col gap-4 text-customBlue text-sm font-semibold text-center cursor-pointe divide-y divide-customBlue">
        <li>Property Maintenance</li>
        <li>Property Repairs</li>
        <li>Cleaning</li>
      </ul>
    </div>
  );
}

export default servicesDropdownmenu;
