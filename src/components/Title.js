import '../Styles/Title.css'
function Title() {
    let f_Name= "SHEIKH";
    let s_Name= "HAMDAN";
    let job_Title="Graphic Designer"
    return (

      <div className=" Title col-12 text-center">

        <h1 className='display-1 fw-bold'>{f_Name}</h1>
        <h1 className='display-1 fw-bold'>{s_Name}</h1>
        <h4>{job_Title}</h4>
      </div>
    
    );
  }

  export default Title;
  