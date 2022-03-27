import CategoryGrid from "./CategoryGrid";
import AddPonder from "./AddPonder";

export default function Main() {
  return (
    <div className="Main">
      <h1 className="page-title">Ponder</h1>
      <p className="tagline">Let your mind wander</p>
      <AddPonder />
      <h2>Recent Ponderings</h2>
      <CategoryGrid />
    </div>
  );
}
