import React, {useRef} from 'react'
import emailjs from 'emailjs-com'

const Mail = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2fro65i', 'template_ps8flwd', form.current, 'H8JqjdFv2aPV9tTP_')
    e.target.reset()
  };

  return (
    <div className='contact-form'>
      <div className="contact-form-text">Để lại thông tin để được tư vấn</div>
      <form ref={form} onSubmit={sendEmail} action="">
        <input type="text" name='name' placeholder='Tên của quý khách hàng' />
        <input type="email" name='email' placeholder='Địa chỉ Email' />
        <input type="phone" name='phone' placeholder='Số điện thoại liên hệ' />
        <input type="text" placeholder='Địa chỉ' />
        <textarea name="text" id="" cols="30" rows="3" placeholder='Mô tả'></textarea>
        <button type='submit'>Đăng ký ngay</button>
      </form>
    </div>
  )
}

export default Mail