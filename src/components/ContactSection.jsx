import { useRef} from 'react';
import emailjs from "@emailjs/browser";
{/*++import email js and Use Ref && npm install emailjs/browser*/}

{/* import env*/}


function ContactSection () {
    const form = useRef();


    // Add Event to send the value of the form to the email js
    const sendEmail = (e) => {
        e.preventDefault();
        // replace with your information 
        emailjs
          .sendForm(
            //make .env in root folder 
            //npm i dot env 
            // replace the codes with .env
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAIL_USER_ID
          )
       
          .then(
            (result) => {
                console.log(result.text);
                console.log("message sent");
                //add alert for user
                alert("Message sent successfully!"); 

                // Clear all input fields in the form
                form.current.reset(); // Reset the form fields
            },
            (error) => {
              console.log(error.text);
            }
          );
      };


    return (
        <>  
            {/* -- ALL svg */}
            {/* ++ Closing tag to all input */}
            {/* -- the drop down */}
                        
                        
            {/* ++ container */}
            {/* -- bg-body teritetry*/}
            <body class="container d-flex align-items-center py-4">
            
          
            {/* w-100 -> col-12 col-sm-6 */}
            {/* ++ text center*/}
            <main class="form-signin col-12 col-sm-6 m-auto text-center">
            {/* ++ ref={form} onSubmit={sendEmail} */}            
            <form  ref={form} onSubmit={sendEmail}>
                {/* -- img tag */}
                {/* -- please sign in */}

                {/* copy paste the display 6 title && ++ text center*/}
                {/* ++ mb-3 -> pb-3 */}
                {/* ++ id for contact */}
                <h1 id="contact" className="text-center display-6 fw-bold text-body-emphasis lh-1 pb-3">Contact Me</h1>

                {/* ++ my-4 tag */}
                {/* ++ borrder-outline && rounded */}
                <div class="form-floating my-4 border-outline rounded"> 
                    {/* ++ name=user email*/}
                    {/* ++ required to not send empty*/}
                    <input name="user_email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="0g0va" required/>
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating my-4 border-outline rounded">
                    {/* replace with text area && remove style*/}
                    {/* ++ h-50 && rows=4*/}
                    {/* ++ name= message*/}
                    {/* ++ required to not send empty*/}
                    <textarea name="message" class="form-control h-50" rows="4" placeholder="Leave a comment here" id="floatingTextarea2" required></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>

                {/* -- remember me input */}
                {/* reaplce button with hero button */}
                {/* ++ add handle Sendclick */}
                <button type="submit" className=" btn btn-outline-dark btn-lg px-4 me-md-2" fdprocessedid="48ssyg">Send</button>
                {/* -- year footer */}

                {/* Bootstrap Modal */}
                
            </form>
            </main>

                
            {/* -- span not body */}
            {/* -- script */}

            </body>
        </>
    );
}

export default ContactSection;
