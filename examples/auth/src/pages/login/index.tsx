import React from "react";

const Page = () => (
  <div>
    <button
      onClick={() => {
        fetch("/api/login")
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            if (res.success) {
              window.location.reload();
            }
          });
      }}
    >
      Click Me For Mock Login
    </button>
  </div>
);

export default Page;
