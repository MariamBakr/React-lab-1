import profile from '../assets/clipart900597.png'
function Profile_Pic() {
  return (
    <div className="Profile_Pic col-5 ">
    
            <img className='float-end mb-4 mt-4' alt="txt" src={profile}/>
            <h1 id="render" className='display-1 fw-bold text-center ms-5'>HELLO</h1>
      </div>
  );
}

export default Profile_Pic;