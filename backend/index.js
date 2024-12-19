const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chestkidneycarecentre@gmail.com', // Your email
    pass: 'gnle lgyv kaob zgpo',  // Your email password or App Password
  },
});

// Route to handle appointment booking
app.post('/api/appointments', async (req, res) => {
  const { fullName, age, gender, address, phone, email, appointmentDate } = req.body;

  // Send appointment email to the doctor
  const doctorMailOptions = {
    from: 'chestkidneycarecentre@gmail.com',
    to: 'mohammadaamir486@gmail.com',  // Replace with the doctor's email
    subject: 'New Appointment Booking',
    text: `New appointment booking:\n\nFull Name: ${fullName}\nAge: ${age}\nGender: ${gender}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}\nAppointment Date: ${appointmentDate}`,
  };

  try {
    // Send email to the doctor
    const doctorInfo = await transporter.sendMail(doctorMailOptions);
    console.log('Email sent to doctor:', doctorInfo.response);

    // Optionally, you can also send a confirmation email to the user (if needed):
    const userMailOptions = {
      from: 'chestkidneycarecentre@gmail.com',
      to: email, // Send email to the user
      subject: 'Appointment Confirmation',
      text: `Hello ${fullName},\n\nYour appointment is confirmed for ${appointmentDate}.\n\nThank you for booking with us!`,
    };
    
    await transporter.sendMail(userMailOptions);
    console.log('Confirmation email sent to user:', userMailOptions.to);

    // Respond with success
    res.status(200).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to notify doctor or user.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
