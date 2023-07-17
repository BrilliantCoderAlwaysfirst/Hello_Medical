import React from 'react';

const ForgotPage = () => {
  return (
    <>
      <div className="login-page mt-5 loginPage" style={{ width: "100%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="mb-3">Forgot Password</h3>
              <div className="bg-white shadow rounded">

                
                <div className="row " style={{ justifyContent: "center" }}>
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form action="" className="row g-4">

                        <div className="col-12" style={{display: "flex"}}>
                          <h4 className="firstH4">Password : </h4>
                          <input type="text" style={{width: "214px", marginLeft: "124px", height: "40px", paddingLeft: "10px", outline: "none"}} placeholder='Enter Password' />
                        </div>

                        <div className="col-12" style={{display: "flex"}}>
                          <h4 className="firstH4">Confirm Password : </h4>
                          <input type="text" style={{width: "214px", marginLeft: "20px", height: "40px", paddingLeft: "10px", outline: "none"}} placeholder='Confirm Password' />
                        </div>

                        <div className="button" style={{width: "490px", display: "flex", justifyContent: "center"}}>
                            <button style={{width: "163px", margin: "0px", height: "43px", outline: "none", border: "none", backgroundColor: "rgb(73 22 42)", color: "white", fontSize: "25px", borderRadius: "10px", cursor: "pointer", display: "flex",justifyContent: "center", alignItems: "center"}}>Submit</button>
                        </div>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPage;