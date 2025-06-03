// components/ApplicationsSection.js
export default function ApplicationsSection({ heading, items = [] }) {
    if (!items.length) return null;

    return (
      <div className=" text-center mt-10 pb-12 md:pb-16 ">
        <h3 className="text-2xl font-medium mb-6">Applications</h3>
        <ul className="space-y-3 text-sm">
          {items.map((item, index) => (
            <li key={index} className="list-disc   list-inside">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
