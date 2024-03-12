import Info from "@/components/info";
import Projects from "@/components/projects";

export default function Home() {
  return (
      <main className="flex items-center flex-col">
        <Info></Info>
        <Projects></Projects>
      </main>
  );
}
