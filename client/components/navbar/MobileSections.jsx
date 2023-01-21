import Link from "next/link";

const MobileSections = () => {
  return (<>
  
<li className="list-none">
<Link href="/">Home</Link>
</li>

<li className="list-none"> 
<Link href="/forms/share">Share Form</Link>
</li>

<li className="list-none">
<Link href="/forms/need">Needs Form</Link>
</li>

<li className="list-none">
<Link href="/grids/foodavailable">Food to share</Link>
</li>

<li className="list-none">
<Link href="/grids/foodneeds">Food needs</Link>
</li>

  </>
)};

export default MobileSections;
