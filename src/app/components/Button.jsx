import { capitalize } from "lodash/capitalize";

export default function Button({ label, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {capitalize(label)}
    </button>
  );
}
