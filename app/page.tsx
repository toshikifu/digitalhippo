import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
          your marketplace fro high quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
