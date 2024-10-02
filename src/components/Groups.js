import { groups } from "../constants/Data";

const Groups = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {groups.map((group) => (
        <div
          key={group.name}
          className="bg-secondary shadow-md rounded-lg p-4 mb-4"
        >
          <h2 className="text-lg font-bold text-gray-800">{group.name}</h2>
          <div className="mt-2">
            {group.members.map((member, index) => (
              <div key={index} className="text-gray-600">
                {member}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Groups };
