import Link from "next/link";



export default function Homepage() {
  return (
    <>
   <div className="hero min-h-screen bg-base-200">
  <div className="heroContainer gap-20 hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="image md:max-w-xs rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-center md:text-start lg:text-start text-5xl font-bold"> Why Zero Waste? </h1>

      <p className="text-center md:text-start lg:text-start py-6">
        Our mission is to promote community engagement, reduce food waste, and eat well! <br/> You can use this app to share food or post what you need!
      </p>

      <div className="flex justify-center md:justify-start  md:flex-none lg:justify-start  lg:flex-none"> 
      <Link className="button items-center tracking-wider btn text-xl" href="/forms/share">Start Sharing!</Link>
      </div>
      
</div>
</div>
</div>

    </>
  );
}
