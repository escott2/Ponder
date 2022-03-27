import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";

export default function AddPonder() {
  return (
    <section>
      <h2>Add Ponder</h2>
      <form>
        <label for="category">Category</label>
        <select name="category" id="category">
          <option value="home">Home</option>
          <option value="food">Food</option>
          <option value="landscaping">Landscaping</option>
        </select>

        <DatePicker placeholder="m/dd/yy" />
      </form>
    </section>
  );
}
