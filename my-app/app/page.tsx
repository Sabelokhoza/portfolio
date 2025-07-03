import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <div className="max-w-3xl text-center space-y-10">
          <h1 className="text-6xl font-semibold">Sabelo Khoza</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quis, itaque maiores explicabo rerum a eius pariatur tempore molestiae, odio rem deserunt et vel harum veritatis atque nulla in nihil!</p>
          <div className="space-x-2">
             <Button variant="secondary">Button 1</Button>
                <Button>Button 2</Button>
          </div>

         <ThemeToggle/>
     
      </div>
    </div>
  );
}
