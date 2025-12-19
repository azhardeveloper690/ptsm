export default function TestFailed() {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-danger">😞 Test Failed</h1>
      <p>Unfortunately, you did not pass the PSDI Admission Test.</p>
      <p>You may retake the test later.</p>
    </div>
  );
}
