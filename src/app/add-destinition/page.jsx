import AddPackageForm from "@/components/AddPackageForm";

export const metadata = {
  title: "Add New Travel Package — Wanderlast",
};

export default function AddDestinationPage() {
  return (
    <main className="bg-white px-12 pt-20 pb-24">
      <h1 className="font-serif text-[52px] leading-none text-neutral-900">
        Add New Travel Package
      </h1>

      <div className="mx-auto mt-20 max-w-[44rem]">
        <AddPackageForm />
      </div>
    </main>
  );
}
