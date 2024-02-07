import React from "react";

function ExtraSection(props) {
  return (
    <aside className="hidden md:block md:col-span-1">
      <div className="h-96 w-full bg-white rounded shadow-md p-4 ">
        <h1>Additional content like trends or suggestions placed here</h1>
      </div>
    </aside>
  );
}

export default ExtraSection;
