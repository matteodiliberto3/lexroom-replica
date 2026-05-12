import { supportLine } from "@/content/en/home";

export function SupportLine() {
  return (
    <section className="bg-surface py-10">
      <div className="container-shell text-center text-lg font-medium">
        {supportLine.text}
      </div>
    </section>
  );
}
