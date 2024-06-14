// BentoGrid.js
const BentoGrid = () => {
  return (
    <>
      <div className="grid grid-rows-6 grid-cols-4 gap-4 my-2 drop-shadow-lg">
        <div className="rounded-2xl p-8 bg-red-200 row-span-2">01</div>
        <div className="rounded-2xl p-8 bg-yellow-200 col-span-2">02</div>
        <div className="rounded-2xl p-8 bg-red-200 row-span-3">01</div>
        <div className="rounded-2xl p-8 bg-red-200 col-start-2 col-end-4 row-span-3">
          01
        </div>
        <div className="rounded-2xl p-8 bg-yellow-200 row-span-2 col-span-2 col-start-1 col-end-2">
          02
        </div>
        <div className="rounded-2xl p-8 bg-yellow-200 row-span-2 col-span-2 col-start-4 col-end-5">
          02
        </div>
        <div className="rounded-2xl p-8 bg-yellow-200 col-span-3 row-span-6 ">
          02
        </div>
        <div className="rounded-2xl p-8 bg-yellow-200 col-span-1 row-span-5 col-start-4 col-end-5">
          02
        </div>
      </div>
    </>
  );
};

export default BentoGrid;
