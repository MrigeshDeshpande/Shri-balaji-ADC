export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-2xl font-semibold mb-6">Clinic Tour</h2>

      <div className="max-w-3xl mx-auto">
        <iframe
          className="w-full h-64 md:h-96 rounded"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Clinic Tour"
          allowFullScreen
        />
      </div>
    </section>
  );
}