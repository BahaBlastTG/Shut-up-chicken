/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_zg5te7p','template_q6rhc67','#contact-form','ODGwec0s1-aIQaz3C')
        .then(() => {
            //hien thi message dc gui di thanh cong
            contactMessage.textContent = 'Tin nhắn đã được gửi đi thành công ✅'

            contactForm.reset()

            //xoa tin nhan sau 5s
            setTimeout(() =>{
            contactMessage.textContent =''
        }, 5000)
        }, () => {
            //error message
            contactMessage.textContent = 'Tin nhắn không được gửi (Lỗi hệ thống) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)