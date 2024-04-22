import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
<div class="container bootstrap snippets bootdey">
<div class="row">
  <div class="profile-nav col-md-3">
      <div class="panel">
          <div class="user-heading round">
              <a href="#">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
              </a>
              <h1>Camila Smith</h1>
              <p>deydey@theEmail.com</p>
          </div>

          <ul class="nav nav-pills nav-stacked">
              <li class="active"><a href="#"> <i class="fa fa-user"></i> Profile</a></li>
              <li><a href="#"> <i class="fa fa-calendar"></i> Recent Activity <span class="label label-warning pull-right r-activity">9</span></a></li>
              <li><a href="#"> <i class="fa fa-edit"></i> Edit profile</a></li>
          </ul>
      </div>
  </div>
  <div class="profile-info col-md-9">
      <div class="panel">
          <form>
              <textarea placeholder="Whats in your mind today?" rows="2" class="form-control input-lg p-text-area"></textarea>
          </form>
          <footer class="panel-footer">
              <button class="btn btn-warning pull-right">Post</button>
              <ul class="nav nav-pills">
                  <li>
                      <a href="#"><i class="fa fa-map-marker"></i></a>
                  </li>
                  <li>
                      <a href="#"><i class="fa fa-camera"></i></a>
                  </li>
                  <li>
                      <a href="#"><i class=" fa fa-film"></i></a>
                  </li>
                  <li>
                      <a href="#"><i class="fa fa-microphone"></i></a>
                  </li>
              </ul>
          </footer>
      </div>
      <div class="panel">
          <div class="bio-graph-heading">
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
          </div>
          <div class="panel-body bio-graph-info">
              <h1>Bio Graph</h1>
              <div class="row">
                  <div class="bio-row">
                      <p><span>First Name </span>: Camila</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Last Name </span>: Smith</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Country </span>: Australia</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Birthday</span>: 13 July 1983</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Occupation </span>: UI Designer</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Email </span>: jsmith@flatlab.com</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Mobile </span>: (12) 03 4567890</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Phone </span>: 88 (02) 123456</p>
                  </div>
              </div>
          </div>
      </div>
      <div>
          <div class="row">
              <div class="col-md-6">
                  <div class="panel">
                      <div class="panel-body">
                          <div class="bio-chart">
                           
                          </div>
                          <div class="bio-desk">
                              <h4 class="red">Envato Website</h4>
                              <p>Started : 15 July</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="panel">
                      <div class="panel-body">
                          <div class="bio-chart">
                             
                          </div>
                          <div class="bio-desk">
                              <h4 class="terques">ThemeForest CMS </h4>
                              <p>Started : 15 July</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="panel">
                      <div class="panel-body">
                          <div class="bio-chart">
                            
                          </div>
                          <div class="bio-desk">
                              <h4 class="green">VectorLab Portfolio</h4>
                              <p>Started : 15 July</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="panel">
                      <div class="panel-body">
                          <div class="bio-chart">

                          </div>
                          <div class="bio-desk">
                              <h4 class="purple">Adobe Muse Template</h4>
                              <p>Started : 15 July</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</div>



    </div>
  )
}

export default Profile