import ShareForm from "@/components/share/ShareForm";

const SharePage = () => {
  return (
    <section className="pb-10">
      <div className="meal-container">
        <header className="bg-accent py-4 px-4 rounded-md">
          <h1 className="text-xl font-bold mb-1.5">Share Your Meal</h1>
          <p className=" text-neutral-300 leading-relaxed">
            Let others know about your favorite meal!
          </p>
        </header>
        <ShareForm />
      </div>
    </section>
  );
};
export default SharePage;
