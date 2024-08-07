import CardWrapper from "../components/cards";
import Carousel from "../components/carousel";

export default function Page() {
  return (
    <>
      <div className="flex flex-col mx-auto max-w-screen-xl py-4 ">
        <div className="flex">
          <Carousel />
        </div>
        <CardWrapper />
        {/* <CardWrapper /> */}
        {/* <CardWrapper /> */}
        {/* <CardWrapper /> */}
        {/* <CardWrapper /> */}
      </div>
    </>
  );
}
