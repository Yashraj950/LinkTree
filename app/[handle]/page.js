import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;

  const client = await clientPromise;
  const db = client.db("bittree")
  const collection = db.collection("links")
  const item = await collection.findOne({handle: handle})

  if (!item) {
    return  notFound();
  }

  
  return (
    <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
     {item && <div className="photo flex flex-col justify-center items-center gap-4">
        <img className="rounded-full w-40 h-40" src={item.pic} alt="" />
        <span className="text-xl font-bold">@{item.handle}</span>
        <span className="desc w-96 text-center">
         😇 Made to Travel. For help, contact us. follow one of out customer
          support links below.🥰
        </span>
        <div className="links">
          {item.links.map((item, index) => {
            return (
              <Link href={item.link} key={index}> <div
                className="py-4 bg-purple-100  shadow-2xl px-2 min-w-96 flex justify-center rounded-md my-3"
              >
                {item.linktext}
              </div> </Link>
            );
          })}
        </div>
      </div> }
    </div>
  );
}




