import { ToggleTheme } from "@/components/lightswind/toggle-theme";

export default function Home() {
  return (
    <div>
      <ToggleTheme animationType="swipe-right" />
      This is the main page
    </div>
  );
}
