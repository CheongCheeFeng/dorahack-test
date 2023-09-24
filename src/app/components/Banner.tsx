export const Banner = () => {
  return (
    <div className="bg-banner bg-center bg-no-repeat">
      <div className="flex flex-col gap-2 px-16 py-20">
        <div className="text-6xl leading-[1.25]">
          <p>Where developers&rsquo;</p>
          <p>dreams come true</p>
        </div>{" "}
        <p className="max-w-xl text-lg font-thin">
          Explore the world of innovation at DoraHacks, BUIDLs, continuous
          funding, grants, bounties, and hackathons.
        </p>{" "}
        <div className="mt-10 flex flex-row gap-6 text-xl">
          <div className="border-primary-orange bg-primary-orange rounded-lg border px-8 py-4 text-center text-white">
            Submit BUIDL
          </div>{" "}
          <a
            href="/"
            className="rounded-lg border border-slate-900 bg-white px-8 py-4"
          >
            Explore BUIDLs
          </a>
        </div>
      </div>
    </div>
  );
};
