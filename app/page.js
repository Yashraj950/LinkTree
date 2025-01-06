
export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className=" flex justify-center flex-col ml-[10vw] gap-3">
          <p className=" text-[#d2e823] font-bold text-8xl ">
            EveryThing you are. In one, simple link in bio.
          </p>
          <p className="text-[#c9b119] text-xl">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            instagram, TikTok, Twitter, youTube and other social media profiles.
          </p>

          <div className="input flex gap-5">
            <input
              className="px-4 py-3 rounded-xl focus:outline-green-800"
              type="text"
              placeholder="linktr.ee/your-url"
            />
            <button className="bg-pink-200 px-4 py-3 hover:bg-pink-300 rounded-3xl">
              Claim Your Linktree
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-center flex-col mr-[10vw]">
          <img src="./home.png" alt="" />
        </div>
      </section>
      <section className="bg-pink-900 min-h-[100vh]"></section>
    </main>
  );
}
