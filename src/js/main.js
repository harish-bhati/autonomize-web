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
      <section class="modal modal-request">
        <div class="modal-content">
          <div class="modal-body">
            <h3 class="text-center">Schedule a Demo</h3>
            <span class="close">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M21.7234 0.714609C21.569 0.559916 21.3857 0.437189 21.1838 0.353452C20.9819 0.269715 20.7655 0.226612 20.547 0.226612C20.3284 0.226612 20.112 0.269715 19.9102 0.353452C19.7083 0.437189 19.5249 0.559916 19.3706 0.714609L11.2107 8.85779L3.05083 0.697922C2.89634 0.543432 2.71293 0.420884 2.51108 0.337274C2.30923 0.253665 2.09289 0.210632 1.87441 0.210632C1.65592 0.210632 1.43958 0.253665 1.23773 0.337274C1.03588 0.420884 0.852473 0.543432 0.697983 0.697922C0.543493 0.852412 0.420945 1.03582 0.337335 1.23767C0.253726 1.43952 0.210693 1.65586 0.210693 1.87435C0.210693 2.09283 0.253726 2.30917 0.337335 2.51102C0.420945 2.71287 0.543493 2.89628 0.697983 3.05077L8.85785 11.2106L0.697983 19.3705C0.543493 19.525 0.420945 19.7084 0.337335 19.9102C0.253726 20.1121 0.210693 20.3284 0.210693 20.5469C0.210693 20.7654 0.253726 20.9817 0.337335 21.1836C0.420945 21.3854 0.543493 21.5689 0.697983 21.7233C0.852473 21.8778 1.03588 22.0004 1.23773 22.084C1.43958 22.1676 1.65592 22.2106 1.87441 22.2106C2.09289 22.2106 2.30923 22.1676 2.51108 22.084C2.71293 22.0004 2.89634 21.8778 3.05083 21.7233L11.2107 13.5635L19.3706 21.7233C19.525 21.8778 19.7085 22.0004 19.9103 22.084C20.1122 22.1676 20.3285 22.2106 20.547 22.2106C20.7655 22.2106 20.9818 22.1676 21.1837 22.084C21.3855 22.0004 21.5689 21.8778 21.7234 21.7233C21.8779 21.5689 22.0004 21.3854 22.0841 21.1836C22.1677 20.9817 22.2107 20.7654 22.2107 20.5469C22.2107 20.3284 22.1677 20.1121 22.0841 19.9102C22.0004 19.7084 21.8779 19.525 21.7234 19.3705L13.5635 11.2106L21.7234 3.05077C22.3575 2.41667 22.3575 1.34871 21.7234 0.714609Z" fill="#fff"/>
              </svg>
            </span>
            <form class="request-form">
              <div class="grid grid-col-2 request-form-group">
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
                <button type="submit" value="Submit" class="btn">Submit</button>
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
              <h4>Term & Conditions</h4>
              <p>Effective Date: April 01, 2021</p>
            </div>
            <span class="close">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M21.7234 0.714609C21.569 0.559916 21.3857 0.437189 21.1838 0.353452C20.9819 0.269715 20.7655 0.226612 20.547 0.226612C20.3284 0.226612 20.112 0.269715 19.9102 0.353452C19.7083 0.437189 19.5249 0.559916 19.3706 0.714609L11.2107 8.85779L3.05083 0.697922C2.89634 0.543432 2.71293 0.420884 2.51108 0.337274C2.30923 0.253665 2.09289 0.210632 1.87441 0.210632C1.65592 0.210632 1.43958 0.253665 1.23773 0.337274C1.03588 0.420884 0.852473 0.543432 0.697983 0.697922C0.543493 0.852412 0.420945 1.03582 0.337335 1.23767C0.253726 1.43952 0.210693 1.65586 0.210693 1.87435C0.210693 2.09283 0.253726 2.30917 0.337335 2.51102C0.420945 2.71287 0.543493 2.89628 0.697983 3.05077L8.85785 11.2106L0.697983 19.3705C0.543493 19.525 0.420945 19.7084 0.337335 19.9102C0.253726 20.1121 0.210693 20.3284 0.210693 20.5469C0.210693 20.7654 0.253726 20.9817 0.337335 21.1836C0.420945 21.3854 0.543493 21.5689 0.697983 21.7233C0.852473 21.8778 1.03588 22.0004 1.23773 22.084C1.43958 22.1676 1.65592 22.2106 1.87441 22.2106C2.09289 22.2106 2.30923 22.1676 2.51108 22.084C2.71293 22.0004 2.89634 21.8778 3.05083 21.7233L11.2107 13.5635L19.3706 21.7233C19.525 21.8778 19.7085 22.0004 19.9103 22.084C20.1122 22.1676 20.3285 22.2106 20.547 22.2106C20.7655 22.2106 20.9818 22.1676 21.1837 22.084C21.3855 22.0004 21.5689 21.8778 21.7234 21.7233C21.8779 21.5689 22.0004 21.3854 22.0841 21.1836C22.1677 20.9817 22.2107 20.7654 22.2107 20.5469C22.2107 20.3284 22.1677 20.1121 22.0841 19.9102C22.0004 19.7084 21.8779 19.525 21.7234 19.3705L13.5635 11.2106L21.7234 3.05077C22.3575 2.41667 22.3575 1.34871 21.7234 0.714609Z" fill="black"/>
              </svg>
            </span>
          </div>
          <div class="modal-body">
          <p>These website terms and conditions (the "Terms ") apply to the Autonomize.ai website located at Autonomize.ai and all associated sites linked to www.autonomize.ai by Autonomize, Inc , its subsidiaries, and affiliates (collectively, the "Site"). The Site is the property of Autonomize Inc (“we”, “us”, and “our ”) and its licensors. 

          <p>By using the Site you agree to these terms of use. If you do not agree with any part of Terms, do not use the Site. If you have any questions, comments, or concerns please contact us at leadership@autonomize.ai.
          
          <p>In order to access and use any of our applications, products, or services (collectively the “Services”), you will also need to agree to the separate terms for the services. You also agree to comply with all applicable laws, statutes, ordinances, and regulations in connection with your access and use of our Site.</p>
          
          <h5>Privacy Statement</h5>
          <p>Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
          
          <h5>Updates</h5>
          <p>We may update these Terms, any of the policies referred to in these Terms or any of the features of our Site without notice by posting a new version on our Site. You should check our Site occasionally to ensure you are familiar with any changes.</p>
          
          <h5>Site content and access</h5>
          <p>Our Site may contain links to other Site or may reference content generated by other people. We do not take any responsibility for any Site or content of third parties.</p>
          
          <p>There may be times when our Site is not available and we cannot guarantee that our Site is free from viruses or anything else which may damage any device used to access our Site or any data on such device.</p>
          
          <h5>Copyright and Trademarks</h5>
          <p>We, together with our licensors, own and control all the copyright and other intellectual property rights in our Site and materials thereof (including without limitation the text, computer code, artwork, photographs, images, music, audio material, video material, and audio-visual material on the Site) and all the copyright and other intellectual property rights on our Site are reserved.</p>
          
          <p>The names and logos of Autonomize.ai and its affiliates, all product names, all page headers, all custom graphics, all button icons, and all trademarks, service marks and logos appearing on this Site, unless otherwise noted, are trademarks (whether registered or not), service marks and/or trade dress of Autonomize.ai and its affiliates (collectively, the “Marks”). All other trademarks, product names, company names, logos, service marks and/or trade dress mentioned, displayed, cited or otherwise indicated on this website are the property of their respective owners. You are not authorized to display or use the Marks in any manner without our prior written permission. You are not authorized to display or use trademarks, product names, company names, logos, service marks and/or trade dress of other owners featured on this website without the prior written permission of such owners.</p> 
          
          <p>The use or misuse of the Marks or other trademarks, product names, company names, logos, service marks and/or trade dress or any other materials contained herein, except as permitted herein, is expressly prohibited.</p> 
          
          <h5>Disclaimer of Warranties</h5>
          <p>Although Autonomize.ai attempts to provide accurate content on the Site, it makes no representation, endorsement or warranty that such content is accurate or suitable for any particular purpose. The Site and its content are provided on an "as is" basis. Use of the Site and its content is at the user's sole risk. The Site and content are provided without any representations, endorsements, or warranties of any kind whatsoever, either expressed or implied, including, but not limited to, any warranties of title or accuracy and any implied warranties of merchantability, fitness for a particular purpose or non‑infringement, with the sole exception of warranties (if any) which cannot be expressly excluded under applicable law. As noted below, Autonomize.ai also makes no representations, endorsements or warranties, either express or implied, with respect to any website operated by a third party.</p>
          
          <h5>Limitation of Liability</h5>
          <p>These terms only limit Autonomize.ai responsibilities as allowed by applicable law. Specifically, these terms do not limit Autonomize.ai’s liability for death or personal injury, fraud, fraudulent misrepresentation, or willful misconduct. To the maximum extent permitted by law, Autonomize.ai and its related entities exclude completely all liability TO ANY USERS IN EXCESS OF US $50.00 for any loss or damage of any kind (including special, indirect or consequential loss and including loss of business profits) however caused (including negligence) arising out of or in connection with the Site content and the use or performance of the Site.</p> 
          
          <p>Where the law implies a warranty into these Terms which may not lawfully be excluded, our liability for breach of such a warranty shall be limited at our option, to any one or more of the following: (a) in the case of goods, to the replacement of the applicable materials; and (b) in the case of services to supplying the services again.</p>
          
          <p>By using our Site, you agree that the exclusions and limitations of liability set out in these Terms are reasonable.</p>
          
          <h5>Waiver</h5>
          <p>No waiver of any right under or term or provision of these Terms will be deemed a waiver of any other right, term or provision of these Terms at that time or a waiver of that or any other right, term or provision of these Terms at any other time.</p>
          
          <h5>Governing Law and Venue</h5>
          <p>These Terms any disputes arising under it will be governed by the laws of the State of Texas without regard to its conflict of laws provisions. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded.</p>
          
          <p>Any information disclosed to Autonomize, Inc outside a pre-existing and documented confidential business relationship will be deemed non-confidential and non-proprietary, and autonomize.ai may therefore develop, use and freely disclose or publish similar ideas without compensating you or accounting to you. You represent that you have the lawful right to submit such information and agree that you will not submit any information unless you are legally entitled to do so.</p>
          
          <h5>Contact Us</h5>
          <p>If you have any questions about these Terms, please contact us at hello@Autonomize.ai</p>
          
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
          <p>These website terms and conditions (the "Terms ") apply to the Autonomize.ai website located at Autonomize.ai and all associated sites linked to www.autonomize.ai by Autonomize, Inc , its subsidiaries, and affiliates (collectively, the "Site"). The Site is the property of Autonomize Inc (“we”, “us”, and “our ”) and its licensors. 

          <p>By using the Site you agree to these terms of use. If you do not agree with any part of Terms, do not use the Site. If you have any questions, comments, or concerns please contact us at leadership@autonomize.ai.
          
          <p>In order to access and use any of our applications, products, or services (collectively the “Services”), you will also need to agree to the separate terms for the services. You also agree to comply with all applicable laws, statutes, ordinances, and regulations in connection with your access and use of our Site.</p>
          
          <h5>Privacy Statement</h5>
          <p>Your privacy is important to us. By agreeing to these terms and conditions, you agree to the terms of our Privacy Notice. Before using this website, please carefully review our Privacy Notice. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Notice. If you do not agree, please exit and cease further access to the Site.</p>
          
          <h5>Updates</h5>
          <p>We may update these Terms, any of the policies referred to in these Terms or any of the features of our Site without notice by posting a new version on our Site. You should check our Site occasionally to ensure you are familiar with any changes.</p>
          
          <h5>Site content and access</h5>
          <p>Our Site may contain links to other Site or may reference content generated by other people. We do not take any responsibility for any Site or content of third parties.</p>
          
          <p>There may be times when our Site is not available and we cannot guarantee that our Site is free from viruses or anything else which may damage any device used to access our Site or any data on such device.</p>
          
          <h5>Copyright and Trademarks</h5>
          <p>We, together with our licensors, own and control all the copyright and other intellectual property rights in our Site and materials thereof (including without limitation the text, computer code, artwork, photographs, images, music, audio material, video material, and audio-visual material on the Site) and all the copyright and other intellectual property rights on our Site are reserved.</p>
          
          <p>The names and logos of Autonomize.ai and its affiliates, all product names, all page headers, all custom graphics, all button icons, and all trademarks, service marks and logos appearing on this Site, unless otherwise noted, are trademarks (whether registered or not), service marks and/or trade dress of Autonomize.ai and its affiliates (collectively, the “Marks”). All other trademarks, product names, company names, logos, service marks and/or trade dress mentioned, displayed, cited or otherwise indicated on this website are the property of their respective owners. You are not authorized to display or use the Marks in any manner without our prior written permission. You are not authorized to display or use trademarks, product names, company names, logos, service marks and/or trade dress of other owners featured on this website without the prior written permission of such owners.</p> 
          
          <p>The use or misuse of the Marks or other trademarks, product names, company names, logos, service marks and/or trade dress or any other materials contained herein, except as permitted herein, is expressly prohibited.</p> 
          
          <h5>Disclaimer of Warranties</h5>
          <p>Although Autonomize.ai attempts to provide accurate content on the Site, it makes no representation, endorsement or warranty that such content is accurate or suitable for any particular purpose. The Site and its content are provided on an "as is" basis. Use of the Site and its content is at the user's sole risk. The Site and content are provided without any representations, endorsements, or warranties of any kind whatsoever, either expressed or implied, including, but not limited to, any warranties of title or accuracy and any implied warranties of merchantability, fitness for a particular purpose or non‑infringement, with the sole exception of warranties (if any) which cannot be expressly excluded under applicable law. As noted below, Autonomize.ai also makes no representations, endorsements or warranties, either express or implied, with respect to any website operated by a third party.</p>
          
          <h5>Limitation of Liability</h5>
          <p>These terms only limit Autonomize.ai responsibilities as allowed by applicable law. Specifically, these terms do not limit Autonomize.ai’s liability for death or personal injury, fraud, fraudulent misrepresentation, or willful misconduct. To the maximum extent permitted by law, Autonomize.ai and its related entities exclude completely all liability TO ANY USERS IN EXCESS OF US $50.00 for any loss or damage of any kind (including special, indirect or consequential loss and including loss of business profits) however caused (including negligence) arising out of or in connection with the Site content and the use or performance of the Site.</p> 
          
          <p>Where the law implies a warranty into these Terms which may not lawfully be excluded, our liability for breach of such a warranty shall be limited at our option, to any one or more of the following: (a) in the case of goods, to the replacement of the applicable materials; and (b) in the case of services to supplying the services again.</p>
          
          <p>By using our Site, you agree that the exclusions and limitations of liability set out in these Terms are reasonable.</p>
          
          <h5>Waiver</h5>
          <p>No waiver of any right under or term or provision of these Terms will be deemed a waiver of any other right, term or provision of these Terms at that time or a waiver of that or any other right, term or provision of these Terms at any other time.</p>
          
          <h5>Governing Law and Venue</h5>
          <p>These Terms any disputes arising under it will be governed by the laws of the State of Texas without regard to its conflict of laws provisions. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded.</p>
          
          <p>Any information disclosed to Autonomize, Inc outside a pre-existing and documented confidential business relationship will be deemed non-confidential and non-proprietary, and autonomize.ai may therefore develop, use and freely disclose or publish similar ideas without compensating you or accounting to you. You represent that you have the lawful right to submit such information and agree that you will not submit any information unless you are legally entitled to do so.</p>
          
          <h5>Contact Us</h5>
          <p>If you have any questions about these Terms, please contact us at hello@Autonomize.ai</p>
          
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
