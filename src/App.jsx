function App() {
  

  return (
    <>
      <div class="container text-center ">

        <div className="row"><div><h1>Sistema de Votacion</h1></div></div>
        
        <br />
        <div className="row  ">
          <div className="col">
            
          </div>
          
          
          <div className="col">
            
            
            <div>
              
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Votes</th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
               
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    
                  </tr>
                  
                </tbody>

              </table>
        
              <div>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Selecciona candidato</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              </div>
              
            </div>
          </div>
          <div className="col">
           
          </div>
        </div>
      </div>
    </>
  )
}

export default App
