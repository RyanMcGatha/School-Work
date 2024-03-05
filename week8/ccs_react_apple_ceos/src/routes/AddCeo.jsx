import { Form, redirect } from "react-router-dom";
import slugify from "slugify";

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("ceoName");
  const slug = slugify(name, { replacement: "_", lower: true, strict: true });
  const year = formData.get("ceoYear");
  const data = { name, slug, year: Number(year) };
  const url = "http://localhost:8000/create";
  const addCeo = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());

  console.log("add ceo response:", addCeo);
  return redirect("/ceos");
}

const AddCeo = () => {
  return (
    <Form method="POST">
      <label>
        CEO Name
        <input type="text" name="ceoName"></input>
      </label>
      <label>
        Year Served
        <input type="number" name="ceoYear" min="1976" max="2100"></input>
      </label>
      <button type="submit">Add New CEO</button>
    </Form>
  );
};

export default AddCeo;
