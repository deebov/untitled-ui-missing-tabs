export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>

      <h2 className="text-lg mt-4 font-bold">To reproduce:</h2>
      <ol className="list-decimal list-inside">
        <li>Go to the page with tabs</li>
        <li>Go to the page without tabs</li>
        <li>Go to the page with tabs</li>
        <li>Observe that the tabs are not visible</li>
      </ol>
      <p className="mt-4">The tabs should be visible on the page with tabs.</p>
    </div>
  );
}
