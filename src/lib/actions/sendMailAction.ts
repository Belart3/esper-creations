'use server';

import { compileBookingTemplate, compileReportTemplate, sendMail } from '@/lib/mail';

export async function sendHeroFormEmail(formData: FormData) {
  const fullName = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  console.log({ fullName, email, phone });
  await sendMail({
    to: "enochbelawu8@gmail.com", 
    name: "Enoch", 
    subject: "Hero Form Submission From ESPER",
    body: compileReportTemplate(fullName, email, phone)
  });
}

export async function sendBookingMail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const issue = formData.get('issue') as string;
  console.log({ name, email, phone });
  await sendMail({
    to: "enochbelawu8@gmail.com", 
    name: "Enoch", 
    subject: "Booking Form Submission From ESPER",
    body: compileBookingTemplate(name, email, phone, service, issue)
  });
}
