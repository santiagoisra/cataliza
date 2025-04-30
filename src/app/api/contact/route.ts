import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  service?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactFormData;
    const { name, email, company, message, service } = body;

    // Configurar el transporte de correo
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'contacto@cataliza.dev',
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
        ${service ? `<p><strong>Servicio de interés:</strong> ${service}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al enviar el mensaje:', errorMessage);
    return NextResponse.json(
      { message: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}