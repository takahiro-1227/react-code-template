import { ChangeEvent, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const items = [
  "Raito Yagami",
  "L Lawliet",
  "Misa Amane",
  "Nate River",
  "Mihael Keehl",
  "Teru Mikami",
  "Raye Penber",
  "Naomi Misora",
  "Kyosuke Higuchi",
  "Kanzo Mogi",
  "Hideki Ide",
  "Reiji Namikawa",
  "Suguru Shimura",
  "Anthony Rester",
  "Stephen Gevanni",
  "Halle Lidner",
  "Sayu Yagami",
  "Sachiko Yagami",
  "Soichiro Yagami",
  "Tota Matsuda",
  "Shuichi Aizawa",
];

function App() {
  const [keyword, setKeyword] = useState("");
  const handleChange = useDebouncedCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => setKeyword(target.value),
    500,
  );

  const filteredItems = keyword
    ? items.filter((item) => item.toLowerCase().includes(keyword.toLowerCase()))
    : items;

  return (
    <div className="p-4">
      <input className="border p-1" type="text" onChange={handleChange} />
      <ul className="mt-4">
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
