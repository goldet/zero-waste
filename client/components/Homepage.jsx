import Link from "next/link";


export default function Homepage() {
  return (
    
    <div className="page-container">
    {/*  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1663090106056-bbb60d2be552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")` }}>
     <div className="hero-overlay bg-opacity-60"></div>
     <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md"> */}
     <section className="hero">
      <div className="container hero-container">
      <div className="hero-text">
      <h1 className=""> Why Zero Waste? </h1>  {/* mb-5 text-5xl font-bold text-white */}

      <h4 className="">{/* mb-5 */}
        Our mission is to promote community engagement and reduce waste! If you
        have extra food at home that you&#39;re afraid you won&#39;t use or will go bad,
        share it and it will be posted to the food to share page. If there&#39;s
        something you need, ask for it and it will be shared to the food needs
        page.
      </h4>
      </div>
      </div>
      </section>

      <div className="btn2 w-36 tracking-wide text-lg m-auto flex justify-center text-center"> {/* tracking wider? not working... */}
      <Link className="tracking-wider btn-glass text-xl" href="/forms/share">Start Sharing!</Link>
      </div>
</div>
/* </div>
</div>
</div> */
  );
}
