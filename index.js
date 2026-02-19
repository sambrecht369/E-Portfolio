//Template ID: template_j17fx2g

//Service ID: sam_brecht

//User ID: AZABaUq5FwPR3MPhh

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm('sam_brecht', 'template_j17fx2g',
            event.target, 'AZABaUq5FwPR3MPhh'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on sambrecht369@gmail.com"
                );
            })
        }
let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += "modal--open";
  //  const modal = document.querySelector('.modal');
  //  modal.classList.toggle('modal--open');
}