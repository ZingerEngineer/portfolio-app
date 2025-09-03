import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";
import zinger from '../assets/img/png/img.png';

export default function App() {
  return (
    <div className="app">
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      <ProfileCard
        name="John Doe"
        title="Software Engineer"
        image={zinger}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
}
