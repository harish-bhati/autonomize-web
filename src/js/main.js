//Modal js
const modalLink = document.querySelectorAll('.footer_bottom-links a,.header_btn');

modalLink.forEach(link => {
  link.addEventListener('click', () => {
    console.log("data", link.dataset.toggle);
    if(link.dataset.toggle === "request-modal"){
      createRequestModalHtml();
    }
    else if(link.dataset.toggle === "service-modal") {
      createServiceModalHtml();
    }
    else if(link.dataset.toggle === "policy-modal") {
      createPolicyModalHtml();
    }
    const modalCloseBtn = document.querySelector('.close');
    modalCloseBtn.addEventListener('click', () => {
      clearModal();
    });
  });
});

//Create modal html
function createRequestModalHtml(){
  let modalHtml = `
      <section class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M21.7234 0.714609C21.569 0.559916 21.3857 0.437189 21.1838 0.353452C20.9819 0.269715 20.7655 0.226612 20.547 0.226612C20.3284 0.226612 20.112 0.269715 19.9102 0.353452C19.7083 0.437189 19.5249 0.559916 19.3706 0.714609L11.2107 8.85779L3.05083 0.697922C2.89634 0.543432 2.71293 0.420884 2.51108 0.337274C2.30923 0.253665 2.09289 0.210632 1.87441 0.210632C1.65592 0.210632 1.43958 0.253665 1.23773 0.337274C1.03588 0.420884 0.852473 0.543432 0.697983 0.697922C0.543493 0.852412 0.420945 1.03582 0.337335 1.23767C0.253726 1.43952 0.210693 1.65586 0.210693 1.87435C0.210693 2.09283 0.253726 2.30917 0.337335 2.51102C0.420945 2.71287 0.543493 2.89628 0.697983 3.05077L8.85785 11.2106L0.697983 19.3705C0.543493 19.525 0.420945 19.7084 0.337335 19.9102C0.253726 20.1121 0.210693 20.3284 0.210693 20.5469C0.210693 20.7654 0.253726 20.9817 0.337335 21.1836C0.420945 21.3854 0.543493 21.5689 0.697983 21.7233C0.852473 21.8778 1.03588 22.0004 1.23773 22.084C1.43958 22.1676 1.65592 22.2106 1.87441 22.2106C2.09289 22.2106 2.30923 22.1676 2.51108 22.084C2.71293 22.0004 2.89634 21.8778 3.05083 21.7233L11.2107 13.5635L19.3706 21.7233C19.525 21.8778 19.7085 22.0004 19.9103 22.084C20.1122 22.1676 20.3285 22.2106 20.547 22.2106C20.7655 22.2106 20.9818 22.1676 21.1837 22.084C21.3855 22.0004 21.5689 21.8778 21.7234 21.7233C21.8779 21.5689 22.0004 21.3854 22.0841 21.1836C22.1677 20.9817 22.2107 20.7654 22.2107 20.5469C22.2107 20.3284 22.1677 20.1121 22.0841 19.9102C22.0004 19.7084 21.8779 19.525 21.7234 19.3705L13.5635 11.2106L21.7234 3.05077C22.3575 2.41667 22.3575 1.34871 21.7234 0.714609Z" fill="black"/>
              </svg>
            </span>
          </div>
          <div class="modal-body">
            <h2 class="text-center">Schedule Demo</h2>
            <form>
              <div class="grid grid-col-2">
                <div class="form-control">
                  <input type="text" class="form-input-fill" placeholder="Full Name"/>
                </div>
                <div class="form-control">
                  <input type="email" class="form-input-fill" placeholder="Work email"/>
                </div>
              </div>
              <div class="form-control">
                <input type="tel" class="form-input-fill" placeholder="Phone number"/>
              </div>
              <div class="form-control">
                <textarea class="form-input-fill" rows="4" cols="100">Brief Message (Describe your interest, use case or need)</textarea>
              </div>
              <div class="form-control text-right">
                <button type="submit" value="Submit" class="btn btn_small">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
  `;
  let modalParentDiv = document.querySelector('.autonomize_body');
  modalParentDiv.insertAdjacentHTML("beforeend", modalHtml);
  modalParentDiv.classList.add('modal-open');
}
//Create Service modal html
function createServiceModalHtml(){
  let modalHtml = `
      <section class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <h5>Term & Conditions</h5>
              <p>Effective Date: April 01, 2021</p>
            </div>
            <span class="close">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M21.7234 0.714609C21.569 0.559916 21.3857 0.437189 21.1838 0.353452C20.9819 0.269715 20.7655 0.226612 20.547 0.226612C20.3284 0.226612 20.112 0.269715 19.9102 0.353452C19.7083 0.437189 19.5249 0.559916 19.3706 0.714609L11.2107 8.85779L3.05083 0.697922C2.89634 0.543432 2.71293 0.420884 2.51108 0.337274C2.30923 0.253665 2.09289 0.210632 1.87441 0.210632C1.65592 0.210632 1.43958 0.253665 1.23773 0.337274C1.03588 0.420884 0.852473 0.543432 0.697983 0.697922C0.543493 0.852412 0.420945 1.03582 0.337335 1.23767C0.253726 1.43952 0.210693 1.65586 0.210693 1.87435C0.210693 2.09283 0.253726 2.30917 0.337335 2.51102C0.420945 2.71287 0.543493 2.89628 0.697983 3.05077L8.85785 11.2106L0.697983 19.3705C0.543493 19.525 0.420945 19.7084 0.337335 19.9102C0.253726 20.1121 0.210693 20.3284 0.210693 20.5469C0.210693 20.7654 0.253726 20.9817 0.337335 21.1836C0.420945 21.3854 0.543493 21.5689 0.697983 21.7233C0.852473 21.8778 1.03588 22.0004 1.23773 22.084C1.43958 22.1676 1.65592 22.2106 1.87441 22.2106C2.09289 22.2106 2.30923 22.1676 2.51108 22.084C2.71293 22.0004 2.89634 21.8778 3.05083 21.7233L11.2107 13.5635L19.3706 21.7233C19.525 21.8778 19.7085 22.0004 19.9103 22.084C20.1122 22.1676 20.3285 22.2106 20.547 22.2106C20.7655 22.2106 20.9818 22.1676 21.1837 22.084C21.3855 22.0004 21.5689 21.8778 21.7234 21.7233C21.8779 21.5689 22.0004 21.3854 22.0841 21.1836C22.1677 20.9817 22.2107 20.7654 22.2107 20.5469C22.2107 20.3284 22.1677 20.1121 22.0841 19.9102C22.0004 19.7084 21.8779 19.525 21.7234 19.3705L13.5635 11.2106L21.7234 3.05077C22.3575 2.41667 22.3575 1.34871 21.7234 0.714609Z" fill="black"/>
              </svg>
            </span>
          </div>
          <div class="modal-body">
            <p>These website terms and conditions (the "Terms ") apply to the Autonomize.ai website located at Autonomize.ai and all associated sites linked to www.autonomize.ai by Autonomize, Inc , its subsidiaries, and affiliates (collectively, the "Site"). The Site is the property of Autonomize Inc (“we”, “us”, and “our ”) and its licensors.</p>
            <p>By using the Site you agree to these terms of use. If you do not agree with any part of Terms, do not use the Site. If you have any questions, comments, or concerns please contact us at leadership@autonomize.ai.</p>
            <p>In order to access and use any of our applications, products, or services (collectively the “Services”), you will also need to agree to the separate terms for the services. You also agree to comply with all applicable laws, statutes, ordinances, and regulations in connection with your access and use of our Site.</p>
            <p>Privacy Statement Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
            <p>Privacy Statement Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
            <p>Privacy Statement Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
            <p>Privacy Statement Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
            <p>Privacy Statement Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
          </div>
        </div>
      </section>
  `;
  let modalParentDiv = document.querySelector('.autonomize_body');
  modalParentDiv.insertAdjacentHTML("beforeend", modalHtml);
  modalParentDiv.classList.add('modal-open');
}
//Create Policy modal html
function createPolicyModalHtml(){
  let modalHtml = `
      <section class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <h5>Privacy Policy</h5>
              <p>Effective Date: April 01, 2021</p>
            </div>
            <span class="close">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M21.7234 0.714609C21.569 0.559916 21.3857 0.437189 21.1838 0.353452C20.9819 0.269715 20.7655 0.226612 20.547 0.226612C20.3284 0.226612 20.112 0.269715 19.9102 0.353452C19.7083 0.437189 19.5249 0.559916 19.3706 0.714609L11.2107 8.85779L3.05083 0.697922C2.89634 0.543432 2.71293 0.420884 2.51108 0.337274C2.30923 0.253665 2.09289 0.210632 1.87441 0.210632C1.65592 0.210632 1.43958 0.253665 1.23773 0.337274C1.03588 0.420884 0.852473 0.543432 0.697983 0.697922C0.543493 0.852412 0.420945 1.03582 0.337335 1.23767C0.253726 1.43952 0.210693 1.65586 0.210693 1.87435C0.210693 2.09283 0.253726 2.30917 0.337335 2.51102C0.420945 2.71287 0.543493 2.89628 0.697983 3.05077L8.85785 11.2106L0.697983 19.3705C0.543493 19.525 0.420945 19.7084 0.337335 19.9102C0.253726 20.1121 0.210693 20.3284 0.210693 20.5469C0.210693 20.7654 0.253726 20.9817 0.337335 21.1836C0.420945 21.3854 0.543493 21.5689 0.697983 21.7233C0.852473 21.8778 1.03588 22.0004 1.23773 22.084C1.43958 22.1676 1.65592 22.2106 1.87441 22.2106C2.09289 22.2106 2.30923 22.1676 2.51108 22.084C2.71293 22.0004 2.89634 21.8778 3.05083 21.7233L11.2107 13.5635L19.3706 21.7233C19.525 21.8778 19.7085 22.0004 19.9103 22.084C20.1122 22.1676 20.3285 22.2106 20.547 22.2106C20.7655 22.2106 20.9818 22.1676 21.1837 22.084C21.3855 22.0004 21.5689 21.8778 21.7234 21.7233C21.8779 21.5689 22.0004 21.3854 22.0841 21.1836C22.1677 20.9817 22.2107 20.7654 22.2107 20.5469C22.2107 20.3284 22.1677 20.1121 22.0841 19.9102C22.0004 19.7084 21.8779 19.525 21.7234 19.3705L13.5635 11.2106L21.7234 3.05077C22.3575 2.41667 22.3575 1.34871 21.7234 0.714609Z" fill="black"/>
              </svg>
            </span>
          </div>
          <div class="modal-body">
            <p>These website terms and conditions (the "Terms ") apply to the Autonomize.ai website located at Autonomize.ai and all associated sites linked to www.autonomize.ai by Autonomize, Inc , its subsidiaries, and affiliates (collectively, the "Site"). The Site is the property of Autonomize Inc (“we”, “us”, and “our ”) and its licensors.</p>
            <p>By using the Site you agree to these terms of use. If you do not agree with any part of Terms, do not use the Site. If you have any questions, comments, or concerns please contact us at leadership@autonomize.ai.</p>
            <p>In order to access and use any of our applications, products, or services (collectively the “Services”), you will also need to agree to the separate terms for the services. You also agree to comply with all applicable laws, statutes, ordinances, and regulations in connection with your access and use of our Site.</p>
            <p>Privacy Statement Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
            <p>Privacy Statement Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
            <p>Privacy Statement Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
            <p>Privacy Statement Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
            <p>Privacy Statement Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
          </div>
        </div>
      </section>
  `;
  let modalParentDiv = document.querySelector('.autonomize_body');
  modalParentDiv.insertAdjacentHTML("beforeend", modalHtml);
  modalParentDiv.classList.add('modal-open');
}
//close modal
function clearModal(){
  let modalDiv = document.querySelector('.autonomize_body');
  modalDiv.lastElementChild.remove();
  modalDiv.classList.remove('modal-open');
}

//header active link
const headerLinks = document.querySelectorAll('.header_nav-link');

headerLinks.forEach(menuLink => {
  // setBasedOnUrlActive();
  menuLink.addEventListener('click', setActive);
});

function setActive(e){
  var active = document.querySelector(".active-link");
  if(active){
    active.classList.remove('active-link');
  }
  e.target.classList.add('active-link');
}
// function setBasedOnUrlActive(elem){
//   const current = window.location.href;
//   headerLinks.forEach(link => {
//     if(link.href.includes(current)){
//       elem.classList.add("active-link");
//     }
//   });
// }
