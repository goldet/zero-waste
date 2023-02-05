import FormTemplate from "./FormTemplate";

const SharePage= () => {
  //fetch request in front end to reflect true or false 
    
  return (
    
  <>
   <div className="hero min-h-screen" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600172454284-934feca24ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80)` }}>
    <div className="hero-overlay bg-opacity-20"></div>
    <div className="text-start text-neutral-content">
  <h1 className="text-3xl font-bold text-center pt-5 px-5  text-slate-600"> Tell us what you need or what you can share </h1>

  <FormTemplate />
  </div>
  </div>
  </>
  );
  };
  
  export default SharePage;