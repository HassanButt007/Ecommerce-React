import React from 'react'

const Contact = () => {
  return (
    <>
      <section className='pb-5'>
        <div className='contaienr'>
          <div className='row'>
            <div className='col-md-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03616317647!2d-74.30934232023262!3d40.697539947224826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1695286544305!5m2!1sen!2s"
                width="1600"
                height="450"
                style={{ border: "0" }}
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <h2 className='text-center' style={{ fontSize: "40px", lineHeight: "60px", marginBottom: "30px", fontWeight: "600" }}>Contact Us</h2>
              <form action="https://formspree.io/f/myyqndwn" method='POST'>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                  <label for="lname">Email</label>
                  <input type="email" id="lname" name="email" placeholder="Your last email.." />

                    <label for="subject">Message</label>
                    <textarea id="subject" name="Message" placeholder="Write something.." rows={3} />

                    <input type="submit" className='btn btn-primary' value="Submit" />
                    </form>
                  </div>
                </div>
            </div>
          </section>

        </>
        )
}

        export default Contact