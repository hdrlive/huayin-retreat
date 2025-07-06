export default function Home() {
  return (
    <main>
      <h1>Huayin Spring – Private Retreat Circle</h1>
      <p>Willkommen bei unserem exklusiven Gesundheitsprogramm.</p>
      <form>
        <label>Name: <input type="text" name="name" /></label><br />
        <label>Email: <input type="email" name="email" /></label><br />
        <label>Nachricht: <textarea name="message"></textarea></label><br />
        <button type="submit">Absenden</button>
      </form>
    </main>
  );
}
