import Link from "next/link";

const MobileSections = ({ setMainMenu }) => {
  return (<>

  
<li className="list-none">
<Link href="/" onClick={() => setMainMenu(false)}>Home</Link>
</li>

<li className="list-none"> 
<Link href="/forms/share" onClick={() => setMainMenu(false)}>Food Form</Link>
</li>

<li className="list-none">
<Link href="/grids/foodavailable" onClick={() => setMainMenu(false)}>Food to share</Link>
</li>

<li className="list-none">
<Link href="/grids/foodneeds" onClick={() => setMainMenu(false)}>Food needs</Link>
</li>

  </>
)};

export default MobileSections;
