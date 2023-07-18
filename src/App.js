import "./index.css";

import { SuperTokens } from "./SuperTokens";
import { CreateFlow } from "./CreateFlow";
import { UpdateFlow } from "./UpdateFlow";
import { DeleteFlow } from "./DeleteFlow";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <div className="border border-gray-300 p-4">
        <SuperTokens />
      </div>
      <div className="border border-gray-300 p-4">
        <CreateFlow />
      </div>
      <div className="border border-gray-300 p-4">
        <UpdateFlow />
      </div>
      <div className="border border-gray-300 p-4">
        <DeleteFlow />
      </div>
    </div>
  );
}
