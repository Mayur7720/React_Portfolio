const emailjs = require('emailjs-com');

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);
    
    // Set up EmailJS params
    const emailParams = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        user_name: name,
        user_email: email,
        message: message,
      },
    };

    // Send the email
    await emailjs.send(
      emailParams.service_id,
      emailParams.template_id,
      emailParams.template_params,
      emailParams.user_id
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error }),
    };
  }
};
