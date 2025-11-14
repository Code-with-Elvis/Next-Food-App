const MealPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return <div>MealPage {slug}</div>;
};
export default MealPage;
