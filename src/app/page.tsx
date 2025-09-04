import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Image of apple */}
      <div className="">
      <Image
      src="https://cdn.realmajed.com/tafe/IMG_6704.jpeg"
      width={500}
      height={500}
      alt="Picture of James"
    />
      </div>
     {/* Button that takes you to wiki "This is apple" */}
    <Button>This is apple</Button>
    <Button>wigga rocking the fit</Button>
    </div>
  );
}
